# Research Update — September 2026

## Purpose
This document updates the March 2026 "Environmental Impact of AI Use: Research Compilation" for the Cost of AI website. It covers only what has changed. Where a March figure is not mentioned here, it still stands. Hand this to Claude Code alongside the original compilation so it can reconcile `data.js` and the Methodology panel.

**Headline: three of six task categories need real number changes, not just a refresh. The reference scenario (which models count as "current generation") also needs updating.**

---

## 1. Reference Scenario — Update Required

The March scenario named GPT-4o/GPT-5, Gemini 2.5, Claude, and Llama 4 as "current generation." Six months on, the frontier has moved again: OpenAI's GPT-5.5, Google's Gemini 3, and Anthropic's Opus 5/Sonnet 5 generation are now current as of September 2026.

**Recommendation:** Update the Methodology panel's reference scenario language to name the current generation, and keep the existing caveat about efficiency changing over time, it's a good teaching point, and this update is proof of it. Do not attribute specific per-query energy figures to specific current Claude models in the app. Anthropic has not published per-query figures, and third-party estimates circulating for the newest model generation are not yet independently verified to the standard of our other sources. Where a specific-model figure is needed, prefer the Jegham/Microsoft-style benchmarking studies below over single blog estimates.

---

## 2. Text Prompt — Numbers Hold, But Add a Reasoning-Mode Split

**What's new:** A rigorous Microsoft Research paper (Oviedo et al., "Energy Use of AI Inference: Efficiency Pathways and Test-Time Compute," Sept 2025, published in a peer-reviewed venue April 2026) built a bottom-up, production-conditions model and found:

- **Standard query** (frontier models >200B parameters, ~300 output tokens): median **0.34 Wh** (IQR 0.18–0.67). This closely matches our March central estimate of 0.4 Wh, so the core "text prompt" figure barely moves.
- **Reasoning/test-time-scaling query** (~5,000 output tokens, e.g. o3-class or DeepSeek-R1-class models): median **4.32 Wh** (IQR 2.38–7.38), a 13x jump, with a significant share of queries exceeding 10 Wh.
- The paper also states plainly that non-production benchmarks (small-batch, non-optimised) **overstate real-world energy use by 4–20x**, which is useful context for the Methodology panel: it explains why different sources disagree so much.

**Recommendation:** Split "Text Prompt" into two entries, or add a toggle/note within the existing one:
- **Standard response:** central 0.34 Wh, range 0.18–0.67 Wh, confidence High (now higher confidence than March, this is now a production-grade estimate, not a heuristic)
- **Reasoning/"thinking" mode:** central 4.3 Wh, range 2.4–7.4 Wh, confidence High

Water and carbon scale proportionally using the existing methodology (1.8 L/kWh, 0.39 kg CO₂/kWh):
- Standard: ~0.6 ml water, ~0.13 g CO₂
- Reasoning: ~7.8 ml water, ~1.7 g CO₂

**New source:** Oviedo, F., Kazhamiaka, F., Choukse, E., Kim, A., Luers, A., Nakagawa, M., Bianchini, R., Lavista Ferres, J.M. (2025/2026). "Energy Use of AI Inference: Efficiency Pathways and Test-Time Compute." Microsoft. arXiv:2509.20241.

---

## 3. Video Generation — Major Revision, Confidence Upgraded

**This is the biggest change.** A new peer-reviewed-track study by the same lead author as our original best inference source (Jegham, with Gamazaychikov and Luccioni, "Lights, Camera, Carbon," July 2026, arXiv:2607.04553) directly measured open video models and built a validated framework (under 3% prediction error) that also estimates proprietary/commercial models from their public generation latency. This replaces our old "low confidence, wide guess" figure with real measurement.

**Key finding for our exact task spec (5-second clip, standard commercial-grade model):** running a standard 5-second video workload on common models consumes **57.5 to 114.8 Wh**, described by the authors as "like running a kitchen air fryer for up to 5 minutes."

**Important nuance to carry into the app:** video generation does not behave like text or image generation. It's compute-bound, meaning the GPU runs at near-maximum power regardless of model size, and:
- Bigger models are not necessarily hungrier (architecture matters more than parameter count)
- Batching multiple videos gives no efficiency saving, unlike text (this is worth a callout, it directly contradicts something people might assume from the text-generation world)
- Energy scales roughly with resolution² and frame count, so higher resolution or longer clips cost disproportionately more, not linearly

**For premium/high-resolution commercial models**, costs run much higher. The same study estimated:
- Google Veo 3: ~20–43 Wh for an 8-second 720p clip
- OpenAI Sora 2 Pro: ~1,313 Wh for a 12-second 1080p clip (before OpenAI reportedly discontinued the standalone Sora app in March 2026, worth a quick check on current status)

**Recommendation:** Update the central estimate for "5 seconds of video" to **~85 Wh** (midpoint of the 57.5–114.8 Wh range) for a standard/720p-class model, confidence upgraded from Low to **Medium-High**. Add a note that premium 1080p output from top-tier proprietary models can run into the hundreds or low thousands of Wh, citing the Veo/Sora figures as the high end. This is more defensible than a single flat number given how wide the real spread is.

Water and carbon at the new central estimate (85 Wh):
- Water: ~153 ml (was 850 ml, a substantial downward revision)
- Carbon: ~33 g CO₂ (was 183 g)

**New source:** Jegham, N., Gamazaychikov, B., Luccioni, S. (2026). "Lights, Camera, Carbon: Architectural Scaling Laws for Video Generation Energy Consumption." arXiv:2607.04553 (under peer review). Also see the accompanying blog: sustainableaigroup.com/lightscameracarbon.

**Action item before finalising:** verify whether Sora is still operating as of your presentation date, if discontinued, either swap the proprietary high-end example to Veo 3 or Sora's successor, or keep Sora as a "what happened to one video model" teaching aside.

---

## 4. Deep Research — No New Dedicated Study, Minor Update Only

No new study specifically benchmarks "deep research" as a task. However, since it's built from reasoning-mode queries, the updated reasoning-mode figure above (4.32 Wh median per reasoning query, not the old 3.9 Wh figure) nudges the estimate up slightly. Recalculating with 20-30 reasoning-equivalent steps at the new median puts the central estimate at roughly **22 Wh** (was 20 Wh), a small enough shift that you could leave it as-is or update for consistency. Confidence stays Medium.

---

## 5. Training an 8B Open-Source Model — Stable, Low Priority

No material new disclosures found for this category. Meta's Llama 3 8B figures remain the best-documented reference point and the March numbers can stay. One cross-check found in passing: a separate estimate for Llama 3 70B (a larger sibling model) of ~6.4 GWh GPU-only energy is consistent with the methodology we used for the 8B figure, so the March calculation approach holds up. No change needed unless you want to switch the reference model to a more recent open-weight release (e.g. Llama 4 or a current Qwen release), which would need fresh sourcing.

---

## 6. Training a Frontier Model — Major Revision

**What's changed:** Multiple 2026 sources, including Epoch AI's own early-2026 projections, now put GPT-5/Gemini-Ultra/Claude-Opus-class training runs at **100–300 GWh**, roughly double to quadruple the 50,000–72,000 MWh (50–72 GWh) figure used in March.

This is directionally consistent with the pattern Epoch AI has tracked for years (training compute growing 4-5x per year, training power roughly doubling annually), our March figure was already based on GPT-4-generation data; the new figure reflects one more generational jump.

**Recommendation:** Update the central estimate to **150,000 MWh** (150 GWh, the midpoint of the 100–300 GWh range), range **100,000–300,000 MWh**. Keep confidence at Medium, the range is wide because none of the three major labs have disclosed exact figures for their current frontier models.

Water and carbon at the new central estimate:
- Water: ~270 million litres (was 108 million)
- Carbon: ~58,500 tonnes CO₂ (was 23,400 tonnes)

Recalculated everyday comparisons:
- Electricity: powering approximately 14,200 UK homes for a year (was 5,700)
- Water: about 108 Olympic swimming pools (was 43), watering a full-sized golf course for approximately 75 days (was 30)
- Carbon: approximately 12,500 return flights London to New York (was 5,000)

**New sources:**
- Epoch AI (2026 projections, via multiple secondary syntheses). Training energy for GPT-5-class models estimated at 100–300 GWh on 50,000–100,000 H100/B200-class GPUs.
- Epoch AI, "How much power will frontier AI training demand in 2030?" (Aug 2025, updated 2026), confirms the ~2x/year growth trajectory in training power that underlies this revision.

**Caveat to carry forward:** this remains the least certain figure on the whole site, by design, since none of OpenAI, Google, or Anthropic disclose training energy directly. Worth keeping the "why this number is uncertain" framing prominent in the Methodology panel rather than presenting it as a settled fact.

---

## 7. Section 6 (Mitigation Advice) — One Addition Worth Making

The Microsoft paper above (Section 2) is also a strong new source for the "Reduce Your Impact" section: it independently confirms that combined efficiency interventions (model choice, serving optimisation, hardware) can plausibly deliver **8–20x reductions** in per-query energy, and specifically calls out **model routing for reasoning tasks** (switching reasoning on only when needed) as capable of a 5x or greater reduction on its own. This corroborates and strengthens the existing "choose the right-sized model" and "avoid unnecessary reasoning modes" advice already on the site rather than replacing it, worth adding as a supporting citation.

---

## 8. Summary Table for Claude Code

| Task | March central estimate | September revised estimate | Change | Confidence change |
|---|---|---|---|---|
| Text (standard) | 0.4 Wh | 0.34 Wh | Minor, effectively unchanged | Medium → High |
| Text (reasoning, new split) | n/a | 4.3 Wh | New sub-category | High |
| Image generation | 3 Wh | *not re-researched this pass* | — | — |
| Video (5s) | 470 Wh | 85 Wh | Down ~5.5x | Low → Medium-High |
| Deep research | 20 Wh | 22 Wh | Minor | Medium (unchanged) |
| Training 8B | 5,400 MWh | 5,400 MWh | No change | High (unchanged) |
| Training frontier | 60,000 MWh | 150,000 MWh | Up 2.5x | Medium (unchanged) |

Note: image generation was flagged in the original plan as lower priority and wasn't re-researched in this pass, if you want it covered before the presentation, say so and I'll run that separately.

---

## 9. Suggested Changelog Note for the Website

Add a visible line, something like:

> **Last updated: September 2026.** Several figures changed meaningfully since our original research in March 2026, most notably video generation (revised down, thanks to better measurement methodology) and frontier model training (revised up, reflecting a new model generation). This is itself a demonstration of the site's core point: even careful estimates in this field have a short shelf life.

This turns the update into a feature rather than an admission of error, which fits the site's hopeful, practical tone.
