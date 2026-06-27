import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json({limit:'2mb'}));
app.use(express.static('.'));
const API_KEY = process.env.DEEPSEEK_API_KEY;
const BASE = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';
app.post('/api/chat', async (req,res)=>{
  if(!API_KEY) return res.status(500).json({error:'请先设置环境变量 DEEPSEEK_API_KEY'});
  try{
    const r = await fetch(`${BASE}/v1/chat/completions`, {method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${API_KEY}`}, body: JSON.stringify(req.body)});
    res.status(r.status).json(await r.json());
  }catch(e){res.status(500).json({error:e.message});}
});
app.listen(8787,()=>console.log('CATTI V5 running at http://localhost:8787'));
