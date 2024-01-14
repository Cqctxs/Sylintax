import cv2
import mediapipe as mp
import pickle
import numpy as np
from google.protobuf.json_format import MessageToDict 

model_dict_R = pickle.load(open('./python/model_R.p', 'rb'))
model_dict_L = pickle.load(open('./python/model_L.p', 'rb'))
model_R = model_dict_R['model']
model_L = model_dict_L['model']

cap = cv2.VideoCapture(0)

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

while True:
    data_aux = []
    x_ = []
    y_ = []
    modelused = model_R
    
    ret, frame = cap.read()
    H, W, _ = frame.shape
    
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
    results = hands.process(frame_rgb)
    
    if (results.multi_hand_landmarks):
        for i in results.multi_handedness:
            label = MessageToDict(i)['classification'][0]['label'] 
            if label == 'Right':
                modelused = model_L

        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(
                frame, 
                hand_landmarks, 
                mp_hands.HAND_CONNECTIONS, 
                mp_drawing_styles.get_default_hand_landmarks_style(), 
                mp_drawing_styles.get_default_hand_connections_style())
            
        for hand_landmarks in results.multi_hand_landmarks:
            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                x_.append(x)
                y_.append(y)
                data_aux.append(x)
                data_aux.append(y)
            
            x1 = int(min(x_) * W) - 10
            y1 = int(min(y_) * H) - 10
            
            x2 = int(max(x_) * W) - 10
            y2 = int(max(y_) * H) - 10
            
            prediction = modelused.predict([np.asarray(data_aux[:42])])
            
            predicted_character = prediction[0]
    
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 4)
            cv2.putText(frame, predicted_character, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 0, 0), 3, cv2.LINE_AA)
    
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xff == ord('q'): 
        break

cap.release()
cv2.destroyAllWindows()