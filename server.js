import express from 'express';
import cors from 'cors';
import Retell from 'retell-sdk';
import dotenv from 'dotenv';

// Load variables from .env.local
dotenv.config({ path: '.env.local' });
dotenv.config(); // Also try .env as fallback

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const retellClient = new Retell({
  apiKey: process.env.RETELL_API_KEY,
});

// Endpoint to create web call
app.post('/create-web-call', async (req, res) => {
  try {
    const { agent_id } = req.body;

    // Use the agent_id from the request, or fallback to the env variable
    const agentIdToUse = agent_id || process.env.RETELL_AGENT_ID;

    if (!agentIdToUse) {
      return res.status(400).json({ error: 'Agent ID is required' });
    }

    const response = await retellClient.call.createWebCall({
      agent_id: agentIdToUse,
    });
    res.json(response);
  } catch (error) {
    console.error('Error creating web call:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
