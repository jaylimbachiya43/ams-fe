'use client'
import Link from 'next/link';
import { useState } from 'react';
import style from '../../../../ams-fe/src/sections/SideBar/style.module.css'
import signOutButton from '../../../../pr-auth/src/components/signOutButton'
import SignOutButton from '../../../../pr-auth/src/components/signOutButton';

const Sidebar = ({ sidebarItems }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <div className={style.container}>
      <div className={style.stem}>
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={style.m1}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={item.link} className={`relative flex items-center p-3 ${hoveredItem === index
              ? 'transform scale-110 transition-transform'
              : ''
              }`}>
              {item.icon}
              {hoveredItem === index && (
                <span className={style.title}>
                  {item.title}
                </span>
              )}
            </Link>
          </div>
        ))}
        <SignOutButton/>
      </div>
    </div>
  );
};
export default Sidebar;