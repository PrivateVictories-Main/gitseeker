<div align="center">

# ✨ GitSeeker

### AI-Powered Multi-Source Project Discovery Platform

**Discover, analyze, and explore open-source projects across GitHub, Hugging Face, npm, PyPI, and GitLab — all with intelligent AI insights.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

![GitSeeker Preview](https://via.placeholder.com/1200x600/0f172a/94a3b8?text=GitSeeker+-+AI-Powered+Discovery)

</div>

---

## 🌟 Why GitSeeker?

Finding the right open-source project shouldn't be hard. GitSeeker makes it effortless by:

- 🔍 **Searching across 5 platforms** simultaneously (GitHub, Hugging Face, GitLab, npm, PyPI)
- 🧠 **AI-powered analysis** that reads documentation and provides instant insights
- 🎯 **Intelligent ranking** based on relevance, popularity, and maintenance
- 🔒 **Privacy-first** with optional in-browser AI (no data sent to servers)
- ⚡ **Lightning fast** with beautiful, modern UI

---

## ✨ Features

### 🌐 Multi-Source Search

<table>
<tr>
<td width="20%" align="center">
<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="50"><br>
<b>GitHub</b><br>
<sub>Millions of repositories</sub>
</td>
<td width="20%" align="center">
<img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" width="50"><br>
<b>Hugging Face</b><br>
<sub>AI models & datasets</sub>
</td>
<td width="20%" align="center">
<img src="https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" width="50"><br>
<b>GitLab</b><br>
<sub>DevOps projects</sub>
</td>
<td width="20%" align="center">
<img src="https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png" width="50"><br>
<b>npm</b><br>
<sub>JavaScript packages</sub>
</td>
<td width="20%" align="center">
<img src="https://pypi.org/static/images/logo-small.8998e9d1.svg" width="50"><br>
<b>PyPI</b><br>
<sub>Python packages</sub>
</td>
</tr>
</table>

Search across all platforms simultaneously with intelligent ranking and deduplication.

### 🧠 Flexible AI Providers

Choose the AI provider that fits your needs:

| Provider | Type | Cost | Privacy | Speed |
|----------|------|------|---------|-------|
| **WebLLM** ⭐ | In-Browser | FREE | 🔒 100% Private | ⚡ Fast |
| **OpenAI** | API | 💰 Paid | 🌐 Cloud | ⚡⚡ Fastest |
| **Anthropic Claude** | API | 💰 Paid | 🌐 Cloud | ⚡⚡ Fastest |
| **OpenRouter** | API | 💰 Paid | 🌐 Cloud | ⚡ Fast |

#### 🔒 WebLLM (Recommended)
- Runs **Llama 3.2 3B** or **Llama 3.1 8B** locally in your browser
- **100% free** with unlimited usage
- **Zero data sent** to any server
- Models cached for instant subsequent loads
- Powered by WebGPU for hardware acceleration

#### 🌐 API Providers
- Use your own API keys for maximum performance
- Access to latest models (GPT-4, Claude 3.5, etc.)
- **Auto-updated model list** — always have the newest models
- Supports OpenAI, Anthropic, and OpenRouter

### ⚡ Intelligent AI Analysis

Click "Analyze with AI" on any project to get:

- ✅ **What it does** — Core purpose and functionality
- ✅ **Key features** — Unique capabilities and highlights
- ✅ **Who should use it** — Target audience and use cases
- ✅ **Technical requirements** — Prerequisites and dependencies
- ✅ **Streaming output** — Token-by-token real-time analysis

### 🎨 Beautiful, Modern UI

- **Professional design** with smooth animations
- **Glassmorphism** effects and subtle gradients
- **Responsive** — works perfectly on all devices
- **Dark theme** optimized for long sessions
- **Micro-interactions** that feel premium

### 🔍 Smart Search Features

- **Deep search** with multiple strategies per platform
- **Advanced relevance scoring** (15+ factors)
- **Real-time filtering** by source
- **Trending projects** on homepage
- **Rate limit handling** with graceful fallbacks

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** ([Download](https://nodejs.org/))
- **Modern browser** with WebGPU support:
  - Chrome/Edge 113+
  - Safari 17+
  - Firefox Nightly

### Installation

```bash
# Clone the repository
git clone https://github.com/PrivateVictories-Main/gitseeker.git
cd gitseeker

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🎯 First-Time Setup

1. **Choose AI Provider**
   - Click "AI Settings" in the navbar
   - Select **WebLLM** for free local AI (recommended)
   - Or enter your API key for OpenAI/Anthropic/OpenRouter

2. **For WebLLM Users**
   - Click the status pill to start model download
   - Wait for "🟢 AI Ready" (first time: ~5-10 min)
   - Model is cached — future loads are instant!

3. **Start Discovering**
   - Select sources (GitHub, Hugging Face, etc.)
   - Enter your search query
   - Click "Analyze with AI" on any result!

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
<br>Next.js 14
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
<br>Tailwind CSS
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br>React 18
</td>
</tr>
</table>

**Core Technologies:**
- [Next.js 14](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) — Beautiful UI components
- [@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm) — In-browser LLM inference

**APIs:**
- GitHub REST API
- Hugging Face API
- GitLab API
- npm Registry API
- PyPI API

---

## 📁 Project Structure

```
gitseeker/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Main search page
│   │   ├── providers.tsx           # Context providers
│   │   └── globals.css             # Global styles & animations
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── EnhancedNavbar.tsx      # Navigation with AI settings
│   │   ├── EnhancedStatusPill.tsx  # AI status indicator
│   │   ├── EnhancedSearchBar.tsx   # Multi-source search
│   │   ├── SourceDropdown.tsx      # Source selection
│   │   ├── UnifiedProjectCard.tsx  # Project card with analysis
│   │   └── AIProviderSettings.tsx  # AI configuration modal
│   ├── contexts/
│   │   └── UnifiedAIContext.tsx    # Unified AI provider context
│   ├── hooks/
│   │   └── useWebLLM.ts            # WebLLM hook
│   ├── lib/
│   │   ├── sources.ts              # Multi-source search logic
│   │   ├── ai-providers.ts         # AI provider abstraction
│   │   ├── github.ts               # GitHub utilities
│   │   └── utils.ts                # General utilities
│   └── workers/
│       └── webllm.worker.ts        # Web Worker for AI
├── public/                         # Static assets
└── ...config files
```

---

## 🎯 Usage Guide

### Searching Projects

1. **Select Sources** — Toggle GitHub, Hugging Face, GitLab, npm, PyPI
2. **Enter Query** — Type what you're looking for
3. **Get Results** — Projects ranked by relevance across all sources

### Configuring AI

1. Click **"AI Settings"** in the navbar
2. Choose your provider:
   - **WebLLM**: Free, select model (Llama 3.1 8B recommended)
   - **OpenAI**: Enter API key, select GPT model
   - **Anthropic**: Enter API key, select Claude model
   - **OpenRouter**: Enter API key, access 100+ models
3. Click **"Save & Apply"**

### Analyzing Projects

1. Ensure AI is ready (green status pill)
2. Click **"Analyze with AI"** on any project card
3. Watch AI stream intelligent insights in real-time
4. Get actionable information about the project

---

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PrivateVictories-Main/gitseeker)

```bash
npm run build
npx vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t gitseeker .
docker run -p 3000:3000 gitseeker
```

### Static Export

```bash
npm run build
# Deploy .next/static to any static host (Netlify, Cloudflare Pages, etc.)
```

---

## 🐛 Troubleshooting

<details>
<summary><b>WebGPU Not Supported</b></summary>

**Solution**: Update to a supported browser:
- Chrome/Edge 113+
- Safari 17+
- Firefox Nightly

**Alternative**: Use API providers (OpenAI, Anthropic, OpenRouter)
</details>

<details>
<summary><b>Model Download Fails</b></summary>

- Check internet connection
- Ensure 5GB+ free disk space
- Clear browser cache and retry
- Try a smaller model (Llama 3.2 3B instead of 8B)
</details>

<details>
<summary><b>API Key Invalid</b></summary>

- Verify key is correct (no extra spaces)
- Check account has credits/active subscription
- Ensure key has proper permissions
- Try regenerating the key
</details>

<details>
<summary><b>Rate Limits</b></summary>

- **GitHub**: Wait 60 seconds or authenticate with token
- **Other APIs**: Depends on your plan
- **Solution**: Select fewer sources or wait between searches
</details>

---

## 🔐 Privacy & Security

- **WebLLM**: 100% local processing, zero data sent anywhere
- **API Keys**: Stored locally in browser localStorage, never transmitted to our servers
- **Search Queries**: Sent directly to source APIs (GitHub, npm, etc.)
- **No Tracking**: No analytics, no cookies, no user tracking
- **Open Source**: Full transparency — audit the code yourself

---

## 📊 Performance

| Metric | Time |
|--------|------|
| Initial Load | ~2-3s |
| WebLLM First Download | ~5-10min (one-time) |
| Subsequent WebLLM Loads | Instant ⚡ |
| Multi-Source Search | ~1-3s |
| AI Analysis | 2-10s (depends on provider) |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

**TL;DR**: Use freely for any purpose, commercial or personal!

---

## 🙏 Acknowledgments

- [MLC AI](https://mlc.ai/) — WebLLM library for in-browser AI
- [shadcn](https://twitter.com/shadcn) — Beautiful UI components
- [Vercel](https://vercel.com/) — Next.js framework and hosting
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- All the amazing open-source projects we help discover! 🌟

---

## 🗺️ Roadmap

- [ ] **More AI providers** (Gemini, Mistral, Cohere)
- [ ] **Advanced filtering** (stars range, language, date)
- [ ] **Saved searches** and favorites
- [ ] **Project comparisons** side-by-side
- [ ] **Trending dashboard** with charts
- [ ] **Browser extension** for quick access
- [ ] **Mobile app** (React Native)
- [ ] **API endpoint** for developers
- [ ] **Collaborative features** (share searches, collections)

---

<div align="center">

### 💖 Built with cutting-edge AI technology

**If you find GitSeeker useful, please consider giving it a ⭐ star!**

[⭐ Star on GitHub](../../stargazers) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues) • [📖 Documentation](#features)

Made with ❤️ by [PrivateVictories-Main](https://github.com/PrivateVictories-Main)

</div>
