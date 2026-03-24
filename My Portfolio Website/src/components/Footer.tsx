import { FC } from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },  
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Left Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">My Portfolio</h3>

            <p className="text-gray-400 max-w-md">
              Creating beautiful and functional web experiences with modern technologies. <br /><br />
              Passionate about clean code and intuitive user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

            <div className="flex space-x-4">

              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500 transition-colors">
                <FaFacebook size={20} />
              </a>

              <a href="https://github.com/RajeshKumarG18/My-Portfolio" className="p-2 bg-white/10 rounded-lg hover:bg-gray-500 transition-colors">
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.instagram.com/18rajeshkumarg/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-pink-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rajesh Kumar G. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;