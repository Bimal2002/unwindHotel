import React from "react";
import Link from "next/link";

interface NavItemProps {
  to: string;
  text: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, text, onClick }) => {
  return (
    <li className="nav-item">
      <Link href={to} className="nav-links" onClick={onClick}>
        
          {text}
        
      </Link>
    </li>
  );
};

export default NavItem;
