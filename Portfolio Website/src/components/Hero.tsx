import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-indigo-600">Rajesh Kumar G</span>
            </h1>

            <h2 className="text-2xl md:text-3xl mt-4 text-gray-900">
              Frontend Developer & UI Designer
            </h2>

            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              I create beautiful, responsive websites and applications with modern technologies.
              Passionate about crafting intuitive user experiences that make a difference.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors"
              >
                Connect Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              
              {/* Profile Circle */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-indigo-600 p-1">
                <img
                  src="images/Profile_Picture.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Non-clickable Badge */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                Open to Work!
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;