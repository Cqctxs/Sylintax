import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
    token: "TjDwGxajxTq3pdcCkvIKEbTyRdeewCFXMJcLPxQA",
});

const generate = async (letter) => {
  const response = await cohere.generate({
    model: "command",
    prompt: `Give informal feedback to a student trying to learn the sign language letter ${letter}, but they didn\'t get the exact hand shape down. Try to give some tips, such as how they should position their fingers.`,
    maxTokens: 96,
    temperature: 0.9,
    k: 0,
    stopSequences: [],
    returnLikelihoods: "NONE",
  });
  return (response.generations[0].text);
};

export default generate