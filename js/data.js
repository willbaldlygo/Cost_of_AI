/**
 * data.js — All research data for "The True Cost of AI"
 * Source: ai_environmental_impact_research.md & CLAUDE_CODE_BUILD_PROMPT.md
 * DO NOT modify these figures — they are research-sourced estimates.
 */

const taskData = {
  textPrompt: {
    id: "text-prompt",
    name: "Text Prompt",
    icon: "💬",
    description: "A typical workplace question generating a paragraph-length response (~500 tokens output) from a current-generation model like GPT-4o or Gemini.",
    isTraining: false,
    electricity: {
      central: 0.4,
      unit: "Wh",
      range: "0.3–2.0 Wh",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    water: {
      central: 1,
      unit: "ml",
      range: "0.5–3.5 ml",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    carbon: {
      central: 0.16,
      unit: "g CO₂",
      range: "0.12–0.78 g",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    comparisons: {
      electricity: "Running an LED light bulb for about 2–3 minutes",
      water: "About 3–4 drops from an eyedropper",
      carbon: "Driving a petrol car approximately 0.4 metres"
    }
  },
  imageGeneration: {
    id: "image-generation",
    name: "Image Generation",
    icon: "🖼️",
    description: "A single 1024×1024 pixel image from a text prompt, using a current-generation model like DALL-E 3, Imagen 3, or Midjourney V6.",
    isTraining: false,
    electricity: {
      central: 3,
      unit: "Wh",
      range: "1.0–5.0 Wh",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    water: {
      central: 5.4,
      unit: "ml",
      range: "1.8–9.0 ml",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    carbon: {
      central: 1.2,
      unit: "g CO₂",
      range: "0.39–1.95 g",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    comparisons: {
      electricity: "Running a microwave for about 5–10 seconds",
      water: "About a teaspoon of water",
      carbon: "Driving a petrol car approximately 3 metres"
    }
  },
  videoGeneration: {
    id: "video-generation",
    name: "Video Generation (5s)",
    icon: "🎬",
    description: "5 seconds of 1080p video from a text prompt, using a current-generation model like Sora 2 or Veo 2.",
    isTraining: false,
    electricity: {
      central: 470,
      unit: "Wh",
      range: "50–500 Wh",
      confidence: "low",
      confidenceLabel: "Low confidence (±2–3×)"
    },
    water: {
      central: 850,
      unit: "ml",
      range: "90–900 ml",
      confidence: "low",
      confidenceLabel: "Low confidence (±2–3×)"
    },
    carbon: {
      central: 183,
      unit: "g CO₂",
      range: "20–195 g",
      confidence: "low",
      confidenceLabel: "Low confidence (±2–3×)"
    },
    comparisons: {
      electricity: "Running a microwave on full power for about 30 minutes",
      water: "Roughly a large bottle of water",
      carbon: "Driving a petrol car about 0.5 miles (800 metres)"
    }
  },
  deepResearch: {
    id: "deep-research",
    name: "Deep Research",
    icon: "🔬",
    description: "An extended multi-step reasoning and web retrieval task, equivalent to approximately 20–30 sequential queries with chain-of-thought reasoning.",
    isTraining: false,
    electricity: {
      central: 20,
      unit: "Wh",
      range: "6–40 Wh",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    water: {
      central: 36,
      unit: "ml",
      range: "11–72 ml",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    carbon: {
      central: 7.8,
      unit: "g CO₂",
      range: "2.3–15.6 g",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    comparisons: {
      electricity: "Boiling a full kettle once",
      water: "About 2 tablespoons of water",
      carbon: "Driving a petrol car about 20 metres"
    }
  },
  training8B: {
    id: "training-8b",
    name: "Training: 8B Model",
    icon: "🧠",
    description: "Pre-training an open-source LLM of ~8 billion parameters on ~15 trillion tokens (e.g., Meta's Llama 3 8B). This is a one-time cost, not a per-use cost.",
    isTraining: true,
    electricity: {
      central: 5400,
      unit: "MWh",
      range: "3,000–5,400 MWh",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    water: {
      central: 9.7,
      unit: "million litres",
      range: "~9.7 million litres",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    carbon: {
      central: 2100,
      unit: "tonnes CO₂",
      range: "~2,100 tonnes CO₂",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    comparisons: {
      electricity: "Powering approximately 500 UK homes for a year",
      water: "About 4 Olympic swimming pools",
      carbon: "Approximately 450 return flights London to New York"
    }
  },
  trainingFrontier: {
    id: "training-frontier",
    name: "Training: Frontier Model",
    icon: "🏗️",
    description: "Pre-training a state-of-the-art frontier model like GPT-4 or GPT-5 class (200B+ active parameters, MoE architecture). This is a one-time cost.",
    isTraining: true,
    electricity: {
      central: 60000,
      unit: "MWh",
      range: "50,000–72,000 MWh",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    water: {
      central: 108,
      unit: "million litres",
      range: "90–130 million litres",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    carbon: {
      central: 23400,
      unit: "tonnes CO₂",
      range: "11,000–28,000 tonnes CO₂",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    comparisons: {
      electricity: "Powering approximately 5,700 UK homes for a year",
      water: "About 43 Olympic swimming pools",
      carbon: "Annual emissions of a small town of about 3,000 people"
    }
  }
};

/* Order of tasks in the selector */
const taskOrder = [
  "textPrompt",
  "imageGeneration",
  "videoGeneration",
  "deepResearch",
  "training8B",
  "trainingFrontier"
];

/* Practical advice tiers */
const adviceTiers = [
  {
    id: "quick-wins",
    title: "Quick Wins",
    subtitle: "Instant, zero-effort changes",
    icon: "⚡",
    tips: [
      {
        title: "Choose the right-sized model",
        body: "Use smaller models (GPT-4o mini, Claude Haiku, Gemini Flash) for simple tasks. Reserve frontier models for complex reasoning. Choosing the right model can use up to 70× less energy per query.",
        source: "Jegham et al., 2025"
      },
      {
        title: "Constrain your output",
        body: "Ask for \"under 200 words\" or \"bullet points only.\" Response length affects energy more than prompt length.",
        source: "Green Prompting, Adamska et al., 2025"
      },
      {
        title: "Avoid unnecessary reasoning modes",
        body: "Reasoning models generate hundreds of hidden \"thinking\" tokens. Only use them when you genuinely need multi-step problem-solving. Reasoning models average 543 thinking tokens per question vs. 37 for concise models.",
        source: "Dauner & Socher, 2025"
      }
    ]
  },
  {
    id: "better-habits",
    title: "Build Better Habits",
    subtitle: "Moderate effort",
    icon: "🔄",
    tips: [
      {
        title: "Save and reuse your best prompts",
        body: "Every time you craft a prompt that works well, save it. Reusing refined prompts eliminates 3–5 wasted experimental queries per task.",
        source: null
      },
      {
        title: "Create Custom GPTs or Gems",
        body: "Pre-load your context, role, and formatting preferences into a custom assistant. This cuts input tokens by ~30–50% on every subsequent use.",
        source: null
      },
      {
        title: "Batch your questions",
        body: "Combine related queries into one well-structured prompt rather than asking five separate questions. This reduces context-rebuilding overhead.",
        source: null
      },
      {
        title: "Choose your words deliberately",
        body: "Research shows \"justify\" and \"analyze\" trigger energy-intensive reasoning chains. \"List,\" \"summarise,\" and \"measure\" are more efficient.",
        source: "Capgemini, 2026"
      }
    ]
  },
  {
    id: "go-local",
    title: "Go Local",
    subtitle: "For more technical users",
    icon: "💻",
    tips: [
      {
        title: "Run local models with Ollama or LM Studio",
        body: "A Mac Mini M4 peaks at ~65W during inference — less than a gaming PC at idle. Local inference has zero water footprint beyond your electricity and no data centre overhead.",
        source: null
      },
      {
        title: "Use quantised models",
        body: "4-bit quantisation reduces memory by 75% and cuts energy by 60–80% with only 1–5% accuracy loss.",
        source: "Green AI systematic review, ScienceDirect, 2025"
      },
      {
        title: "Build scripts instead of repeating AI tasks",
        body: "Use AI to help you write a Python script, then run the script locally. A script running on milliwatts replaces an AI query using watts.",
        source: null
      }
    ]
  },
  {
    id: "think-bigger",
    title: "Think Bigger",
    subtitle: "Systemic awareness",
    icon: "🌍",
    tips: [
      {
        title: "Understand training costs",
        body: "Training GPT-5 consumed ~60,000 MWh — equivalent to billions of queries. This is a fixed cost that users don't control, but understanding it puts per-query costs in perspective.",
        source: null
      },
      {
        title: "Location matters enormously",
        body: "The same query has near-zero carbon from a hydro-powered data centre but significant carbon on a coal-heavy grid. Norway: ~0.03 kg CO₂/kWh. India: ~0.71 kg CO₂/kWh — a 24× difference.",
        source: null
      },
      {
        title: "Advocate for transparency",
        body: "No AI company provides real-time per-query environmental metrics. Supporting independent researchers and calling for disclosure is one of the most impactful things you can do.",
        source: null
      },
      {
        title: "Efficiency is improving fast",
        body: "Google achieved 33× energy reduction per Gemini prompt in 12 months. The industry can improve dramatically when motivated.",
        source: "Google Cloud, Aug 2025"
      }
    ]
  }
];

/* Key stat callout */
const keyStatCallout = {
  quote: "Simply choosing the right-sized model for each task could reduce global AI energy consumption by 27.8% — saving 31.9 TWh per year. That's equivalent to the output of five nuclear power reactors.",
  source: "\"Small is Sufficient\" study, 2025"
};

/* Sources data — all 32 references grouped, with verified URLs */
const sourcesData = [
  {
    group: "Primary Academic Sources",
    items: [
      { num: 1, text: "Jegham et al. (2025). \"How Hungry is AI?\" arXiv:2505.09598", url: "https://arxiv.org/abs/2505.09598" },
      { num: 2, text: "Luccioni et al. (2024). \"Power Hungry Processing.\" ACM FAccT '24", url: "https://arxiv.org/abs/2311.16863" },
      { num: 3, text: "de Vries (2023). \"The growing energy footprint of artificial intelligence.\" Joule", url: "https://doi.org/10.1016/j.joule.2023.09.004" },
      { num: 4, text: "Ruf et al. (2025). \"Energy Scaling Laws for Diffusion Models.\" arXiv", url: "https://arxiv.org/abs/2411.14588" },
      { num: 5, text: "Li et al. (2025). \"Making AI Less Thirsty.\" Communications of the ACM", url: "https://arxiv.org/abs/2304.03271" },
      { num: 6, text: "Cottier & Rahman (2024). \"Rising Costs of Training Frontier AI Models.\" Epoch AI", url: "https://arxiv.org/abs/2405.21015" }
    ]
  },
  {
    group: "Industry & Institutional Sources",
    items: [
      { num: 7, text: "OpenAI / Sam Altman (June 2025). \"The Gentle Singularity\" blog post", url: "https://blog.samaltman.com/the-gentle-singularity" },
      { num: 8, text: "Epoch AI (Feb 2025). \"How much energy does ChatGPT use?\"", url: "https://epoch.ai/blog/how-much-energy-does-chatgpt-use" },
      { num: 9, text: "MIT Technology Review (May 2025). \"We did the math on AI's energy footprint.\"", url: "https://www.technologyreview.com/2025/05/20/1116336/we-did-the-math-on-ais-energy-footprint-the-numbers-are-staggering/" },
      { num: 10, text: "International Energy Agency (2025). Electricity 2025", url: "https://www.iea.org/reports/electricity-2025" },
      { num: 11, text: "Meta (2024). Llama 3 Model Card & disclosures", url: "https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md" },
      { num: 12, text: "Schneider Electric (2025). AI energy consumption estimates", url: "https://www.se.com/ww/en/insights/sustainability/sustainability-research-institute/" },
      { num: 13, text: "Luccioni & Hernandez-Garcia (2023). \"Counting Carbon.\" arXiv", url: "https://arxiv.org/abs/2302.08476" },
      { num: 14, text: "EESI (2025). \"Data Centers and Water Consumption\"", url: "https://www.eesi.org/articles/view/data-centers-and-water-consumption" },
      { num: 15, text: "Brookings Institution (Nov 2025). \"AI, data centers, and water\"", url: "https://www.brookings.edu/articles/ai-data-centers-and-water/" },
      { num: 16, text: "UK Parliament POST (2025). \"Water use in AI and Data Centres\"", url: "https://post.parliament.uk/research-briefings/post-pn-0729/" },
      { num: 17, text: "Hugging Face / Luccioni (2025). CogVideoX video generation measurements", url: "https://huggingface.co/spaces/genai-impact/ecologits-calculator" },
      { num: 18, text: "IEEE Spectrum (2025). \"The Staggering Ecological Impacts of AI\"", url: "https://spectrum.ieee.org/ai-energy-consumption" }
    ]
  },
  {
    group: "Efficiency & Mitigation Sources",
    items: [
      { num: 19, text: "Dauner & Socher (2025). \"Energy costs of communicating with AI.\" Frontiers in Communication", url: "https://doi.org/10.3389/fcomm.2025.1572947" },
      { num: 20, text: "Capgemini (2025). \"From Words to Watts.\"", url: "https://www.capgemini.com/insights/expert-perspectives/from-words-to-watts/" },
      { num: 21, text: "Adamska et al. (2025). \"Green Prompting.\" arXiv:2503.10666", url: "https://arxiv.org/abs/2503.10666" },
      { num: 22, text: "Martino et al. (2025). \"Green Prompt Engineering.\" arXiv", url: "https://arxiv.org/abs/2503.04223" },
      { num: 23, text: "Doiseau et al. (2025). \"Small Language Models are Sufficient.\" arXiv", url: "https://arxiv.org/abs/2510.01889" },
      { num: 24, text: "Google (2025). \"Measuring the environmental impact of AI compute\"", url: "https://blog.google/technology/google-deepmind/measuring-the-environmental-impact-of-ai-compute-at-google/" },
      { num: 25, text: "Rubei et al. (2025). \"Prompt engineering and energy consumption.\" arXiv:2501.05899", url: "https://arxiv.org/abs/2501.05899" },
      { num: 26, text: "XDA (Feb 2026). \"I run local LLMs and can barely tell the difference\"", url: "https://www.xda-developers.com/i-run-local-llms-and-can-barely-tell-the-difference/" },
      { num: 27, text: "Peiris (2025). \"How Much Energy Does Local AI Use?\"", url: "https://www.tomshardware.com/pc-components/cpus/how-much-energy-does-local-ai-use" },
      { num: 28, text: "MIT News (Sep 2025). \"Responding to the climate impact of generative AI\"", url: "https://news.mit.edu/2025/responding-climate-impact-generative-ai-0916" },
      { num: 29, text: "Tilburg.ai (2024). \"5 Practical Tips to Lower Your AI Carbon Footprint\"", url: "https://tilburg.ai/2024/06/reduce-ai-carbon-footprint/" },
      { num: 30, text: "Schwartz et al. (2020). \"Green AI.\" Communications of the ACM", url: "https://doi.org/10.1145/3381831" },
      { num: 31, text: "Verdecchia et al. (2023). \"A Systematic Review of Green AI.\" WIREs", url: "https://doi.org/10.1002/widm.1507" },
      { num: 32, text: "ALT Community Blog (May 2025). \"Think before you prompt: ROCKS\"", url: "https://www.alt.ac.uk/news/all_news/think-before-you-prompt-rocks/" }
    ]
  }
];

/* Methodology data */
const methodologyData = {
  referenceScenario: [
    { label: "Models", value: "Current-generation (2025–26) flagship models (GPT-4o/GPT-5, Gemini 2.5, Claude, Llama 4)" },
    { label: "Hardware", value: "NVIDIA H100/B200 class GPU hardware" },
    { label: "Data centre PUE", value: "~1.2" },
    { label: "Water Usage Effectiveness", value: "~1.8 litres per kWh" },
    { label: "Grid carbon intensity", value: "US average ~0.39 kg CO₂/kWh" },
    { label: "Water accounting", value: "Includes Scope 1 (on-site cooling) and Scope 2 (electricity generation). Excludes Scope 3 (chip manufacturing)." }
  ],
  confidenceLevels: [
    { level: "high", label: "High (±30%)", description: "Multiple independent sources converge" },
    { level: "medium", label: "Medium (±50%)", description: "Credible third-party estimates with architectural assumptions" },
    { level: "low", label: "Low (±2–3×)", description: "Inferred from proxy data with significant uncertainty" }
  ],
  limitations: [
    "No provider publishes per-query energy data directly",
    "\"Average query\" conflates a wide range of task complexity",
    "Water and carbon are highly location-dependent",
    "Models are getting more efficient over time (snapshot, not permanent truth)",
    "Frontier model training estimates involve the most uncertainty"
  ]
};
