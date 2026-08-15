export type Project = {
  number: string;
  name: string;
  category: string;
  blurb: string;
  tags: string[];
  /** TODO: point at the real deployment or repo. */
  href: string;
};

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'MCP Forge',
    category: 'Developer Platform',
    blurb:
      'Turns an OpenAPI spec — or an installed Python library — into a complete, runnable MCP server package. Generation is deterministic through audited Jinja templates, never "ask a model to write a server", and the playground launches the literal files you are about to download and drives them over real MCP.',
    tags: ['FastAPI', 'React', 'TypeScript', 'Jinja2', 'MCP SDK', 'SQLite'],
    href: 'https://mcp-server-builder-production.up.railway.app/',
  },
  {
    number: '02',
    name: 'TaskForce',
    category: 'Multi-Agent Systems',
    blurb:
      'Teams of AI agents that complete multi-step business workflows autonomously. Every agent picks its own model — local or hosted — runs sequentially, in parallel, or conditionally, and streams live to the browser with a full per-agent trace of tokens, cost, and latency.',
    tags: ['FastAPI', 'React Flow', 'WebSockets', 'Ollama', 'Together AI', 'SQLite'],
    href: 'https://taskforce-production-a66c.up.railway.app/',
  },
  {
    number: '03',
    name: 'Sonari',
    category: 'Voice AI',
    blurb:
      'An AI voice agent builder: write the instructions, get something you can talk to in a browser, share as a public link, embed, or connect to a real phone number. Speech-to-text, text-to-speech, reasoning, and embeddings are each a swappable interface — from zero-setup mock to self-hosted to paid API.',
    tags: ['FastAPI', 'SQLAlchemy', 'Twilio', 'Whisper', 'Celery', 'React'],
    href: 'https://ai-voice-agent-builder-production.up.railway.app/',
  },
  {
    number: '04',
    name: 'Lumio',
    category: 'RAG Platform',
    blurb:
      'A multi-tenant SaaS for RAG-powered chatbots. Upload documents, get an assistant grounded in them that cites its sources, scores its own confidence, and escalates to a human when it should not guess — shipped as a Shadow-DOM widget or over WhatsApp, Instagram, Slack, and Email.',
    tags: ['FastAPI', 'ChromaDB', 'Supabase', 'Celery', 'React', 'Zustand'],
    href: 'https://lumio-api-production.up.railway.app/login',
  },
  {
    number: '05',
    name: 'MarketMind',
    category: 'AI Research',
    blurb:
      'Trading research across US and Indian markets. A transparent 0–100 signal score and the entry/target/stop math are computed in pure Python so every number is auditable; a five-agent research crew then reasons over fundamentals, technicals, sentiment, and risk to produce one verdict.',
    tags: ['FastAPI', 'React Query', 'yfinance', 'Redis', 'TradingView', 'Capacitor'],
    href: 'https://marketmind-api-production-382e.up.railway.app/',
  },
];
