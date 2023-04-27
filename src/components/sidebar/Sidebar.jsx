import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';

const sidebarVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: '-100%',
  },
};
const menuItems = [
    { id:1, text: "Home", icon: "🏠", link: "/" },
    { id:2,  text: "Users", icon: "👥", link: "/users" },
    { id:3,text: "Revenue", icon: "💰", link: "/revenue" }
  ];

const Sidebar = ({ isOpen }) => {
  return (
    <motion.div
      className="sidebar"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '250px',
        height: '100%',
        backgroundColor: 'indigo',
        padding: '1rem',
        
      }}
    >
      <h3>Sidebar</h3>
      <Navigation menuItems={menuItems} />
    </motion.div>
  );
};

export default Sidebar;
