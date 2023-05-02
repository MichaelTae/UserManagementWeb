import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import { IconUsers,IconHome2,IconCoin } from '@tabler/icons-react';
import { Box, Text, createStyles } from '@mantine/core';


const sidebarVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: '-70%',
  },
};
const menuItems = [
    { id:1, text: "Home", icon: <IconHome2/>, link: "/" },
    { id:2,  text: "Users", icon: <IconUsers/>, link: "/users" },
    { id:3,text: "Revenue", icon: <IconCoin/>, link: "/revenue" }
  ];

  const useStyles = createStyles((theme) => ({
    sideBarMain:{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '250px',
      height: '100%',
      backgroundColor: theme.colorScheme === 'dark' ? '#272640': theme.colors.gray[1],
      padding: '1rem',
    }
  }));

const Sidebar = ({ isOpen }) => {
  const { classes } = useStyles();
  return (
    <motion.div
      
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{ duration: 0.5 }}
      className={classes.sideBarMain}
    >

      <Box>
        <Text>Logo</Text>
        <Box sx={{background:'red', borderRadius:10, height:'10rem', display:'flex', justifyContent:'center'}} mt={30}>
          <Text>Profile</Text>
        </Box>
      </Box>

      <Navigation menuItems={menuItems} isOpen={isOpen} />
      
    </motion.div>
  );
};

export default Sidebar;
