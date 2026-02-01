import express from 'express';
import cors from 'cors';
import Retell from 'retell-sdk';
import dotenv from 'dotenv';

// Load variables from .env.local
dotenv.config({ path: '.env.local' });
dotenv.config(); // Also try .env as fallback

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from production build
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')));

// SPA Fallback: Redirect any other request to index.html (frontend routing)
// Express 5 requires regex or (.*) for wildcard
app.get(/^(?!\/api).+/, (req, res, next) => {
  // Ignore API calls if any matched above (though explicit routes usually take precedence)
  if (req.url.startsWith('/create-web-call')) return next();
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

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
  console.log(`Environment PORT variable: ${process.env.PORT || 'Not Set (using default)'}`);
});
