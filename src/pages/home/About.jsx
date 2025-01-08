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
              borderBottom: 2,
              py: 0.8,
              letterSpacing: '1px',
              width: '2.8rem',
              mb: 2,
              fontSize: { xs: '14px', lg: '16px' }
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
            sx={{ fontSize: { xs: '20px', md: '24px', lg: '28px' } }}
          >
            WELCOME <br />
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
            Lore ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
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
            ghjcjggggggggggg fhfghyf  fdhfghfghfg dfgdgdfg dfgdfgdfg
            dfgdfgdfgbc dgdg dadfrsdfsdf sdfs f sdf sdf asf sdff sdfsd
            sdfsdf sdfsdf sdfdsf sdf ssdf sdfsdfsdf sdf sdfsdf sdfsdf sdfsdfsdf
            sdfsdf sdf sd sdf sdf dsf dsf sdfsfds sdfsfsdfsdf sdfsd fsdf .
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
