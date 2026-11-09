/**
 * data.js — All research data for "The True Cost of AI"
 * Sources: Planning_resources/ai_environmental_impact_research.md (March 2026 compilation)
 *          Planning_resources/research_update_sept_2026.md (September 2026 revision)
 *          Planning_resources/audit_nov_2026.md (November 2026 evidence audit: start here)
 * DO NOT modify these figures without a sourced basis — they are research-sourced estimates.
 */

const taskData = {
  textPrompt: {
    id: "text-prompt-instant",
    name: "Text Prompt (Instant)",
    icon: "💬",
    description: "A typical workplace question answered straight away with minimal \"thinking\" — the fast, low-effort setting most chatbots use by default (~300 output tokens). Bottom-up, production-conditions estimate from Microsoft researchers, published in Joule (2026). Note: \"Instant\" and \"Reasoning\" are two points on a sliding scale of effort, not a hard on/off switch.",
    evidence: "Based on source 31, which agrees with sources 7, 8, 24 and 49",
    isTraining: false,
    electricity: {
      central: 0.31,
      unit: "Wh",
      range: "0.16–0.60 Wh",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    water: {
      central: 0.56,
      unit: "ml",
      range: "0.3–1.1 ml",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    carbon: {
      central: 0.12,
      unit: "g CO₂",
      range: "0.06–0.23 g",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    comparisons: {
      electricity: "Running an LED light bulb for about two minutes",
      water: "About ten drops from an eyedropper",
      carbon: "Driving a petrol car about three-quarters of a metre"
    }
  },
  textPromptReasoning: {
    id: "text-prompt-reasoning",
    name: "Text Prompt (Reasoning)",
    icon: "🧩",
    description: "The same question with reasoning effort turned up — the model generates long hidden \"thinking\" steps before answering (~5,000 output tokens). At higher effort a single reply uses roughly 13× the energy of an instant one, and a significant share of such queries exceed 10 Wh. Most chatbots expose this as an effort level rather than a switch.",
    evidence: "Based on source 31",
    isTraining: false,
    electricity: {
      central: 3.91,
      unit: "Wh",
      range: "2.15–7.05 Wh",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    water: {
      central: 7,
      unit: "ml",
      range: "3.9–12.7 ml",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    carbon: {
      central: 1.5,
      unit: "g CO₂",
      range: "0.8–2.7 g",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    comparisons: {
      electricity: "Running an LED light bulb for about 25 minutes",
      water: "About one and a half teaspoons of water",
      carbon: "Driving a petrol car about 9 metres"
    }
  },
  imageGeneration: {
    id: "image-generation",
    name: "Image Generation",
    icon: "🖼️",
    description: "A single image from a text prompt. The central figure is the median across the image models measured in a peer-reviewed 2024 study. More recent tests of 1024×1024 images run from 0.63 Wh (Stable Diffusion 3 Medium) to 3.58 Wh (a larger open model at high quality). These are open models: commercial image services publish no figures of their own.",
    evidence: "Based on sources 2, 4 and 9",
    isTraining: false,
    electricity: {
      central: 1.35,
      unit: "Wh",
      range: "0.63–3.58 Wh",
      confidence: "medium",
      confidenceLabel: "Medium confidence"
    },
    water: {
      central: 2.4,
      unit: "ml",
      range: "1.1–6.4 ml",
      confidence: "medium",
      confidenceLabel: "Medium confidence"
    },
    carbon: {
      central: 0.53,
      unit: "g CO₂",
      range: "0.25–1.4 g",
      confidence: "medium",
      confidenceLabel: "Medium confidence"
    },
    comparisons: {
      electricity: "Running a microwave for about 5 seconds",
      water: "About half a teaspoon of water",
      carbon: "Driving a petrol car about 3 metres"
    }
  },
  videoGeneration: {
    id: "video-generation",
    name: "Video Generation (5s)",
    icon: "🎬",
    description: "5 seconds of 720p video from a text prompt, based on measurements of open-source models on NVIDIA H200 and B200 GPUs. These figures count GPU energy only, so the full data centre cost is higher. Video generation is compute-bound: the GPU runs near full power regardless of model size, and batching several clips saves nothing. Energy grows faster than clip length or resolution, so longer or sharper clips cost disproportionately more. Models vary about tenfold: Google Veo 3 is estimated at ~20–43 Wh for an 8-second 720p clip, while one top-tier commercial model was estimated at over 1,300 Wh for 12 seconds of 1080p. An older open model, CogVideoX, was reported at about 944 Wh for a 5-second clip.",
    evidence: "Based on sources 32 and 9",
    isTraining: false,
    electricity: {
      central: 177,
      unit: "Wh",
      range: "114.8–215 Wh",
      confidence: "medium",
      confidenceLabel: "Medium confidence"
    },
    water: {
      central: 319,
      unit: "ml",
      range: "207–387 ml",
      confidence: "medium",
      confidenceLabel: "Medium confidence"
    },
    carbon: {
      central: 69,
      unit: "g CO₂",
      range: "45–84 g",
      confidence: "medium",
      confidenceLabel: "Medium confidence"
    },
    comparisons: {
      electricity: "Running a kitchen air fryer for about 9 minutes",
      water: "Nearly a drinks can of water",
      carbon: "Driving a petrol car about 430 metres"
    }
  },
  deepResearch: {
    id: "deep-research",
    name: "Deep Research",
    icon: "🔬",
    description: "A multi-step task where an AI agent searches and reasons across many model calls. No study has measured commercial deep research tools, so this uses the closest published test: AI agents answering multi-step questions with search tools. The central figure is one agent on a 70-billion-parameter model, and the range spans the agents and model sizes tested. These figures count GPU energy only.",
    evidence: "Based on source 35",
    isTraining: false,
    electricity: {
      central: 158,
      unit: "Wh",
      range: "23–348 Wh",
      confidence: "low",
      confidenceLabel: "Low confidence"
    },
    water: {
      central: 285,
      unit: "ml",
      range: "41–627 ml",
      confidence: "low",
      confidenceLabel: "Low confidence"
    },
    carbon: {
      central: 62,
      unit: "g CO₂",
      range: "9–136 g",
      confidence: "low",
      confidenceLabel: "Low confidence"
    },
    comparisons: {
      electricity: "Boiling a full kettle once",
      water: "About a mug of water",
      carbon: "Driving a petrol car about 380 metres"
    }
  },
  training8B: {
    id: "training-8b",
    name: "Training: 8B Model",
    icon: "🧠",
    description: "Pre-training Meta's Llama 3 8B, an open model with about 8 billion parameters, on over 15 trillion tokens. Energy is calculated from the 1.3 million GPU hours Meta disclosed, at 700 W per GPU. The carbon figure is Meta's own, and Meta says it offset these emissions. This is a one-time cost, not a per-use cost.",
    evidence: "Based on source 11",
    isTraining: true,
    electricity: {
      central: 910,
      unit: "MWh",
      range: "",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    water: {
      central: 1.64,
      unit: "million litres",
      range: "",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    carbon: {
      central: 390,
      unit: "tonnes CO₂",
      range: "",
      confidence: "high",
      confidenceLabel: "High confidence"
    },
    comparisons: {
      electricity: "The yearly electricity of about 360 UK homes",
      water: "About two-thirds of an Olympic swimming pool (about 3.5 days of water for an average US golf course)",
      carbon: "About 300 passengers flying London to New York and back"
    }
  },
  trainingFrontier: {
    id: "training-frontier",
    name: "Training: Frontier Model",
    icon: "🏗️",
    description: "Pre-training Grok 4, the frontier model with the most detailed public estimate. Epoch AI estimates about 310 GWh, built on vague public statements from xAI, so uncertainty is significant. Its water and carbon figures reflect the gas power used for this run, and the water includes what that power generation consumes. The low end of each range is GPT-4, estimated at 50 GWh. OpenAI, Google and Anthropic do not disclose these figures. This is a one-time cost, not a per-use cost.",
    evidence: "Based on sources 34 and 9",
    isTraining: true,
    electricity: {
      central: 310000,
      unit: "MWh",
      range: "50,000–310,000 MWh",
      confidence: "low",
      confidenceLabel: "Low confidence"
    },
    water: {
      central: 754,
      unit: "million litres",
      range: "90–754 million litres",
      confidence: "low",
      confidenceLabel: "Low confidence"
    },
    carbon: {
      central: 150000,
      unit: "tonnes CO₂",
      range: "19,500–150,000 tonnes CO₂",
      confidence: "low",
      confidenceLabel: "Low confidence"
    },
    comparisons: {
      electricity: "The yearly electricity of about 124,000 UK homes",
      water: "About 300 Olympic swimming pools (about 4.4 years of water for an average US golf course)",
      carbon: "About 115,000 passengers flying London to New York and back"
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
        body: "Use smaller models, such as Claude Haiku or Gemini Flash, for simple tasks and reserve frontier models for complex reasoning. In one benchmark, the hungriest model used over 65× the energy of the most efficient on the same long prompt.",
        source: "Jegham et al., 2025"
      },
      {
        title: "Constrain your output",
        body: "Ask for \"under 200 words\" or \"bullet points only.\" Response length is a major driver of energy use, and energy rises roughly in line with the tokens generated.",
        source: "Adamska et al., 2025; Oviedo et al., 2026"
      },
      {
        title: "Avoid unnecessary reasoning modes",
        body: "Reasoning modes add hidden \"thinking\" tokens. In one multiple-choice test they added about 543 thinking tokens to answers that averaged about 38 tokens, and raised emissions 4–6×. A single reasoning reply can use around 13× the energy of an instant one, and Microsoft researchers estimate that switching reasoning on only when needed can cut per-query energy 5× or more. In a benchmark of three open models, switching reasoning on raised energy about 150–700×, so the gap varies widely by model.",
        source: "Dauner & Socher, 2025; Oviedo et al., 2026; AI Energy Score, 2025"
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
        body: "Every time you craft a prompt that works well, save it. Reusing it avoids the trial and error that wastes queries.",
        source: null
      },
      {
        title: "Create your own skills",
        body: "Package your context, role, and formatting preferences into a reusable skill. The AI loads its full instructions only when a task calls for them, so you stop re-explaining yourself without carrying that context into every chat.",
        source: "Agent Skills overview, agentskills.io"
      },
      {
        title: "Batch your questions",
        body: "Combine related questions into one well-structured prompt rather than asking five separately. Each turn in a chat sends the conversation so far back to the model, so fewer turns should mean less repeated work, though no study has tested this directly.",
        source: null
      },
      {
        title: "Choose your words deliberately",
        body: "One study found prompts using \"justify\" and \"analyze\" were highly energy-intensive, likely because of the depth of reasoning they ask for. It suggests verbs like \"summarise,\" \"list\" and \"measure\" instead.",
        source: "Capgemini, 2025"
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
        title: "Run small local models with Ollama or LM Studio",
        body: "Local isn't automatically greener: on the same model, cloud hardware was at least 1.4× more efficient in one study. The saving comes from using a smaller model. That study found small local models could answer 88.7% of single-turn chat and reasoning queries, and routing them locally cut energy by about 64% compared with cloud-only use. A Mac mini M4 draws at most 65 W.",
        source: "Saad-Falcon et al., 2025; Apple"
      },
      {
        title: "Use quantised models",
        body: "4-bit quantisation needs about 75% less memory than 16-bit, so larger models fit on smaller machines. Energy savings are less certain: they depend on the method and hardware, and some 4-bit methods use more energy.",
        source: "Delavande et al., 2026; Basta, 2026"
      },
      {
        title: "Build scripts instead of repeating AI tasks",
        body: "Use AI to help you write a Python script, then run the script locally. For repeated tasks, the script replaces running a model every time.",
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
        body: "Training a frontier model such as Grok 4 is estimated at about 310,000 MWh, the same energy as about a trillion typical prompts. This is a fixed cost that users don't control, but understanding it puts per-query costs in perspective.",
        source: "Epoch AI, 2025"
      },
      {
        title: "Advocate for transparency",
        body: "We found no major AI company that shows you measured energy use for each message. Independent tools such as Hugging Face's Chat UI Energy can only estimate it. Supporting independent researchers and calling for disclosure is a practical way to help.",
        source: "TechCrunch, 2025"
      },
      {
        title: "Efficiency is improving fast",
        body: "Google reported a 33× drop in energy per median Gemini prompt over 12 months. Microsoft researchers estimate further model, serving and hardware improvements could cut energy per query by 8–20×. Total use is still rising: electricity use by AI-focused data centres grew about 50% in 2025, and efficiency gains can lead to more use overall.",
        source: "Google, 2025; Oviedo et al., 2026; IEA, 2026; Luccioni, Strubell & Crawford, 2025"
      }
    ]
  }
];

/* Key stat callout */
const keyStatCallout = {
  quote: "Simply choosing the right-sized model for each task could reduce global AI energy consumption by 27.8%, saving 31.9 TWh in 2025, in a modelled estimate. That's roughly the yearly output of five nuclear reactors.",
  source: "da Silva Barros et al., \"Small is Sufficient\", 2025"
};

/* Intro note shown at the top of the Research Sources panel */
const sourcesIntro = "Updated November 2026 after an evidence audit. We corrected wrong and dead links, removed two sources we could no longer find, and added sources 34–53. Sources 46–53 cover what our figures leave out, such as hardware manufacturing and whole-lifecycle impacts. Many entries are peer-reviewed papers or institutional reports, but the list also includes preprints, a thesis, journalism and blogs. Source 32, which the video figures rely on, has not yet been peer reviewed. See the Methodology panel for what changed and why.";

/* Sources data: 53 references. Links checked November 2026; source 30's publisher blocks automated checks. */
const sourcesData = [
  {
    group: "Primary Academic Sources",
    items: [
      { num: 1, text: "Jegham et al. (2025). \"How Hungry is AI?\" arXiv:2505.09598", url: "https://arxiv.org/abs/2505.09598" },
      { num: 2, text: "Luccioni et al. (2024). \"Power Hungry Processing.\" ACM FAccT '24", url: "https://arxiv.org/abs/2311.16863" },
      { num: 3, text: "de Vries (2023). \"The growing energy footprint of artificial intelligence.\" Joule", url: "https://doi.org/10.1016/j.joule.2023.09.004" },
      { num: 4, text: "Iyengar, Han, Ruf et al. (2026). \"Energy Scaling Laws for Diffusion Models.\" ACM FAccT '26. arXiv:2511.17031", url: "https://arxiv.org/abs/2511.17031" },
      { num: 5, text: "Li et al. (2025). \"Making AI Less Thirsty.\" Communications of the ACM", url: "https://arxiv.org/abs/2304.03271" },
      { num: 6, text: "Cottier et al. (2024). \"The rising costs of training frontier AI models.\" arXiv:2405.21015", url: "https://arxiv.org/abs/2405.21015" }
    ]
  },
  {
    group: "Industry & Institutional Sources",
    items: [
      { num: 7, text: "OpenAI / Sam Altman (June 2025). \"The Gentle Singularity\" blog post", url: "https://blog.samaltman.com/the-gentle-singularity" },
      { num: 8, text: "Epoch AI (Feb 2025). \"How much energy does ChatGPT use?\"", url: "https://epoch.ai/blog/how-much-energy-does-chatgpt-use" },
      { num: 9, text: "MIT Technology Review (May 2025). \"We did the math on AI's energy footprint.\"", url: "https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/" },
      { num: 10, text: "International Energy Agency (Apr 2026). \"Key Questions on Energy and AI.\" Data centres used 485 TWh in 2025, up 17%, with AI-focused data centres up 50%; about 950 TWh projected for 2030.", url: "https://www.iea.org/reports/key-questions-on-energy-and-ai" },
      { num: 11, text: "Meta (2024). Llama 3 Model Card & disclosures", url: "https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md" },
      { num: 12, text: "Schneider Electric (2024). \"Artificial Intelligence and Electricity: A System Dynamics Approach\"", url: "https://www.se.com/ww/en/download/document/TLA_System_Dynamics_Approach/" },
      { num: 13, text: "Luccioni & Hernandez-Garcia (2023). \"Counting Carbon.\" arXiv", url: "https://arxiv.org/abs/2302.08476" },
      { num: 14, text: "EESI (2025). \"Data Centers and Water Consumption\"", url: "https://www.eesi.org/articles/view/data-centers-and-water-consumption" },
      { num: 15, text: "Brookings Institution (Nov 2025). \"AI, data centers, and water\"", url: "https://www.brookings.edu/articles/ai-data-centers-and-water/" },
      { num: 16, text: "Kenny, R. (2025). \"Water use in AI and Data Centres.\" Report published on GOV.UK", url: "https://assets.publishing.service.gov.uk/media/688cb407dc6688ed50878367/Water_use_in_data_centre_and_AI_report.pdf" },
      { num: 17, text: "Delavande, Pierrard & Luccioni (2025). \"Video Killed the Energy Budget.\" arXiv:2509.19222", url: "https://arxiv.org/abs/2509.19222" },
      { num: 18, text: "IEEE Spectrum (Oct 2025). \"The Hidden Behemoth Behind Every AI Answer\"", url: "https://spectrum.ieee.org/ai-energy-use" }
    ]
  },
  {
    group: "Efficiency & Mitigation Sources",
    items: [
      { num: 19, text: "Dauner & Socher (2025). \"Energy costs of communicating with AI.\" Frontiers in Communication", url: "https://doi.org/10.3389/fcomm.2025.1572947" },
      { num: 20, text: "Capgemini (Dec 2025). \"From words to watts: How prompting patterns shape AI's environmental impact\"", url: "https://www.capgemini.com/in-en/insights/expert-perspectives/from-words-to-watts-how-prompting-patterns-shape-ais-environmental-impact/" },
      { num: 21, text: "Adamska et al. (2025). \"Green Prompting.\" arXiv:2503.10666", url: "https://arxiv.org/abs/2503.10666" },
      { num: 22, text: "De Martino et al. (2025). \"Green Prompt Engineering.\" arXiv:2509.22320", url: "https://arxiv.org/abs/2509.22320" },
      { num: 23, text: "da Silva Barros et al. (2025). \"Small is Sufficient: Reducing the World AI Energy Consumption Through Model Selection.\" arXiv:2510.01889", url: "https://arxiv.org/abs/2510.01889" },
      { num: 24, text: "Google (Aug 2025). \"How much energy does Google's AI use? We did the math\"", url: "https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference" },
      { num: 25, text: "Rubei et al. (2025). \"Prompt engineering and energy consumption.\" arXiv:2501.05899", url: "https://arxiv.org/abs/2501.05899" },
      { num: 26, text: "Peiris (Feb 2026). \"How Much Energy Does Local AI Use?\"", url: "https://brianpeiris.github.io/how-much-energy-does-local-ai-use" },
      { num: 27, text: "MIT News (Sep 2025). \"Responding to the climate impact of generative AI\"", url: "https://news.mit.edu/2025/responding-to-generative-ai-climate-impact-0930" },
      { num: 28, text: "Verdecchia et al. (2023). \"A Systematic Review of Green AI.\" WIREs", url: "https://doi.org/10.1002/widm.1507" },
      { num: 29, text: "ALT (May 2025). \"Think before you prompt: Reduce your AI carbon footprint with ROCKS\"", url: "https://altc.alt.ac.uk/blog/2025/05/think-before-you-prompt-reduce-your-ai-carbon-footprint-with-rocks/" },
      { num: 30, text: "Schwartz et al. (2020). \"Green AI.\" Communications of the ACM", url: "https://doi.org/10.1145/3381831" }
    ]
  },
  {
    group: "September 2026 Update",
    items: [
      { num: 31, text: "Oviedo, F. et al. (2026). \"Energy use of AI inference, efficiency pathways, and test-time scaling.\" Joule. Median 0.31 Wh per standard query (IQR 0.16–0.60), rising about 13× to 3.91 Wh for long reasoning queries (IQR 2.15–7.05).", url: "https://doi.org/10.1016/j.joule.2026.102430" },
      { num: 32, text: "Jegham, N., Gamazaychikov, B., Luccioni, S. (2026). \"Lights, Camera, Carbon: Architectural Scaling Laws for Video Generation Energy Consumption.\" arXiv:2607.04553 — preprint, not yet peer reviewed. 114.8–215 Wh for a 5-second 720p clip across the models and GPUs used here, counting GPU energy only.", url: "https://arxiv.org/abs/2607.04553" },
      { num: 33, text: "Epoch AI (2025). \"How much power will frontier AI training demand in 2030?\" The largest training runs now exceed 100 MW, with power demand growing about 2.2× a year.", url: "https://epoch.ai/blog/power-demands-of-frontier-ai-training" }
    ]
  },
  {
    group: "November 2026 Audit",
    items: [
      { num: 34, text: "Epoch AI (Sep 2025). \"What did it take to train Grok 4?\" About 310 GWh of electricity, about 750 million litres of water and about 150,000 tonnes of CO₂.", url: "https://epoch.ai/data-insights/grok-4-training-resources" },
      { num: 35, text: "Kim, Shin, Chung & Rhu (2026). \"The Cost of Dynamic Reasoning: Demystifying AI Agents and Test-Time Scaling from an AI Infrastructure Perspective.\" HPCA 2026. arXiv:2506.04301", url: "https://arxiv.org/abs/2506.04301" },
      { num: 36, text: "UK Department for Energy Security and Net Zero (2026). Greenhouse gas reporting: conversion factors 2026", url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026" },
      { num: 37, text: "Energy UK (July 2026). \"Energy UK Explains: Typical Domestic Consumption Values\" (Ofgem values)", url: "https://www.energy-uk.org.uk/wp-content/uploads/2026/05/Energy-UK-Explains-Typical-Domestic-Consumption-Values.pdf" },
      { num: 38, text: "Ember (2025). US Electricity 2025 special report. US power sector carbon intensity of 384 gCO₂/kWh in 2024.", url: "https://ember-energy.org/latest-insights/us-electricity-2025-special-report/insight-4-rising-demand-pushes-up-emissions-slight" },
      { num: 39, text: "Lyman, G. / USGA (2012). \"How Much Water Does Golf Use and Where Does It Come From?\"", url: "https://rulesworkshops.usga.org/content/dam/usga/pdf/Water%20Resource%20Center/how-much-water-does-golf-use.pdf" },
      { num: 40, text: "Saad-Falcon et al. (2025). \"Intelligence per Watt: Measuring Intelligence Efficiency of Local AI.\" arXiv:2511.07885", url: "https://arxiv.org/abs/2511.07885" },
      { num: 41, text: "Delavande, Pierrard & Luccioni (2026). \"Understanding Efficiency: Quantization, Batching, and Serving Strategies in LLM Energy Use.\" arXiv:2601.22362 — preprint", url: "https://arxiv.org/abs/2601.22362" },
      { num: 42, text: "Basta, P. (2026). \"Towards Green AI: Evaluating Energy Efficiency for Quantized LLM Inference.\" Master's thesis, University of Waterloo. arXiv:2610.17531", url: "https://arxiv.org/abs/2610.17531" },
      { num: 43, text: "Agent Skills. \"Agent Skills Overview.\" agentskills.io", url: "https://agentskills.io/home" },
      { num: 44, text: "Apple. \"Mac mini power consumption and thermal output (BTU) information\"", url: "https://support.apple.com/en-gb/103253" },
      { num: 45, text: "TechCrunch (Apr 2025). \"This tool estimates how much electricity your chatbot messages consume\"", url: "https://techcrunch.com/2025/04/24/this-tool-estimates-how-much-electricity-your-chatbot-messages-consume/" }
    ]
  },
  {
    group: "November 2026: Wider Evidence",
    items: [
      { num: 46, text: "Mistral AI (Jul 2025). \"Our contribution to a global environmental standard for AI.\" Lifecycle assessment of Mistral Large 2 with Carbone 4 and ADEME: 1.14 g CO₂e and 45 ml of water per 400-token reply.", url: "https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai" },
      { num: 47, text: "Morrison, Na, Fernandez, Dettmers, Strubell & Dodge (2025). \"Holistically Evaluating the Environmental Impact of Creating Language Models.\" ICLR 2025. arXiv:2503.05804", url: "https://arxiv.org/abs/2503.05804" },
      { num: 48, text: "Schneider, Xu, Benecke, Patterson, Huang, Ranganathan & Elsworth (2025). \"Life-Cycle Emissions of AI Hardware: A Cradle-To-Grave Approach and Generational Trends.\" arXiv:2502.01671 — preprint by Google authors", url: "https://arxiv.org/abs/2502.01671" },
      { num: 49, text: "Elsworth et al. (2025). \"Measuring the environmental impact of delivering AI at Google Scale.\" arXiv:2508.15734 — preprint by Google authors. 0.24 Wh, 0.03 g CO₂e and 0.26 ml per median Gemini prompt, May 2025.", url: "https://arxiv.org/abs/2508.15734" },
      { num: 50, text: "Luccioni, Strubell & Crawford (2025). \"From Efficiency Gains to Rebound Effects: The Problem of Jevons' Paradox in AI's Polarized Environmental Debate.\" ACM FAccT '25. arXiv:2501.16548", url: "https://arxiv.org/abs/2501.16548" },
      { num: 51, text: "Luccioni & Gamazaychikov (Dec 2025). \"AI Energy Score v2: Refreshed Leaderboard, now with Reasoning.\" Hugging Face blog", url: "https://huggingface.co/blog/sasha/ai-energy-score-v2" },
      { num: 52, text: "Chung, Wu, Ma & Chowdhury (2026). \"Where Do the Joules Go? Diagnosing Inference Energy Consumption.\" arXiv:2601.22076 — preprint", url: "https://arxiv.org/abs/2601.22076" },
      { num: 53, text: "de Vries-Gao, A. (2026). \"The carbon and water footprints of data centers and what this could mean for artificial intelligence.\" Patterns 7, 101430 (Perspective). AI systems in 2025: 32.6–79.7 million tonnes of CO₂ and 312.5–764.6 billion litres of water, from operation only.", url: "https://doi.org/10.1016/j.patter.2025.101430" }
    ]
  }
];

/* Methodology data */
const methodologyData = {
  referenceScenario: [
    { label: "Models", value: "No figure here measures today's flagship models, such as GPT-5.5, Gemini 3 or Anthropic's Opus 5 and Sonnet 5, because their developers do not publish these numbers. The evidence comes from open models, published estimates and developer disclosures about earlier models." },
    { label: "Hardware", value: "NVIDIA H100, H200 and B200 GPUs, plus older A100s in some image tests" },
    { label: "Data centre PUE", value: "~1.2 where a source includes data centre overhead (sources 31 and 34). Video and Deep Research figures count GPU energy only." },
    { label: "Water Usage Effectiveness", value: "~1.8 litres per kWh on-site (used by source 34; source 14 gives ~1.9)" },
    { label: "Grid carbon intensity", value: "US average ~0.39 kg CO₂/kWh (source 38 gives 0.384 for 2024). Training cards use the carbon figures published by their sources." },
    { label: "Water accounting", value: "Covers on-site cooling only, unless a card says otherwise. Source 14 puts the water used to generate the electricity at about 4.5 litres per kWh, so the full footprint could be more than three times higher. Chip manufacturing is excluded." }
  ],
  figureBasis: [
    { label: "Text Prompt (Instant and Reasoning)", value: "Median figures from a peer-reviewed model of production inference (source 31). The Instant figure agrees with sources 7, 8, 24 and 49." },
    { label: "Image Generation", value: "Central figure: median from source 2. Range: 0.63 Wh (source 9) to 3.58 Wh (source 4)." },
    { label: "Video Generation (5s)", value: "177 Wh and 215 Wh on H200 GPUs, and 114.8 Wh at the low end, all from source 32. An independent benchmark measured about 7–322 Wh per video across five open models at their most efficient settings, counting GPU energy only (source 52)." },
    { label: "Deep Research", value: "The closest published proxy, not a direct measurement: 158 Wh for one agent on a 70B model, with 23–348 Wh across agents and model sizes (source 35)." },
    { label: "Training: 8B Model", value: "1.3 million GPU hours × 700 W = 910 MWh, and 390 tonnes CO₂e, from Meta (source 11). Water uses the on-site factor above." },
    { label: "Training: Frontier Model", value: "Grok 4 estimates from source 34. The low end is GPT-4 at 50 GWh (source 9), with water and carbon calculated using the factors above." },
    { label: "Other water and carbon figures", value: "Calculated from the electricity figure using the factors above." }
  ],
  leftOut: [
    { label: "Hardware manufacturing", value: "No card includes making the chips, servers or buildings. For Google's TPUs this was 10–30% of lifetime emissions (source 48). One study of open models put manufacturing at about 5% of its total (source 47)." },
    { label: "Experiments before training", value: "In the only study we found that measured it, development runs added about 50% to the impact of the final training runs (source 47). The training cards don't include them." },
    { label: "Whole lifecycle", value: "Mistral's lifecycle study, which counts upstream impacts such as server manufacturing, gives 1.14 g CO₂e and 45 ml of water per 400-token reply (source 46). That is higher than our Instant card, but the model, reply length and method all differ." },
    { label: "The whole sector", value: "Data centres used 485 TWh of electricity in 2025, and the IEA expects about 950 TWh by 2030 (source 10). Use by AI-focused data centres grew about 50% in 2025. One estimate puts AI's 2025 operating footprint at 32.6–79.7 million tonnes of CO₂ and 312.5–764.6 billion litres of water, including water used to generate the electricity (source 53). It relies on company-wide averages, because no operator reports AI separately." },
    { label: "Efficiency and total use", value: "Cheaper, more efficient AI can lead to more use, so gains per query may not cut the total (source 50). This is a risk researchers argue for, not something measured yet." }
  ],
  conversions: [
    { label: "UK home", value: "2,500 kWh of electricity a year: Ofgem's medium value from July 2026 (source 37)" },
    { label: "Petrol car", value: "0.16 kg CO₂e per km: UK government 2026 factor for an average petrol car (source 36)" },
    { label: "London–New York return flight", value: "About 1.3 tonnes CO₂e per economy passenger: UK government 2026 long-haul factor, including non-CO₂ warming (source 36), over about 11,000 km" },
    { label: "Golf course", value: "About 465,000 litres a day: average US facility in 2003–05 (source 39)" },
    { label: "Olympic swimming pool", value: "2.5 million litres (50 m × 25 m × 2 m)" },
    { label: "Full kettle", value: "About 160 Wh: heating 1.7 litres of water by 80°C, before heat losses" },
    { label: "Appliances", value: "LED bulb 9 W, microwave 1,000 W, air fryer 1,200 W (as used by source 32)" },
    { label: "Small amounts of water", value: "Drop 0.05 ml, teaspoon 5 ml, mug 300 ml, drinks can 330 ml" }
  ],
  confidenceLevels: [
    { level: "high", label: "High", description: "Published by the developer, or peer-reviewed research" },
    { level: "medium", label: "Medium", description: "Mixed evidence, or a preprint that has not been peer reviewed" },
    { level: "low", label: "Low", description: "A single estimate, or the closest available proxy" }
  ],
  limitations: [
    "Few providers publish per-query energy data. Google has published how it measures (source 49), but the underlying data are internal. OpenAI has shared a single figure (source 7)",
    "\"Average query\" conflates a wide range of task complexity",
    "\"Instant\" vs \"reasoning\" text prompting is a sliding scale of effort, not a binary — energy per reply rises steeply as reasoning effort increases",
    "Non-production benchmarks (small-batch, un-optimised) overstate real-world energy use by 4–20×, which is why published estimates vary so widely",
    "Water and carbon are highly location-dependent",
    "Models change fast: these figures are a snapshot, not a permanent truth — our 2026 updates changed several headline figures within months",
    "Video and Deep Research figures count GPU energy only, so they understate the full data centre cost",
    "Image and video evidence comes mainly from open models, because commercial services publish little",
    "Frontier training is the least certain figure here: one third-party estimate, with no disclosure from the major labs"
  ],
  changelog: {
    updated: "2026",
    intro: "Several figures changed meaningfully during 2026, some because research moved on and some because we found mistakes in our own work. That is the site's core point in action: even careful estimates here have a short shelf life.",
    items: [
      "September: text prompts split into Instant (0.31 Wh) and Reasoning (3.91 Wh, about 13× higher), from new production-conditions research.",
      "November: we audited every figure in the Environmental Footprint section against its sources, and made the corrections below.",
      "Training 8B: 5,400 MWh became 910 MWh. The old figure covered two models, not one.",
      "Training frontier: now 310,000 MWh, from Epoch AI's published Grok 4 estimate. Our earlier 150,000 MWh rested on a range we could not trace to a source.",
      "Deep research: now 158 Wh, from a peer-reviewed study of AI agents. Our earlier 22 Wh had no direct source.",
      "Image: 3 Wh became 1.35 Wh, the published median.",
      "Video (5s): now 177 Wh for a 720p clip from open-source models, replacing 470 Wh for a 1080p clip. Part of that drop reflects the smaller task, not just better measurement.",
      "Everyday comparisons were recalculated from sourced values, listed above.",
      "Confidence levels are now defined by type of evidence. The old ± percentages had no source.",
      "What You Can Do: we audited every tip too. Several claims were corrected or removed, and the Go Local advice now says the saving comes from using smaller models, not from running locally in itself.",
      "Wider evidence: we added sources on what our figures leave out, including hardware manufacturing, development runs, whole-lifecycle studies, sector totals and rebound effects, and replaced source 10. No card figures changed."
    ]
  }
};
