import React, { useState } from 'react'
import generate from 'src/api/cohere';

function Generatedemo() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");
    const fetchData = async (letter) => {
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
        {loading ? "Analyzing..." : `Result: ${result}`}
        <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default Generatedemo