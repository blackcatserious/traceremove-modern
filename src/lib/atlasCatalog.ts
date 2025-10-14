export interface AtlasMetric {
  label: string;
  value: string;
  description: string;
}

export interface AtlasProgram {
  title: string;
  description: string;
}

export interface AtlasExperience {
  title: string;
  description: string;
}

interface FocusArea {
  slug: string;
  name: string;
  tagline: string;
  mission: string;
  promise: string;
  highlights: string[];
  metrics: AtlasMetric[];
  programs: AtlasProgram[];
  experiences: AtlasExperience[];
  callToAction: string;
  gradientFrom: string;
  gradientTo: string;
  accent: string;
}

interface NarrativeContext {
  slug: string;
  label: string;
  eyebrow: string;
  story: string;
  emotionalTone: string;
  ecosystem: string;
  timeHorizon: string;
  energy: string;
  commitments: string[];
  persona: string;
  recommendedSignals: string[];
  activation: string;
  highlight: string;
  signatureVisual: string;
  cluster: string;
}

export interface AtlasBlueprint {
  slug: string;
  title: string;
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    visualCue: string;
    gradientFrom: string;
    gradientTo: string;
    accent: string;
  };
  summary: string;
  story: string;
  focusArea: string;
  contextLabel: string;
  cluster: string;
  persona: string;
  ecosystem: string;
  timeHorizon: string;
  momentum: string;
  commitments: string[];
  highlights: string[];
  metrics: AtlasMetric[];
  programs: AtlasProgram[];
  experiences: AtlasExperience[];
  signals: string[];
  callToAction: string;
}

const focusAreas: FocusArea[] = [
  {
    slug: 'transparent-ai-governance',
    name: 'Transparent AI Governance',
    tagline: 'Build luminous oversight pipelines for regulated AI estates.',
    mission: 'Establish auditable decision choreography that unites legal, research, and product teams.',
    promise: 'We choreograph compliance analytics, regulatory rehearsal rooms, and shared accountability rituals into actionable operating models.',
    highlights: [
      'Compliance orchestration that stitches policy libraries directly into machine learning release cycles.',
      'Explainability toolkits with layered narratives for executives, regulators, and civic observers.',
      'Continuous audit intelligence that senses drift and prompts corrective rituals in real time.'
    ],
    metrics: [
      { label: 'Audit Velocity', value: '98%', description: 'automated evidence readiness across regulatory regimes' },
      { label: 'Decision Transparency', value: '4.7/5', description: 'stakeholder clarity captured through quarterly review forums' },
      { label: 'Policy Sync Cadence', value: 'Weekly', description: 'aligned updates merging legal, research, and product insights' }
    ],
    programs: [
      { title: 'Sentinel Oversight Studio', description: 'Designs tiered audit rooms blending legal, policy, and ML operations instrumentation.' },
      { title: 'Explainability Storylines', description: 'Narrative-driven dashboards connecting data provenance with societal expectations.' },
      { title: 'Regulation Anticipation Lab', description: 'Scenario planning sprints that pre-visualize upcoming governance shifts and obligations.' }
    ],
    experiences: [
      { title: 'Oversight Observatory', description: 'Immersive control center with volumetric policy maps and accountability signals.' },
      { title: 'Ethics Soundstage', description: 'Facilitated dialogue arena documenting decisions, dissent, and resolutions in real time.' },
      { title: 'Compliance Drift Radar', description: 'Ambient visualization capturing divergence from commitments with corrective prompts.' }
    ],
    callToAction: 'Book a co-design session to choreograph transparent AI governance rhythms.',
    gradientFrom: 'from-blue-500/30',
    gradientTo: 'to-purple-500/40',
    accent: 'text-blue-200'
  },
  {
    slug: 'human-centered-safety-systems',
    name: 'Human-Centered Safety Systems',
    tagline: 'Orchestrate safety engineering that amplifies human judgment.',
    mission: 'Fuse interpretability, ergonomics, and emotional intelligence into every interaction pattern.',
    promise: 'We prototype safety choreographies that keep frontline teams empowered while automation scales.',
    highlights: [
      'Participatory design labs that translate lived experience into safety guardrails.',
      'Adaptive alerting that calibrates urgency without overwhelming human collaborators.',
      'Resilience playbooks that capture recovery rituals after unexpected system behavior.'
    ],
    metrics: [
      { label: 'Human Trust Index', value: '94%', description: 'confidence scores gathered from inclusive usability councils' },
      { label: 'Safety Intervention Time', value: '12s', description: 'average time to confidently intervene during critical events' },
      { label: 'Fatigue Reduction', value: '37%', description: 'reduction in alert fatigue through adaptive notification design' }
    ],
    programs: [
      { title: 'Safety Studio Labs', description: 'Cross-disciplinary residencies combining ergonomics, ML assurance, and service design.' },
      { title: 'Empathy Telemetry', description: 'Signal processing pipelines that translate human sentiment into actionable safeguards.' },
      { title: 'Reflection Rooms', description: 'Guided retrospectives that encode lessons into continuously improving guardrails.' }
    ],
    experiences: [
      { title: 'Immersive Incident Theater', description: 'Mixed reality walkthroughs that rehearse crisis moments before they happen.' },
      { title: 'Care Protocol Board', description: 'Shared canvas aligning mental load, decision authority, and escalation routes.' },
      { title: 'Safety Momentum Dashboard', description: 'Narrative metrics spotlighting how interventions improved human wellbeing.' }
    ],
    callToAction: 'Schedule a safety dramaturgy sprint with our human factors researchers.',
    gradientFrom: 'from-pink-500/30',
    gradientTo: 'to-purple-500/40',
    accent: 'text-pink-200'
  },
  {
    slug: 'privacy-first-federated-intelligence',
    name: 'Privacy-First Federated Intelligence',
    tagline: 'Deliver distributed intelligence without compromising dignity.',
    mission: 'Combine federated learning, differential privacy, and rights-centered governance as a single practice.',
    promise: 'We design data collaborations that protect communities while unlocking collective intelligence.',
    highlights: [
      'Federated architectures that keep sensitive insights localized and encrypted.',
      'Consent choreography with transparent dashboards for every participant cohort.',
      'Adaptive privacy budgets that respond to shifting cultural and regulatory expectations.'
    ],
    metrics: [
      { label: 'Privacy Budget Integrity', value: '100%', description: 'no depletion events across rolling twelve month windows' },
      { label: 'Participant Retention', value: '93%', description: 'communities choosing to remain inside federated programs' },
      { label: 'Insight Latency', value: 'Sub-1h', description: 'time from encrypted signal ingestion to actionable reporting' }
    ],
    programs: [
      { title: 'Cohort Commons Studio', description: 'Codesigned privacy agreements reflecting cultural nuance and digital rights.' },
      { title: 'Encrypted Insight Exchange', description: 'Secure analytics marketplace with built-in fairness instrumentation.' },
      { title: 'Consent Resonance Lab', description: 'Storytelling engines that keep communities informed about data use and benefits.' }
    ],
    experiences: [
      { title: 'Privacy Lighthouse', description: 'Ambient visual channel broadcasting protections, policies, and alerts.' },
      { title: 'Federated Harmony Table', description: 'Interactive board aligning institutions on shared learning objectives.' },
      { title: 'Rights Pulse Tracker', description: 'Sentiment sensing and rights impact telemetry across all cohorts.' }
    ],
    callToAction: 'Co-create a federated intelligence blueprint that centers consent and reciprocity.',
    gradientFrom: 'from-emerald-400/25',
    gradientTo: 'to-cyan-500/30',
    accent: 'text-emerald-200'
  },
  {
    slug: 'ethical-autonomy-validation',
    name: 'Ethical Autonomy Validation',
    tagline: 'Certify autonomous systems with rigorous moral foresight.',
    mission: 'Blend scenario simulation, counterfactual analysis, and normative reasoning into validation pipelines.',
    promise: 'We author validation rituals that test edge cases across sociotechnical boundaries before deployment.',
    highlights: [
      'Autonomy sandboxes that stage contested dilemmas for multi-perspective evaluation.',
      'Counterfactual scenario engines exploring moral trade-offs at scale.',
      'Governance ledgers preserving deliberation trails for each decision artifact.'
    ],
    metrics: [
      { label: 'Scenario Coverage', value: '5k+', description: 'ethical dilemmas rehearsed across continuous simulation ensembles' },
      { label: 'Normative Diversity', value: '18 cohorts', description: 'participating councils contributing moral reasoning viewpoints' },
      { label: 'Certification Cycle', value: '45 days', description: 'average time from scenario library update to validated release' }
    ],
    programs: [
      { title: 'Autonomy Arena', description: 'Live simulation theater for testing moral edge cases with stakeholders.' },
      { title: 'Values Mapping Studio', description: 'Workshops translating community principles into measurable guardrails.' },
      { title: 'Decision Ledger Guild', description: 'Maintains tamper-evident records of deliberation, testing, and approvals.' }
    ],
    experiences: [
      { title: 'Ethics Observatory', description: 'Panoramic visualization layering outcomes, trade-offs, and moral rationales.' },
      { title: 'Critical Response Table', description: 'Structured debriefing environment for contested autonomy incidents.' },
      { title: 'Accountability Chorus', description: 'Rotating councils narrating why decisions meet social expectations.' }
    ],
    callToAction: 'Enroll your autonomy program in a full-spectrum ethical validation residency.',
    gradientFrom: 'from-amber-400/30',
    gradientTo: 'to-red-500/30',
    accent: 'text-amber-200'
  },
  {
    slug: 'planetary-compute-stewardship',
    name: 'Planetary Compute Stewardship',
    tagline: 'Balance computational ambition with ecological responsibility.',
    mission: 'Weave carbon intelligence, hardware optimization, and circular energy practices together.',
    promise: 'We map supply chains, cooling topologies, and renewable orchestration into stewarded compute estates.',
    highlights: [
      'Energy choreography aligning workloads with regenerative infrastructure windows.',
      'Materials traceability scoring each component against circular economy goals.',
      'Ecological impact storytelling that keeps boards accountable to planetary thresholds.'
    ],
    metrics: [
      { label: 'Carbon Intensity', value: '-62%', description: 'net reduction across AI training and inference portfolios' },
      { label: 'Renewable Coverage', value: '87%', description: 'compute hours synchronized with regenerative energy sources' },
      { label: 'Lifecycle Circularity', value: '78%', description: 'hardware assets recovered, repurposed, or recycled responsibly' }
    ],
    programs: [
      { title: 'Green Compute Atelier', description: 'Designs heat recovery, workload placement, and carbon-aware scheduling strategies.' },
      { title: 'Planetary Scorecard Lab', description: 'Creates ecological ledgers tying compute choices to global climate commitments.' },
      { title: 'Regenerative Procurement Guild', description: 'Negotiates supply agreements centered on circular and ethical sourcing.' }
    ],
    experiences: [
      { title: 'Ecology Command Center', description: 'Live environmental telemetry aligning compute demand with planetary signals.' },
      { title: 'Carbon Story Studio', description: 'Narrative exhibits translating sustainability data into leadership commitments.' },
      { title: 'Stewardship Pledging Forum', description: 'Collective agreements aligning technologists, communities, and investors.' }
    ],
    callToAction: 'Host a planetary stewardship council to redesign your compute footprint.',
    gradientFrom: 'from-emerald-500/30',
    gradientTo: 'to-sky-500/30',
    accent: 'text-emerald-100'
  },
  {
    slug: 'cultural-linguistic-equity-models',
    name: 'Cultural-Linguistic Equity Models',
    tagline: 'Engineer language systems that honor plural voices.',
    mission: 'Infuse linguistic justice, community governance, and cultural resonance into model design.',
    promise: 'We co-create multilingual pipelines where communities steward their own representation.',
    highlights: [
      'Community annotation cooperatives that set narrative priorities and guardrails.',
      'Dialect-aware modeling that protects nuance and context in every interface.',
      'Cultural evaluation circuits ensuring outputs uplift rather than erase identities.'
    ],
    metrics: [
      { label: 'Representation Coverage', value: '132 dialects', description: 'documented and actively stewarded through open cooperatives' },
      { label: 'Community Satisfaction', value: '4.8/5', description: 'feedback from storytellers, educators, and civic partners' },
      { label: 'Cultural Preservation Grants', value: '48', description: 'micro-grants issued to sustain ongoing language stewardship' }
    ],
    programs: [
      { title: 'Polyphonic Studio', description: 'Collaborative space where communities script dataset ethics and tonal guidelines.' },
      { title: 'Narrative Weave Lab', description: 'Builds cultural evaluation suites with qualitative and quantitative balance.' },
      { title: 'Equity Residency', description: 'Long-term partnership embedding community curators inside the model lifecycle.' }
    ],
    experiences: [
      { title: 'Storytelling Amphitheater', description: 'Immersive installations showcasing voices, textures, and semantic nuance.' },
      { title: 'Cultural Integrity Dashboard', description: 'Live map of inclusion metrics and narrative resonance.' },
      { title: 'Community Governance Circle', description: 'Deliberative forum where stewards approve model updates.' }
    ],
    callToAction: 'Launch a cultural equity residency with our multilingual research teams.',
    gradientFrom: 'from-violet-500/30',
    gradientTo: 'to-fuchsia-500/30',
    accent: 'text-violet-200'
  },
  {
    slug: 'longitudinal-impact-forecasting',
    name: 'Longitudinal Impact Forecasting',
    tagline: 'Anticipate societal impact with living foresight systems.',
    mission: 'Blend causal inference, participatory futures, and ethics of care into forecasting rituals.',
    promise: 'We craft observatories that monitor how AI interventions ripple across decades.',
    highlights: [
      'Living models that merge quantitative signals with community narrative accounts.',
      'Impact radars mapping second-order effects across social, economic, and ecological systems.',
      'Adaptive governance triggers ensuring forecasts become strategic action, not shelf reports.'
    ],
    metrics: [
      { label: 'Foresight Horizon', value: '25 years', description: 'scenario coverage tracking multi-decade implications' },
      { label: 'Community Co-Researchers', value: '61', description: 'citizen scientists contributing lived expertise into the models' },
      { label: 'Policy Uptake', value: '72%', description: 'forecast insights translated into enacted safeguards or initiatives' }
    ],
    programs: [
      { title: 'Futures Observatory', description: 'Hybrid lab aligning data scientists, ethicists, and storytellers around shared horizons.' },
      { title: 'Signal Commons', description: 'Curated repository of leading indicators with cultural interpretation layers.' },
      { title: 'Governance Trigger Studio', description: 'Designs escalation rituals when forecasts reveal urgent interventions.' }
    ],
    experiences: [
      { title: 'Time Weave Gallery', description: 'Immersive walkway through possible futures and their emotional textures.' },
      { title: 'Impact Resonance Table', description: 'Collaborative mapping of who benefits, who risks, and how to respond.' },
      { title: 'Futures Broadcast', description: 'Periodic storytelling broadcast that keeps stakeholders engaged.' }
    ],
    callToAction: 'Commission a longitudinal foresight atlas for your AI initiatives.',
    gradientFrom: 'from-indigo-500/30',
    gradientTo: 'to-cyan-400/30',
    accent: 'text-indigo-200'
  },
  {
    slug: 'adaptive-reskilling-ecosystems',
    name: 'Adaptive Reskilling Ecosystems',
    tagline: 'Build continuous learning cultures alongside automation.',
    mission: 'Pair capability mapping, mentorship networks, and equitable opportunity into reskilling blueprints.',
    promise: 'We design learning pathways that keep people thriving as intelligent systems evolve.',
    highlights: [
      'Skill constellations translating organizational goals into human development plans.',
      'Mentor marketplaces matching experts with emerging talent in real time.',
      'Equity dashboards monitoring inclusion, advancement, and retention signals.'
    ],
    metrics: [
      { label: 'Learning Velocity', value: '3.4x', description: 'faster capability acquisition compared to legacy programs' },
      { label: 'Mobility Rate', value: '46%', description: 'participants transitioning into future-critical roles within a year' },
      { label: 'Inclusion Index', value: '92/100', description: 'representation and belonging scores across learning pathways' }
    ],
    programs: [
      { title: 'Capability Cartography Lab', description: 'Maps strengths, aspirations, and strategic needs to architect learning flows.' },
      { title: 'Mentor Signal Exchange', description: 'Connects talent with coaches, peer circles, and reflective practice rooms.' },
      { title: 'Equity Progress Studio', description: 'Monitors fairness signals ensuring every cohort accesses meaningful opportunities.' }
    ],
    experiences: [
      { title: 'Learning Orbit Hub', description: 'Command center visualizing pathways, milestones, and momentum.' },
      { title: 'Story-of-Work Theater', description: 'Narrative series celebrating growth and capturing qualitative insight.' },
      { title: 'Belonging Pulse Garden', description: 'Interactive installation translating inclusion data into living color.' }
    ],
    callToAction: 'Design an adaptive reskilling constellation tailored to your teams.',
    gradientFrom: 'from-sky-500/30',
    gradientTo: 'to-emerald-400/30',
    accent: 'text-sky-200'
  },
  {
    slug: 'open-source-assurance-networks',
    name: 'Open-Source Assurance Networks',
    tagline: 'Elevate community-driven reliability for critical AI projects.',
    mission: 'Blend open governance, reproducibility, and cooperative funding into trustable ecosystems.',
    promise: 'We architect assurance practices that keep open innovation resilient and accountable.',
    highlights: [
      'Signature verification pipelines validating community contributions and artifacts.',
      'Transparency scorecards aligning maintainers, adopters, and regulators.',
      'Collective security drills rehearsing coordinated responses to vulnerabilities.'
    ],
    metrics: [
      { label: 'Reproducibility Coverage', value: '96%', description: 'projects with deterministic builds and traceable provenance' },
      { label: 'Community Steward Hours', value: '18k', description: 'annual contributions supporting assurance infrastructure' },
      { label: 'Response Latency', value: '2.1h', description: 'average time from vulnerability discovery to published mitigation' }
    ],
    programs: [
      { title: 'Assurance Guild', description: 'Coordinates maintainers, researchers, and adopters around shared safety rituals.' },
      { title: 'Proof Integrity Lab', description: 'Establishes verifiable pipelines for models, datasets, and evaluation suites.' },
      { title: 'Resilience Festival', description: 'Annual gathering rehearsing incident response and celebrating responsible releases.' }
    ],
    experiences: [
      { title: 'Transparency Arcade', description: 'Interactive exhibits showcasing lineage, validation, and contributor impact.' },
      { title: 'Assurance War Room', description: 'Live simulation room preparing for coordinated vulnerability handling.' },
      { title: 'Funding Constellation Map', description: 'Visualizes sustainable investment across the open-source stack.' }
    ],
    callToAction: 'Co-create an assurance guild that fortifies your open innovation strategy.',
    gradientFrom: 'from-cyan-400/30',
    gradientTo: 'to-blue-500/30',
    accent: 'text-cyan-200'
  },
  {
    slug: 'embodied-robotics-care-standards',
    name: 'Embodied Robotics Care Standards',
    tagline: 'Design robotics ecosystems grounded in care and dignity.',
    mission: 'Integrate ethics of touch, accessibility, and emotional resonance into robotics programs.',
    promise: 'We choreograph interactions so robotic teammates uplift human flourishing.',
    highlights: [
      'Care protocols co-authored with clinicians, caregivers, and recipients of support.',
      'Accessibility audits covering spatial design, multimodal interfaces, and sensory comfort.',
      'Emotional attunement frameworks balancing automation with empathetic presence.'
    ],
    metrics: [
      { label: 'Care Satisfaction', value: '4.9/5', description: 'families and clinicians reporting trust in robotic teammates' },
      { label: 'Accessibility Coverage', value: '98%', description: 'environments meeting inclusive design criteria across personas' },
      { label: 'Attunement Score', value: '92', description: 'emotional resonance measured through co-experience journaling' }
    ],
    programs: [
      { title: 'Care Ethnography Lab', description: 'Immerses robotics teams in lived experience to surface nuance and boundaries.' },
      { title: 'Sensory Comfort Studio', description: 'Iterates tactile, audio, and visual cues to honor diverse accessibility needs.' },
      { title: 'Dignity Protocol Guild', description: 'Maintains shared standards for consent, autonomy, and restorative practice.' }
    ],
    experiences: [
      { title: 'Care Journey Simulator', description: '360° walkthrough aligning robotics behavior with human comfort.' },
      { title: 'Restorative Commons', description: 'Community forum processing emotions, adjustments, and co-evolution.' },
      { title: 'Attunement Atlas', description: 'Living map of sensory cues, rituals, and trust-building moments.' }
    ],
    callToAction: 'Partner with us to codify robotics care standards rooted in dignity.',
    gradientFrom: 'from-rose-400/30',
    gradientTo: 'to-amber-400/25',
    accent: 'text-rose-200'
  },
  {
    slug: 'crisis-response-decision-fabric',
    name: 'Crisis Response Decision Fabric',
    tagline: 'Deliver real-time intelligence that respects urgency and humanity.',
    mission: 'Fuse predictive analytics, field expertise, and ethical triage protocols into decision fabrics.',
    promise: 'We engineer response rooms where data, empathy, and logistics move in unison.',
    highlights: [
      'Unified command centers aligning humanitarian, civic, and technical responders.',
      'Predictive surge models anticipating resource gaps before they appear.',
      'Ethical triage guidelines balancing speed with fairness in every choice.'
    ],
    metrics: [
      { label: 'Response Synchrony', value: '92%', description: 'coordinated actions executed within shared decision windows' },
      { label: 'Resource Precision', value: '88%', description: 'aid delivered to the exact communities identified by predictive models' },
      { label: 'Equity Safeguards', value: '100%', description: 'triage steps documented with fairness and rights oversight' }
    ],
    programs: [
      { title: 'Response Fabric Studio', description: 'Designs orchestrated workflows linking field signals to command intelligence.' },
      { title: 'Triage Ethics Lab', description: 'Co-creates principled decision protocols with humanitarian partners.' },
      { title: 'Aftercare Commons', description: 'Supports long-tail recovery through data-informed, community-led planning.' }
    ],
    experiences: [
      { title: 'Crisis Theater', description: 'High fidelity simulation aligning interagency coordination and empathy.' },
      { title: 'Surge Insight Wall', description: 'Dynamic visualization forecasting hotspots and resource requirements.' },
      { title: 'Recovery Resonance Garden', description: 'Reflective environment honoring stories, healing, and accountability.' }
    ],
    callToAction: 'Assemble a decision fabric rehearsal focused on your highest-risk scenarios.',
    gradientFrom: 'from-orange-500/30',
    gradientTo: 'to-red-400/25',
    accent: 'text-orange-200'
  },
  {
    slug: 'civic-tech-participation',
    name: 'Civic Tech Participation',
    tagline: 'Invite residents to co-create digital public goods.',
    mission: 'Blend participatory design, open data, and collective intelligence in civic platforms.',
    promise: 'We architect civic ecosystems where communities direct priorities and witness results.',
    highlights: [
      'Neighborhood councils that steer product roadmaps and accountability cadences.',
      'Accessible open data portals offering storytelling, analysis, and commentary tools.',
      'Participatory budgeting engines linking insights to tangible civic investment.'
    ],
    metrics: [
      { label: 'Resident Participation', value: '68k', description: 'active contributors shaping civic digital services' },
      { label: 'Open Data Satisfaction', value: '4.6/5', description: 'community feedback on clarity, usability, and trust' },
      { label: 'Policy Co-creation Rate', value: '73%', description: 'initiatives developed with residents through transparent deliberation' }
    ],
    programs: [
      { title: 'Democracy Studio', description: 'Codesigns civic journeys where residents collaborate with public servants.' },
      { title: 'Open Evidence Lab', description: 'Transforms civic data into storytelling layers anyone can remix.' },
      { title: 'Participation Accelerator', description: 'Supports grassroots organizers with analytics, microgrants, and facilitation.' }
    ],
    experiences: [
      { title: 'Commons Forum', description: 'Hybrid forum connecting neighborhoods, officials, and researchers.' },
      { title: 'Civic Storywall', description: 'Media installation showing how participation alters outcomes over time.' },
      { title: 'Policy Studio Sprint', description: 'Design challenges where residents test prototypes and protocols.' }
    ],
    callToAction: 'Launch a civic participation accelerator tailored to your city.',
    gradientFrom: 'from-sky-400/30',
    gradientTo: 'to-indigo-500/30',
    accent: 'text-sky-100'
  },
  {
    slug: 'research-to-production-transfer',
    name: 'Research-to-Production Transfer',
    tagline: 'Move breakthroughs into practice without losing integrity.',
    mission: 'Unite lab rigor, product velocity, and responsible deployment tooling.',
    promise: 'We orchestrate technology transfer rituals that keep ethics and excellence intact.',
    highlights: [
      'Alignment frameworks bridging exploratory science and production-grade resilience.',
      'Model release choreography capturing documentation, testing, and stakeholder review.',
      'Impact retrospectives ensuring deployed systems continue learning from the field.'
    ],
    metrics: [
      { label: 'Transfer Success Rate', value: '89%', description: 'research assets graduating into production with safeguards intact' },
      { label: 'Release Documentation', value: '100%', description: 'deployments accompanied by living technical and ethical dossiers' },
      { label: 'Post-Launch Improvement', value: '63%', description: 'enhancements driven by ongoing monitoring and feedback' }
    ],
    programs: [
      { title: 'Bridge Lab Residency', description: 'Embeds researchers with product teams to align roadmaps and guardrails.' },
      { title: 'Integrity Release Desk', description: 'Coordinates approvals, red-teaming, and readiness assessments.' },
      { title: 'Field Learning Loop', description: 'Captures real-world signals and routes them back to research sprints.' }
    ],
    experiences: [
      { title: 'Launch Observatory', description: 'Unified command room for ethically aligned release rehearsals.' },
      { title: 'Impact Story Studio', description: 'Documentation theater translating technical milestones into human narratives.' },
      { title: 'Continuity Commons', description: 'Space where field teams share lived realities with scientists.' }
    ],
    callToAction: 'Design a transfer residency that keeps your breakthroughs responsible at scale.',
    gradientFrom: 'from-blue-500/30',
    gradientTo: 'to-emerald-400/30',
    accent: 'text-emerald-100'
  },
];

const narrativeContexts: NarrativeContext[] = [
  {
    slug: 'global-initiative',
    label: 'Global Initiative',
    eyebrow: 'Transnational Playbook',
    story: 'Activates multinational alliances to harmonize oversight, licensing, and research sharing.',
    emotionalTone: 'Designed for leaders orchestrating across borders with urgency and optimism.',
    ecosystem: 'Policy makers, research consortia, civic auditors, and funding coalitions.',
    timeHorizon: '36-month diplomatic delivery arc',
    energy: 'Rising momentum to orchestrate globally resonant accountability loops.',
    commitments: [
      'Coordinate cross-border regulatory alignment and ethics charters.',
      'Stand up neutral convening councils for dispute resolution.',
      'Document public-interest impact metrics with civic translators.'
    ],
    persona: 'International alliance directors',
    recommendedSignals: [
      'Global policy watchers reporting on AI sovereignty trends.',
      'Shared sandboxes for cross-national testing and evaluation.',
      'Multilingual transparency interfaces with accessible narratives.'
    ],
    activation: 'Schedule a joint summit rehearsal and artifact review sprint.',
    highlight: 'Coordinates global readiness with luminous diplomatic choreography.',
    signatureVisual: 'Aurora gradients bending across orbital maps with flowing treaty glyphs.',
    cluster: 'Global Collaboration'
  },
  {
    slug: 'enterprise-transformation',
    label: 'Enterprise Transformation',
    eyebrow: 'Executive Transformation Brief',
    story: 'Aligns corporate strategy, responsible AI, and change management into one operating rhythm.',
    emotionalTone: 'Crafted for executives balancing innovation appetite with risk discipline.',
    ecosystem: 'Board members, C-suite leaders, legal, security, and venture partners.',
    timeHorizon: '18-month modernization sprint',
    energy: 'Decisive leadership energy bringing future-ready operations to life.',
    commitments: [
      'Embed responsible AI scorecards into every strategic milestone.',
      'Cultivate internal guilds that maintain compliance, safety, and trust.',
      'Invest in workforce upskilling with measurable inclusion outcomes.'
    ],
    persona: 'Chief transformation officers',
    recommendedSignals: [
      'Executive steering dashboards linking ethics and profitability.',
      'Internal storytelling channels celebrating responsible innovation wins.',
      'Risk heatmaps uniting legal, security, and research observability.'
    ],
    activation: 'Host an executive studio intensive to align ambition and safeguards.',
    highlight: 'Turns corporate modernization into a responsible, measurable choreography.',
    signatureVisual: 'Prismatic skyline overlays with kinetic data ribbons and leadership silhouettes.',
    cluster: 'Enterprise Evolution'
  },
  {
    slug: 'academic-laboratory',
    label: 'Academic Laboratory',
    eyebrow: 'Scholarly Co-Lab Agenda',
    story: 'Connects multidisciplinary labs to accelerate discovery with community accountability.',
    emotionalTone: 'Optimized for principal investigators navigating grantmaking and societal impact.',
    ecosystem: 'Faculty, graduate researchers, community partners, libraries, and ethics boards.',
    timeHorizon: '5-year research impact arc',
    energy: 'Curious, rigorous momentum amplifying scholarly breakthroughs with care.',
    commitments: [
      'Integrate community review boards into experimental design.',
      'Document reproducibility artifacts alongside each publication.',
      'Invest in open science infrastructure and collaborative datasets.'
    ],
    persona: 'Research directors and lab founders',
    recommendedSignals: [
      'Open access metrics correlating with public engagement.',
      'Student fellowship pathways into responsible AI careers.',
      'Shared instrumentation catalogs reducing redundant investment.'
    ],
    activation: 'Plan a co-research residency aligning labs, libraries, and civic partners.',
    highlight: 'Positions academic inquiry as a collective, transparent endeavor.',
    signatureVisual: 'Lightfield laboratories with layered chalkboard equations and archival textures.',
    cluster: 'Academic Innovation'
  },
  {
    slug: 'civic-consortium',
    label: 'Civic Consortium',
    eyebrow: 'Public Interest Coalition Map',
    story: 'Unites municipalities, nonprofits, and residents in shared digital stewardship.',
    emotionalTone: 'Built for civic entrepreneurs who believe technology must deepen democracy.',
    ecosystem: 'City leaders, grassroots organizers, librarians, journalists, and residents.',
    timeHorizon: '24-month civic transformation arc',
    energy: 'Participatory energy grounded in mutual care and accountability.',
    commitments: [
      'Create resident-led oversight councils for every AI deployment.',
      'Open-source civic datasets with privacy-preserving safeguards.',
      'Publish public interest impact statements at every milestone.'
    ],
    persona: 'Civic technologists and public innovation directors',
    recommendedSignals: [
      'Civic feedback loops integrated into product roadmaps.',
      'Neighborhood storytelling platforms capturing lived experience.',
      'Open procurement scorecards with ethics and equity weighting.'
    ],
    activation: 'Convene a civic design sprint to map community guardianship roles.',
    highlight: 'Centers residents as co-authors of equitable civic technology.',
    signatureVisual: 'Vibrant city grids with participatory nodes and illuminated commons.',
    cluster: 'Civic Transformation'
  },
  {
    slug: 'healthcare-alliance',
    label: 'Healthcare Alliance',
    eyebrow: 'Care Systems Blueprint',
    story: 'Bridges clinicians, researchers, and patient advocates around trustworthy AI.',
    emotionalTone: 'Grounded in empathy, safety, and clinical excellence.',
    ecosystem: 'Hospitals, research institutes, care networks, insurers, and patient advocacy groups.',
    timeHorizon: '30-month care delivery evolution',
    energy: 'Compassionate momentum balancing innovation with bedside realities.',
    commitments: [
      'Stand up ethics consultation desks for every AI-assisted workflow.',
      'Publish explainable care plans that patients can question and refine.',
      'Track wellbeing outcomes alongside clinical performance metrics.'
    ],
    persona: 'Chief medical information and innovation officers',
    recommendedSignals: [
      'Bedside simulation results informing product roadmaps.',
      'Patient experience councils scoring trust, clarity, and agency.',
      'Safety registries documenting longitudinal impact of AI interventions.'
    ],
    activation: 'Host a care futures residency blending clinicians and technologists.',
    highlight: 'Elevates healing by weaving empathy into data-driven excellence.',
    signatureVisual: 'Bioluminescent care pathways with gentle pulses and human silhouettes.',
    cluster: 'Care & Wellbeing'
  },
  {
    slug: 'climate-tech',
    label: 'Climate Tech Coalition',
    eyebrow: 'Regenerative Systems Deck',
    story: 'Aligns climate scientists, engineers, and communities to deploy regenerative AI.',
    emotionalTone: 'Fueled by urgency, stewardship, and collective courage.',
    ecosystem: 'Climate labs, energy providers, policy councils, and indigenous stewards.',
    timeHorizon: '20-year regenerative roadmap',
    energy: 'Restorative energy mobilizing global decarbonization commitments.',
    commitments: [
      'Instrument carbon-aware operations across the entire lifecycle.',
      'Fund community guardians to monitor ecological and cultural impact.',
      'Share open methodologies that accelerate global climate learning.'
    ],
    persona: 'Climate innovation strategists',
    recommendedSignals: [
      'Real-time carbon intensity dashboards accessible to the public.',
      'Community co-benefit indexes guiding project prioritization.',
      'Scenario explorers revealing climate justice trade-offs.'
    ],
    activation: 'Plan a regenerative systems studio with climate and community leaders.',
    highlight: 'Transforms climate ambition into actionable, shared stewardship.',
    signatureVisual: 'Verdant energy webs interlaced with flowing water and atmospheric gradients.',
    cluster: 'Climate Action'
  },
  {
    slug: 'financial-stewardship',
    label: 'Financial Stewardship Network',
    eyebrow: 'Trustworthy Finance Brief',
    story: 'Connects finance, regulation, and community stakeholders for ethical intelligence.',
    emotionalTone: 'Pragmatic and principled, balancing fiduciary duty with societal wellbeing.',
    ecosystem: 'Banks, fintech innovators, regulators, credit unions, and community investors.',
    timeHorizon: '15-month responsible finance sprint',
    energy: 'Steady momentum aligning transparency and performance.',
    commitments: [
      'Publish fairness analytics for every lending and underwriting model.',
      'Co-govern investment criteria with community and climate advocates.',
      'Deliver quarterly accountability briefings in accessible language.'
    ],
    persona: 'Chief risk and impact officers',
    recommendedSignals: [
      'Shared responsibility dashboards for regulators and communities.',
      'Transparency portals detailing model lineage and audit findings.',
      'Community benefit agreements linked to financial outcomes.'
    ],
    activation: 'Run a finance trust lab aligning compliance, innovation, and equity.',
    highlight: 'Builds an economy of trust through luminous financial intelligence.',
    signatureVisual: 'Geometric ledger landscapes with luminescent capital flows and community nodes.',
    cluster: 'Responsible Finance'
  },
  {
    slug: 'education-futures',
    label: 'Education Futures',
    eyebrow: 'Learning Transformation Map',
    story: 'Reimagines lifelong learning with adaptive, equitable intelligence.',
    emotionalTone: 'Hopeful, learner-centered, and boldly experimental.',
    ecosystem: 'Schools, universities, edtech founders, workforce partners, and families.',
    timeHorizon: '10-year learning transformation arc',
    energy: 'Joyful energy uplifting curiosity, equity, and future readiness.',
    commitments: [
      'Codify learner data rights and transparent consent rituals.',
      'Invest in educator reskilling for human-AI collaboration.',
      'Measure belonging, agency, and wellbeing alongside academic outcomes.'
    ],
    persona: 'Chief learning officers and education architects',
    recommendedSignals: [
      'Learner journey maps capturing qualitative and quantitative milestones.',
      'Educator innovation guilds sharing responsible practices.',
      'Community design labs prototyping inclusive learning experiences.'
    ],
    activation: 'Launch a learning futures studio aligning classrooms and communities.',
    highlight: 'Transforms education into a living ecosystem of agency and care.',
    signatureVisual: 'Chromatic learning constellations orbiting around collaborative studios.',
    cluster: 'Education Futures'
  },
  {
    slug: 'humanitarian-response',
    label: 'Humanitarian Response Collective',
    eyebrow: 'Resilience Mobilization Brief',
    story: 'Connects NGOs, governments, and frontline communities with anticipatory intelligence.',
    emotionalTone: 'Steeped in solidarity, urgency, and restorative care.',
    ecosystem: 'Relief agencies, local responders, logistics partners, and civic volunteers.',
    timeHorizon: 'Rapid response with long-tail recovery horizons',
    energy: 'Courageous energy balancing swift action with human dignity.',
    commitments: [
      'Publish ethical triage frameworks and community oversight structures.',
      'Ensure open crisis data is respectful, consent-driven, and contextual.',
      'Document recovery progress with community-authored storytelling.'
    ],
    persona: 'Emergency coordination leads',
    recommendedSignals: [
      'Humanitarian telemetry hubs blending predictive and qualitative signals.',
      'Community advisory circles validating decisions in real time.',
      'Resilience indexes that track healing beyond immediate response.'
    ],
    activation: 'Design a resilience rehearsal to align technology with compassionate action.',
    highlight: 'Builds crisis intelligence that never forgets the people it serves.',
    signatureVisual: 'Kinetic relief maps with warm light trails moving toward communities.',
    cluster: 'Humanitarian Intelligence'
  },
  {
    slug: 'creative-economies',
    label: 'Creative Economies',
    eyebrow: 'Imagination Engine Deck',
    story: 'Supports artists, media makers, and cultural entrepreneurs with ethical AI tooling.',
    emotionalTone: 'Playful yet protective, honoring creativity and rights.',
    ecosystem: 'Studios, collectives, publishers, rights organizations, and patrons.',
    timeHorizon: 'Multi-season creative acceleration arc',
    energy: 'Vibrant momentum celebrating originality and equitable futures.',
    commitments: [
      'Guarantee provenance and attribution across creative supply chains.',
      'Design equitable compensation models with artist cooperatives.',
      'Curate safe experimentation spaces with restorative governance.'
    ],
    persona: 'Chief creative officers and cultural strategists',
    recommendedSignals: [
      'Creative commons analytics showing collaboration health.',
      'Rights management ledgers visible to artists and audiences alike.',
      'Ethical experimentation guidelines for generative media.'
    ],
    activation: 'Host an imagination engine lab bridging artists and technologists.',
    highlight: 'Ensures imagination thrives with integrity and reciprocity.',
    signatureVisual: 'Prismatic studio landscapes with flowing pigment waves and typographic motifs.',
    cluster: 'Creative Futures'
  },
  {
    slug: 'public-sector-modernization',
    label: 'Public Sector Modernization',
    eyebrow: 'Government Innovation Atlas',
    story: 'Equips agencies with ethical AI playbooks rooted in service excellence.',
    emotionalTone: 'Measured, mission-driven, and transparent.',
    ecosystem: 'Government innovators, auditors, service designers, and civil society.',
    timeHorizon: '3-year modernization cadence',
    energy: 'Steady stewardship energy delivering services people can trust.',
    commitments: [
      'Mandate algorithmic impact assessments with public comment windows.',
      'Invest in digital literacy for frontline public servants.',
      'Publish service performance dashboards with accountability loops.'
    ],
    persona: 'Chief digital officers and innovation leads',
    recommendedSignals: [
      'Procurement pipelines rewarding ethics and accessibility.',
      'Service labs running co-design residencies with constituents.',
      'Open source reference architectures improving interoperability.'
    ],
    activation: 'Organize a government innovation atlas workshop with cross-agency teams.',
    highlight: 'Transforms bureaucratic complexity into transparent, human-centered service.',
    signatureVisual: 'Civic atriums with translucent data planes and collaborative tables.',
    cluster: 'Public Sector Innovation'
  },
  {
    slug: 'research-to-production',
    label: 'Research-to-Production Corridor',
    eyebrow: 'Translational Impact Deck',
    story: 'Links labs and product teams for responsible deployment at scale.',
    emotionalTone: 'Focused, iterative, and integrity-driven.',
    ecosystem: 'R&D leads, product managers, ML engineers, risk officers, and community reviewers.',
    timeHorizon: '12-month translational pipeline',
    energy: 'Forward energy that keeps discovery and delivery in harmony.',
    commitments: [
      'Maintain living documentation for every model, dataset, and evaluation.',
      'Stage cross-functional reviews before each milestone release.',
      'Instrument post-launch feedback loops with transparent reporting.'
    ],
    persona: 'Translational research leaders',
    recommendedSignals: [
      'Evidence-based readiness scoring for each deployment.',
      'Cross-functional retrospectives capturing ethical learnings.',
      'Community pilot programs validating usefulness and safety.'
    ],
    activation: 'Kick off a translational corridor workshop aligning research and product.',
    highlight: 'Ensures breakthroughs reach people without losing rigor or care.',
    signatureVisual: 'Bridged campuses with luminous pathways between lab and city.',
    cluster: 'Translational Excellence'
  }
];

const enrichMetric = (metric: AtlasMetric, persona: string): AtlasMetric => ({
  ...metric,
  description: `${metric.description}. Tailored for ${persona.toLowerCase()}.`
});

const coreAtlasBlueprints: AtlasBlueprint[] = focusAreas.flatMap((focus) =>
  narrativeContexts.map((angle) => ({
    slug: `${focus.slug}-${angle.slug}`,
    title: `${focus.name} for ${angle.label}`,
    hero: {
      eyebrow: angle.eyebrow,
      heading: focus.name,
      subheading: `${focus.mission} ${angle.story}`,
      visualCue: angle.signatureVisual,
      gradientFrom: focus.gradientFrom,
      gradientTo: focus.gradientTo,
      accent: focus.accent
    },
    summary: `${focus.tagline} ${angle.story} ${angle.emotionalTone}`,
    story: `${angle.highlight} ${focus.promise}`,
    focusArea: focus.name,
    contextLabel: angle.label,
    cluster: angle.cluster,
    persona: angle.persona,
    ecosystem: angle.ecosystem,
    timeHorizon: angle.timeHorizon,
    momentum: angle.energy,
    commitments: [...angle.commitments, ...focus.highlights.slice(0, 1)],
    highlights: focus.highlights,
    metrics: focus.metrics.map((metric) => enrichMetric(metric, angle.persona)),
    programs: focus.programs,
    experiences: focus.experiences,
    signals: angle.recommendedSignals,
    callToAction: `${focus.callToAction} ${angle.activation}`
  }))
);

type SpotlightTemplate = {
  suffix: string;
  title: (focus: FocusArea) => string;
  eyebrow: string;
  heading: (focus: FocusArea) => string;
  subheading: (focus: FocusArea) => string;
  summary: (focus: FocusArea) => string;
  story: (focus: FocusArea) => string;
  momentum: string;
  commitments: (focus: FocusArea) => string[];
  signals: (focus: FocusArea) => string[];
  callToAction: (focus: FocusArea) => string;
  visualCue: string;
  contextLabel: string;
  cluster: string;
  persona: string;
  ecosystem: string;
  timeHorizon: string;
};

const spotlightTemplates: SpotlightTemplate[] = [
  {
    suffix: 'motion-lab',
    title: (focus) => `${focus.name} Motion Intelligence Lab`,
    eyebrow: 'Cinematic Motion Lab',
    heading: (focus) => `${focus.name} Motion Intelligence Lab`,
    subheading: (focus) => `Animate ${focus.tagline.toLowerCase()} with GPU-accelerated previews.`,
    summary: (focus) =>
      `Rapidly choreograph ${focus.name.toLowerCase()} storyboards with performance diagnostics and responsive cues.`,
    story: (focus) =>
      `Immersive instrumentation keeps ${focus.promise.toLowerCase()} anchored in responsive motion and real-time observability.`,
    momentum: 'Rapid prototyping energy with GPU-accelerated surfaces.',
    commitments: (focus) => [
      `Prototype choreographies that express ${focus.mission.toLowerCase()}.`,
      'Instrument each animation with telemetry for accessibility and frame pacing.',
      'Publish responsive motion specs that adapt to reduced-motion preferences.',
    ],
    signals: () => [
      'Motion QA dashboards measuring frame pacing and layout stability.',
      'Heatmaps revealing focus moments inside the cinematic header journeys.',
      'Accessibility playback reviews capturing reduced-motion outcomes.',
    ],
    callToAction: (focus) =>
      `Book a motion systems pairing session to animate ${focus.name.toLowerCase()} rollouts.`,
    visualCue: 'Holographic motion boards with parallax grids and orbiting nodes.',
    contextLabel: 'Spotlight Journey',
    cluster: 'Immersive Acceleration',
    persona: 'Motion systems directors',
    ecosystem: 'Motion designers, AI engineers, compliance partners, and storytellers.',
    timeHorizon: '6-week cinematic prototype arc',
  },
  {
    suffix: 'field-kit',
    title: (focus) => `${focus.name} Field Deployment Kit`,
    eyebrow: 'Field Deployment Kit',
    heading: (focus) => `${focus.name} Field Deployment Kit`,
    subheading: (focus) => `Operationalize ${focus.tagline.toLowerCase()} across hybrid teams.`,
    summary: (focus) =>
      `Portable rituals that translate ${focus.name.toLowerCase()} practices into on-site activation with cinematic fidelity.`,
    story: (focus) =>
      `Guided enablement ensures ${focus.promise.toLowerCase()} arrives with documentation, training, and trust across every location.`,
    momentum: 'Hands-on enablement energy with quickstart rituals.',
    commitments: () => [
      'Deliver modular enablement crates with offline-first motion documentation.',
      'Codify onboarding ceremonies so each location mirrors the core experience.',
      'Measure adoption with shared success dashboards and readiness scorecards.',
    ],
    signals: () => [
      'Field readiness snapshots capturing enablement progress by location.',
      'Checklist automation linking QA gates to on-site instrumentation.',
      'Community feedback loops summarised in weekly activation digests.',
    ],
    callToAction: (focus) =>
      `Schedule a field kit activation for your ${focus.name.toLowerCase()} coalition.`,
    visualCue: 'Portable pelican cases with glowing instruments and tactile UI tiles.',
    contextLabel: 'Spotlight Journey',
    cluster: 'Operational Enablement',
    persona: 'Program deployment leads',
    ecosystem: 'Implementation partners, site leads, community liaisons, and compliance reviewers.',
    timeHorizon: '90-day adoption runway',
  },
  {
    suffix: 'impact-observatory',
    title: (focus) => `${focus.name} Impact Observatory`,
    eyebrow: 'Impact Review Observatory',
    heading: (focus) => `${focus.name} Impact Observatory`,
    subheading: (focus) => `Quantify how ${focus.tagline.toLowerCase()} shifts behaviour, trust, and outcomes.`,
    summary: (focus) =>
      `Longitudinal insight programs that connect ${focus.name.toLowerCase()} metrics to lived outcomes and civic trust.`,
    story: (focus) =>
      `Evidence studios stitch ${focus.promise.toLowerCase()} into executive, civic, and community scorecards that update in real time.`,
    momentum: 'Insight-driven energy with evidence-backed storytelling.',
    commitments: () => [
      'Publish living scoreboards that merge qualitative and quantitative insight.',
      'Host monthly evidence salons with stakeholders across the ecosystem.',
      'Archive decision trails alongside the metrics that informed them.',
    ],
    signals: () => [
      'Narrative analytics correlating trust shifts with deployment cadence.',
      'Outcome telemetry blending quantitative signals with qualitative diaries.',
      'Regulator-ready packets generated automatically after each review.',
    ],
    callToAction: (focus) =>
      `Commission an impact observatory to keep ${focus.name.toLowerCase()} accountable.`,
    visualCue: 'Observatory domes with layered dashboards and floating evidence tiles.',
    contextLabel: 'Spotlight Journey',
    cluster: 'Evidence Architecture',
    persona: 'Insights and accountability stewards',
    ecosystem: 'Executives, auditors, resident councils, and research fellows.',
    timeHorizon: '12-month evidence cadence',
  },
  {
    suffix: 'executive-bridge',
    title: (focus) => `${focus.name} Executive Bridge`,
    eyebrow: 'Executive Immersion Briefing',
    heading: (focus) => `${focus.name} Executive Bridge`,
    subheading: (focus) => `Align leadership on ${focus.tagline.toLowerCase()} with actionable guardrails.`,
    summary: (focus) =>
      `Immersive leadership briefings translating ${focus.name.toLowerCase()} decisions into shared accountability and motion prototypes.`,
    story: (focus) =>
      `Boardroom immersions rehearse ${focus.promise.toLowerCase()} with scenario planning, governance ledgers, and cinematic walkthroughs.`,
    momentum: 'Strategic leadership energy tuned for fast alignment.',
    commitments: () => [
      'Author executive playbooks that map decisions to accountability rituals.',
      'Simulate critical moments with motion prototypes and mitigation options.',
      'Track commitments with governance ledgers that surface drift instantly.',
    ],
    signals: () => [
      'Executive pulse surveys capturing clarity, confidence, and stewardship.',
      'Scenario rehearsal footage annotated with decision checkpoints.',
      'Governance ledger alerts summarising pending obligations.',
    ],
    callToAction: (focus) =>
      `Book an executive bridge to align leadership on ${focus.name.toLowerCase()} commitments.`,
    visualCue: 'Boardroom horizon lines with holographic agendas and kinetic lighting.',
    contextLabel: 'Spotlight Journey',
    cluster: 'Strategic Stewardship',
    persona: 'Executive transformation partners',
    ecosystem: 'Boards, chiefs of staff, policy leads, and product owners.',
    timeHorizon: 'Quarterly governance sync',
  },
];

const atlasSpotlightBlueprints: AtlasBlueprint[] = focusAreas
  .slice(0, 5)
  .flatMap((focus) =>
    spotlightTemplates.map((template) => ({
      slug: `${focus.slug}-${template.suffix}`,
      title: template.title(focus),
      hero: {
        eyebrow: template.eyebrow,
        heading: template.heading(focus),
        subheading: template.subheading(focus),
        visualCue: template.visualCue,
        gradientFrom: focus.gradientFrom,
        gradientTo: focus.gradientTo,
        accent: focus.accent,
      },
      summary: template.summary(focus),
      story: template.story(focus),
      focusArea: focus.name,
      contextLabel: template.contextLabel,
      cluster: template.cluster,
      persona: template.persona,
      ecosystem: template.ecosystem,
      timeHorizon: template.timeHorizon,
      momentum: template.momentum,
      commitments: template.commitments(focus),
      highlights: focus.highlights,
      metrics: focus.metrics.map((metric) => enrichMetric(metric, template.persona)),
      programs: focus.programs,
      experiences: focus.experiences,
      signals: template.signals(focus),
      callToAction: template.callToAction(focus),
    }))
  );

export const atlasBlueprints: AtlasBlueprint[] = [...coreAtlasBlueprints, ...atlasSpotlightBlueprints];

const atlasBlueprintMap: ReadonlyMap<string, AtlasBlueprint> = new Map(
  atlasBlueprints.map((blueprint) => [blueprint.slug, blueprint] as const),
);

export const ATLAS_BLUEPRINT_TOTAL = coreAtlasBlueprints.length + atlasSpotlightBlueprints.length;

export const getAtlasBlueprint = (slug: string): AtlasBlueprint | undefined =>
  atlasBlueprintMap.get(slug);

export const getAllAtlasSlugs = (): string[] => atlasBlueprints.map((blueprint) => blueprint.slug);
