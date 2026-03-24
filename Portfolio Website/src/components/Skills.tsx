import { FC } from 'react';

const Skills: FC = () => {
  const skills = [
    { name: 'ReactJS', level: 60 },
    { name: 'HTML & CSS', level: 85 },
    { name: 'JavaScript', level: 70 },
    { name: 'WebDesign', level: 80 },
    { name: 'Logo Design', level: 80 },
    { name: 'Video Editing', level: 80 },
    { name: 'Artificial Intelligence & Machine Learning', level: 65 },
    { name: 'Control Version System', level: 70 },
    { name: 'WebDesign', level: 80 },
    { name: 'Tailwind CSS', level: 40 },
    { name: 'Node.js', level: 50 },
    { name: 'Python', level: 90 },
    { name: 'UI/UX Design', level: 60 },
    { name: 'Communication Skills', level: 95 },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with. I'm constantly learning and improving my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="text-green-600 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['GitHub', 'VS Code', 'AI Tools', 'AI Models', 'Firebase', 'AWS'].map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;