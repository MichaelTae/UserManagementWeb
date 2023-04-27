import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { createStyles } from "@mantine/core";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const useStyles = createStyles((theme) => ({
    
    navigationList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 0,
    },
  }));
  
export const Navigation = ({ menuItems }) => {
    const { classes } = useStyles();
    return(
  <motion.ul variants={variants} className={classes.navigationList} >
    {menuItems.map((item) => (
      <MenuItem key={item.id} i={item.id} icon={item.icon} text={item.text} link={item.link} />
    ))}
  </motion.ul>
    )
};


