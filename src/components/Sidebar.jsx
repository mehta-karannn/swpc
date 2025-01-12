import React from 'react';
import { Home, Cloud, Thermometer, Waves, Fish, Satellite, FlaskRoundIcon as Flask, Anchor, Map, TreesIcon as Tree, GraduationCap, Newspaper, PenToolIcon as Tool, Info, Menu, X } from 'lucide-react';

function Sidebar({ isOpen, toggleSidebar }) {
  const links = [
    { name: 'Home', icon: Home },
    { name: 'Weather', icon: Cloud },
    { name: 'Climate', icon: Thermometer },
    { name: 'Ocean & Coasts', icon: Waves },
    { name: 'Fisheries', icon: Fish },
    { name: 'Satellites', icon: Satellite },
    { name: 'Research', icon: Flask },
    { name: 'Marine & Aviation', icon: Anchor },
    { name: 'Charting', icon: Map },
    { name: 'Sanctuaries', icon: Tree },
    { name: 'Education', icon: GraduationCap },
    { name: 'News and features', icon: Newspaper },
    { name: 'Tools & resources', icon: Tool },
    { name: 'About our agency', icon: Info }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#" className="nav-link">
                <span className="icon">
                  <link.icon size={20} />
                </span>
                <span className="link-text">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        .sidebar {
          width: 60px;
          height: 100vh;
          background: #0073CF;
          position: fixed;
          left: 0;
          top: 0px;
          transition: width 0.3s ease-in-out;
          z-index: 1000;
          overflow-y: auto;
          overflow-x: hidden;

        }
        .sidebar.open {
          width: 250px;
        }
        .toggle-btn {
          position: fixed;
          left: 0;
          top: 0px;
          width: 60px;
          height: 60px;
          background: #0073CF;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          z-index: 1001;
          
        }
        .sidebar.open .toggle-btn {
          left: 250px;
        }
        nav {
          margin-top: 60px;
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .nav-link {
          display: flex;
          align-items: center;
          padding: 15px;
          text-decoration: none;
          color: white;
          transition: background-color 0.3s ease;
        }
        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .icon {
          min-width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .link-text {
          margin-left: 10px;
          opacity: ${isOpen ? '1' : '0'};
          transition: opacity 0.3s ease;
        }
        /* Scrollbar Styling */
        .sidebar::-webkit-scrollbar {
          width: 5px;
        }
        .sidebar::-webkit-scrollbar-track {
          background: #0073CF;
        }
        .sidebar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        .sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Sidebar;

