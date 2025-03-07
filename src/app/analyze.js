import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { data } = req.body;
    const transactions = JSON.parse(data);
    if (!Array.isArray(transactions)) {
      throw new Error('Invalid data format');
    }
    const analysis = analyzeTransactions(transactions);
    const advice = await getAIAdvice(analysis);
    res.status(200).json({ analysis, advice });
  } catch (err) {
    res.status(400).json({ message: 'Invalid JSON data or format' });
  }
}

function analyzeTransactions(transactions) {
  const spendingByCategory = transactions.reduce((acc, tx) => {
    if (!tx.category || typeof tx.amount !== 'number') {
      throw new Error('Invalid transaction data');
    }
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
  }, {});
  return { spendingByCategory };
}

async function getAIAdvice(analysis) {
  const prompt = `Based on the following spending analysis: ${JSON.stringify(analysis)}, provide step-by-step instructions on how to reduce and optimize spending.`;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 500,
  });
  return response.data.choices[0].text.trim();
}