import { motion } from "framer-motion";
import { Box, createStyles,Tooltip } from "@mantine/core";
import { Link } from 'react-router-dom'


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
const variantsMinfied = {
  open: {
    y: 50,
    opacity: 0,
    
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
    
  },
  closed: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const useStyles = createStyles((theme) => ({
    iconContainer:{
        width: '40px',
        height: '38px',
        borderRadius: '50%',
        
    },
    textContainer:{
        borderRadius:'5px',
        width:'180px',
        height:'40px',
        fontSize:'1.2rem',
    },
    menuLink: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        padding: "0.5rem",
    },
}));

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, icon, text, link, isOpen }) => {
    const { classes } = useStyles();
    
    const style = { border: `2px solid ${colors[i]}`, display:'flex', justifyContent:'center', alignItems:'center',marginLeft:`${isOpen === true ? '0px' :'160px' }`};
    return (
      <>

      {isOpen === true ? <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ listStyleType: "none" }}
        
      >
        <Link to={link} className={classes.menuLink}>
          <div className={classes.iconContainer} style={style}>
            <Box sx={{color:'limegreen', marginTop:'0.3rem'}}>
            {icon}
            </Box>
          </div>
          <div className={classes.textContainer}style={style}>
            {text}
          </div>
          </Link>
      </motion.li> : 
      
      <Tooltip label={text} position="right" transitionProps={{duration:300,transition:'scale-y' }} openDelay={200} sx={{fontWeight:600, border:'1px solid green'}} color="#272640" >
       <motion.li
        variants={variantsMinfied}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ listStyleType: "none" }}
       
        
      >
        <Link to={link} className={classes.menuLink}>
          <div className={classes.iconContainer} style={style}>
            <Box sx={{color:'limegreen', marginTop:'0.3rem'}}>
              {icon}
            </Box>
          </div>
          </Link>
          </motion.li>
          </Tooltip>
      }
      </>
    );
};

  