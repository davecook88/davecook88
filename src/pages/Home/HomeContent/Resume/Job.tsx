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
  <div className="glass-effect rounded-xl p-6 mb-6">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
      <h3 className="text-xl font-bold text-primary-100">{title}</h3>
      <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
        <p className="text-sm text-accent-500 font-medium">{period}</p>
        <p className="text-sm text-accent-600">{location}</p>
      </div>
    </div>
    <h4 className="text-lg font-semibold text-accent-400 mb-3">{company}</h4>
    <p className="mb-4 text-primary-300 leading-relaxed">{description}</p>
    <div>
      <h5 className="font-semibold text-accent-500 mb-2">Key Achievements:</h5>
      <ul className="list-disc list-inside space-y-2 text-primary-200 ml-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="pl-2">{achievement}</li>
        ))}
      </ul>
    </div>
  </div>
);
