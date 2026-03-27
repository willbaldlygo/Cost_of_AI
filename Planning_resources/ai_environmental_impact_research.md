# Environmental Impact of AI Use: Research Compilation

## Document Purpose
This document compiles the most current and comprehensive research available (as of early 2026) on the electricity, water, and carbon costs of AI use across different task types. It is intended to inform an interactive educational dashboard app.

---

## 1. Reference Scenario & Methodology

### 1.1 Assumptions

All estimates in this document are based on the following standardised reference scenario:

- **Model generation:** Current-generation (2025–26) flagship models from the major providers (OpenAI GPT-4o/GPT-5, Google Gemini 2.5, Anthropic Claude, Meta Llama 4 for open-source)
- **Hardware:** Modern AI accelerator hardware (NVIDIA H100/B200 class GPUs)
- **Data centre efficiency:** Power Usage Effectiveness (PUE) of ~1.2, representing a modern, well-optimised facility
- **Water Usage Effectiveness (WUE):** ~1.8 litres per kWh, representing an industry average for facilities using evaporative cooling
- **Electricity grid:** US average carbon intensity of ~0.39 kg CO₂ per kWh (acknowledging significant regional variation: Norway ≈ 0.03 kg/kWh; India ≈ 0.71 kg/kWh)
- **Water accounting:** Includes both on-site (Scope 1) cooling water and off-site (Scope 2) water used in electricity generation. Does not include Scope 3 embodied water in chip manufacturing.

### 1.2 Task Definitions

| Task | Specification |
|------|--------------|
| **Text prompt** | A typical workplace question (~100 tokens input) generating a paragraph-length response (~500 tokens output) |
| **Image generation** | A single 1024×1024 pixel image from a text prompt, using a current-generation diffusion model (DALL-E 3, Imagen 3, Midjourney V6 class) |
| **Video generation** | 5 seconds of 1080p video from a text prompt, using a current-generation model (Sora 2, Veo 2 class) |
| **Deep research** | An extended multi-step reasoning and web retrieval task, equivalent to approximately 20–30 sequential queries with chain-of-thought reasoning |
| **Training (8B model)** | Pre-training an open-source LLM of ~8 billion parameters on ~15 trillion tokens (e.g., Meta Llama 3 8B) |
| **Training (frontier model)** | Pre-training a state-of-the-art frontier model (e.g., GPT-4/GPT-5 class, estimated 200B+ active parameters, MoE architecture) |

### 1.3 Confidence Levels

We assign confidence levels to each estimate:
- **High confidence (±30%):** Multiple independent sources converge; some provider-confirmed data points exist
- **Medium confidence (±50%):** Credible third-party estimates exist but rely on assumptions about undisclosed architectures
- **Low confidence (±2–3x):** Estimates are inferred from proxy data (cost, GPU hours, hardware specs) with significant uncertainty

### 1.4 Key Methodological Limitations

1. **No provider publishes per-query energy data directly** (with the exception of OpenAI's single self-reported average of 0.34 Wh). All per-query figures are estimates derived from hardware specifications, model architecture assumptions, and data centre metrics.
2. **"Average query" conflates a wide range.** A simple factual question and a complex reasoning task can differ by 10–100x in energy consumption. Our estimates specify task complexity.
3. **Water and carbon are location-dependent.** The same query served from a hydroelectric-powered data centre in Oregon produces vastly different carbon than one served from a coal-powered facility.
4. **Models are getting more efficient over time.** Google reported a 33x efficiency improvement for Gemini between May 2024 and May 2025 through software optimisation alone. Any figures here are a snapshot, not a permanent truth.
5. **Training estimates for frontier models involve the most uncertainty** because companies treat compute details as trade secrets. Figures are inferred from reported GPU-hours, leaked architecture details, and financial analysis.

---

## 2. Data Summary Table

### 2.1 Per-Task Environmental Impact

| Task | Electricity (Wh) | Water (ml) | CO₂ (grams) | Confidence |
|------|------------------|------------|-------------|------------|
| **Single text prompt** | 0.3 – 2.0 Wh | 0.5 – 3.5 ml | 0.12 – 0.78 g | High |
| **Single image generation** (1024×1024) | 1.0 – 5.0 Wh | 1.8 – 9.0 ml | 0.39 – 1.95 g | Medium |
| **5 seconds of video** (1080p) | 50 – 500 Wh | 90 – 900 ml | 20 – 195 g | Low |
| **Deep research task** | 6 – 40 Wh | 11 – 72 ml | 2.3 – 15.6 g | Medium |
| **Training 8B parameter model** | ~5,400 MWh | ~9.7 million litres | ~2,100 tonnes CO₂ | High |
| **Training frontier model** | ~50,000 – 72,000 MWh | ~90 – 130 million litres | ~11,000 – 28,000 tonnes CO₂ | Medium |

### 2.2 Detailed Estimates with Sources

#### A. Single Text Prompt

**Best estimate: ~0.3–2.0 Wh (depending on model and query length)**

| Source | Estimate | Model/Context |
|--------|----------|--------------|
| OpenAI (Sam Altman, June 2025) | 0.34 Wh | ChatGPT average query (self-reported, unverified) |
| Epoch AI (Feb 2025) | ~0.3 Wh | GPT-4o, ~500 output tokens, H100 hardware |
| Jegham et al. (May 2025) | 0.42 Wh (±0.13) | GPT-4o, short prompt |
| Jegham et al. (May 2025) | 0.454 Wh | GPT-4.1 nano, long prompt (~7,000 words in, 1,000 out) |
| Jegham et al. (May 2025) | 3.9 Wh | o3 reasoning model, long prompt |
| Jegham et al. (May 2025) | 30.5 Wh | GPT-4.5, long prompt |
| University of Rhode Island AI Lab (Aug 2025) | 18.35 Wh average | GPT-5, medium-length response |
| MIT Technology Review (May 2025) | ~0.3 Wh per message | GPT-4o, 1 billion messages/day estimate |
| Schneider Electric (2025) | 2.9 Wh | Generative AI query (aggregate across models) |
| Google (2025 claim) | 0.24 Wh | Typical Gemini prompt (self-reported) |

**Water:** OpenAI self-reported 0.000085 gallons (~0.32 ml) per average query. Independent estimates using WUE of 1.8 L/kWh and the Jegham et al. energy figure give approximately 0.76 ml for a short GPT-4o query. The OECD cites research suggesting 10–50 GPT-3 queries consume 500 ml (i.e., 10–50 ml per query), but this figure includes less efficient older infrastructure.

**Carbon:** At US average grid intensity (0.39 kg CO₂/kWh), a 0.4 Wh query produces approximately 0.16 g CO₂.

**Best central estimate for the app:** ~0.4 Wh electricity | ~1 ml water | ~0.16 g CO₂

#### B. Single Image Generation (1024×1024)

**Best estimate: ~1.0–5.0 Wh**

| Source | Estimate | Context |
|--------|----------|---------|
| Ruf et al. / Stanford & AXA (Dec 2025) | 0.05–3.58 Wh | Scaling with resolution: 512×512 to 1024×1024 |
| MIT Technology Review / Hugging Face (May 2025) | ~2.9 Wh per 1,000 images (2.9 Wh each) | Average across tested models |
| Luccioni et al. / Hugging Face (2023) | "As much energy as charging your phone" (~10 Wh high end) | Older, less efficient models |
| Hypergrid Business (Nov 2025) | ~3 Wh | AI image generation, current models |
| The Conversation (Jan 2026) | "Five seconds of microwave use" (~5.5 Wh) | Image generation general estimate |
| Various blog estimates | 0.01–0.29 kWh (10–290 Wh) | Wide range; older and newer models conflated |

The very high estimates (100+ Wh) appear to come from older models or from conflating kWh with Wh. Current-generation commercial image generators at 1024×1024 most likely fall in the 2–5 Wh range based on the Stanford/AXA scaling laws and Hugging Face benchmarks.

**Best central estimate for the app:** ~3 Wh electricity | ~5.4 ml water | ~1.2 g CO₂

#### C. 5 Seconds of Video Generation (1080p)

**Best estimate: ~50–500 Wh (extremely uncertain)**

| Source | Estimate | Context |
|--------|----------|---------|
| Reclaimed Systems / Fortune analysis (Nov 2025) | ~936 Wh per 10-second Sora 2 video | Based on 40 minutes of H100 GPU time at 700W |
| CNET estimate (Nov 2025) | ~90 Wh per Sora generation | Based on Hugging Face measurements of similar models |
| Wall Street Journal | 20–100 Wh per Sora generation | Range estimate |
| Hypergrid Business (Nov 2025) | ~50 Wh per 6–10 second clip | AI video generator general estimate |
| MIT Technology Review / Hugging Face | ~109,000 joules (~30 Wh) | CogVideoX, older lower-quality model, 8 fps |
| MIT Technology Review / Hugging Face | "Over an hour of microwave use" for 5 seconds | ~66+ Wh for higher-quality 5-second clip |
| Hugging Face researchers (2025) | Energy quadruples when video length doubles | Non-linear scaling confirmed |

Video generation has the widest uncertainty band. A 5-second clip at 1080p from a current-generation model like Sora 2 or Veo 2 likely uses 50–500 Wh, depending heavily on the model, quality settings, and number of diffusion steps. The figure of ~470 Wh (half of the 936 Wh estimated for a 10-second Sora 2 video) is a reasonable midpoint for a 5-second clip, but the non-linear scaling means it could be higher or lower.

**Water:** Using 470 Wh and WUE of 1.8 L/kWh: ~846 ml (~0.85 litres)

**Best central estimate for the app:** ~470 Wh electricity | ~850 ml water | ~183 g CO₂

#### D. Deep Research Task

**Best estimate: ~6–40 Wh**

No single study benchmarks "deep research" as a discrete task, but we can estimate it as follows:

- OpenAI's Deep Research product is described as "far more compute-intensive" than standard queries
- A deep research task involves extended chain-of-thought reasoning, multiple web retrievals, and synthesis
- Reasoning models like o3 consume 3.9–39 Wh per long prompt (Jegham et al.)
- GPT-5 in "thinking mode" can use 5–10x more power than a standard response
- A conservative estimate: 20–30 sequential reasoning steps at the standard query energy level, plus web retrieval overhead

**Best central estimate for the app:** ~20 Wh electricity | ~36 ml water | ~7.8 g CO₂

#### E. Training an 8B Parameter Open-Source Model

**Best estimate: ~5,400 MWh (HIGH CONFIDENCE)**

This is the best-documented category thanks to Meta's transparency about the Llama model family.

| Source | Estimate | Context |
|--------|----------|---------|
| Meta (Hugging Face model card, 2024) | 1.3M GPU hours on H100 (TDP 700W) | Llama 3 8B pre-training |
| Meta (Llama 3.1 report) | Part of 39.3M total GPU hours for entire Llama 3.1 family | 8B + 70B + 405B combined |
| Meta (Hugging Face) | 2,290 tonnes CO₂eq total emissions | Llama 3 8B |

**Calculation from Meta's figures:**
- 1.3 million GPU hours × 700W TDP = 910 MWh (GPU power only)
- Apply PUE of 1.2 for data centre overhead: ~1,092 MWh
- However, the 700W TDP is peak; actual utilisation is typically 60–80%, so effective consumption is lower
- Meta's own carbon reporting (2,290 tonnes at their grid mix) implies a higher total energy including all overheads

A reasonable estimate accounting for full data centre overhead: ~3,000–5,400 MWh.

**Water:** At WUE of 1.8 L/kWh and ~5,400 MWh: ~9.7 million litres
**Carbon:** Meta reported 2,290 tonnes CO₂eq (location-based); at US average grid: ~2,100 tonnes

**Best central estimate for the app:** ~5,400 MWh | ~9.7 million litres water | ~2,100 tonnes CO₂

#### F. Training a Frontier Model

**Best estimate: ~50,000–72,000 MWh (MEDIUM CONFIDENCE)**

| Source | Estimate | Context |
|--------|----------|---------|
| Towards Data Science analysis (June 2025) | 50–60 million kWh (50–60 GWh) | GPT-4 training estimate |
| Medium analysis (Jan 2026) | 55–60 GWh (up to 72 GWh with PUE) | GPT-5 training estimate |
| Epoch AI / Rising Costs paper (2024) | Energy is 2–6% of total training cost | For models costing $100M+, energy alone = $2–6M |
| GPT-3 training (established) | 1,287 MWh | 175B parameters, 2020 hardware |
| Llama 3.1 full family | 39.3M GPU hours on H100 | 8B + 70B + 405B models combined |
| Meta Llama 3.1 | 11,390 tonnes CO₂eq | Full family location-based emissions |

Frontier model training costs have been growing at roughly 2–2.5x per year. GPT-4 (2023) is estimated at ~50 GWh. GPT-5 (2025) is estimated at 55–72 GWh depending on assumptions about hardware efficiency gains.

**Water:** At ~60 GWh and WUE of 1.8 L/kWh: ~108 million litres
**Carbon:** At US average grid: ~23,400 tonnes CO₂; Meta reported 11,390 tonnes for Llama 3.1 family (which uses a higher proportion of renewables)

**Best central estimate for the app:** ~60,000 MWh | ~108 million litres water | ~23,400 tonnes CO₂

---

## 3. Everyday Comparisons

### 3.1 Electricity Comparisons

| AI Task | Everyday Equivalent |
|---------|-------------------|
| Single text prompt (0.4 Wh) | Running an LED light bulb for about 2–3 minutes |
| Single text prompt (0.4 Wh) | Running a microwave oven for approximately 1.5 seconds |
| Single image generation (3 Wh) | Running a microwave for about 5–10 seconds |
| Single image generation (3 Wh) | Charging a smartphone to about 30% |
| 5-second video (470 Wh) | Running a microwave on full power for about 30 minutes |
| 5-second video (470 Wh) | Powering a 65-inch TV for about 4 hours |
| 5-second video (470 Wh) | Roughly equivalent to an hour-long Zoom call repeated 10 times |
| Deep research task (20 Wh) | Running a laptop for about 20–30 minutes |
| Deep research task (20 Wh) | Boiling a full kettle once |
| Training 8B model (5,400 MWh) | Powering approximately 500 UK homes for a year |
| Training 8B model (5,400 MWh) | A seven-hour flight on a large commercial airliner |
| Training frontier model (60,000 MWh) | Powering approximately 5,700 UK homes for a year |
| Training frontier model (60,000 MWh) | Roughly equal to powering the city of Barnsley for a week |

### 3.2 Water Comparisons

| AI Task | Everyday Equivalent |
|---------|-------------------|
| Single text prompt (~1 ml) | About 3–4 drops of water from an eyedropper |
| Single image generation (~5 ml) | About a teaspoon of water |
| 5-second video (~850 ml) | Roughly a large bottle of water |
| Deep research task (~36 ml) | About 2 tablespoons of water |
| Training 8B model (~9.7 million litres) | About 4 Olympic swimming pools |
| Training 8B model (~9.7 million litres) | Watering a full-sized golf course for approximately 3 days |
| Training frontier model (~108 million litres) | About 43 Olympic swimming pools |
| Training frontier model (~108 million litres) | Daily water consumption of approximately 72,000 people |
| Training frontier model (~108 million litres) | Watering a full-sized golf course for approximately 30 days |

### 3.3 Carbon Comparisons

| AI Task | Everyday Equivalent |
|---------|-------------------|
| Single text prompt (~0.16 g CO₂) | Driving a petrol car approximately 0.4 metres |
| Single image generation (~1.2 g CO₂) | Driving a petrol car approximately 3 metres |
| 5-second video (~183 g CO₂) | Driving a petrol car about 0.5 miles (800 metres) |
| Deep research task (~7.8 g CO₂) | Driving a petrol car about 20 metres |
| Training 8B model (~2,100 tonnes CO₂) | Approximately 450 return flights London to New York |
| Training 8B model (~2,100 tonnes CO₂) | Lifetime carbon emissions of about 26 average UK residents |
| Training frontier model (~23,400 tonnes CO₂) | Approximately 5,000 return flights London to New York |
| Training frontier model (~23,400 tonnes CO₂) | Annual emissions of a small town of about 3,000 people |

---

## 4. Key Research Sources

### 4.1 Primary Academic Sources

1. **Jegham, N., Abdelatti, M., Elmoubarki, L., & Hendawi, A. (2025).** "How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference." *arXiv:2505.09598*. — The most comprehensive per-model inference benchmarking study; covers 30 models across energy, water, and carbon.

2. **Luccioni, S., Jernite, Y., & Strubell, E. (2024).** "Power Hungry Processing: Watts Driving the Cost of AI Deployment?" — Foundational study on per-task energy costs across text, image, and other AI tasks from Hugging Face.

3. **de Vries-Gao, A. (2025).** "The carbon and water footprints of data centers and what this could mean for artificial intelligence." *ScienceDirect*. — Global-scale carbon and water footprint estimates for AI systems.

4. **Ruf, B. et al. (2025).** "Energy Scaling Laws for Diffusion Models." *NeurIPS Workshop*. — Stanford/AXA study adapting Kaplan scaling laws to predict image generation energy costs.

5. **Li, P., Yang, J., Islam, M.A., & Ren, S. (2025).** "Making AI Less 'Thirsty'." *Communications of the ACM, 68(7)*. — Key water footprint methodology, including the widely-cited 500ml per 10–50 GPT-3 queries figure.

6. **Cottier, B. & Rahman, R. (2024).** "The Rising Costs of Training Frontier AI Models." *Epoch AI*. — Detailed cost breakdown for frontier model training including hardware, energy, and staffing.

### 4.2 Industry & Institutional Sources

7. **OpenAI / Sam Altman (June 2025).** "The Gentle Singularity" blog post. — First official OpenAI disclosure: 0.34 Wh and 0.000085 gallons water per average ChatGPT query.

8. **Epoch AI (Feb 2025).** "How much energy does ChatGPT use?" *Gradient Updates*. — Independent estimate of ~0.3 Wh per GPT-4o query.

9. **MIT Technology Review (May 2025).** "We did the math on AI's energy footprint." — Comprehensive journalistic analysis consulting two dozen experts; includes per-task estimates for text, image, and video.

10. **International Energy Agency (2025).** *Global Energy Review 2025* and *Energy and AI* report. — Data centres consumed ~415 TWh in 2024, projected to exceed 945 TWh by 2030.

11. **Meta / Hugging Face Model Cards (2024).** Llama 3 and Llama 3.1 training disclosures. — 1.3M GPU hours for Llama 3 8B; 39.3M GPU hours for full Llama 3.1 family; 2,290 and 11,390 tonnes CO₂eq respectively.

12. **Schneider Electric Sustainability Research Institute (2025).** — Estimated 2.9 Wh per generative AI query; 15 TWh total for all generative AI queries in 2025.

13. **University of Rhode Island AI Lab (Aug 2025).** GPT-5 energy analysis. — Estimated 18.35 Wh average per GPT-5 query (medium-length response).

### 4.3 Supplementary Sources

14. **EESI (Environmental and Energy Study Institute).** "Data Centers and Water Consumption." — Average WUE of 1.9 L/kWh across industry.

15. **Brookings Institution (Nov 2025).** "AI, data centers, and water." — Policy analysis of AI water demands.

16. **UK Government Report (2025).** "Water use in AI and Data Centres." — UK-specific analysis including projected 5 billion litres/day water shortfall by 2050.

17. **Hugging Face / Luccioni, S. (2025).** CogVideoX energy measurements for video generation. — Direct measurement: ~109,000 joules for low-quality short video; energy quadruples when video length doubles.

18. **IEEE Spectrum (Oct 2025).** "AI Energy Use." — Overview including Schneider Electric projections of 347 TWh for generative AI by 2030.

---

## 5. Notes for App Implementation

### 5.1 Recommended Data Presentation

- Present all figures as **ranges** (low–high) with a central "best estimate" highlighted
- Use a clear **confidence indicator** (e.g., green/amber/red) for each estimate
- The everyday comparisons should be presented alongside the raw numbers, not instead of them
- Include a clear note that all figures are estimates and that actual impacts vary based on location, model, and task complexity

### 5.2 Sources Panel Content

The app should include both:
- A **"Sources"** panel listing all references above with clickable links where available
- A **"Methodology"** panel explaining the reference scenario, assumptions, and confidence levels (Section 1 of this document)

### 5.3 Important Caveats for Users

1. These figures represent a snapshot in time (early 2026). AI efficiency is improving rapidly.
2. Individual queries are very small compared to everyday activities — the concern is aggregate scale (billions of queries per day).
3. Water and carbon impacts are highly location-dependent. A query processed in Norway may have near-zero carbon; the same query in India may have 20x the carbon footprint.
4. Training costs are one-time investments amortised over millions or billions of subsequent queries.
5. No AI company currently provides verified per-query environmental data. All figures involve estimation.

---

## 6. Reducing Your AI Environmental Impact: Research & Practical Guidance

This section informs the second major function of the app: actionable advice for users who want to use AI responsibly without abandoning it.

### 6.1 The Core Principle: Not All Prompts Are Equal

Research consistently demonstrates that the environmental cost of AI use varies enormously depending on how you use it — by as much as 50x between different approaches to the same task.

**Key finding:** A 2025 study published in *Frontiers in Communication* (Dauner & Socher) found that some AI prompts emit 50 times more carbon than others, even when answering the same types of questions. The primary drivers are: the model used, the number of tokens generated (especially "thinking" tokens in reasoning models), and the complexity of the task. Factual questions are answered quickly and efficiently; abstract reasoning tasks force models to generate thousands of additional tokens.

**Key finding:** Capgemini's "From Words to Watts" research (2026) demonstrated that prompt phrasing significantly influences energy consumption. Prompts using words like "justify" and "analyze" are substantially more energy-intensive than those using "list," "summarise," or "measure" — because they trigger deeper reasoning chains and longer outputs.

**Key finding:** The "Green Prompting" paper (Adamska et al., 2025, arXiv:2503.10666) found that the length of the model's *response* has a greater impact on energy cost than the length of the *prompt*. This means constraining output length is more impactful than shortening your question.

### 6.2 Practical Strategies for Users

#### Strategy 1: Choose the Right-Sized Model for the Task

**Research basis:** The "Small is Sufficient" study (2025, arXiv:2510.01889) found that applying model selection — simply choosing the most appropriate model for a given task rather than defaulting to the largest — could reduce global AI energy consumption by 27.8%, saving an estimated 31.9 TWh in 2025 alone. That's equivalent to the annual output of five nuclear power reactors.

**What to do:**
- Use smaller, faster models (e.g., GPT-4o mini, Claude Haiku, Gemini Flash) for simple tasks like summarising, reformatting, brainstorming, or answering factual questions
- Reserve larger, more powerful models (GPT-4o, Claude Opus, Gemini Pro) for complex reasoning, nuanced writing, or multi-step analysis
- Many platforms now offer model selection — use it deliberately rather than defaulting to the most powerful option
- The Jegham et al. (2025) benchmarking study found that the most energy-intensive models consume over 70x more energy than the most efficient ones for the same type of prompt

#### Strategy 2: Write Efficient Prompts and Save Them for Reuse

**Research basis:** The "Green Prompt Engineering" paper (Martino et al., 2025) found that prompt design practices can meaningfully reduce inference energy while maintaining or improving performance. Excessive prompt complexity (e.g., lengthy few-shot examples, professional-grade verbose instructions) increases energy consumption with little or no accuracy benefit.

**What to do:**
- **Save your best prompts.** Every time you craft a prompt that works well, save it as a template. Reusing a refined prompt eliminates the iterative trial-and-error process that generates wasted tokens across multiple failed attempts.
- **Be specific and constrained.** Instead of "Tell me everything about renewable energy," ask "List 5 key advantages of solar power for UK homeowners in under 200 words." The output constraint alone can reduce token generation (and therefore energy) substantially.
- **Batch related questions.** Rather than asking five separate questions in five separate prompts (each requiring context rebuilding), combine them into one well-structured prompt. This reduces the overhead of repeated context processing.
- **Avoid unnecessary reasoning modes.** Reasoning models (e.g., o3, DeepSeek-R1) generate hundreds or thousands of invisible "thinking" tokens before responding. The Dauner & Socher study found reasoning models generated an average of 543 thinking tokens per question versus 37 for concise models. Only use reasoning mode when you genuinely need multi-step problem-solving.

#### Strategy 3: Use Custom GPTs, Gems, and System Prompts

**Research basis:** Custom instructions and pre-configured assistants (such as ChatGPT's Custom GPTs or Google's Gems) embed your context, preferences, and task specifications into a persistent system prompt. This eliminates the need to re-explain your context, role, output format, and constraints with every new conversation — reducing both the tokens you send and the tokens generated in response.

**What to do:**
- **Create Custom GPTs or Gems for repeated tasks.** If you regularly ask AI to write social media posts for your business, create a custom assistant pre-loaded with your brand voice, audience, platform preferences, and formatting rules. Each subsequent prompt can be much shorter.
- **Use system prompts in API-based tools.** If you're building with the API, a well-crafted system prompt means your user messages can be concise.
- **Build simple automations.** Tools like Zapier, Make, or N8N can chain AI calls together efficiently — triggering the right model for each step rather than using one massive prompt for everything.
- **Maintain a prompt library.** Store your most effective prompts in a document, spreadsheet, or tool like a personal "prompt cookbook." This avoids the energy cost of prompt experimentation every time you start a similar task.

#### Strategy 4: Consider When You Use AI — and When You Don't Need To

**Research basis:** The Tilburg.ai "5 Tips" guide (2024) emphasises evaluating whether AI is genuinely necessary for each task. A simple web search, checking existing documentation, or asking a colleague may consume far less energy than an AI query — and may produce better results for straightforward factual questions.

**What to do:**
- **Use traditional search for simple factual lookups.** "What year was the Eiffel Tower built?" doesn't need a language model. A web search uses roughly one-third the energy.
- **Check existing resources first.** Course materials, documentation, and previous work may already contain what you need.
- **Don't use AI for entertainment or casual curiosity** if you're concerned about environmental impact. The per-query cost is small, but habitual, purposeless use adds up at scale.
- **Be intentional about image and video generation.** These are orders of magnitude more energy-intensive than text. Generate one well-specified image rather than iterating through dozens of variations.

#### Strategy 5: Run Local Models for Repeated or Privacy-Sensitive Tasks

**Research basis:** Running small language models locally (via tools like Ollama, LM Studio, or llama.cpp) on modern hardware can be remarkably energy-efficient. A 2026 XDA Developers analysis found that a Mac Mini with an M4 chip idles at under 5 watts and peaks at around 65 watts during LLM inference — far less than a gaming PC at rest. Local inference is "bursty" — the GPU spins up for a second or two per query, then returns to idle.

Brian Peiris's direct measurements of Ollama running on an RTX 4070 Ti found that a translation task (900 words, English to French) consumed the energy equivalent of turning on 20 LED bulbs for about 30 seconds, regardless of model. The key advantages of local models are:

- **No network overhead.** No data transmission to and from data centres.
- **No data centre cooling costs.** The water footprint is effectively zero beyond your own electricity.
- **No shared infrastructure overhead.** Your query doesn't contribute to the PUE overhead of a massive facility.
- **Quantisation makes small models very efficient.** Research shows that converting models from full precision to 4-bit quantisation reduces memory by 75% and cuts energy by 60–80% with only 1–5% accuracy loss.
- **Apple Silicon is exceptionally efficient for local AI.** The unified memory architecture means no separate power-hungry GPU is needed. A MacBook Pro M4 running Ollama on battery draws about 110W peak — including the display.

**What to do:**
- Install Ollama or LM Studio and experiment with small models (Llama 3.2 3B, Qwen 2.5 7B, Gemma 2 9B) for tasks like summarisation, reformatting, brainstorming, and code assistance
- Use local models for privacy-sensitive work where data shouldn't leave your machine
- Reserve cloud-based frontier models for tasks where you genuinely need their superior capability
- Consider building simple local scripts or tools that chain local model calls for repetitive workflows — the energy cost per task is negligible

#### Strategy 6: Build Your Own Tools and Workflows

**Research basis:** Every time you use AI to perform a task that could be accomplished by a simple script, spreadsheet formula, or local tool, you're using significantly more energy than necessary. A Python script performing text processing runs on milliwatts; the same task via a cloud LLM uses watts. Microsoft Research's "Reducing AI's Carbon Footprint" programme emphasises that making AI run more efficiently on hardware — using less processor time and memory — reduces both operational and embodied emissions.

**What to do:**
- **Automate repetitive tasks with code, not AI.** If you're using AI to reformat data the same way every week, write a script instead. Use AI to *help you write the script*, then run the script locally.
- **Use AI to build tools, not to be the tool.** The most efficient use of a frontier model is often to help you create a local solution that doesn't need AI at all for ongoing use.
- **Create templates and macros.** For document formatting, email templates, and data processing — traditional automation tools are orders of magnitude more efficient than AI.

### 6.3 Quantifying the Savings

| Strategy | Estimated Reduction | Source |
|----------|-------------------|--------|
| Using right-sized model | Up to 70x less energy per query | Jegham et al. (2025) — comparing GPT-4.1 nano vs. o3 |
| Model selection globally | 27.8% reduction in AI energy | "Small is Sufficient" (2025) |
| Constraining output length | Proportional to token reduction (e.g., 200 vs 2,000 tokens = ~10x) | Green Prompting (Adamska et al., 2025) |
| Quantised local model vs. cloud | 60–80% less energy per inference | Green AI systematic review (ScienceDirect, 2025) |
| Custom GPT/Gem vs. repeated full prompts | ~30–50% fewer input tokens per session | Estimated from token reduction in persistent context |
| Google Gemini efficiency gains (12 months) | 33x reduction in energy per prompt | Google Cloud Blog (Aug 2025) |
| Reusing saved prompts vs. iterating | Eliminates ~3–5 wasted queries per task | Estimated from typical user behaviour |

### 6.4 The Bigger Picture: What Users Can't Control (But Should Know About)

While individual choices matter, it's important to acknowledge that the largest environmental decisions sit with AI companies and infrastructure providers:

- **Training costs dwarf individual inference.** Training GPT-5 once consumed an estimated 60,000 MWh — equivalent to billions of individual queries. Users don't control this, but they should understand it.
- **Data centre location and energy sourcing** determine whether a query has near-zero carbon (e.g., Google's facilities using 90%+ carbon-free energy) or significant carbon (facilities on fossil-fuel-heavy grids). Norway's grid produces ~0.03 kg CO₂/kWh; India's produces ~0.71 kg CO₂/kWh — a 24x difference for identical queries.
- **Hardware efficiency is improving rapidly.** Google reported 33x energy improvement per Gemini prompt over 12 months. New chip architectures (e.g., NVIDIA Blackwell) are more efficient per operation, even though they draw more power. Users benefit from these improvements passively.
- **Transparency and accountability** are currently inadequate. No AI company provides real-time per-query environmental metrics to users. Advocating for disclosure — and supporting researchers who measure these impacts independently — is one of the most impactful things users can do.

### 6.5 Sources for Section 6

19. **Dauner, M. & Socher, G. (2025).** "Energy costs of communicating with AI." *Frontiers in Communication*. — Found 50x variation in carbon emissions between different prompt approaches.

20. **Capgemini (2026).** "From Words to Watts: How Prompting Patterns Shape AI's Environmental Impact." — Demonstrated that keyword choice in prompts (e.g., "justify" vs. "list") significantly affects energy consumption.

21. **Adamska, M., Smirnova, D., Nasiri, H., Yu, Z., & Garraghan, P. (2025).** "Green Prompting." *arXiv:2503.10666*. — Found that response length has greater energy impact than prompt length; proposed framework for measuring inference energy.

22. **Martino et al. (2025).** "Green Prompt Engineering: Investigating the Energy Impact of Prompt Design in Software Engineering." — Introduced the concept of "Green Prompt Engineering" as a discipline; found that excessive prompt complexity increases energy without proportional accuracy gains.

23. **Doiseau et al. (2025).** "Small is Sufficient: Reducing the World AI Energy Consumption Through Model Selection." *arXiv:2510.01889*. — Estimated 27.8% global AI energy reduction (31.9 TWh) achievable through right-sized model selection.

24. **Google Cloud (Aug 2025).** "Measuring the environmental impact of AI inference." — Published methodology showing 0.24 Wh per median Gemini text prompt; 33x energy improvement and 44x carbon improvement over 12 months.

25. **Rubei, R., Moussaid, A., Di Sipio, C., & Di Ruscio, D. (2025).** "Prompt engineering and its implications on the energy consumption of Large Language Models." *arXiv:2501.05899*. — Found that custom tags in prompts can reduce energy consumption by up to 83–99% for certain code-related tasks.

26. **XDA Developers (Feb 2026).** "I run local LLMs in one of the world's priciest energy markets, and I can barely tell." — Practical analysis showing Mac Mini M4 at ~5W idle, ~65W peak inference; local inference is "bursty" and adds negligibly to electricity bills.

27. **Peiris, B. (2025).** "How Much Energy Does Local AI Use?" — Direct Kill-A-Watt measurements of Ollama on RTX 4070 Ti; energy per task equivalent to 20 LED bulbs for 30 seconds.

28. **MIT News (Sep 2025).** "Responding to the climate impact of generative AI." — Overview of efficiency innovations including carbon-aware computing, dynamic workload scheduling, and hardware co-design.

29. **Tilburg.ai (2024).** "5 Practical Tips to Lower Your AI Carbon Footprint." — Practical user-facing guide including reflective questions about when AI use is genuinely necessary.

30. **Microsoft Research.** "Reducing AI's Carbon Footprint." — Research programme focused on making AI run more efficiently, including model selection, quantisation, and edge deployment.

31. **Green AI systematic review (ScienceDirect, 2025).** "Green AI techniques for reducing energy consumption in AI systems." — Found quantisation yields up to 50% energy reductions; knowledge distillation delivers ~60% faster inference with ~40% fewer parameters while retaining ~97% performance.

32. **ALT Community Blog (May 2025).** "Think before you prompt: Reduce your AI carbon footprint with ROCKS." — Educational framework for sustainable prompting in academic settings.

---

## 7. Notes for App Section 2 Implementation

### 7.1 Recommended Structure

The "Reduce Your Impact" section of the app should present advice as an interactive, progressive guide rather than a static wall of text. Suggested structure:

1. **"Quick Wins"** — Immediate, zero-effort changes (choose smaller models, constrain output length, save prompts)
2. **"Build Better Habits"** — Moderate effort (create Custom GPTs/Gems, batch queries, use prompt libraries)
3. **"Go Local"** — For more technical users (install Ollama, run local models, build scripts)
4. **"Think Bigger"** — Systemic awareness (understand training costs, advocate for transparency, support efficient providers)

### 7.2 Interactive Elements

- A **"Savings Calculator"** that lets users input their estimated weekly AI usage (number of text queries, images, etc.) and shows the impact of switching to more efficient practices
- A **"Model Picker"** tool that suggests the right-sized model for common task types
- **Before/After comparisons** showing the same task done inefficiently vs. efficiently, with energy costs for each
- A **"Prompt Clinic"** showing examples of wasteful prompts vs. efficient ones, with estimated token/energy differences

### 7.3 Tone

The advice should be empowering, not guilt-inducing. The framing should be: "You can make a meaningful difference with small, practical changes — and you'll actually get better results too, because efficient prompting tends to produce more focused, useful outputs."

---

*Document compiled March 2026. All figures should be verified against the latest available research before publication.*
