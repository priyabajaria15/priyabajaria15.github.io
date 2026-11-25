import type { PortfolioData } from "./types";

/* ============================================================
   EDIT THIS FILE ONLY. Everything on the site reads from here.

   Still to confirm:
   - education[].start: your resume lists only end dates, so the
     start years below are inferred. Correct them if wrong.
   - publications[0].authors: add co-authors in the order they
     appear on the Springer chapter.
   ============================================================ */

export const data: PortfolioData = {
  /* ---------- 1. BASICS ---------- */
  name: "Priya Bajaria",
  role: "Computer Science Student",
  location: "Boston, MA",
  photo: "/resume_image.jpg",
  resume: "/PriyaBajaria_Resume.pdf",

  tagline:
    "M.S. Computer Science student at Boston University. I build " +
    "full-stack web apps, Android apps, data pipelines and AI agents.",

  /* ---------- 2. LINKS ---------- */
  links: {
    email: "priyabajaria15@gmail.com",
    github: "https://github.com/priyabajaria15",
    linkedin: "https://www.linkedin.com/in/priya-bajaria-b684ab237",
  },

  /* ---------- 3. ABOUT ---------- */
  about: [
    "I'm a Computer Science graduate student at Boston University, graduating in December 2026. I enjoy building complete products, from the database and APIs to the interface people use.",

    "My recent projects include a full-stack journalism marketplace, a native Android marketplace for BU students, a cloud data pipeline on Azure and Databricks, and a multi-agent AI assistant. Before BU, I worked as a security engineer intern and earned my B.Tech. in Information Technology in Mumbai.",

    "I'm open to full-time roles starting January 2027.",
  ],

  /* ---------- 4. TECHNICAL SKILLS ---------- */
  skills: [
    { group: "Languages", items: ["Python", "SQL", "TypeScript", "JavaScript", "Kotlin", "PySpark", "Bash"] },
    {
      group: "Web & full-stack",
      items: ["Next.js", "React", "Node.js", "REST APIs", "Clerk Authentication",
              "Jest", "React Testing Library"],
    },
    {
      group: "Android & mobile",
      items: ["Jetpack Compose", "MVVM", "Room", "Coroutines", "Kotlin Flow", "Retrofit",
              "CameraX", "ML Kit", "Firebase", "Cloud Firestore", "JUnit"],
    },
    {
      group: "Data",
      items: ["Databricks", "Delta Lake", "Spark Structured Streaming", "Auto Loader",
              "Apache Airflow", "dbt"],
    },
    {
      group: "Databases & cloud",
      items: ["PostgreSQL", "Azure SQL", "Azure Data Factory", "ADLS Gen2", "Unity Catalog",
              "Lakeflow", "Medallion Architecture", "SCD Type 2", "CDC"],
    },
    {
      group: "DevOps & tools",
      items: ["Git", "GitHub Actions", "CI/CD", "Docker", "Databricks Asset Bundles",
              "ESLint", "Jinja2", "Pandas", "Pytest"],
    },
    {
      group: "AI & agents",
      items: ["LangChain", "LangGraph", "ReAct Agents", "LLM Tool Calling",
              "Prompt Engineering", "Pydantic"],
    },
  ],

  /* ---------- 5. EXPERIENCE ---------- */
  experience: [
    {
      role: "Security Engineer Intern",
      org: "Paramatrix Technologies",
      start: "Jan 2025",
      end: "Jun 2025",
      location: "Mumbai, India",
      bullets: [
        "Analyzed 150+ daily security events across four telemetry sources (Microsoft Sentinel, Defender for Endpoint, Cyble TIP and EDR), using log analysis and correlation to filter out roughly 70% of false positives.",
        "Authored standard operating procedures for alert triage, escalation and incident investigation, replacing ad-hoc handling with repeatable SOC processes.",
        "Improved detection accuracy through iterative rule tuning and log-pattern analysis.",
      ],
      tech: ["Microsoft Sentinel", "Defender for Endpoint", "EDR", "Log Analysis"],
    },
  ],

  /* ---------- 6. PROJECTS ---------- */
  projects: [
    {
      title: "StoryMatch – Freelance Journalism Marketplace",
      blurb:
        "A full-stack marketplace connecting newsroom editors with freelance journalists. Editors post " +
        "assignments, search a talent directory and manage rosters; freelancers build profiles and pitch " +
        "stories. A PostgreSQL-backed REST API enforces organization-scoped permissions, and an admin console " +
        "handles content moderation and account verification. Tested with Jest and run through GitHub Actions CI.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Clerk", "Jest", "GitHub Actions"],
      tags: ["Full-Stack", "TypeScript"],
      repo: "https://github.com/BU-Spark/se-iij-freelance-marketplace",
      featured: true,
    },
    {
      title: "Terrier Trade",
      blurb:
        "A native Android marketplace where verified Boston University students buy, sell and exchange items. " +
        "Includes Firebase email-verified sign-in, real-time Firestore listings with search and filters, " +
        "messaging, deal negotiation and peer reviews. A Room cache with Kotlin Flow enables offline browsing, " +
        "and ISBN barcode scanning (CameraX + ML Kit) auto-fills textbook listings from the Open Library API.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Room", "CameraX", "ML Kit", "Retrofit"],
      tags: ["Android", "Kotlin"],
      repo: "https://github.com/terrier-trade/terrier-trade-android",
    },
    {
      title: "Spotify Azure Data Pipeline",
      blurb:
        "A metadata-driven cloud pipeline that incrementally ingests five Azure SQL tables into ADLS Gen2 " +
        "using watermark-based CDC, with backfills and failure alerts. A Bronze/Silver/Gold lakehouse on " +
        "Databricks handles cleansing, deduplication and schema evolution, feeding a star schema with SCD " +
        "Type 2 dimensions. Governed with Unity Catalog; CI/CD through GitHub and Databricks Asset Bundles.",
      tech: ["Azure Data Factory", "Databricks", "PySpark", "Delta Lake", "Unity Catalog", "ADLS Gen2"],
      tags: ["Data", "Cloud", "Python"],
      repo: "https://github.com/priyabajaria15/azure-project",
    },
    {
      title: "Walmart Lakehouse Data Pipeline",
      blurb:
        "An end-to-end lakehouse pipeline that incrementally ingests six PostgreSQL tables into Databricks " +
        "Delta Lake using upserts. Tested dbt models span Bronze, Silver and Gold layers with incremental " +
        "processing and metadata-driven Jinja templates, landing in a star schema with SCD Type 2 dimensions " +
        "that preserve historical change. Everything is orchestrated by a Dockerized Airflow DAG with " +
        "data-quality checks and explicit task dependencies.",
      tech: ["Databricks", "dbt", "Apache Airflow", "PostgreSQL", "Delta Lake", "Docker"],
      tags: ["Databricks", "Orchestration", "SQL"],
      repo: "https://github.com/priyabajaria15/walmart_Airflow_DBT_project",
    },
    {
      title: "Agentic AI Data Assistant",
      blurb:
        "A multi-agent Python app built with LangGraph that routes natural-language requests to specialized " +
        "SQL and ETL agents. The Text-to-SQL workflow uses schema context to generate queries, checks them " +
        "with an AI safety judge, and returns plain-language insights. A ReAct ETL agent calls REST APIs, " +
        "transforms data with Pandas and outputs CSVs. Pydantic validation and task-based model selection " +
        "improve reliability and keep API costs down.",
      tech: ["Python", "LangGraph", "LangChain", "PostgreSQL", "Pandas", "Pydantic"],
      tags: ["AI & Agents", "Python"],
      repo: "https://github.com/priyabajaria15/data-agent",
    },
  ],

  /* ---------- 7. EDUCATION ---------- */
  education: [
    {
      degree: "M.S. in Computer Science",
      school: "Boston University, Graduate School of Arts and Sciences",
      start: "2025", // VERIFY
      end: "Dec 2026",
      detail: "Boston, MA. Expected December 2026.",
    },
    {
      degree: "B.Tech. in Information Technology",
      school: "K.J. Somaiya College of Engineering",
      start: "2021", // VERIFY
      end: "Jun 2025",
      detail: "Mumbai, India.",
    },
  ],

  /* ---------- 8. CERTIFICATIONS ---------- */
  certifications: [
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      url: "https://learn.microsoft.com/en-us/users/priyadilipbajaria-0963/credentials/f885d2f2876d45a7",
    },
    {
      name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
      issuer: "Microsoft",
      url: "https://learn.microsoft.com/en-in/users/priyadilipbajaria-0963/credentials/2f481aea476c15cc",
    },
  ],

  /* ---------- 9. PUBLICATIONS ---------- */
  publications: [
    {
      title: "Data analytics in project management: risk assessment and resource optimization",
      authors: "Priya Bajaria", // add co-authors in publication order
      venue: "Springer",
      year: "2024",
      url: "https://link.springer.com/chapter/10.1007/978-981-96-5751-3_27",
    },
  ],

  /* ---------- 10. CONTACT ---------- */
  contact: {
    heading: "Get in touch",
    blurb:
      "I'm looking for full-time roles starting January 2027. " +
      "Feel free to reach out. Email is the best way to reach me.",

    // Static hosting can't send mail. Leave empty and the form opens the
    // visitor's mail client. Or create a free form at https://formspree.io
    // and paste the endpoint here to get submissions in your inbox.
    formEndpoint: "",
  },
};
