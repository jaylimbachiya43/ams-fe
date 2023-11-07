'use client'
import Link from 'next/link';
import { useState } from 'react';
import style from './style.module.css'

const Sidebar = ({ sidebarItems }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <div className={style.container}>
      <div className={style.stem}>
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="mb-4 flex items-center cursor-pointer"
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
      </div>
    </div>
  );
};
export default Sidebar;

// Sidebar.js
// import Link from 'next/link';
// import { useState } from 'react';
// import style from './style.module.css';

// const Sidebar = ({ userRole }) => {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   // Define sidebar items for different roles
//   const sidebarItems = {
//     admin: [
//       { title: 'Dashboard', link: '/admin/dashboard', icon: /* Admin dashboard icon */ },
//       { title: 'Users', link: '/admin/users', icon: /* Admin users icon */ },
//       // Add more admin-specific items
//     ],
//     student: [
//       { title: 'Dashboard', link: '/student/dashboard', icon: /* Student dashboard icon */ },
//       { title: 'Courses', link: '/student/courses', icon: /* Student courses icon */ },
//       // Add more student-specific items
//     ],
//     hr: [
//       { title: 'Dashboard', link: '/hr/dashboard', icon: /* HR dashboard icon */ },
//       { title: 'Employees', link: '/hr/employees', icon: /* HR employees icon */ },
//       // Add more HR-specific items
//     ],
//   };

//   const items = sidebarItems[userRole] || [];

//   return (
//     <div className={style.container}>
//       <div className={style.stem}>
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="mb-4 flex items-center cursor-pointer"
//             onMouseEnter={() => setHoveredItem(index)}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <Link
//               href={item.link}
//               className={`relative flex items-center p-3 ${
//                 hoveredItem === index
//                   ? 'transform scale-110 transition-transform'
//                   : ''
//               }`}
//             >
//               {item.icon}
//               {hoveredItem === index && (
//                 <span className={style.title}>{item.title}</span>
//               )}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
