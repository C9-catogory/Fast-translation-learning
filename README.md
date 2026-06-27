# CATTI Visual Translation Trainer V4

一个可离线打开、可部署到 GitHub Pages/Netlify 的 CATTI 中英笔译冲刺网页项目。

## V4 新增

- 知识地图：节点连线脑图，点击查看模块重点。
- 长难句实验室：逐层动画拆句，显示主干、逻辑、从句和参考译文。
- 语法规则卡：时态、名词、从句、非谓语、介词、副词、逻辑、语体、标点等。
- 近义词辨析：promote/advance/foster/drive 等高频考点。
- 口语化 → 书面化：本地规则改写练习。
- 学科术语库：航天、脑机接口、AI治理、生物、海洋、垃圾、气候、数字经济等。
- 热点情景库：马斯克/火星、脑机接口、海洋保护、塑料污染、垃圾分类、生物安全等。
- 实时反馈：离线检查数字、否定、逻辑连接、术语、语域风险。
- AI训练器：支持 DeepSeek/OpenAI-compatible；前端不保存 API Key。推荐本地代理。

## 本地运行

直接双击 `index.html` 可用离线功能。

AI 代理运行：

```bash
npm install
DEEPSEEK_API_KEY=你的key npm start
```

然后打开 `http://localhost:8787`。

## 安全说明

前端直连 API 会把 Key 暴露在浏览器请求中，也可能受 CORS 限制。长期使用建议通过 `server.js` 本地代理或自己的后端代理。

## 部署

静态部分可部署到 GitHub Pages / Netlify / Vercel。不要把 `.env` 或 API Key 上传到公开仓库。
