# 🔮 GitSeeker - AI-Powered Multi-Source Discovery Platform

**The Future of Open Source Discovery** — Search across GitHub, Hugging Face, GitLab, npm & PyPI with intelligent AI analysis.

![GitSeeker Banner](https://via.placeholder.com/1200x400?text=GitSeeker+-+AI-Powered+Discovery)

## ✨ Features

### 🌐 Multi-Source Search
- **GitHub** - Millions of repositories
- **Hugging Face** - AI models and datasets  
- **GitLab** - Open source projects
- **npm** - JavaScript packages
- **PyPI** - Python packages

Search across all sources simultaneously with intelligent ranking!

### 🧠 Flexible AI Providers
Choose your AI provider based on your needs:

| Provider | Type | Cost | Speed | Privacy |
|----------|------|------|-------|---------|
| **WebLLM** (Default) | In-Browser | FREE | Fast | 100% Private |
| **OpenAI** | API | $$$ | Fastest | Requires API Key |
| **Anthropic Claude** | API | $$$ | Fast | Requires API Key |
| **OpenRouter** | API | $ - $$$ | Fast | Requires API Key |

#### WebLLM (Recommended for Privacy)
- Runs **Llama 3.1 8B** locally in your browser
- 100% free, unlimited usage
- No data sent to servers
- Models cached for instant subsequent loads

#### API Providers (For Maximum Performance)
- Use your own API keys
- Access to latest models (GPT-4, Claude 3.5, etc.)
- **Auto-updated model list** - Always have access to newest models
- Supports OpenAI, Anthropic, and OpenRouter

### ⚡ Intelligent Analysis
- Click "Analyze with AI" on any project
- AI fetches documentation and provides:
  - What the project does
  - Key features and capabilities
  - Who should use it and when
  - Technical requirements
- Streaming token-by-token output

### 🎨 Futuristic UI
- **Glassmorphism** design with backdrop blur
- **Animated gradients** and glow effects
- **Smooth transitions** and micro-interactions
- **Responsive** - works on all devices
- **Dark theme** optimized for long sessions

### 🔍 Smart Features
- **Intelligent ranking** based on relevance, popularity, and recency
- **Source filtering** - enable/disable sources on the fly
- **Real-time search** across multiple platforms
- **Rate limit handling** with friendly error messages

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+**
- **Modern browser** (Chrome 113+, Edge 113+, or Safari 17+)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gitseeker.git
cd gitseeker

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### First-Time Setup

1. **Choose AI Provider**:
   - Click "AI Settings" in the navbar
   - Select WebLLM for free local AI, or
   - Choose OpenAI/Anthropic/OpenRouter and enter your API key

2. **For WebLLM**:
   - Click the status pill to start downloading the model
   - Wait for "🟢 AI Ready" (first time only, ~4.5GB download)
   - Model is cached for instant future loads

3. **Start Searching**:
   - Select your preferred sources (GitHub, Hugging Face, etc.)
   - Enter your search query
   - Click "Analyze with AI" on any result!

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Beautiful UI components |
| [@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm) | In-browser LLM inference |
| **Multiple APIs** | GitHub, Hugging Face, GitLab, npm, PyPI |

## 📁 Project Structure

```
gitseeker/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Main search page
│   │   ├── providers.tsx        # Context providers
│   │   └── globals.css          # Global styles & animations
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── EnhancedNavbar.tsx   # Navigation with AI settings
│   │   ├── EnhancedStatusPill.tsx # AI status indicator
│   │   ├── EnhancedSearchBar.tsx  # Multi-source search
│   │   ├── SourceFilter.tsx     # Source selection
│   │   ├── UnifiedProjectCard.tsx # Project card with analysis
│   │   └── AIProviderSettings.tsx # AI configuration modal
│   ├── contexts/
│   │   ├── UnifiedAIContext.tsx # Unified AI provider context
│   │   └── WebLLMContext.tsx    # WebLLM-specific context
│   ├── hooks/
│   │   └── useWebLLM.ts         # WebLLM hook
│   ├── lib/
│   │   ├── sources.ts           # Multi-source search logic
│   │   ├── ai-providers.ts      # AI provider abstraction
│   │   ├── github.ts            # GitHub utilities
│   │   └── utils.ts             # General utilities
│   └── workers/
│       └── webllm.worker.ts     # Web Worker for AI
└── ...config files
```

## 🎯 Usage Guide

### Searching Projects

1. **Select Sources**: Toggle GitHub, Hugging Face, GitLab, npm, PyPI
2. **Enter Query**: Type what you're looking for
3. **Get Results**: Projects ranked by relevance across all sources

### Configuring AI

1. Click **"AI Settings"** in navbar
2. Choose provider:
   - **WebLLM**: Free, select model (Llama 3.1 8B recommended)
   - **OpenAI**: Enter API key, select GPT model
   - **Anthropic**: Enter API key, select Claude model
   - **OpenRouter**: Enter API key, access 100+ models
3. Click **"Save & Apply"**

### Analyzing Projects

1. Ensure AI is ready (green status pill)
2. Click **"Analyze with AI"** on any project card
3. Watch AI stream intelligent insights
4. Get actionable information about the project

## 🔧 Configuration

### Environment Variables (Optional)

```env
# For server-side API calls (if needed in future)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
OPENROUTER_API_KEY=sk-or-...
```

### Customization

#### Change Default AI Provider
Edit `src/lib/ai-providers.ts`:
```typescript
export function loadAIConfig(): AIConfig {
  return { 
    provider: "webllm", // or "openai", "anthropic", "openrouter"
    model: "Llama-3.1-8B-Instruct-q4f16_1-MLC" 
  };
}
```

#### Add More Sources
Extend `src/lib/sources.ts` with new search functions following the existing pattern.

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm run build
npx vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export

```bash
npm run build
# Deploy .next/static to any static host
```

## 🐛 Troubleshooting

### WebGPU Not Supported
- **Solution**: Update to Chrome 113+, Edge 113+, or Safari 17+
- **Alternative**: Use API providers (OpenAI, Anthropic, OpenRouter)

### Model Download Fails
- Check internet connection
- Ensure 5GB+ free disk space
- Clear browser cache and retry

### API Key Invalid
- Verify key is correct
- Check account has credits/active subscription
- Ensure key has proper permissions

### Rate Limits
- **GitHub**: Wait 60 seconds or authenticate
- **Other APIs**: Depends on your plan

## 🔐 Privacy & Security

- **WebLLM**: 100% local, no data sent anywhere
- **API Keys**: Stored locally in browser, never sent to our servers
- **Search Queries**: Sent directly to source APIs (GitHub, etc.)
- **No Tracking**: No analytics, no cookies, no tracking

## 📊 Performance

- **Initial Load**: ~2-3s
- **WebLLM First Download**: ~5-10min (one-time, cached forever)
- **Subsequent WebLLM Loads**: Instant
- **Search**: ~1-3s across all sources
- **AI Analysis**: 2-10s depending on provider

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

MIT License - use freely for any purpose!

## 🙏 Acknowledgments

- [MLC AI](https://mlc.ai/) - WebLLM library
- [shadcn](https://twitter.com/shadcn) - UI components
- [Vercel](https://vercel.com/) - Next.js and hosting
- All the amazing open source projects we help discover!

## 🌟 Roadmap

- [ ] More AI providers (Gemini, Mistral, etc.)
- [ ] Advanced filtering (stars, language, date)
- [ ] Saved searches and favorites
- [ ] Project comparisons
- [ ] Trending projects dashboard
- [ ] Browser extension
- [ ] Mobile app

---

**Built with ❤️ using cutting-edge AI technology**

[⭐ Star on GitHub](https://github.com/yourusername/gitseeker) | [🐛 Report Bug](https://github.com/yourusername/gitseeker/issues) | [💡 Request Feature](https://github.com/yourusername/gitseeker/issues)
