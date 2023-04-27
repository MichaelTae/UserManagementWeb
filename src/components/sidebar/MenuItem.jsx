import { motion } from "framer-motion";
import { createStyles } from "@mantine/core";
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

const useStyles = createStyles((theme) => ({
    iconContainer:{
        width: '40px',
  height: '40px',
  borderRadius: '50%',
  
  
    },
    textContainer:{
        borderRadius:'5px',
        width:'180px',
        height:'30px',
        
    },
    menuLink: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
         marginRight: theme.spacing.lg,
      },
}));

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, icon, text, link }) => {
    const { classes } = useStyles();
    const style = { border: `2px solid ${colors[i]}` };
    return (
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ listStyleType: "none" }}
        
      >
        
        <Link to={link} className={classes.menuLink}>
          <div className={classes.iconContainer} style={style}>
            {icon}
          </div>
          <div className={classes.textContainer}style={style}>
            {text}
          </div>
          </Link>
      </motion.li>
    );
  };
  