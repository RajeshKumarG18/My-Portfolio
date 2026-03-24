import { FC, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const NAVBAR_OFFSET = 80;

  const handleNavigation = (id: string) => {
    setActiveSection(id);

    const section = document.getElementById(id);
    if (section) {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_OFFSET;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  const handleReload = () => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Reload page
    window.location.reload();
  };

  // Ensure page always starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span
                onClick={handleReload}
                className="text-xl font-bold text-red-800 cursor-pointer"
              >
                My Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-700 hover:text-indigo-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;