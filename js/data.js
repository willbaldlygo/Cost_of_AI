/**
 * data.js — All research data for "The True Cost of AI"
 * Sources: Planning_resources/ai_environmental_impact_research.md (March 2026 compilation)
 *          Planning_resources/research_update_sept_2026.md (September 2026 revision)
 * DO NOT modify these figures without a sourced basis — they are research-sourced estimates.
 */

const taskData = {
  textPrompt: {
    id: "text-prompt-instant",
    name: "Text Prompt (Instant)",
    icon: "💬",
    description: "A typical workplace question answered straight away with minimal \"thinking\" — the fast, low-effort setting most chatbots use by default (~300 output tokens). Bottom-up, production-conditions estimate from Microsoft Research (2025). Note: \"Instant\" and \"Reasoning\" are two points on a sliding scale of effort, not a hard on/off switch.",
    isTraining: false,
    electricity: {
      central: 0.31,
      unit: "Wh",
      range: "0.16–0.60 Wh",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    water: {
      central: 0.56,
      unit: "ml",
      range: "0.3–1.1 ml",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    carbon: {
      central: 0.12,
      unit: "g CO₂",
      range: "0.06–0.23 g",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    comparisons: {
      electricity: "Running an LED light bulb for about two minutes",
      water: "A few drops from an eyedropper",
      carbon: "Driving a petrol car roughly a third of a metre"
    }
  },
  textPromptReasoning: {
    id: "text-prompt-reasoning",
    name: "Text Prompt (Reasoning)",
    icon: "🧩",
    description: "The same question with reasoning effort turned up — the model generates long hidden \"thinking\" steps before answering (~5,000 output tokens). At higher effort a single reply uses roughly 13× the energy of an instant one, and a significant share of such queries exceed 10 Wh. Most chatbots expose this as an effort level rather than a switch.",
    isTraining: false,
    electricity: {
      central: 3.91,
      unit: "Wh",
      range: "2.15–7.05 Wh",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    water: {
      central: 7,
      unit: "ml",
      range: "3.9–12.7 ml",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    carbon: {
      central: 1.5,
      unit: "g CO₂",
      range: "0.8–2.7 g",
      confidence: "high",
      confidenceLabel: "High confidence (±30%)"
    },
    comparisons: {
      electricity: "Running an LED light bulb for about 25 minutes",
      water: "About one and a half teaspoons of water",
      carbon: "Driving a petrol car about 4 metres"
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
    description: "5 seconds of video from a text prompt on a standard commercial-grade (≈720p-class) model, directly measured in a validated 2026 framework (under 3% prediction error). Video generation is compute-bound: the GPU runs near full power regardless of model size, batching several clips saves nothing, and energy scales with resolution² × frame count — so longer or higher-resolution clips cost disproportionately more. Google Veo 3 is estimated at ~20–43 Wh for an 8-second 720p clip; full 1080p output from the largest commercial models can reach several hundred to over a thousand Wh.",
    isTraining: false,
    electricity: {
      central: 85,
      unit: "Wh",
      range: "57.5–114.8 Wh",
      confidence: "medium-high",
      confidenceLabel: "Medium–High confidence (±40%)"
    },
    water: {
      central: 153,
      unit: "ml",
      range: "~105–207 ml",
      confidence: "medium-high",
      confidenceLabel: "Medium–High confidence (±40%)"
    },
    carbon: {
      central: 33,
      unit: "g CO₂",
      range: "~22–45 g",
      confidence: "medium-high",
      confidenceLabel: "Medium–High confidence (±40%)"
    },
    comparisons: {
      electricity: "Running a kitchen air fryer for up to five minutes",
      water: "About a small glass of water",
      carbon: "Driving a petrol car about 150 metres"
    }
  },
  deepResearch: {
    id: "deep-research",
    name: "Deep Research",
    icon: "🔬",
    description: "An extended multi-step reasoning and web-retrieval task, equivalent to roughly 20–30 sequential reasoning-mode steps with chain-of-thought. Built from the same \"thinking\" steps as a reasoning prompt, so it inherits their higher per-step cost.",
    isTraining: false,
    electricity: {
      central: 22,
      unit: "Wh",
      range: "6–40 Wh",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    water: {
      central: 40,
      unit: "ml",
      range: "11–72 ml",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    carbon: {
      central: 8.6,
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
      water: "About 4 Olympic swimming pools (enough to water a full-sized golf course for ~3 days)",
      carbon: "Approximately 450 return flights London to New York"
    }
  },
  trainingFrontier: {
    id: "training-frontier",
    name: "Training: Frontier Model",
    icon: "🏗️",
    description: "Pre-training a current-generation frontier model (2026) with 200B+ active parameters and a mixture-of-experts architecture. This is a one-time cost, not a per-use cost. None of the major labs disclose exact figures, so this is the least certain estimate on the site.",
    isTraining: true,
    electricity: {
      central: 150000,
      unit: "MWh",
      range: "100,000–300,000 MWh",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    water: {
      central: 270,
      unit: "million litres",
      range: "180–540 million litres",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    carbon: {
      central: 58500,
      unit: "tonnes CO₂",
      range: "39,000–117,000 tonnes CO₂",
      confidence: "medium",
      confidenceLabel: "Medium confidence (±50%)"
    },
    comparisons: {
      electricity: "Powering approximately 14,200 UK homes for a year",
      water: "About 108 Olympic swimming pools — enough to water a full-sized golf course for around 75 days",
      carbon: "Approximately 12,500 return flights London to New York"
    }
  }
};

/* Order of tasks in the selector */
const taskOrder = [
  "textPrompt",
  "textPromptReasoning",
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
        body: "Use smaller models (GPT-4o mini, Claude Haiku, Gemini Flash) for simple tasks. Reserve frontier models for complex reasoning. Choosing the right model can use up to 70× less energy per query; combined model, serving and hardware choices plausibly deliver 8–20× reductions.",
        source: "Jegham et al., 2025; Oviedo et al. (Microsoft), 2025"
      },
      {
        title: "Constrain your output",
        body: "Ask for \"under 200 words\" or \"bullet points only.\" Response length affects energy more than prompt length.",
        source: "Green Prompting, Adamska et al., 2025"
      },
      {
        title: "Avoid unnecessary reasoning modes",
        body: "Reasoning models generate hundreds of hidden \"thinking\" tokens. Only use them when you genuinely need multi-step problem-solving. Reasoning models average 543 thinking tokens per question vs. 37 for concise models — and a single reasoning reply can use around 13× the energy of an instant one. Microsoft Research (2025) found that switching reasoning on only when needed can cut per-query energy 5× or more on its own.",
        source: "Dauner & Socher, 2025; Oviedo et al. (Microsoft), 2025"
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
      },
      {
        title: "Create your own local software solutions",
        body: "Create your own software solutions built around local AI models to replace workflows you currently carry out using online models.",
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
        body: "Training a current frontier model is estimated at ~150,000 MWh (100–300 GWh) — equivalent to billions of queries. This is a fixed cost that users don't control, but understanding it puts per-query costs in perspective.",
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

/* Intro note shown at the top of the Research Sources panel */
const sourcesIntro = "Updated September 2026. This revision added new peer-reviewed measurement of AI inference and video-generation energy (sources 33–35) and changed several headline figures — see the Methodology panel for what moved and why.";

/* Sources data — 35 references grouped, with verified URLs */
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
  },
  {
    group: "September 2026 Update — New Sources",
    items: [
      { num: 33, text: "Oviedo, F. et al. (2025). \"Energy Use of AI Inference, Efficiency Pathways, and Test-Time Scaling.\" Microsoft. arXiv:2509.20241 — median 0.31 Wh per standard query (IQR 0.16–0.60), rising ~13× to 3.91 Wh for reasoning/test-time-scaling queries; non-production benchmarks overstate real use by 4–20×.", url: "https://arxiv.org/abs/2509.20241" },
      { num: 34, text: "Jegham, N., Gamazaychikov, B., Luccioni, S. (2026). \"Lights, Camera, Carbon: Architectural Scaling Laws for Video Generation Energy Consumption.\" arXiv:2607.04553 — validated framework (<3% error); ~57–115 Wh for a standard 5-second clip.", url: "https://arxiv.org/abs/2607.04553" },
      { num: 35, text: "Epoch AI (2025–26). \"How much power will frontier AI training demand in 2030?\" plus related 2026 frontier training-energy syntheses (GPT-5-class runs at 100–300 GWh).", url: "https://epoch.ai/blog/power-demands-of-frontier-ai-training" }
    ]
  }
];

/* Methodology data */
const methodologyData = {
  referenceScenario: [
    { label: "Models", value: "Current-generation (2026) flagship models — OpenAI GPT-5.5, Google Gemini 3, Anthropic Opus 5 / Sonnet 5 generation; open-weight models such as Llama 4 / current Qwen. No provider publishes per-query figures for this generation, so estimates here rely on production-grade benchmarking studies rather than single blog estimates." },
    { label: "Hardware", value: "NVIDIA H100/B200 class GPU hardware" },
    { label: "Data centre PUE", value: "~1.2" },
    { label: "Water Usage Effectiveness", value: "~1.8 litres per kWh" },
    { label: "Grid carbon intensity", value: "US average ~0.39 kg CO₂/kWh" },
    { label: "Water accounting", value: "Includes Scope 1 (on-site cooling) and Scope 2 (electricity generation). Excludes Scope 3 (chip manufacturing)." }
  ],
  confidenceLevels: [
    { level: "high", label: "High (±30%)", description: "Multiple independent sources converge, or a production-grade measurement" },
    { level: "medium-high", label: "Medium–High (±40%)", description: "Directly measured, or a validated framework, with some architectural assumptions for proprietary models" },
    { level: "medium", label: "Medium (±50%)", description: "Credible third-party estimates with architectural assumptions" },
    { level: "low", label: "Low (±2–3×)", description: "Inferred from proxy data with significant uncertainty" }
  ],
  limitations: [
    "No provider publishes per-query energy data directly",
    "\"Average query\" conflates a wide range of task complexity",
    "\"Instant\" vs \"reasoning\" text prompting is a sliding scale of effort, not a binary — energy per reply rises steeply as reasoning effort increases",
    "Non-production benchmarks (small-batch, un-optimised) overstate real-world energy use by 4–20×, which is why published estimates vary so widely",
    "Water and carbon are highly location-dependent",
    "Models change fast: these figures are a snapshot, not a permanent truth — this September 2026 update revised video down ~5.5× and frontier training up ~2.5× in just six months",
    "Frontier model training estimates involve the most uncertainty"
  ],
  changelog: {
    updated: "September 2026",
    intro: "Several figures changed meaningfully since the original March 2026 research. That is the site's core point in action — even careful estimates here have a short shelf life.",
    items: [
      "Text prompt: split into Instant (0.31 Wh) and Reasoning (3.91 Wh, ~13× higher), from new production-conditions measurement.",
      "Video (5s): revised down from 470 Wh to 85 Wh, on a directly-measured 2026 framework.",
      "Frontier training: revised up from 60,000 MWh to 150,000 MWh, reflecting a newer model generation.",
      "Deep research: minor bump, 20 → 22 Wh.",
      "Reference models updated to the 2026 frontier generation (GPT-5.5, Gemini 3, Opus 5 / Sonnet 5)."
    ]
  }
};
