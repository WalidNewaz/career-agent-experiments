{
  "case" :{
    "subtitle": "Decision-support brief for a stretch-fit: Next.js gap, remote US, comp floor $160k.",
    "owner": "Walid",
  },
  "decision_brief": {
    "verdict": "consider",
    "confidence": {
      "band": "high",
      "score_0_1": 0.78,
      "coverage_note": "Evidence covers core role fit; missing a direct Next.js project artifact and comp alignment confirmation."
    },
    "role_reality": {
      "responsibilities": [
        {
          "description": "Lead frontend architecture and component design decisions",
          "severity": "high",
          "evidence_ids":["evi_003"]
        }
      ],
      "implicit_expectations": [
        {
          "description": "Comfort shipping quickly in startup environment",
          "severity": "high",
          "evidence_ids":["evi_003"]
        }
      ],
    },
    "counterfactuals": [
      {"title":"If team is flexible on Next.js and values architecture/mentorship", "impact":"strongly_positive", "evidence_ids":["evi_001","evi_002"]},
      {"title":"If Next.js is non-negotiable day-1", "impact":"strongly_negative", "evidence_ids":["evi_003"]},
      {"title":"If startup context requires cross-functional scrappiness", "impact":"negative", "evidence_ids":["evi_004"]}
    ],
    "constraints_and_preferences": [
      {"label":"Location policy", "value":"Remote (US)"},
      {"label":"Salary minimum (override)", "value":"$160,000"},
      {"label":"Role rigor", "value":"Medium (startup posting style)"},
      {"label":"Time-to-credibility", "value":"2–3 weeks for Next.js artifact + interview narratives"}
    ],
    "unknowns": [
      {"text":"Does the team treat Next.js as a hard requirement or a preference?", "evidence_ids":[]},
      {"text":"Exact interview loop focus (system design vs framework trivia).", "evidence_ids":[]}
    ],
    "assumptions": [
      {"text":"Candidate can ramp on Next.js quickly due to strong React + architecture background.", "evidence_ids":["evi_005"]},
      {"text":"Hiring manager values mentorship and design systems beyond feature delivery.", "evidence_ids":["evi_002"]}
    ],
    "missing_info": [
      {"text":"Comp band (base/equity) and leveling expectations.", "evidence_ids":["evi_006"]},
      {"text":"Whether role includes ownership of Next.js SSR/ISR patterns day-1.", "evidence_ids":["evi_003"]}
    ],
    "engagement_strategy": {
      "primary_path": {
        "description": "Hiring manager outreach",
        "rationale": ""
      },
      "secondary_path": {
        "description": "Employee referral",
        "rationale": ""
      },
      "fallback_path": {
        "description": "Optimized application",
        "rationale": ""
      },
      "rationale": [
        "Front-door applications may be crowded; direct outreach increases probability of review.",
        "Missing Next.js is a gap best addressed via narrative and quick portfolio proof."
      ]
    }
  },

}
