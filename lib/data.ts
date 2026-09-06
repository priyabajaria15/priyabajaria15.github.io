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
  role: "Data Engineer",
  location: "Boston, MA",
  photo: "/profile.jpg",
  resume: "/resume.pdf",      // add public/resume.pdf, or set to null

  tagline:
    "I build data pipelines, from ingestion through to modeling and " +
    "orchestration. Currently completing my M.S. in Computer Science at " +
    "Boston University.",

  /* ---------- 2. LINKS ---------- */
  links: {
    email: "priyabajaria15@gmail.com",
    github: "https://github.com/priyabajaria15",
    linkedin: "https://www.linkedin.com/in/priya-bajaria-b684ab237",
  },

  /* ---------- 3. ABOUT ---------- */
about: [
  "I'm a data engineer focused on turning raw data into reliable, usable datasets. My work includes ingesting data from source systems, cleaning and transforming it with PySpark and Databricks, building star-schema data models, and scheduling pipelines to run reliably.",

  "I've also worked with security telemetry data and recently started exploring the intersection of data engineering and generative AI by building AI agents with LangGraph and LangChain.",

  "I'm based in Boston and currently completing my M.S. in Computer Science at Boston University, graduating in December 2026. I'm always open to discussing data engineering, AI, interesting projects, or new opportunities.",
],

  /* ---------- 4. TECHNICAL SKILLS ---------- */
  skills: [
    { group: "Languages", items: ["Python", "SQL", "PySpark", "Bash"] },
    {
      group: "Data engineering",
      items: ["Apache Airflow", "dbt", "Databricks", "Delta Lake",
              "Spark Structured Streaming", "Auto Loader"],
    },
    {
      group: "Azure & cloud",
      items: ["Azure Data Factory", "ADLS Gen2", "Azure SQL",
              "Unity Catalog", "Lakeflow Declarative Pipelines"],
    },
    {
      group: "AI & agents",
      items: ["LangChain", "LangGraph", "ReAct Agents",
              "LLM Tool Calling", "Prompt Engineering", "Pydantic"],
    },
    {
      group: "Databases & modeling",
      items: ["PostgreSQL", "Medallion Architecture", "Dimensional Modeling",
              "SCD Type 2", "CDC"],
    },
    {
      group: "DevOps & tools",
      items: ["Docker", "Git", "GitHub", "Databricks Asset Bundles",
              "Jinja2", "Pandas", "Pytest"],
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
    {
      role: "Data Engineer (Part-Time)",
      org: "EliteSigma Infotech LLP",
      start: "Jan 2023",
      end: "Dec 2024",
      location: "Ahmedabad, India · Remote",
      bullets: [
        "Translated client business requirements into scalable data transformation workflows using PySpark and SQL.",
        "Developed Databricks notebooks for multiple business use cases, implementing data cleansing, transformation, joins and validation logic.",
        "Processed source data and loaded transformed outputs into SQL tables for downstream reporting and analysis.",
        "Automated notebook execution through job orchestration, managing task dependencies and scheduled pipeline runs.",
      ],
      tech: ["PySpark", "SQL", "Databricks", "Job Orchestration"],
    },
  ],

  /* ---------- 6. PROJECTS ---------- */
  projects: [
    {
      title: "Agentic AI Data Assistant",
      blurb:
        "A multi-agent assistant that routes natural-language requests to specialized SQL and ETL agents. " +
        "The Text-to-SQL workflow reads database schema context to generate PostgreSQL queries, runs them past " +
        "an AI safety judge before execution, and returns business-readable insights. A ReAct-based ETL agent " +
        "pulls from APIs, applies dynamic Pandas transformations, and writes results to CSV. Pydantic state " +
        "validation, conditional routing, and task-based model selection keep it reliable and hold API costs down.",
      tech: ["Python", "LangGraph", "LangChain", "PostgreSQL", "Pandas", "Pydantic"],
      tags: ["AI & Agents", "Python", "SQL"],
      repo: "https://github.com/priyabajaria15/data-agent",
      featured: true,
    },
    {
      title: "Spotify Azure Data Engineering Pipeline",
      blurb:
        "A metadata-driven ADF pipeline that incrementally ingests five Azure SQL tables into ADLS Gen2 using " +
        "JSON watermark-based CDC, with parameterization, backfills and automated failure alerts. On top of it, " +
        "a Bronze/Silver/Gold lakehouse built with Auto Loader, Structured Streaming and Delta Lake handles " +
        "cleansing, deduplication, schema evolution and checkpointing. The Gold layer is a star schema with " +
        "SCD Type 2 dimensions via Lakeflow Auto CDC, data-quality expectations, and Jinja2-generated reporting " +
        "views. Unity Catalog governs storage access; CI/CD runs through GitHub branches and Databricks Asset Bundles.",
      tech: ["Azure Data Factory", "Databricks", "PySpark", "Delta Lake", "Unity Catalog", "ADLS Gen2"],
      tags: ["Azure", "Databricks", "Streaming", "SQL"],
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
      "I'm looking for data engineering roles starting December 2026. " +
      "Feel free to reach out. Email is the best way to reach me.",

    // Static hosting can't send mail. Leave empty and the form opens the
    // visitor's mail client. Or create a free form at https://formspree.io
    // and paste the endpoint here to get submissions in your inbox.
    formEndpoint: "",
  },
};
