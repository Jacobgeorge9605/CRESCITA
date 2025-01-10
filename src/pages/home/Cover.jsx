import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import EventTimer from '/src/components/cover/EventTimer.jsx'; // Adjust the path as per your folder structure


// Array of colors for letters
const colors = [
  // '#FF5733', // Orange
  // '#33FF57', // Green
  // '#3357FF', // Blue
  // '#FF33A8', // Pink
  // '#FFD700', // Gold
  '#04d9ff',
];

// Generate letter animation variants
const createLetterVariants = (index) => ({
  hidden: { opacity: 0, color: colors[index % colors.length] },
  show: {
    opacity: [0.2, 1, 0.2],
    color: colors[index % colors.length],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2.5,
      delay: index * 0.1,
    },
  },
});

// AnimatedText Component
const AnimatedText = ({ text, variant, fontSize, letterSpacing }) => (
  <Typography
    component={motion.div}
    initial="hidden"
    animate="show"
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }}
    variant={variant}
    sx={{
      display: 'flex',
      gap: '0.1em',
      fontSize,
      letterSpacing,
    }}
  >
    {text.split('').map((char, index) => (
      <motion.span key={index} variants={createLetterVariants(index)}>
        {char}
      </motion.span>
    ))}
  </Typography>
);

// Cover Component
function Cover() {
  const registrationLink = "https://forms.gle/qpsBnJVdueBW5kHM6"; // Registration form link

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(3px) saturate(110%)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <br />
      <br />
      <AnimatedText
        text="CRESCITA 2.0"
        fontFamily="Audiowide"
        variant="h1"
        fontSize={{ xs: '45px', md: '50px', lg: '60px' }}
        letterSpacing="4px"
      />
      <br />
      <br />
      <AnimatedText
        text="IEEE Student Branch"
        variant="h1"
        fontSize={{ xs: '15px', md: '20px', lg: '28px' }}
        letterSpacing="1.5px"
      />
      <AnimatedText
        text="LBS COLLEGE OF ENGINEERING KASARAGOD"
        variant="body1"
        fontSize={{ xs: '10px', md: '14px', lg: '18px' }}
        letterSpacing="1.5px"
      />
      <br />

      <EventTimer date="2025-01-24T00:00:00" size="medium" />

      <Typography
        variant="h6"
        sx={{
          color: 'white',
          fontSize: { xs: '12px', md: '16px', lg: '20px' },
          textAlign: 'center',
        }}
      >
        Happening on <span style={{ color: '#04d9ff' }}>January 24, 25, and 26</span>
      </Typography>
      

      <Button
        component={motion.button}
        whileHover={{ scale: 1.1 }} // Button hover effect
        whileTap={{ scale: 0.9 }} // Button tap effect
        onClick={() => window.location.href = registrationLink} // Redirect to registration link
        sx={{
          mt: 4,
          px: 4,
          py: 1,
          backgroundColor: '#007BFF',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          borderRadius: '20px',
          boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.3)',
          '&:hover': {
            backgroundColor: '#0056b3',
          },
        }}
      >
        Register Now (Early Bird offer)
      </Button>


    </Box>
  );
}

export default Cover;
