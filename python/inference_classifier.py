import cv2
import mediapipe as mp
import pickle
import numpy as np
from google.protobuf.json_format import MessageToDict 

model_dict_R = pickle.load(open('model_R.p', 'rb'))
model_dict_L = pickle.load(open('model_L.p', 'rb'))
model_R = model_dict_R['model']
model_L = model_dict_L['model']

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

def detect_sign(frame):
    data_aux = []
    
    modelused = model_R
    
    frame = cv2.imread(frame)
    
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
    results = hands.process(frame_rgb)
    
    if (results.multi_hand_landmarks):
        for i in results.multi_handedness:
            label = MessageToDict(i)['classification'][0]['label'] 
            if label == 'Right':
                modelused = model_L
        
        for hand_landmarks in results.multi_hand_landmarks:
            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                data_aux.append(x)
                data_aux.append(y)
            
            prediction = modelused.predict([np.asarray(data_aux[:42])])
            
            predicted_character = prediction[0]
    return predicted_character