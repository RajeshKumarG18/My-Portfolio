import { FC } from 'react';

const Projects: FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AmazonHub',
      description:
        'AmazonHub is a online store for Electronics, Fashion, Home & Kitchen, Sports, and Beauty — delivering quality, style, and a seamless shopping experience',
      technologies: ['ReactJS'],
      image: 'images/AmazonHub.png',
      link: 'https://hu-50d8d.web.app/',
      type: 'live',
    },
    {
      id: 2,
      title: 'Indica Software',
      description:
        'Indica Software Pvt Ltd delivers enterprise-grade web solutions with integrated UPI payment systems. We build scalable, production-ready platforms that convert visitors into customers through seamless user experiences and secure transaction flows.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'images/Indica Software.png',
      link: 'https://indicasoftware-3ed80v2.gamma.site/indica-software-pvt-ltd-the-learning-platform',
      type: 'live',
    },
    {
      id: 3,
      title: 'Run Engine',
      description:
        'AI-based Attention Arbitrage Engine with automation modules and revenue simulation system.',
      technologies: ['Python'],
      image: '',
      link: 'https://github.com/RajeshKumarG18/run-engine-project',
      type: 'code',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to explore.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              
              {/* Image */}
              <div className="h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    className="text-sm font-medium text-green-800 hover:text-indigo-800"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    {project.type === 'code'
                      ? 'View Source Code'
                      : 'View Project'}
                  </button>

                  {project.type === 'code' && (
                    <button
                      className="text-sm font-medium text-blue-800 hover:text-indigo-800"
                      onClick={() =>
                        window.open(
                          'https://github.com/RajeshKumarG18',
                          '_blank'
                        )
                      }
                    >
                      GitHub Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default Projects;