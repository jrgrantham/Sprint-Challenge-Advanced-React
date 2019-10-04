import React from 'react';
import useDarkMode from './useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);
  // this code has been copied to useDarkMode
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <h1>Test</h1>
      <div>
        <div
          onClick={setDarkMode}
        />
      </div>
    </nav>
  );
};

export default Navbar;