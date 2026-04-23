const FIGMA_BASE = "https://ritzy-tusk-12212444.figma.site";

const asset = (id) => `${FIGMA_BASE}/${id}.png`;

export const works = [
  {
    slug: "digital-payments",
    shortCode: "01",
    title: "Digital Payments Platform",
    kicker: "Mobile fintech product concept",
    year: "2024",
    intro:
      "Mobile-first payments, KYC-driven access, wallet and utility flows.",
    summary:
      "A mobile digital payments concept designed around trust, verification, and progressive access to financial features.",
    role: "Product and experience design",
    problem:
      "Making regulated payment flows feel simple without hiding compliance rules.",
    approach:
      "Used KYC-led progressive access to structure onboarding, wallet, and payment journeys.",
    outcome:
      "A clearer mobile payments concept where restrictions feel guided rather than blocking.",
    tags: ["Fintech", "Mobile UX", "KYC Flows", "Wallet Design", "Payments Journey"],
    overview: [
      "Financial products have to balance speed and simplicity with security, trust, and compliance. In many payment apps, users only discover restrictions after they attempt something, which creates confusion and friction.",
      "This concept reframed that journey around visible access states so the product feels honest, guided, and predictable from first use.",
    ],
    sections: [
      {
        title: "Design Direction",
        body: [
          "The app is organized around three major user states: pre-KYC users with limited access, users who have completed video KYC, and fully approved users with a wider set of features.",
          "That state-based structure changes the interface meaningfully instead of locking actions without context.",
        ],
      },
      {
        title: "What I Was Solving",
        list: [
          "How to make regulated flows feel transparent rather than obstructive.",
          "How to use progressive access as a product pattern, not just a compliance backend.",
          "How to turn onboarding into a trust-building experience.",
        ],
      },
    ],
    gallery: [
      {
        title: "Card Options",
        description: "Physical and virtual cards introduction.",
        image: asset("0be4bf41d35d039a039c5eb3cb5ca48c7783e4f6"),
      },
      {
        title: "Video KYC",
        description: "Identity verification entry point and guided completion.",
        image: asset("ec1d6cf1f2dea769ce45f72a6abe26f5672aa600"),
      },
      {
        title: "Wallet Overview",
        description: "Balance visibility and wallet-led action hierarchy.",
        image: asset("829ae8fea135415787511ed5f9d7518eb3157b42"),
      },
      {
        title: "Utility Payments",
        description: "Bill-payment flow built around clarity and reassurance.",
        image: asset("294cd531458be001e8f1065eef044ded21b85780"),
      },
      {
        title: "Support Surfaces",
        description: "Help and issue resolution inside the core product journey.",
        image: asset("e66b735a1281897d9ea73369a989f6a48b549c22"),
      },
    ],
  },
  {
    slug: "studio-operations",
    shortCode: "02",
    title: "Studio Project Operations System",
    kicker: "Workflow-driven studio operating system",
    year: "2024",
    intro:
      "Workflow system for projects, shoots, deliverables, and payments.",
    summary:
      "A workflow-driven project and shoot management system for photography studios, built inside a broader studio business platform.",
    role: "Product and workflow experience design",
    problem:
      "Generic project tools do not match multi-event studio workflows with shoots, payments, and deliverables.",
    approach:
      "Designed a workflow-first system spanning project setup, shoot planning, and operational tracking.",
    outcome:
      "A more structured studio operations flow from booking to execution and delivery.",
    tags: [
      "Workflow Design",
      "Dashboard UX",
      "Service Business Tools",
      "Project Planning",
      "Operations Design",
    ],
    overview: [
      "Photography and wedding studios do not operate like standard teams using generic project software. A single client project can include multiple events, multiple photographers, multiple deliverables, and staggered payment milestones.",
      "This system reframes project management as a studio-specific operating system that connects client work, crew coordination, delivery planning, and payments.",
    ],
    sections: [
      {
        title: "Workflow Logic",
        list: [
          "Create the project and define core client details.",
          "Set up multiple shoot events with crew, date, and location.",
          "Define deliverables with timelines and cost logic.",
          "Track delivery and payments inside the same operational flow.",
        ],
      },
      {
        title: "Primary Surfaces",
        list: [
          "Projects dashboard",
          "New Project multi-step creation flow",
          "Shoots management screen",
          "Shoot event detail drawer",
          "Project-level reminders and progress panel",
        ],
      },
    ],
    gallery: [
      {
        title: "Project Details",
        description: "The first step captures project, client, and pricing data.",
        image: asset("c07379a51ef97699ed1012d6c4257dbcf80fe425"),
      },
      {
        title: "Shoot Events",
        description: "Break a project into event-level planning.",
        image: asset("bcfb77456cba5f9b4e646a72dec5079a1841665d"),
      },
      {
        title: "Deliverables",
        description: "Plan output quantities, due dates, and costs.",
        image: asset("8ae69742dfbefd742f03a2aa4a932a6fe6111ffb"),
      },
      {
        title: "Projects Dashboard",
        description: "Operational visibility across all active studio work.",
        image: asset("5a0209f587c9663e6dbbe7b72b4a9dcb3d099d6d"),
      },
      {
        title: "Project Detail Panel",
        description: "A side panel for reminders, payments, and deliverables.",
        image: asset("8ae93da91a928dfef59ccda417f9b0ed4ba91398"),
      },
      {
        title: "Shoot Detail Drawer",
        description: "Event-level planning with assignments and notes.",
        image: asset("b10f2578a387fdc3812a629347b6f281aa8a03fc"),
      },
    ],
  },
  {
    slug: "decentralized-platform",
    shortCode: "03",
    title: "Decentralized Interchain Platform",
    kicker: "Participation platform for Web3 governance",
    year: "2024",
    intro:
      "Governance, staking, portfolio visibility, and transfer flows.",
    summary:
      "A decentralized interchain interface platform designed to make governance, staking, and asset transfers more structured and usable.",
    role: "Product, dashboard, and design system work",
    problem:
      "Web3 flows often feel fragmented, technical, and difficult to trust for mainstream users.",
    approach:
      "Unified governance, staking, transfers, and portfolio visibility inside one dashboard system.",
    outcome:
      "A clearer participation platform that turns protocol actions into more product-like journeys.",
    tags: [
      "Web3 Product Design",
      "Dashboard UX",
      "Governance Flows",
      "Design System",
      "Cross-chain Experience",
    ],
    overview: [
      "Web3 products often ask users to switch between multiple contexts just to understand what they hold, what they can do next, and how participation actually works.",
      "This concept organizes that experience around overview, transfers, staking, and governance so the product feels less like a wallet utility and more like an interchain participation platform.",
    ],
    sections: [
      {
        title: "Core Areas",
        list: [
          "Overview with balance and asset distribution",
          "Guided transfers and swap flows",
          "Staking as a participation and earning layer",
          "Governance proposals, proposal detail, and voting",
        ],
      },
      {
        title: "What I Was Solving",
        list: [
          "How to make decentralized product flows feel more structured and less intimidating.",
          "How to hold portfolio visibility, governance, staking, and transfers inside one coherent system.",
          "How to design governance participation as a readable, decision-oriented experience.",
        ],
      },
    ],
    gallery: [
      {
        title: "Connect Wallet",
        description: "Wallet connection with a branded onboarding gateway.",
        image: asset("54bd10ba0223d1c18901b1b115b01bff981d1b5f"),
        dark: true,
      },
      {
        title: "Dashboard Overview",
        description: "Holdings, balances, and recent activity in one surface.",
        image: asset("b08a0326b47b58c79a8174ff5b70dcc121233921"),
        dark: true,
      },
      {
        title: "Single Transfer",
        description: "A safer token transfer flow with clear inputs.",
        image: asset("944d288d5dc2a2289dc01f657f1d354826f18a51"),
        dark: true,
      },
      {
        title: "Token Swap",
        description: "Swap flow with pricing and slippage awareness.",
        image: asset("5416816af0db22c85af80d9aee564bf8d3351c15"),
        dark: true,
      },
      {
        title: "Staking Management",
        description: "Delegations, rewards, and validator visibility.",
        image: asset("f6ccb04a2bab9c7bd6a03fda45bf4f7cf92aa043"),
        dark: true,
      },
      {
        title: "Governance Proposals",
        description: "Proposal discovery with status and filters.",
        image: asset("d4ca0b3abf4e91e19676b24e35a515c897544cbf"),
        dark: true,
      },
      {
        title: "Proposal Detail",
        description: "Read, assess, and cast a decision in one place.",
        image: asset("5c8421fb62e2d92b803c434e8c862f82ad803f36"),
        dark: true,
      },
    ],
  },
  {
    slug: "data-governance",
    shortCode: "04",
    title: "Data Governance Platform",
    kicker: "Enterprise governance system",
    year: "2024",
    intro:
      "Enterprise platform for policies, access, audit, and governance workflows.",
    summary:
      "A multi-module enterprise platform for managing datasets, policies, user access, audit trails, and compliance workflows.",
    role: "Product and experience design",
    problem:
      "Governance work is often fragmented across tools, making policy and access decisions harder to manage.",
    approach:
      "Structured the platform around datasets, policies, access, audit, and simulation workflows.",
    outcome:
      "A more operational governance product with clearer relationships across modules and decisions.",
    tags: [
      "Enterprise SaaS",
      "Governance UX",
      "Access Control",
      "Policy Design",
      "Admin Systems",
    ],
    overview: [
      "Data governance work is often fragmented across tools and teams. Data catalogs sit in one place, access approvals live in another, and policy documentation or compliance evidence is handled somewhere else entirely.",
      "This platform centralizes governance operations across datasets, policies, access permissions, auditability, and AI-assisted workflows.",
    ],
    sections: [
      {
        title: "Main Modules",
        list: [
          "Dashboard",
          "Catalogues and datasets",
          "Policies and simulations",
          "User and group management",
          "User access and permission controls",
          "Audit and compliance",
        ],
      },
      {
        title: "Design Approach",
        body: [
          "The catalogue and dataset layer acts as the foundation so users understand what data exists and how it is organized before moving into governance decisions.",
          "On top of that, policies are treated as operational rules that can be created, previewed, simulated, and activated with confidence.",
        ],
      },
    ],
    gallery: [
      {
        title: "AI Assistant Modal",
        description: "AI entry point for catalogue, policy, and access tasks.",
        image: asset("cc59ed9a2200f9cffd98dbb874212b3e6fe08947"),
      },
      {
        title: "Compliance Dashboard",
        description: "Governance health, risk heatmaps, and incident visibility.",
        image: asset("f318d5ba0a12823cb970d51bed9096bf9b68b95a"),
      },
      {
        title: "Add New Catalogue",
        description: "Wizard-based connection flow with live preview.",
        image: asset("850ce1c92c13641b10c5762e09db7b508a6d291a"),
      },
      {
        title: "Catalogue Assistant",
        description: "Natural-language catalogue setup.",
        image: asset("c3b4157ef1b58159d1f2047dc25e6682900a4a17"),
      },
      {
        title: "Data Catalogue Overview",
        description: "Connected sources, sync state, and health indicators.",
        image: asset("7b9a39a3a9a2cfc32c0985696971f2f097c6124b"),
      },
      {
        title: "Dataset Marketplace",
        description: "Searchable internal discovery layer for datasets.",
        image: asset("92212efb63ec83c59a8a3eea82f53bcf23296030"),
      },
      {
        title: "User Management",
        description: "Detailed people directory with admin actions.",
        image: asset("1e3746fbbbe3e5c3a53fb1cd0ea1b8646a4914f4"),
      },
      {
        title: "User Access Management",
        description: "Granular permissions across product modules.",
        image: asset("3e7d88b009a7c54fabad96e26518c72eb50c5e76"),
      },
      {
        title: "Create Policy with AI",
        description: "Plain-language input translated into structured rules.",
        image: asset("72bf9247255e3ac2887bd59536fa8490b925045d"),
      },
      {
        title: "Policy Preview",
        description: "Impact analysis before activation.",
        image: asset("ee14c944415184787b4d7c172d4894f26c4d1b52"),
      },
      {
        title: "Policy Simulation",
        description: "Node-based testing and compliance scoring.",
        image: asset("d3b9ccf78ce3247c54e96d7bafe7698902863cc2"),
      },
      {
        title: "Audit Monitoring",
        description: "Real-time governance events and violations.",
        image: asset("f907222f62f532c467b34cfb74a4ee93dad8feee"),
      },
    ],
  },
  {
    slug: "ground-operations",
    shortCode: "05",
    title: "Ground Operations Intelligence Platform",
    kicker: "Real-time fleet monitoring and operational analytics",
    year: "2024",
    intro:
      "Monitoring and operations dashboards for airport fleet intelligence.",
    summary:
      "A dual-dashboard platform for live airport fleet monitoring and long-term operational optimization.",
    role: "Product and dashboard experience design",
    problem:
      "Operations teams need both live visibility and long-term planning tools for distributed airport assets.",
    approach:
      "Separated real-time monitoring from fleet analytics while keeping both inside one operational system.",
    outcome:
      "A dual-dashboard platform that supports faster response and better operational optimization.",
    tags: [
      "Operations Intelligence",
      "Dashboard",
      "Geospatial UX",
      "Fleet Analytics",
      "Control Room Interfaces",
    ],
    overview: [
      "Ground support operations at airports involve a large network of vehicles and equipment operating under strict timing pressure.",
      "This system was designed for both immediate operational awareness and longer-term operational optimization without forcing those needs into one overloaded dashboard.",
    ],
    sections: [
      {
        title: "System Structure",
        list: [
          "Monitoring dashboard for live maps, alerts, and geofences",
          "Operations dashboard for fleet health, SLA, and cost analysis",
          "Shared logic across airport locations and asset categories",
        ],
      },
      {
        title: "What I Was Solving",
        list: [
          "How to support both real-time response and longer-term planning in one ecosystem.",
          "How to make map-based interfaces actionable rather than visually overwhelming.",
          "How to connect asset-level monitoring with network-level operational patterns.",
        ],
      },
    ],
    gallery: [
      {
        title: "Main Monitoring View",
        description: "Live map, alerts panel, and fleet overview.",
        image: asset("47de891823451c65f0e06a55e2436c9dd6934de6"),
        dark: true,
      },
      {
        title: "Asset Search",
        description: "Real-time search and operational details.",
        image: asset("808a4d2c5eab791e3ca3aaf387cd3b8892d75dce"),
        dark: true,
      },
      {
        title: "Vehicle Diagnostics",
        description: "Maintenance status and health recommendations.",
        image: asset("160f55818f03f26e1014a112921aba96ea08b5eb"),
        dark: true,
      },
      {
        title: "Geofence Drawing",
        description: "Create custom zones across airport operations.",
        image: asset("f0f4a19a48de2030584f452a2f890ba7f7535e30"),
        dark: true,
      },
      {
        title: "Geofence Configuration",
        description: "Tune rules and alert logic by zone.",
        image: asset("51362915d98b318d8a74f62019101efef170d3fd"),
        dark: true,
      },
      {
        title: "Asset Filtering",
        description: "Filter by type, status, maintenance, and zone.",
        image: asset("22f7bb99f7e326fa99b74e121ac1488cb018c5c3"),
        dark: true,
      },
      {
        title: "Vehicle Detail View",
        description: "Operational metrics and alert state on-map.",
        image: asset("ae513cf23b919cfb0b70e3e2cd36a6be9dd9fd01"),
        dark: true,
      },
      {
        title: "Operations Dashboard Home",
        description: "Quick insights, AI search, and key KPIs.",
        image: asset("cd1822c56d759f03a3c39222e0338bc16cd2c8dc"),
      },
      {
        title: "Airport Location Selector",
        description: "Switch analytics across airport locations.",
        image: asset("59bf5c1daf679b142184edf6165e56acc9f711b8"),
      },
      {
        title: "Fleet Health Insights",
        description: "Breakdowns, utilization, and optimization guidance.",
        image: asset("70ca825f5faae2b5a1a5fe7e316387c236b9aab7"),
      },
      {
        title: "Fleet Availability Analysis",
        description: "Time-series trends and strategic recommendations.",
        image: asset("382a6f84789cfa80fddc249f3a114374564fb065"),
      },
    ],
  },
];

export const workIndex = new Map(works.map((work) => [work.slug, work]));
