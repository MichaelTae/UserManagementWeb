import React, { useRef } from 'react';
import { Box, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  cards: {
    backgroundColor: '#262654',
    height: 'inherit',
    width: 'inherit',
    borderRadius: 15,

    '&:hover .card::after': {
        opacity: 1,
    },
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    height: '100px',
    width: 'inherit',

    '&:hover::before': {
      opacity: 1,
    },
    '&:hover::after': {
        opacity: 1,
    },
    '&:before ': {
      borderRadius: 'inherit',
      content: '""',
      height: '100%',
      left: '0px',
      opacity: 0,
      position: 'absolute',
      top: '0px',
      transition: 'opacity 500ms',
      width: '100%',
      background:
        ' radial-gradient( 600px circle at var(--mouse-x) var(--mouse-y),  rgba(255, 255, 255, 0.1), transparent 20%)',
      zIndex: 3,
    },
    '&:after': {
      borderRadius: 'inherit',
      content: '""',
      height: '100%',
      left: '0px',
      opacity: 0,
      position: 'absolute',
      top: '0px',
      transition: 'opacity 500ms',
      width: '100%',
      background:
        ' radial-gradient( 200px circle at var(--mouse-x) var(--mouse-y),  rgba(255, 255, 255, 0.3), transparent 40%)',
      zIndex: 1,
    },
  },
  cardContent: {
    backgroundColor: 'black',
    borderRadius: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    inset: '1px',
    padding: '10px',
    position: 'absolute',
    zIndex: 2,
    backdropFilter: 'blur(10.9px)',
  },
}));

const Card = (props) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
        
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };
  const { classes } = useStyles();

  return (
    <Box className={classes.cards} ref={cardRef} onMouseMove={handleMouseMove} >
      <Box className={classes.card} ref={cardRef} >
        <Box className={classes.cardContent} ref={cardRef} >{props.children}</Box>
      </Box>
    </Box>
  );
};

export default Card;
