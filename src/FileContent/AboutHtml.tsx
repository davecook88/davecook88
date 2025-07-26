import { h } from "preact";
import { useState } from "preact/hooks";

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="mb-4">
      <button
        onClick={toggleCollapse}
        class="w-full text-left flex items-center focus:outline-none"
      >
        <svg
          class={`w-4 h-4 mr-2 transform transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <h2 class="text-lg font-semibold text-white">{title}</h2>
      </button>
      {isOpen && <div class="mt-2 pl-6">{children}</div>}
    </div>
  );
};

export const AboutMeContent = () => {
  const yearsOfExperience = () => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };
  return (
    <div class="p-4">
      <CollapsibleSection title="Summary" defaultOpen={true}>
        <table class="w-full text-left">
          <tbody>
            <tr>
              <td class="font-semibold text-gray-300">Name:</td>
              <td class="text-gray-200">David Cook</td>
            </tr>
            <tr>
              <td class="font-semibold text-gray-300">Role:</td>
              <td class="text-gray-200">Senior Full Stack Developer</td>
            </tr>
            <tr>
              <td class="font-semibold text-gray-300">Experience:</td>
              <td class="text-gray-200">{yearsOfExperience()}+ years</td>
            </tr>
            <tr>
              <td class="font-semibold text-gray-300">Hometown:</td>
              <td class="text-gray-200">
                <a
                  href="https://www.google.com/maps/place/Stourbridge,+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent-500 hover:text-accent-600"
                >
                  Stourbridge, UK 🇬🇧
                </a>
              </td>
            </tr>
            <tr>
              <td class="font-semibold text-gray-300">Location:</td>
              <td class="text-gray-200">
                <a
                  href="https://www.google.com/maps/place/Tula+de+Allende,+Mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent-500 hover:text-accent-600"
                >
                  Tula de Allende, Mexico 🇲🇽
                </a>
              </td>
            </tr>
            <tr>
              <td class="font-semibold text-gray-300">Languages:</td>
              <td class="text-gray-200">
                English (native), Spanish (fluent), Japanese (intermediate)
              </td>
            </tr>
          </tbody>
        </table>
      </CollapsibleSection>

      <CollapsibleSection title="About Me" defaultOpen={true}>
        <div class="space-y-4 text-gray-300">
          <p>
            I am a British software engineer and language enthusiast living and
            working remotely from central Mexico.
          </p>
          <p>
            My formal education is in foreign languages and language teaching.
            As I was working in schools and universities in the UK, Japan,
            Vietnam, and Mexico, I became frustrated with the repetitive and
            laborious administrative tasks that took away from my passion for
            teaching and learning. This led me down the path of software
            development, first via VBA in Excel, then Google Apps Script, and
            beyond.
          </p>
          <p>
            I discovered a love for building software and a knack for problem
            solving which has driven my career ever since.
          </p>
          <p>
            During the pandemic, I found myself between jobs and stuck in a
            small apartment in Hanoi's strict lockdown. Making the most of
            unexpected circumstances, I began my career as a freelance
            developer, building API integrations for businesses all around the
            world.
          </p>
          <p>
            I consider myself extremely lucky to have been able to turn what
            started off as a hobby into a successful career in software
            development.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Skills">
        <div class="space-y-2 text-gray-300">
          <p>
            <span class="font-semibold">Frontend:</span> JavaScript, TypeScript,
            React, Vue, HTML/CSS, Tailwind CSS
          </p>
          <p>
            <span class="font-semibold">Backend:</span> Node.js, Express,
            Python, Django, FastAPI
          </p>
          <p>
            <span class="font-semibold">Databases:</span> PostgreSQL, MySQL,
            MongoDB
          </p>
          <p>
            <span class="font-semibold">DevOps:</span> Docker, Kubernetes,
            CI/CD, AWS, GCP
          </p>
          <p>
            <span class="font-semibold">Languages:</span> English (native),
            Spanish (fluent), Japanese (intermediate)
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Location">
        <div class="space-y-4">
          <p class="text-gray-300">
            Currently based in Tula de Allende, Hidalgo, Mexico
          </p>
          <div class="w-full h-64 rounded-lg overflow-hidden border border-gray-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59761.89899634147!2d-99.37470878671875!3d20.053943600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35c5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sTula%20de%20Allende%2C%20Hgo.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:poi|element:labels.text.fill|color:0xd59563&style=feature:poi.park|element:geometry|color:0x263c3f&style=feature:poi.park|element:labels.text.fill|color:0x6b9a76&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road|element:labels.text.fill|color:0x9ca5b3&style=feature:road.highway|element:geometry|color:0x746855&style=feature:road.highway|element:geometry.stroke|color:0x1f2835&style=feature:road.highway|element:labels.text.fill|color:0xf3d19c&style=feature:transit|element:geometry|color:0x2f3948&style=feature:transit.station|element:labels.text.fill|color:0xd59563&style=feature:water|element:geometry|color:0x17263c&style=feature:water|element:labels.text.fill|color:0x515c6d&style=feature:water|element:labels.text.stroke|color:0x17263c"
              width="100%"
              height="100%"
              style="border:0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Tula de Allende, Hidalgo, Mexico"
            ></iframe>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};
