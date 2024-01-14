import React, { useState } from 'react'
import generate from 'src/api/cohere';

function Generatedemo() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");
    const generateResponse = async (letter) => {
        try {
          setLoading(true);
          const message = await generate(letter);
          setResult(message);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className="text-text-color">
        <button onclick={() => {
            generateResponse("A")
        }} className="mt-44">Click me</button>
      {loading ? (<p>Analyzing...</p>) : (
        <p>{result}</p>
      )}
    </div>
  )
}

export default Generatedemo