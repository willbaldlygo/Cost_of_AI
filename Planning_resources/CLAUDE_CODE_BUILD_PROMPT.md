# BUILD PROMPT — AI Environmental Impact Explorer

Paste everything below this line into Claude Code.

---

## Project Overview

Build an interactive, educational, single-page website called **"The True Cost of AI"** (or suggest a better name). It will be hosted on GitHub Pages as a static site. The page has two main sections:

1. **"The Impact"** — An interactive data dashboard showing the electricity, water, and carbon cost of different AI tasks, with relatable everyday comparisons
2. **"What You Can Do"** — Practical, research-backed advice on reducing your AI environmental footprint

Plus two overlay/modal panels:
- **"Our Sources"** — Full reference list with links
- **"Our Methodology"** — Explanation of assumptions, parameters, and confidence levels

## Technical Requirements

- **Static site for GitHub Pages** — HTML, CSS, vanilla JavaScript only. No frameworks, no build tools, no npm.
- **File structure:** `index.html`, `css/styles.css`, `js/app.js`, `js/data.js` (all the research data as JS objects)
- **Responsive** — Must work well on desktop, tablet, and mobile
- **Accessible** — Semantic HTML, good contrast ratios, keyboard navigable
- **No external API calls** — All data is embedded in the code
- **Lightweight** — Keep it under 200KB total. No heavy libraries. If you need charts, use lightweight SVG/CSS animations rather than Chart.js.

## Design Direction

- **NOT dark or dramatic.** The overall tone is hopeful and empowering.
- Light, clean background. Think warm neutrals or soft off-whites.
- Use colour purposefully: a muted green/teal palette for "positive" elements (the solutions section), warm amber/orange for the impact data to draw attention without alarm.
- The feel should be somewhere between a well-designed infographic and a modern educational resource. Think of the visual style of Our World in Data or a good quality data journalism piece.
- Typography: Use clean, readable system fonts (system-ui stack). Clear hierarchy with size and weight, not colour overload.
- Subtle animations are welcome — numbers counting up when they scroll into view, smooth transitions between sections — but nothing flashy or distracting.
- Confidence levels should be shown as small coloured indicators (green for high, amber for medium, red-orange for low) beside each estimate.

## Page Structure — Detailed Specification

### Header / Hero

A concise title and one-line subtitle. Something like:
- Title: "The True Cost of AI"
- Subtitle: "What happens to the planet every time you press Enter — and what you can do about it"

Below that, a brief paragraph (2-3 sentences max) explaining that every AI interaction has a measurable environmental footprint, that these figures are research-based estimates (not exact measurements), and that the page also shows practical ways to reduce your impact.

Two clear navigation options visible immediately: **"See the Impact"** and **"Reduce Your Impact"**

### Section 1: "The Impact" — Interactive Dashboard

This is the core data visualisation section. It should present 6 AI task categories that users can click/tap through. For each task, show three metrics (electricity, water, carbon) with their everyday comparisons.

#### Task Selector

A row of 6 clickable cards or tabs, each with an icon and label:
1. 💬 Text Prompt
2. 🖼️ Image Generation
3. 🎬 Video Generation (5s)
4. 🔬 Deep Research
5. 🧠 Training: 8B Model
6. 🏗️ Training: Frontier Model

When a card is selected, the detail panel below updates with that task's data.

#### Detail Panel (updates per task)

For each selected task, display:

**Task description** — One sentence explaining what this task is (from the specification below).

**Three metric cards** arranged in a row (stack on mobile):

Each metric card shows:
- The metric icon (⚡ electricity, 💧 water, 🌿 carbon)
- The central "best estimate" number, large and prominent
- The range in smaller text below (e.g., "Range: 0.3–2.0 Wh")
- A confidence badge (green/amber/red dot with tooltip)
- The everyday comparison, displayed as a friendly sentence with a small illustrative icon or emoji

**Important:** The training tasks (8B and frontier) use much larger numbers (MWh, million litres, tonnes). The display should handle this scale difference gracefully — perhaps using a different visual treatment for training vs. inference tasks, with a clear label like "⚠️ This is a one-time cost, not a per-use cost."

#### The Data

Here is ALL the data to embed. Use these exact figures. Do NOT invent or modify any numbers.

```javascript
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
```

### Section 2: "What You Can Do" — Practical Advice

This section should feel like a shift in energy — from "here's the problem" to "here's what you can do." Use a warm, encouraging green/teal palette.

Present the advice as an interactive accordion or card-based layout with 4 progressive tiers:

#### Tier 1: "Quick Wins" (instant, zero-effort changes)
- **Choose the right-sized model.** Use smaller models (GPT-4o mini, Claude Haiku, Gemini Flash) for simple tasks. Reserve frontier models for complex reasoning. Choosing the right model can use up to 70× less energy per query. (Source: Jegham et al., 2025)
- **Constrain your output.** Ask for "under 200 words" or "bullet points only." Response length affects energy more than prompt length. (Source: Green Prompting, Adamska et al., 2025)
- **Avoid unnecessary reasoning modes.** Reasoning models generate hundreds of hidden "thinking" tokens. Only use them when you genuinely need multi-step problem-solving. Reasoning models average 543 thinking tokens per question vs. 37 for concise models. (Source: Dauner & Socher, 2025)

#### Tier 2: "Build Better Habits" (moderate effort)
- **Save and reuse your best prompts.** Every time you craft a prompt that works well, save it. Reusing refined prompts eliminates 3–5 wasted experimental queries per task.
- **Create Custom GPTs or Gems.** Pre-load your context, role, and formatting preferences into a custom assistant. This cuts input tokens by ~30–50% on every subsequent use.
- **Batch your questions.** Combine related queries into one well-structured prompt rather than asking five separate questions. This reduces context-rebuilding overhead.
- **Choose your words deliberately.** Research shows "justify" and "analyze" trigger energy-intensive reasoning chains. "List," "summarise," and "measure" are more efficient. (Source: Capgemini, 2026)

#### Tier 3: "Go Local" (for more technical users)
- **Run local models with Ollama or LM Studio.** A Mac Mini M4 peaks at ~65W during inference — less than a gaming PC at idle. Local inference has zero water footprint beyond your electricity and no data centre overhead.
- **Use quantised models.** 4-bit quantisation reduces memory by 75% and cuts energy by 60–80% with only 1–5% accuracy loss. (Source: Green AI systematic review, ScienceDirect, 2025)
- **Build scripts instead of repeating AI tasks.** Use AI to help you write a Python script, then run the script locally. A script running on milliwatts replaces an AI query using watts.

#### Tier 4: "Think Bigger" (systemic awareness)
- **Understand training costs.** Training GPT-5 consumed ~60,000 MWh — equivalent to billions of queries. This is a fixed cost that users don't control, but understanding it puts per-query costs in perspective.
- **Location matters enormously.** The same query has near-zero carbon from a hydro-powered data centre but significant carbon on a coal-heavy grid. Norway: ~0.03 kg CO₂/kWh. India: ~0.71 kg CO₂/kWh — a 24× difference.
- **Advocate for transparency.** No AI company provides real-time per-query environmental metrics. Supporting independent researchers and calling for disclosure is one of the most impactful things you can do.
- **Efficiency is improving fast.** Google achieved 33× energy reduction per Gemini prompt in 12 months. The industry can improve dramatically when motivated. (Source: Google Cloud, Aug 2025)

#### Key Stat Callout

Include a prominent, well-designed callout somewhere in this section:
> "Simply choosing the right-sized model for each task could reduce global AI energy consumption by 27.8% — saving 31.9 TWh per year. That's equivalent to the output of five nuclear power reactors."
> — "Small is Sufficient" study, 2025

### Panel: "Our Sources" (overlay/modal)

A button in the header or footer labelled "Research Sources" that opens a panel listing all 32 sources. Group them as:

**Primary Academic Sources (1–6)**
1. Jegham et al. (2025). "How Hungry is AI?" arXiv:2505.09598
2. Luccioni et al. (2024). "Power Hungry Processing." Hugging Face
3. de Vries-Gao (2025). "Carbon and water footprints of data centers." ScienceDirect
4. Ruf et al. (2025). "Energy Scaling Laws for Diffusion Models." NeurIPS
5. Li et al. (2025). "Making AI Less Thirsty." Communications of the ACM
6. Cottier & Rahman (2024). "Rising Costs of Training Frontier AI Models." Epoch AI

**Industry & Institutional Sources (7–18)**
7. OpenAI / Sam Altman (June 2025). "The Gentle Singularity" blog post
8. Epoch AI (Feb 2025). "How much energy does ChatGPT use?"
9. MIT Technology Review (May 2025). "We did the math on AI's energy footprint."
10. International Energy Agency (2025). Global Energy Review 2025
11. Meta / Hugging Face Model Cards (2024). Llama 3 / Llama 3.1 disclosures
12. Schneider Electric (2025). AI energy consumption estimates
13. University of Rhode Island AI Lab (Aug 2025). GPT-5 energy analysis
14. EESI. "Data Centers and Water Consumption"
15. Brookings Institution (Nov 2025). "AI, data centers, and water"
16. UK Government (2025). "Water use in AI and Data Centres"
17. Hugging Face / Luccioni (2025). CogVideoX video generation measurements
18. IEEE Spectrum (Oct 2025). "AI Energy Use"

**Efficiency & Mitigation Sources (19–32)**
19. Dauner & Socher (2025). "Energy costs of communicating with AI." Frontiers in Communication
20. Capgemini (2026). "From Words to Watts."
21. Adamska et al. (2025). "Green Prompting." arXiv:2503.10666
22. Martino et al. (2025). "Green Prompt Engineering."
23. Doiseau et al. (2025). "Small is Sufficient." arXiv:2510.01889
24. Google Cloud (Aug 2025). "Measuring the environmental impact of AI inference"
25. Rubei et al. (2025). "Prompt engineering and energy consumption." arXiv:2501.05899
26. XDA Developers (Feb 2026). "I run local LLMs and can barely tell"
27. Peiris (2025). "How Much Energy Does Local AI Use?"
28. MIT News (Sep 2025). "Responding to the climate impact of generative AI"
29. Tilburg.ai (2024). "5 Practical Tips to Lower Your AI Carbon Footprint"
30. Microsoft Research. "Reducing AI's Carbon Footprint"
31. Green AI systematic review (ScienceDirect, 2025)
32. ALT Community Blog (May 2025). "Think before you prompt: ROCKS"

### Panel: "Our Methodology" (overlay/modal)

A button labelled "Methodology" that opens a panel explaining:

**Reference Scenario:**
- Current-generation (2025–26) flagship models (GPT-4o/GPT-5, Gemini 2.5, Claude, Llama 4)
- NVIDIA H100/B200 class GPU hardware
- Data centre PUE of ~1.2
- Water Usage Effectiveness of ~1.8 litres per kWh
- US average grid carbon intensity of ~0.39 kg CO₂/kWh
- Water accounting includes Scope 1 (on-site cooling) and Scope 2 (electricity generation). Excludes Scope 3 (chip manufacturing).

**Task Definitions:** Brief description of each task spec (token counts, resolution, etc.)

**Confidence Levels:**
- 🟢 High (±30%): Multiple independent sources converge
- 🟡 Medium (±50%): Credible third-party estimates with architectural assumptions
- 🔴 Low (±2–3×): Inferred from proxy data with significant uncertainty

**Key Limitations (include all 5):**
1. No provider publishes per-query energy data directly
2. "Average query" conflates a wide range of task complexity
3. Water and carbon are highly location-dependent
4. Models are getting more efficient over time (snapshot, not permanent truth)
5. Frontier model training estimates involve the most uncertainty

### Footer

- Created by Will [surname] / Digital Peninsula Network, 2026
- "Data compiled from 32 peer-reviewed and institutional sources. All figures are estimates."
- Links to Sources and Methodology panels
- A small note: "This page was built with the help of AI. We estimate the total environmental cost of the research and development process at approximately [X] — see our methodology for details." (Leave a placeholder for this — Will can fill it in later.)

## Build Instructions for Claude Code

1. Create the project in `~/FORGE/ai-impact-explorer/`
2. File structure:
   ```
   ai-impact-explorer/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── data.js      (all research data as JS objects)
   │   └── app.js       (interactivity, animations, panel toggling)
   └── README.md        (brief description for GitHub)
   ```
3. Make the task selector default to "Text Prompt" on load
4. Animate numbers counting up when a task card is first selected (subtle, not slow)
5. Smooth scroll between sections
6. Modals/panels for Sources and Methodology should overlay the page with a semi-transparent backdrop, close on click outside or ESC key
7. Use CSS custom properties for the colour palette so it's easy to tweak later
8. Test that it works when opened directly as a file (file:// protocol) as well as served, since GitHub Pages is static

## What NOT To Do

- Do NOT use any framework (React, Vue, Svelte, etc.)
- Do NOT use npm or any build tools
- Do NOT use Chart.js or other heavy charting libraries — use CSS bars, SVG, or simple HTML for data visualisation
- Do NOT invent or modify any of the research numbers provided above
- Do NOT make the design dark, dramatic, or guilt-inducing
- Do NOT include any AI API calls or live computation
- Do NOT use copyrighted images — emoji and CSS-created graphics only
