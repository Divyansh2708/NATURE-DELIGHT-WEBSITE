import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  // Google Form URLs
  const volunteerFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeSA9HbxDfRFnFpg3Jztt1iWlVv4y9MEEKmHGGm8MFdmj_10A/viewform?vc=0&c=0&w=1&flr=0'; // Replace with your actual Volunteer Form URL
  const DonationFromURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdrSqG_cbCfXiCyafgYGZmkvzX9sEOoZyc2WKSjiTqTObU-Wg/viewform?usp=sf_link';
  // Button click handlers
  const handleVolunteerClick = () => {
    window.open(volunteerFormURL, '_blank', 'noopener,noreferrer');
  };
  const handleDonateClick = () => {
    window.open(DonationFromURL, '_blank', 'noopener,noreferrer');
  };



  const content = (
    <div
      className={`fixed top-0 right-0 h-full w-[45%] bg-white shadow-lg rounded-xl transition-transform duration-300 ease-in-out ${
        click ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <ul className="text-center text-xl font-bold p-2"> {/* Reduced padding */}
        <Link to="/" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Home</li>
        </Link>
        <div>
          <li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded cursor-pointer" onClick={toggleDropdown}>
            About
          </li>
          {dropdown && (
            <ul className="text-center text-lg p-2 bg-gray-100 rounded-lg shadow-inner">
              <Link to="/about/vision-mission" onClick={closeDropdown}>
                <li className="my-2 hover:bg-green-700 hover:rounded">Vision & Mission</li>
              </Link>
              <Link to="/about/contacts" onClick={closeDropdown}>
                <li className="my-2 hover:bg-green-700 hover:rounded">Contacts</li>
              </Link>
            </ul>
          )}
        </div>
        <Link to="/team" onClick={handleClick}><li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Team</li></Link>
        <Link to="/gallery" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Gallery</li>
        </Link>
        <li className="my-4 flex justify-center gap-4">
          <button onClick={handleVolunteerClick} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Volunteer</button>
          <button onClick={handleDonateClick} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Donate</button>
        </li>
      </ul>
    </div>
  );
  

  return (
    <nav className="relative w-full">
      <div className="bg-white shadow-lg rounded-b-lg p-4 flex justify-between items-center z-50 w-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-4" /> {/* Adjust size as needed */}
          <span className="text-3xl font-bold">Nature Delight Foundation</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 text-[18px] list-none">
            <NavLink to="/" className="hover:text-green-600 transition hover:border-green-600 cursor-pointer">
              <li>Home</li>
            </NavLink>
            <div className="relative">
              <li className="hover:text-green-600 transition hover:border-green-600 cursor-pointer" onClick={toggleDropdown}>
                About
              </li>
              {dropdown && (
                <ul className="absolute bg-white shadow-lg mt-2 text-center rounded-lg">
                  <NavLink to="/about/vision-mission" onClick={closeDropdown}>
                    <li className="py-2 px-4 hover:bg-green-700 hover:text-white rounded-lg">Vision & Mission</li>
                  </NavLink>
                  <NavLink to="/about/contacts" onClick={closeDropdown}>
                    <li className="py-2 px-4 hover:bg-green-700 hover:text-white rounded-lg">Contacts</li>
                  </NavLink>
                </ul>
              )}
            </div>
            <NavLink to="/team" className="hover:text-green-600 transition"><li>Team</li></NavLink>
            <NavLink to="/gallery" className="hover:text-green-600 transition hover:border-green-600 cursor-pointer">
              <li>Gallery</li>
            </NavLink>
            <li>
              <button onClick={handleVolunteerClick} className="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition">Volunteer</button>
            </li>
            <li>
              <button onClick={handleDonateClick} className="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition">Donate</button>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={handleClick} className="text-3xl">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>
      {content}
    </nav>
  );
};

export default Navbar;



