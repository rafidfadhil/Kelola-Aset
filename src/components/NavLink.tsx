// NavLink.tsx
import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NavLinkProps {
  label: string;
  to: string;
  icon?: IconDefinition;
}

export const NavLink: React.FC<NavLinkProps> = ({ label, to, icon }) => {
  return (
    <a href={to} className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-900 hover:text-white">
      {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
      {label}
    </a>
  );
};
