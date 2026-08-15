export type Service = {
  number: string;
  name: string;
  description: string;
};

/**
 * Written in plain language on purpose — this section is read by hiring
 * managers and by clients who are not engineers, so it says what the work
 * does rather than which techniques it uses.
 */
export const SERVICES: Service[] = [
  {
    number: '01',
    name: 'AI Chatbots & Assistants',
    description:
      'A chatbot that actually knows your business — it reads your own documents first, shows where each answer came from, and hands the conversation to a person when it is not sure. Works on a website, WhatsApp, or Slack.',
  },
  {
    number: '02',
    name: 'AI Agents That Get Work Done',
    description:
      'Most AI only replies to you. Agents do the task — research something, write it up, check it, and file it. Several of them work as a team, passing work between each other without anyone supervising every step.',
  },
  {
    number: '03',
    name: 'MCP Integrations',
    description:
      'MCP is the standard that lets an AI safely use the tools you already have — your database, your CRM, an internal app. I build that connection, so the assistant can actually do things in your systems instead of only talking about them.',
  },
  {
    number: '04',
    name: 'Voice AI',
    description:
      'An AI you can talk to out loud, on your site or through a real phone number. It listens, answers, and takes bookings or messages — so calls still get handled when nobody is free to pick up.',
  },
  {
    number: '05',
    name: 'Custom Models & Data',
    description:
      'For when something off the shelf is not enough: training a model on your own data, tidying up the messy data that feeds it, and being straight about what it does well and where it falls short.',
  },
  {
    number: '06',
    name: 'Getting It Live',
    description:
      'A demo that only runs on my laptop is not a product. I handle the hosting, monitoring, and running costs that turn a working prototype into something you can depend on day to day.',
  },
];
