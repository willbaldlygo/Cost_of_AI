# Evidence Audit — November 2026

## Purpose
This records the audit of the Environmental Footprint section, the methodology and the source list. **It takes priority over the March compilation and the September update where they disagree.** Both of those documents contain errors listed here and are kept as a dated record.

Rule for the site: every figure must come from a source listed on the page, or be calculated from one with a stated factor.

## Figures

| Card | Before | After | Basis |
|---|---|---|---|
| Text (Instant) | 0.31 Wh | Unchanged | Oviedo et al., *Joule* 2026 (confirmed on the journal page) |
| Text (Reasoning) | 3.91 Wh | Unchanged | Same paper, arXiv v2, p.8 |
| Image | 3 Wh (1–5) | 1.35 Wh (0.63–3.58) | Luccioni FAccT '24 median, p.6; MIT Technology Review SD3 Medium, 2,282 J; Iyengar et al. FAccT '26 |
| Video | 177 Wh (114.8–215) | Unchanged | Jegham et al. preprint, pp.5 and 9 |
| Deep Research | 22 Wh (6–40) | 158 Wh (23–348), Low | Kim et al., HPCA 2026, Table III: LATS on 70B, across 8B and 70B agents. GPU only |
| Training 8B | 5,400 MWh, 9.7M L, 2,100 t | 910 MWh, 1.64M L, 390 t | Meta model card: 1.3M GPU hours × 700 W; 390 tCO₂eq |
| Training Frontier | 150,000 MWh, 270M L, 58,500 t | 310,000 MWh, 754M L, 150,000 t, Low | Epoch AI Grok 4 estimate. Low end: GPT-4 at 50 GWh, MIT Technology Review |

## Errors found

- **Training 8B:** 5,400 MWh equals 7.7M GPU hours × 700 W, which is the 8B and 70B models combined. 2,290 tCO₂eq is also the combined total.
- **Frontier range:** 100–300 GWh could not be traced to any source. The Epoch page cited for it gives power only.
- **Deep Research:** 20–30 steps at 3.91 Wh gives 78–117 Wh, contradicting 22 Wh. The update doc's rise to 22 Wh relied on 4.32 Wh, a superseded figure.
- **Text figures in the September update:** 0.34 and 4.32 Wh come from arXiv v1 (Sept 2025). The peer-reviewed version gives 0.31 and 3.91 Wh.
- **Video:** 85 Wh appears nowhere in the paper. 57.5 Wh reproduces from Table 2 only at 81 frames, which is 3.3 seconds at that model's 24 fps.
- **Water accounting:** the site said 1.8 L/kWh included electricity generation. It is an on-site figure.
- **Confidence levels:** the ± percentages had no source. Tiers are now defined by evidence type.
- **"No provider publishes per-query energy data":** false. Google and OpenAI have.

## Comparison values

| Value | Before (implied) | After | Source |
|---|---|---|---|
| UK home electricity | 10,500 kWh a year | 2,500 kWh | Ofgem medium value from 1 July 2026, via Energy UK |
| Petrol car | 0.4 g/m on small cards | 0.16 g/m | 2026 UK factors, average petrol car, 0.16152 kg/km |
| London–New York return | 4.68 t | ~1.3 t per passenger | 2026 UK factors, long-haul economy with RF, 0.11704 kg/passenger.km over ~11,080 km |
| Full kettle | ~20 Wh | ~160 Wh | 1.7 L heated by 80°C |
| Golf course | ~3.6M L a day | ~465,000 L a day | USGA: 2,312,701 acre-feet a year across 16,797 US facilities, 2003–05 |

## Source list

**Wrong page:** old 4 (cancer biology paper), old 16 (housing briefing), old 22 (computer vision paper).

**Page did not support the citation:** old 12 (landing page), old 17 (EcoLogits calculator), old 18 (a different 2023 article).

**Dead links, replaced:** old 9, 20, 24, 27, 28, 32.

**Removed, no original found:** old 26 (XDA) and old 29 (Tilburg.ai).

**Wrong details:** old 4 and old 23 authors.

**Renumbering:** old 27–28 are now 26–27, old 31 is now 28, old 32 is now 29, old 30 is now 30, and old 33–35 are now 31–33. New sources are 34–39.

## Not resolved

- **Source 30 (Schwartz et al.):** ACM blocks automated access, so the page was not opened. The DOI resolves to the expected ACM address.
- **Frontier figure:** one third-party estimate of one model.
- **Deep Research:** a proxy. No study measures commercial tools.
- **Commercial image and video models:** largely unmeasured.
- **Footer self-audit:** the per-exchange energy assumptions are the site's own.
- **Batching questions:** no study has tested whether one combined prompt beats several separate turns. The tip says so.

## What You Can Do

Audited after the figures above. Sources 40–45 were added for this section.

| Tip | Problem | Fix |
|---|---|---|
| Key stat | A modelled estimate shown in quote marks, though not a quotation | Labelled as modelled; quote marks removed; authors credited |
| Right-sized model | "70×" is out of date; 8–20× is about providers, not user choice | "Over 65×" (Jegham v6); 8–20× moved to the efficiency tip |
| Constrain output | "More than prompt length" isn't what the paper says | Reworded; Oviedo added: energy scales roughly with output tokens |
| Reasoning modes | 37.7 is *response* tokens, not thinking tokens | Corrected, with the 4–6× emissions finding |
| Save prompts | "3–5 wasted queries" had no source | Number removed |
| Batch questions | No direct evidence | Reworded to say so |
| Words | Date wrong | Capgemini, 2025 |
| Run local models | Implied local is greener; "less than a gaming PC at idle" unreliable | Reframed around model size (Saad-Falcon et al.); 65 W from Apple |
| Quantised models | Cited review not found; "60–80%" contradicted by newer work | Memory claim kept; energy savings described as uncertain |
| Build scripts | "Milliwatts vs watts" unsourced and confused power with energy | Reworded |
| Transparency | Hugging Face has shown real-time estimates since 2025 | Reworded as what we found |

**Go Local evidence.** On identical models, local accelerators were at least 1.4× less efficient than cloud (Saad-Falcon et al.). Other studies point the same way for batched serving: Leitch (arXiv:2604.18566) and Guégain & Coignion (arXiv:2609.11940), both preprints. The saving comes from smaller models: 88.7% of single-turn queries answerable locally, about 64% less energy with an 80%-accurate router. Peiris's power and time figures work out to about 2–8 Wh per translation, which is a rough calculation and is not on the site.

**Skills tip:** the old "30–50% fewer tokens" figure was removed earlier because it was estimated for Custom GPTs.

## Wider evidence

Added after the two audits, to cover what the card figures leave out. No card figure changed. Each claim was checked against the source's own text.

| Source | Status | Supports |
|---|---|---|
| 10 IEA, Key Questions on Energy and AI (Apr 2026) | Institutional; replaces *Electricity 2025*, which no figure used | 485 TWh in 2025, up 17%; AI-focused data centres up 50%; ~950 TWh in 2030 (executive summary) |
| 46 Mistral lifecycle assessment (Jul 2025) | Company study with Carbone 4 and ADEME, reviewed by Resilio and Hubblo; "a first approximation" | 1.14 g CO₂e, 45 ml, per 400-token reply, upstream included, users' devices excluded |
| 47 Morrison et al., ICLR 2025 | Peer reviewed | Development ~50% of training impact; manufacturing 22 of 493 t CO₂e (~4.5%) |
| 48 Schneider et al. (Google) | Preprint | Operational 70–90% of TPU lifetime emissions; manufacturing <25%, construction <5%; TPUs only |
| 49 Elsworth et al. (Google) | Preprint | 0.24 Wh, 0.03 g CO₂e (market-based), 0.26 ml per median Gemini prompt, May 2025; 0.10 Wh on the narrower boundary |
| 50 Luccioni, Strubell & Crawford, FAccT '25 | Peer reviewed | Efficiency gains "may paradoxically spur increased consumption"; argued, not measured |
| 51 AI Energy Score v2 (Hugging Face blog) | Blog with data; prompts and hardware not stated | Reasoning on vs off: 154×, 514×, 697× GPU energy per 1k queries on three open models |
| 52 Chung et al., "Where Do the Joules Go?" | Preprint | 26 kJ–1.16 MJ (~7–322 Wh) per video, five open models, minimum-energy settings on B200, GPU only |

**Considered and left out:**
- de Vries-Gao (*Patterns*, 2026): peer reviewed, but the full text could not be opened, so it was not clear what the water range covers.
- Han et al. (health impacts, accepted by CACM): latest full text not read; press coverage repeats superseded figures.
- Wang et al. (e-waste) and Xiao et al. (US AI servers): journal pages would not open.
- UNU-INWEH report (2026): PDF too large to read; review status unknown.
- Google 2026 Environmental Report: the 37% electricity rise was seen only in press coverage.
- Microsoft FY25 data: verified (emissions ~25% up; water consumption 6,693 → 8,170 ML), but company-wide, not AI-specific.
- UK Environmental Audit Committee data centre inquiry: no report yet.
