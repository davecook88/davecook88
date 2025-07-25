import { useState, useEffect } from "preact/hooks";
import { Collapsible } from "#/components/Collapsible";

const birthday = new Date("1988-07-11");

const details = [
  {
    label: "Age:",
    value: () => {
      const today = new Date();
      let age = today.getFullYear() - birthday.getFullYear();
      const monthDiff = today.getMonth() - birthday.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthday.getDate())
      ) {
        age--;
      }
      return age.toString();
    },
    isLink: false,
    icon: null,
    link: null,
  },
  {
    label: "From:",
    value: () => "Stourbridge, UK 🇬🇧",
    isLink: true,
    icon: null,
    link: "https://www.google.com/maps/place/Stourbridge,+UK",
  },
  {
    label: "Location:",
    value: () => "Tula de Allende, MX 🇲🇽",
    isLink: true,
    icon: null,
    link: "https://www.google.com/maps/place/Tula+de+Allende,+Hgo.,+Mexico",
  },
];

export const AboutMeContent = () => {
  return (
    <div className="bg-primary-900/80 md:py-4 mx-auto flex-col gap-6 rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1 glass-effect rounded-xl p-6">
          <h3 className="text-xl font-bold text-accent-500 mb-4">Details</h3>
          <table className="font-mono text-accent-200 w-full text-left">
            <tbody>
              {details.map((detail) => (
                <tr key={detail.label} className="border-b border-primary-700">
                  <td className="py-3 text-accent-600">{detail.label}</td>
                  <td className="py-3">
                    {detail.isLink ? (
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-accent-400 transition-colors duration-200"
                      >
                        {detail.value()}
                      </a>
                    ) : (
                      detail.value()
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:col-span-2">
          <Collapsible title="About Me" defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-primary-100 text-lg leading-relaxed">
                I am a British software engineer and language enthusiast living and
                working remotely from central Mexico.
              </p>
              <p className="text-primary-200 text-lg leading-relaxed">
                My formal education is in foreign languages and language teaching. As
                I was working in schools and universities in the UK, Japan, Vietnam,
                Colombia, and Mexico, I became frustrated with the repetitive and
                laborious administrative tasks that took away from the joy of teaching
                and learning. Thinking that there must be a better way lead me into
                the world of software development, first via VBA in Excel, then Google
                Apps Script, and beyond.
              </p>
              <p className="text-primary-200 text-lg leading-relaxed">
                I discovered a love for building software and an aptitude for problem
                solving which has driven my career ever since.
              </p>
              <p className="text-primary-200 text-lg leading-relaxed">
                During the pandemic, I found myself between jobs and stuck in a small
                apartment in Hanoi's strict lockdown. Making the most of unexpected
                circumstances, I began my career as a freelance developer, building
                API integrations for businesses all around the world.
              </p>
              <p className="text-primary-200 text-lg leading-relaxed">
                Pretty soon, it became clear that the demand for my skills wouldn't
                leave me much time for teaching languages anymore.
              </p>
              <p className="text-primary-200 text-lg leading-relaxed">
                I consider myself extremely lucky to have been able to turn what
                started off as a few fun projects into a long and successful career in
                software development.
              </p>
            </div>
          </Collapsible>
          
          <Collapsible title="Skills">
            <div className="space-y-2">
              <p className="text-primary-100 text-lg leading-relaxed">
                <span className="text-accent-500 font-semibold">Frontend:</span> JavaScript, TypeScript, React, Vue, HTML/CSS, Tailwind CSS
              </p>
              <p className="text-primary-100 text-lg leading-relaxed">
                <span className="text-accent-500 font-semibold">Backend:</span> Node.js, Express, Python, Django, FastAPI
              </p>
              <p className="text-primary-100 text-lg leading-relaxed">
                <span className="text-accent-500 font-semibold">Databases:</span> PostgreSQL, MySQL, MongoDB
              </p>
              <p className="text-primary-100 text-lg leading-relaxed">
                <span className="text-accent-500 font-semibold">DevOps:</span> Docker, Kubernetes, CI/CD, AWS, GCP
              </p>
              <p className="text-primary-100 text-lg leading-relaxed">
                <span className="text-accent-500 font-semibold">Languages:</span> English (native), Spanish (fluent), Japanese (intermediate)
              </p>
            </div>
          </Collapsible>
          
          <Collapsible title="Connect with me">
            <div className="flex space-x-4 py-2">
              <a
                href="mailto:dave@mamalon.dev"
                className="hover:text-accent-400 transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="mr-2">
                  <path
                    d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.6 6.2 7.6-6.2H4.4Zm15.6 2.1-7.4 6.05a1 1 0 0 1-1.2 0L4 8.1V17.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.1Z"
                    fill="currentColor"
                  />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/david-cook-a1549ba2/"
                className="hover:text-accent-400 transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="19" height="19" fill="none" viewBox="0 0 382 382" className="mr-2">
                  <path
                    d={`M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z`}
                    fill="currentColor"
                  />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/davecook88"
                className="hover:text-accent-400 transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="mr-2">
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};
