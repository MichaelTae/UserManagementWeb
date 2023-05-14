import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import { IconUsers, IconHome2,IconCoin,IconLogin,IconMenu2, IconArrowLeft } from '@tabler/icons-react';
import { Box, Button, Image, Text, Tooltip, createStyles } from '@mantine/core';
import Logo from '../../assets/Logo.png';
const sidebarVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: '-70%',
  },
};
const menuItems = [
  { id: 1, text: 'Home', icon: <IconHome2 />, link: '/' },
  { id: 2, text: 'Users', icon: <IconUsers />, link: '/users' },
  { id: 3, text: 'Revenue', icon: <IconCoin />, link: '/revenue' },
 
];

const useStyles = createStyles((theme) => ({
  sideBarMain: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '250px',
    height: '100vh',
    padding: '1rem',
    zIndex: 100,
    borderRadius: '16px',
    backdropFilter: 'blur(10.9px)',
    webkitBackdropFilter: 'blur(10.9px)',
    border: '1px solid rgba(0,191,166,0.3)',
    
  },
  sidebarToggle: {
    position: 'absolute',
    top: 10,
    
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'rgba(0,191,166,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 100,

  },
}));

const Sidebar = ({ isOpen, onToggle }) => {
  const { classes } = useStyles();
  
  
  
  return (
    <motion.div
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{ duration: 0.5 }}
      className={classes.sideBarMain}
      
    >
      
      <motion.button initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{ duration: 0.5 }}
      className={classes.sidebarToggle}
      onClick={() => onToggle()}
      style={{ right: isOpen ? '10px' : '-15px',color:'rgba(0,191,166,0.8)', background:'rgba(0,191,166,0.05)', border:'1px solid rgba(0,191,166,0.6)', boxShadow:'3px 4px 8px 0px rgba(0,191,166,0.1)' }}
      
      >
      
      {isOpen ? <IconArrowLeft/> : <IconMenu2/>}
      </motion.button>
      <Box>
       
        
        <Box
          sx={{
              
            borderRadius: 10,
            height: '10rem',
      
            
            
          }}
          mt={30}
        >
           <Image src={Logo} opacity={0.9} sx={{boxShadow:'3px 4px 8px 0px rgba(0,191,166,0.1)'}} hidden={isOpen ? false: true}/>
           <Text size={18} sx={{display:'flex', justifyContent:'center'}} opacity={isOpen? 1 : 0} >User Management Center</Text>
        </Box>
      </Box>

       <Navigation menuItems={menuItems} isOpen={isOpen} />
      {isOpen === true ? <Button  onClick={() => {localStorage.removeItem('auth'),window.location.reload(); }} sx={{ top:400, width:'100%',color:'rgba(0,191,166,0.8)', background:'rgba(0,191,166,0.05)', border:'1px solid rgba(0,191,166,0.6)', boxShadow:'3px 4px 8px 0px rgba(0,191,166,0.1)'}}>Log out</Button> : 
      <Tooltip label='Log out' position="right" transitionProps={{duration:300,transition:'scale-y' }} openDelay={200} sx={{fontWeight:600, border:'1px solid green'}} color="#272640" ><Button  onClick={() => {localStorage.removeItem('auth'),window.location.reload(); }} sx={{left:160, top:400,color:'rgba(0,191,166,0.8)', background:'rgba(0,191,166,0.05)', border:'1px solid rgba(0,191,166,0.6)', boxShadow:'3px 4px 8px 0px rgba(0,191,166,0.1)'}}><IconLogin/></Button></Tooltip>}
    </motion.div>
  );
};

export default Sidebar;
