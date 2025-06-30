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
    value: () => "Stourbridge, United Kingdom",
    isLink: true,
    icon: (
      <svg
        className="inline w-4 h-4 ml-1 text-accent-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    link: "https://www.google.com/maps/place/Stourbridge,+UK",
  },
  {
    label: "Currently At:",
    value: () => "Tula de Allende, Mexico",
    isLink: true,
    icon: (
      <svg
        className="inline w-4 h-4 ml-1 text-accent-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    link: "https://www.google.com/maps/place/Tula+de+Allende,+Hgo.,+Mexico",
  },
];

const TypingText = ({ text, speed = 40, className = "" }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span className={className}>{displayed}</span>;
};

export const AboutMeContent = () => {
  const [typedIndex, setTypedIndex] = useState(0);
  const [typedValues, setTypedValues] = useState(["", "", ""]);

  useEffect(() => {
    if (typedIndex < details.length) {
      setTypedValues((vals) => {
        const newVals = [...vals];
        newVals[typedIndex] = details[typedIndex].value();
        return newVals;
      });
    }
  }, [typedIndex]);

  // Handler to trigger next row typing after current finishes
  const handleTypingDone = (i) => {
    if (i === typedIndex && typedIndex < details.length - 1) {
      setTimeout(() => setTypedIndex(typedIndex + 1), 500);
    }
  };

  return (
    <div className="bg-primary-900/80 py-2 mx-auto flex-col gap-4">
      <table className="mb-6 font-mono text-accent-500 w-auto text-left">
        <tbody>
          {details.map((detail, i) => (
            <tr key={detail.label}>
              <td className="pr-4 align-top whitespace-nowrap text-accent-700 text-lg">
                {detail.label}
              </td>
              <td className="text-accent-200 text-lg">
                {i > typedIndex ? null : detail.isLink ? (
                  <a
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-accent-500 transition-colors duration-200"
                  >
                    <TypingText
                      text={typedValues[i]}
                      speed={40}
                      className="inline"
                    />
                    {detail.icon}
                    {/* Only start typing next row when this one is done */}
                    {typedValues[i].length === detail.value().length &&
                      handleTypingDone(i)}
                  </a>
                ) : (
                  <>
                    <TypingText
                      text={typedValues[i]}
                      speed={40}
                      className="inline"
                    />
                    {typedValues[i].length === detail.value().length &&
                      handleTypingDone(i)}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p className="mb-4 text-primary-100 text-lg">
          I am a British software engineer and language enthusiast living and
          working remotely from central Mexico.
        </p>
        <p className="mb-4  text-primary-200 text-lg">
          My formal education is in foreign languages and language teaching. As
          I was working in schools and universities in the UK, Japan, Vietnam,
          Colombia, and Mexico, I became frustrated with the repetitive and
          laborious administrative tasks that took away from the joy of teaching
          and learning. Thinking that there must be a better way lead me into
          the world of software development, first via VBA in Excel, then Google
          Apps Script, and beyond.
        </p>
        <p className="mb-4 text-primary-200 text-lg">
          I discovered a love for building software and an aptitude for problem
          solving which has driven my career ever since.
        </p>
        <p className="mb-4 text-primary-200 text-lg">
          During the pandemic, I found myself between jobs and stuck in a small
          apartment in Hanoi's strick lockdown. Making the most of unexpected
          circumstances, I began my career as a freelance developer, building
          API integrations for businesses all around the world.
        </p>
        <p className="mb-4 text-primary-200 text-lg">
          Pretty soon, it became clear that the demand for my skills wouldn't
          leave me much time for teaching languages anymore.
        </p>
        <p className="mb-4 text-primary-200 text-lg">
          I consider myself extremely lucky to have been able to turn what
          started off as a few fun projects into a long and successful career in
          software development.
        </p>
      </div>
    </div>
  );
};
