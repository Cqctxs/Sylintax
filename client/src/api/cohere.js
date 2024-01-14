import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
    token: "TjDwGxajxTq3pdcCkvIKEbTyRdeewCFXMJcLPxQA",
});

const generate = async (letter) => {
  const response = await cohere.generate({
    model: "command",
    prompt: `Give short, consice, 2 - 3 sentence feedback to a someone trying to learn the ASL alphabet letter ${letter}. An example of a good response is: "Good effort trying to learn the sign for the letter A! It's awesome that you are taking the time to learn sign language. Remember to practice doing the sign for A in front of a mirror so you can perfect your form. Also, it can be helpful to try to write out the alphabet with your hands to help memorize the signs." Do not ask to provide extra feedback or help`,
    maxTokens: 100,
    temperature: 0.9,
    k: 0,
    stopSequences: [],
    returnLikelihoods: "NONE",
  });
  return (response.generations[0].text);
};

export default generate