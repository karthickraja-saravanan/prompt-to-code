import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { ChatOpenAI } from '@langchain/openai';
import { StateGraph, END } from '@langchain/langgraph';
import { z } from "zod";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const llm = new ChatOpenAI({
  modelName: 'gpt-4',
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

async function generateCode(state) {
  const prompt = state.user_prompt;
  if (!prompt) {
    return { user_prompt: '', generated_code: '⚠️ No user prompt provided.' };
  }

  const messages = [
    { role: 'system', content: 'You are a React code generator. Return only JSX. No explanations.' },
    { role: 'user', content: prompt },
  ];

  const response = await llm.invoke(messages);
  return {
    user_prompt: prompt,
    generated_code: response.content,
  };
}

const stateSchema = z.object({
  user_prompt: z.string().optional(),
  generated_code: z.string().optional(),
});

const workflow = new StateGraph({ state: stateSchema, channels: {} });

workflow.addNode('generate_code', generateCode);
workflow.setEntryPoint("generate_code");
workflow.addEdge('generate_code', END);

const appGraph = await workflow.compile();

app.get('/', (req, res) => {
  res.send("Server is running")
});

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt, 'prompt')
  try {
    const result = await appGraph.invoke({ user_prompt: prompt });
    if (!result?.generated_code) {
      return res.json({ code: "⚠️ Failed to generate code. Check the logs." });
    }
    res.json({ code: result.generated_code });
  } catch (e) {
    console.error("❌ LangGraph error:", e);
    res.status(500).json({ code: `⚠️ Internal error: ${e.message}` });
  }
});

app.listen(3000, () => console.log('🚀 Listening on http://localhost:3000'));