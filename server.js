
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors()); app.use(express.json({limit:'2mb'})); app.use(express.static(__dirname));
app.post('/api/chat', async (req,res)=>{
  const key = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;
  const base = process.env.API_BASE || 'https://api.deepseek.com';
  if(!key) return res.status(400).json({error:'Missing DEEPSEEK_API_KEY or OPENAI_API_KEY in environment variables.'});
  try{
    const r = await fetch(base.replace(/\/$/,'') + '/chat/completions', {method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+key}, body: JSON.stringify(req.body)});
    const text = await r.text(); res.status(r.status).type('application/json').send(text);
  }catch(e){ res.status(500).json({error:String(e.message||e)}); }
});
app.listen(8787, ()=>console.log('CATTI trainer running at http://localhost:8787'));
