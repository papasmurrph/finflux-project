"use client";
import { useState } from 'react';

export default function HomePage() {
  const [jsonData, setJsonData] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResults(null);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: jsonData }),
      });
      if (!res.ok) throw new Error('Failed to analyze');
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Spending Optimizer</h1>
      <p>
        Please provide a JSON array of transactions, each with 'date', 'category', and 'amount' fields.
        Example:
      </p>
      <pre>
        {`[
  {"date": "2023-01-01", "category": "Groceries", "amount": 50.00},
  {"date": "2023-01-02", "category": "Entertainment", "amount": 20.00}
]`}
      </pre>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
          placeholder="Paste your JSON data here..."
          rows={10}
          cols={50}
          style={{ marginBottom: '10px' }}
        />
        <br />
        <button type="submit">Analyze</button>
      </form>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {results && (
        <div>
          <h2>Analysis</h2>
          <pre>{JSON.stringify(results.analysis, null, 2)}</pre>
          <h2>Advice</h2>
          <p>{results.advice}</p>
        </div>
      )}
    </div>
  );
}