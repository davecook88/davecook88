import { useState, useEffect } from "preact/hooks";

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
          <h3 className="text-xl font-bold text-accent-500 mb-4">About Me</h3>
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
        </div>
      </div>
    </div>
  );
};
