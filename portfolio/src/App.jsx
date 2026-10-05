import { useState } from "react";
import Contact from "./components/Contact";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const github = "https://github.com/Weruh";
const linkedin = "https://www.linkedin.com/in/weru-dennis-441329305/";
const projects = [
  {
    number: "01",
    name: "Niwangu",
    type: "Social & dating platform",
    status: "Deployed project",
    image: "work-2.webp",
    stack: ["React", "Supabase", "PostgreSQL", "Edge Functions"],
    description:
      "A platform for creating profiles, discovering people, and making connections.",
    contribution:
      "Built backend functionality for swipes, daily usage limits, matching, and subscription access. Implemented M-Pesa STK Push payments and payment callback processing.",
    focus:
      "Database-driven application logic · Payment integration · Access restrictions",
    url: "https://niwangu.com/",
  },
  {
    number: "02",
    name: "FindMyPerson",
    type: "Coaching marketplace",
    status: "In development",
    stack: ["Python", "Flask", "PostgreSQL", "React"],
    description:
      "Connecting clients with coaches through discovery, introductory calls, and session booking.",
    contribution:
      "Building a custom Flask API with an application factory, separate routes and services, a SQLAlchemy user model, input validation, password hashing, and signup and credential-checking endpoints.",
    focus:
      "Next: authenticated sessions, protected endpoints, and booking workflows. Payments and marketplace backend features are planned.",
    url: "https://github.com/Weruh/findmyperson",
    code: true,
  },
  {
    number: "03",
    name: "Lumimar Clothing",
    type: "E-commerce storefront",
    status: "Deployed project",
    image: "work-3.webp",
    stack: ["React", "Supabase"],
    description:
      "An online clothing storefront with a React frontend and Supabase backend.",
    contribution:
      "Built the application using React and Supabase. This project demonstrates frontend delivery and integration with backend services.",
    focus: "E-commerce interface · Frontend and backend integration",
    url: "https://clothing.lumimarbrand.com/",
  },
  {
    number: "04",
    name: "Taji Luxury Events",
    type: "Events business website",
    status: "Deployed project",
    image: "work-1.webp",
    stack: ["React", "Node.js"],
    description:
      "A business website showcasing event planning services, with server-side payment handling.",
    contribution:
      "Built the website with React and a Node.js server for handling payments.",
    focus: "Responsive React development · Payment handling",
    url: "https://www.tajiluxuryevents.com/",
  },
];

function External({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
function SectionHeading({ number, eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span>
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Weru Dennis home">
          <span className="brand-mark">w.</span>
          <span>
            weru<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-toggle tactile"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setMenuOpen(false);
          }}
        >
          {["Work", "Experience", "Skills", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="button button-small header-resume"
          href={asset("werudenniscv.pdf")}
          download
        >
          Download resume <span aria-hidden="true">↓</span>
        </a>
      </header>
      <main id="main">
        <section className="hero container" id="top">
          <div className="hero-copy">
            <p className="eyebrow hero-label">
              WERU DENNIS <span className="label-divider" /> NAIROBI, KENYA
            </p>
            <h1>
              Full-stack thinking.
              <br />
              <span>Backend focus.</span>
            </h1>
            <p className="hero-description">
              I build the systems behind web applications — APIs, databases, and
              payment integrations — and the interfaces that bring them to life.
            </p>
            <p className="hero-context">
              Experience with Node.js and Supabase. Currently building with
              Python, Flask, and PostgreSQL.
            </p>
            <div className="hero-actions">
              <a className="button button-blue" href="#work">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="button" href={asset("werudenniscv.pdf")} download>
                Download resume <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-links">
              <External href={github}>GitHub</External>
              <span>/</span>
              <External href={linkedin}>LinkedIn</External>
              <span>/</span>
              <a href="mailto:werudennis19@gmail.com">Email me</a>
            </div>
          </div>
          <aside className="profile-card raised">
            <div className="profile-top">
              <span className="mini-label">THE DEVELOPER</span>
              <span className="profile-initials">WD</span>
            </div>
            <div className="portrait-well">
              <img
                src={asset("portrait.webp")}
                alt="Weru Dennis"
                width="480"
                height="600"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="profile-caption">
              <h2>Weru Dennis</h2>
              <p>Backend-focused full-stack developer</p>
            </div>
            <div className="profile-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>PostgreSQL</span>
            </div>
            <div className="profile-bottom">
              <span>Based in Nairobi</span>
              <span>Open to developer roles</span>
            </div>
          </aside>
        </section>
        <div className="discipline-strip">
          <div className="container">
            <span>APIs & backend services</span>
            <span>Database design</span>
            <span>Payment integrations</span>
            <span>React applications</span>
          </div>
        </div>
        <section className="section container" id="work">
          <SectionHeading
            number="01"
            eyebrow="SELECTED WORK"
            title="Built with purpose."
          >
            Deployed applications and a custom backend in progress. Here’s what
            I built and what’s behind each project.
          </SectionHeading>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card raised" key={project.name}>
                {project.image ? (
                  <div className="project-image">
                    <img
                      src={asset(project.image)}
                      alt={`${project.name} website preview`}
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="960"
                    />
                    <span className="project-status">{project.status}</span>
                  </div>
                ) : (
                  <div className="project-blueprint">
                    <span className="project-status">{project.status}</span>
                    <p className="blueprint-label">
                      FINDMYPERSON / BACKEND IN PROGRESS
                    </p>
                    <div className="architecture">
                      <span>React client</span>
                      <i aria-hidden="true">↓</i>
                      <span>Flask API</span>
                      <i aria-hidden="true">↓</i>
                      <span>PostgreSQL</span>
                    </div>
                    <p className="blueprint-note">
                      A custom backend for a coaching marketplace.
                    </p>
                  </div>
                )}
                <div className="project-content">
                  <p className="project-type">
                    {project.number} / {project.type}
                  </p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <details>
                    <summary>My contribution</summary>
                    <div className="project-details">
                      <p>{project.contribution}</p>
                      <p className="detail-focus">{project.focus}</p>
                    </div>
                  </details>
                  <External className="project-link" href={project.url}>
                    {project.code
                      ? "View source on GitHub"
                      : "Visit live website"}{" "}
                    <span aria-hidden="true">↗</span>
                  </External>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="experience-band" id="experience">
          <div className="section container">
            <SectionHeading
              number="02"
              eyebrow="EXPERIENCE"
              title="Real systems. Real teamwork."
            />
            <div className="experience-list">
              <article className="experience-row">
                <div>
                  <p className="experience-date">NOV 2025 — FEB 2026</p>
                  <h3>Kujuapoint LLC</h3>
                  <p className="role">Junior Backend Developer</p>
                </div>
                <div>
                  <p>
                    Contributed to the development and launch of Kujuana.com,
                    working on accounts, authentication, profiles, and backend
                    workflows.
                  </p>
                  <ul>
                    <li>
                      Integrated Paystack for payment and subscription
                      functionality.
                    </li>
                    <li>
                      Investigated and resolved backend issues during
                      development and launch.
                    </li>
                    <li>
                      Helped migrate backend and database functionality from
                      Node.js and MongoDB to Supabase.
                    </li>
                  </ul>
                  <div className="tags">
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Paystack</span>
                    <span>Supabase</span>
                  </div>
                </div>
              </article>
              <article className="experience-row">
                <div>
                  <p className="experience-date">SEP — OCT 2026 · VOLUNTEER</p>
                  <h3>KujuaRoom.com</h3>
                  <p className="role">Lead Backend Developer</p>
                </div>
                <div>
                  <p>
                    Led backend development using Supabase, designing database
                    structures and integrating backend services with the
                    frontend.
                  </p>
                  <ul>
                    <li>
                      Coordinated backend tasks and supported team members.
                    </li>
                    <li>Tested, debugged, and resolved application issues.</li>
                  </ul>
                  <div className="tags">
                    <span>Supabase</span>
                    <span>Database design</span>
                    <span>Team collaboration</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section container" id="skills">
          <SectionHeading
            number="03"
            eyebrow="TECHNICAL TOOLKIT"
            title="From data to interface."
          >
            The technologies I use to build applications, with a growing focus
            on Python backend engineering.
          </SectionHeading>
          <div className="skill-grid">
            {[
              {
                icon: "{ }",
                name: "Backend",
                items: [
                  "Python & Flask",
                  "Node.js & Express",
                  "REST APIs",
                  "Supabase & Edge Functions",
                ],
              },
              {
                icon: "▤",
                name: "Data & integrations",
                items: [
                  "PostgreSQL",
                  "MongoDB",
                  "Paystack",
                  "M-Pesa / Daraja API",
                ],
              },
              {
                icon: "⌘",
                name: "Frontend & tools",
                items: [
                  "React & JavaScript",
                  "HTML, CSS & Tailwind",
                  "Git & GitHub",
                  "Docker & Linux",
                ],
              },
            ].map((group) => (
              <article className="skill-card raised" key={group.name}>
                <span className="skill-icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3>{group.name}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="section about-section container" id="about">
          <div>
            <SectionHeading
              number="04"
              eyebrow="A LITTLE ABOUT ME"
              title="Curious about what happens underneath."
            />
            <p>
              I’m Weru, a developer based in Nairobi. I enjoy connecting the
              pieces that make an application work: its data, business logic,
              APIs, and user interface.
            </p>
            <p>
              My hands-on experience includes backend development, payment
              integrations, and collaborating on deployed applications. With
              FindMyPerson, I’m expanding that experience by building a custom
              Flask and PostgreSQL backend.
            </p>
            <p>
              I’m looking for a developer role where I can contribute to useful
              products, learn from experienced engineers, and grow my backend
              skills.
            </p>
          </div>
          <aside className="education-card raised">
            <span className="skill-icon" aria-hidden="true">
              ↗
            </span>
            <p className="eyebrow">CURRENTLY STUDYING</p>
            <h3>Moringa School</h3>
            <p>Software Development Bootcamp</p>
            <div className="education-date">May 2026 — present</div>
            <p className="education-note">
              Building on practical experience through structured software
              development training.
            </p>
          </aside>
        </section>
        <div className="contact-wrap">
          <Contact />
        </div>
      </main>
      <footer className="container footer">
        <a className="brand" href="#top">
          weru<span className="brand-dot">.</span>
        </a>
        <p>© {new Date().getFullYear()} Weru Dennis</p>
        <div>
          <External href={github}>GitHub</External>
          <External href={linkedin}>LinkedIn</External>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
