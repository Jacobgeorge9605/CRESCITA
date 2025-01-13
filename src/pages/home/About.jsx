/* eslint-disable jsx-a11y/alt-text */
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
// import TeranisLogo from '../../components/about/TeranisLogo'

const animationParent = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.05, delay: 0.4 }
  }
}

const animationChild = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0
  }
}

function About() {
  return (
    <Container
      id="about"
      disableGutters
      maxWidth="100vw"
      sx={{
        backdropFilter: 'blur(3px) saturate(110%)',
        backgroundColor: 'rgba(255, 255, 255,0.01)'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          pt: '10vh',
          alignItems: 'center'
        }}
      >
        <Box
          px={1}
          component={motion.div}
          initial="hidden"
          whileInView="show"
          variants={animationParent}
          viewport={{ once: true }}
        >
          <Typography
            component={motion.h6}
            variants={animationChild}
            viewport={{ once: true }}
            color="secondary"
            variant="h6"
            align="center"
            sx={{
              color:'#04d9ff',
              borderBottom: 2,
              py: 0.8,
              letterSpacing: '1px',
              width: '2.8rem',
              mb: 2,
              fontSize: { xs: '14px', lg: '16px' },
            }}
          >
            ABOUT
          </Typography>

          <Typography
            component={motion.h4}
            variants={animationChild}
            viewport={{ once: true }}
            variant="h4"
            fontWeight={600}
            color="text.primary"
            sx={{ fontSize: { xs: '15px', md: '24px', lg: '28px' } }}
          >
            WELCOME
            TO CRESCITA 2.0
            {/* &apos;24 */}
          </Typography>



          <Typography
            component={motion.p}
            variants={animationChild}
            viewport={{ once: true }}
            variant="body2"
            color="text.primary"
            sx={{
              mt: 1,
              textIndent: '1rem',
              fontSize: { xs: '13px', md: '14px', lg: '16px' }
            }}
          >
            Crescita 2.0 is the three-day flagship event of IEEE SB
            LBSCEK, bringing together students and tech
            enthusiasts from across Kerala on January 24, 25, and
            26, 2025.
           
          </Typography>

          <Typography
            component={motion.p}
            variants={animationChild}
            viewport={{ once: true }}
            variant="body2"
            color="text.primary"
            sx={{
              mt: 1,
              textIndent: '1rem',
              fontSize: { xs: '13px', md: '14px', lg: '16px' }
            }}
          >
            As the biggest technical fest ever hosted at LBS
            College of Engineering, Kasaragod, Crescita promises
            a perfect blend of innovation, learning, and
            entertainment. The event will feature engaging
            technical talks by industry experts, hands-on
            workshops to enhance skills, exciting competitions
            and games that spark creativity, and a thrilling music
            night to conclude the celebrations. Participants can
            also look forward to memorable outings to explore the
            beauty of Kasaragod.
            Crescita 2.0 is not just an event—it’s a celebration of
            technology, talent, and collaboration.
          </Typography>
        </Box>

        {/* <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '1rem',
          opacity: { xs: 0.4, md: 0.7 }
        }}
      >
        <img src={bg} style={{ width: '40vh' }} />
      </Box> */}
      </Container>
    </Container>
  )
}

export default About
