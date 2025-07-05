interface JobProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export const Job = ({
  title,
  company,
  period,
  location,
  description,
  achievements,
}: JobProps) => (
  <div className="mb-6">
    <div className="flex justify-between items-baseline">
      <h3 className="text-lg font-bold text-primary-100">{title}</h3>
      <p className="text-sm text-accent-600">{period}</p>
    </div>
    <div className="flex justify-between items-baseline mb-2">
      <h4 className="text-lg font-semibold text-accent-500">{company}</h4>
      <p className="text-sm text-accent-600">{location}</p>
    </div>
    <p className="mb-3 text-primary-300">{description}</p>
    <ul className="list-disc list-inside space-y-1 text-primary-200">
      {achievements.map((achievement) => (
        <li key={achievement}>{achievement}</li>
      ))}
    </ul>
  </div>
);
