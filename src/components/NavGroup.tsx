import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from './NavLink';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NavGroupProps {
  mainLabel: string;
  mainIcon: IconDefinition;
  links: Array<{
    label: string;
    to: string;
    icon?: IconDefinition;
  }>;
}

export const NavGroup: React.FC<NavGroupProps> = ({ mainLabel, mainIcon, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Estimasi tinggi sub-menu berdasarkan jumlah link * tinggi masing-masing item (estimasi)
  const maxHeight = isOpen ? `${links.length * 2.5}rem` : '0';

  return (
    <div>
      <div className="flex items-center justify-between py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white cursor-pointer" onClick={toggleDropdown}>
        <div className="flex items-center">
          <FontAwesomeIcon icon={mainIcon} className="mr-3" />
          <span>{mainLabel}</span>
        </div>
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </div>
      
      <div style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
        {links.map(link => (
          <NavLink key={link.label} label={link.label} to={link.to} icon={link.icon} />
        ))}
      </div>
    </div>
  );
};
