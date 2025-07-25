import { Section } from "./Section.js";
import { Job } from "./Job.js";
import { Pill } from "./Pill.js";
import { EMAIL_ADDRESS } from "#/constants.js";
import { Collapsible } from "#/components/Collapsible";

const skills = {
  "Back End": [
    "Python",
    "Flask",
    "FastAPI",
    "Strawberry (GraphQL)",
    "SQLModel (SQLAlchemy Wrapper)",
    "Node.JS",
    "Express",
    "Apollo",
    "Postgraphile",
  ],
  "Front End": [
    "Typescript",
    "NextJS",
    "React",
    "Apollo",
    "Redux",
    "Zustand",
    "Tailwind-UI",
    "Material-UI",
    "ChakraUI",
  ],
  Architecture: [
    "Apollo",
    "PostgresQL",
    "DynamoDB",
    "Firebase",
    "Google Apps Script",
    "Chrome Extensions",
    "Slack Apps",
    "NX (Monorepo)",
  ],
  DevOps: [
    "GCP",
    "AWS",
    "Heroku",
    "Github Actions",
    "Helm",
    "Kubernetes",
    "Terraform",
  ],
};

export const Resume = () => {
  return (
    <div className="w-full h-full p-4 md:p-8 text-primary-200">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-300 mb-2 uppercase tracking-wide">
          Dave Cook
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 font-mono font-semibold">
          Senior Full Stack Engineer
        </p>
        <div className="flex justify-center gap-4 mt-4 text-sm text-accent-500">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Tula de Allende, MX
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {EMAIL_ADDRESS}
          </span>
        </div>
      </header>

      <Collapsible title="Skills" defaultOpen={true}>
        <Section title="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass-effect rounded-xl p-5">
                <h3 className="font-bold text-lg text-accent-500 mb-4 pb-2 border-b border-primary-700">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Pill key={skill}>{skill}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Collapsible>

      <Collapsible title="Software Development Experience" defaultOpen={true}>
        <Section title="">
          <div className="space-y-8">
            <Job
              title="Senior Fullstack Engineer"
              company="Miruni.io"
              period="Jun 2023 - Present"
              location="Remote"
              description="Principal full-stack developer in a small team of a productivity SaaS startup. In a team of varying size but mainly limited to 2-3 developers, I was the only engineer responsible for managing every aspect of the application."
              achievements={[
                "Designed and implemented integrations with Zapier, Slack, and Jira.",
                "Managed graphql backend using the Postgraphile framework, requiring business logic to be managed at the database level (Postgres) using stored procedures and row level security for implementing a granular permissions system.",
                "Ensured efficiency at scale by analyzing Postgres query plans and identifying opportunities for improvement.",
                "Implemented detailed event tracking systems using Newrelic and Posthog to gain insight on the user experience and to identify pain points.",
                "Managed CI/CD pipelines using Github Actions, Terraform, and Helm to ensure smooth deployment to AWS AppRunner, Lambda, and EKS Kubernetes depending on the development environment.",
                "Improved page load times dramatically by investigating client side React rendering, identifying inefficiencies and taking advantage of dynamic and lazy loading to improve user experience.",
              ]}
            />
            <Job
              title="Senior Fullstack Engineer"
              company="Turn Technologies"
              period="2022 - Jun 2023"
              location="Remote"
              description="Following excellent feedback in my previous position, I was invited to act as the sole-backend engineer in creating the new, AI-powered product, Advise. As the product grew, I was the principal backend engineer in a small team."
              achievements={[
                "Developed framework for moving to backend microservice infrastructure within upcoming products. My template app is used by at least 3 products within Turn Technologies.",
                "Created CI/CD flow using Github actions and Heroku.",
                "Ensured 80%+ test coverage across repos using Jest and Pytest frameworks.",
                "Created and maintained backend service which received and stored data generated by the Data Science team and served it to the front end via graphQL.",
                "Designed and implemented a centralized authentication system which processed Auth0 validation and could be used by various products.",
                "Instigated transition to Typescript in front-end repositories.",
                "Synchronized with DevOps team on transferring infrastructure from Heroku to AWS EC2 instances managed by Jenkins.",
                "Implemented Figma designs in React front end, including Google Maps API integration with custom datalayer overlay.",
              ]}
            />
            <Job
              title="Senior Engineering Support"
              company="Turn Technologies"
              period="2021 - mid 2022"
              location="Remote"
              description="Provided timely support and hot fixes for bugs in production applications."
              achievements={[
                "Added functionality to internal admin apps to improve support efficiency (Flask-Admin).",
                "Created efficiency-boosting tools for support staff (Google Apps Script).",
                "Main developer for Turn integrations with Lever & Rippling ATS external APIs.",
              ]}
            />
            <Job
              title="Freelance Integrations Developer"
              company="Independent"
              period="2018 - 2021"
              location="Remote"
              description="Successful freelance business as a freelance developer and automations specialist, acting as a long-term on-call resource and consultant to international businesses. Solving business needs for technical and non-technical clients using appropriate technologies and tools for the task at hand."
              achievements={[
                "Created Zapier custom apps (Node.js) for Airtable, Monday.com, Basecamp, TrackHS, ClickUp, Dropbox, Zoom, Squarespace, Smartsheets, Shopify, among many others.",
                "Custom Google Chrome extensions for increasing productivity (eg custom buttons to make changes in Copper CRM from GMail's UI).",
                "Independently developed booking app for contracting firm using Firebase Functions as a backend, and a react frontend and integrations with Google Calendar and Google forms.",
              ]}
            />
          </div>
        </Section>
      </Collapsible>

      <Collapsible title="Other Work Experience">
        <Section title="">
          <div className="space-y-4">
            <div className="glass-effect rounded-xl p-5">
              <h3 className="font-bold text-lg text-accent-500">
                Head of ESL Department
              </h3>
              <p className="text-primary-300">
                Vinschool, Hanoi, Vietnam (2018-2019)
              </p>
            </div>
            <div className="glass-effect rounded-xl p-5">
              <h3 className="font-bold text-lg text-accent-500">
                English Teacher
              </h3>
              <p className="text-primary-300">
                Colegio Álamos, Querétaro, Mexico (2016-2018)
              </p>
            </div>
            <div className="glass-effect rounded-xl p-5">
              <h3 className="font-bold text-lg text-accent-500">ALT Teacher</h3>
              <p className="text-primary-300">Kagoshima, Japan (2015-2016)</p>
            </div>
          </div>
        </Section>
      </Collapsible>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Collapsible title="Education">
          <Section title="">
            <div className="space-y-4">
              <div className="glass-effect rounded-xl p-5">
                <h3 className="font-bold text-lg text-accent-500">MA TESOL</h3>
                <p className="text-primary-300">University of Birmingham</p>
              </div>
              <div className="glass-effect rounded-xl p-5">
                <h3 className="font-bold text-lg text-accent-500">
                  BA European Languages
                </h3>
                <p className="text-primary-300">University of Aberystwyth</p>
              </div>
            </div>
          </Section>
        </Collapsible>

        <Collapsible title="Languages">
          <Section title="">
            <div className="space-y-4">
              <div className="glass-effect rounded-xl p-5">
                <h3 className="font-bold text-lg text-accent-500">English</h3>
                <p className="text-primary-300">Native Speaker</p>
              </div>
              <div className="glass-effect rounded-xl p-5">
                <h3 className="font-bold text-lg text-accent-500">Spanish</h3>
                <p className="text-primary-300">Fluent</p>
              </div>
              <div className="glass-effect rounded-xl p-5">
                <h3 className="font-bold text-lg text-accent-500">French</h3>
                <p className="text-primary-300">Intermediate</p>
              </div>
            </div>
          </Section>
        </Collapsible>
      </div>
    </div>
  );
};
