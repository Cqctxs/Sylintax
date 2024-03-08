# Sylintax
## Inspiration
In Canada alone, there are over 350,000 Canadians who are deaf and around another 3 million who are hard of hearing. However, picking up sign language for them can often be a challenge, especially for deaf children who are often born to hearing parents who often don't know sign language. The inability to communicate with and understand their peers can lead to isolation and loneliness, effectively walling them off from on of the joys of life - communication. We aim to fix this problem by not only enhancing the sign language learning process for those who are hearing impaired, but also encouraging those who are sound of hearing to pick up sign language - breaking down the communication barrier between hearing impaired people and their peers.

## What it does
Our application leverages the power of AI and neural networks to not only detect and identify sign language gestures in real-time, but also provide feedback to users so they can learn more effectively from their mistakes. We also combine this technology with engaging and interactive lessons, ensuring that learning sign language is not only effective but also enjoyable.

## How we built it
To detect hand gestures, used Python and the OpenCV library to format the images being sent through the user's webcam and MediaPipe and SciKit to detect hands gestures and predict the symbol being signed. For the Frontend, we mainly used React.js and Tailwind for the UI and CSS respectively. Finally, for the Backend, we used Express.js and Flask to handle requests from the React application and Python machine learning model respectively.

## Challenges we ran into
Training the model was a big problem as we spent a lot of time near the start trying to find a pretrained model. However, all of the pretrained models we found had very little documentation, so we weren't able to find out how to use them. We only resorted to building and training our own model very late into the hackathon, giving us very little time to make sure it meshed well with the rest of our project. We spent a lot of time dealing with React's async functions and also had a lot of trouble deploying our application.

## Accomplishments that we're proud of
We are proud of being able to accomplish what we've accomplished given the short time frame and our smaller group size.

## What we learned
To not get stuck trying to fix a single stupid bug for hours and instead move on.

## What's next for Silyntax
We aim to allow Silyntax to not only be able to recognize gestures through singular frames, but also through chaining together multiple frames into larger movements, allowing the detection of more complex gestures. We also aim to implement more game modes, such as a mode where players are given a sequence of letters/words and have to compete with one another to see who signs the sequence the fastest (kind of like Typeracer), and also a maze game mode where the player has to sign different words to move around and navigate through the maze.
