export type Service = {
  number: string;
  name: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Agentic Systems',
    description:
      'Teams of agents that plan, call tools, and complete multi-step work on their own — with per-step model routing, bounded tool loops, retries and timeouts, and a full trace of every decision they made.',
  },
  {
    number: '02',
    name: 'RAG & Knowledge',
    description:
      'Retrieval pipelines that ground answers in your own documents, cite the chunk they came from, score their own confidence, and hand off to a human rather than guess when the knowledge base comes up short.',
  },
  {
    number: '03',
    name: 'MCP Integrations',
    description:
      'Model Context Protocol servers that turn an API or an internal Python library into tools an agent can safely use — generated deterministically, validated before shipping, tested against a real MCP client.',
  },
  {
    number: '04',
    name: 'Voice & Conversational AI',
    description:
      'Real-time voice agents in the browser or over the phone: speech-to-text, reasoning, and natural speech stitched into one low-latency loop that books appointments, answers questions, and qualifies leads.',
  },
  {
    number: '05',
    name: 'Production & MLOps',
    description:
      'Single-container deploys, background workers, caching, cost caps, crash recovery, and observability — the unglamorous half that decides whether an AI demo survives contact with real traffic.',
  },
];
