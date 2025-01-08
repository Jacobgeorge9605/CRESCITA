/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useNavigate } from 'react-router-dom'
import CelebrationIcon from '@mui/icons-material/Celebration'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import bg from '../../../assets/background/become_bg.svg'

const animationParent = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.05,delay:0.4 }
  }
}

const animationChild = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0
  }
}

function Ambassador() {
  const navigate = useNavigate()
  return (
    <Container
      id="campus-ambassador"
      disableGutters
      maxWidth="100vw"
      sx={{
        backdropFilter: 'blur(3px) saturate(110%)',
        backgroundColor: 'rgba(255, 255, 255,0.05)',
        pb: 3,
        pt: '10vh'
      }}
    >
      {/* <Container
        maxWidth="lg"
        sx={{ position: 'relative', minHeight: '85vh' }}
        component={motion.div}
        initial="hidden"
        whileInView="show"
        variants={animationParent}
        viewport={{ once: true }}
      >

          <Typography
            color="secondary"
            variant="h6"
            align="center"
            sx={{
              borderBottom: 2,
              py: 0.8,
              letterSpacing: '1px',
              width: '6rem',
              mb: 2,
              fontSize: { xs: '14px', lg: '16px' }
            }}
            component={motion.h6}
            variants={animationChild}
            viewport={{ once: true }}
          >
            AMBASSADOR
          </Typography>

          <Typography
            variant="h4"
            fontWeight={600}
            color="text.primary"
            sx={{ fontSize: { xs: '20px', md: '24px', lg: '28px' } }}
            component={motion.h4}
            variants={animationChild}
            viewport={{ once: true }}
          >
            Are you the face of your campus?
          </Typography>

          <Typography
            variant="h4"
            fontWeight={400}
            lineHeight={1.4}
            color="text.secondary"
            sx={{
              fontSize: { xs: '16px', md: '17px', lg: '19px' },
              mt: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5
            }}
            component={motion.h4}
            variants={animationChild}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                borderColor: 'rgba(255,255,255,0.4)',
                fontSize: { xs: '17px', md: '18px', lg: '20px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <TaskAltIcon sx={{ fontSize: 'inherit' }} />
            </Box>
            Join us and unlock your potential as a campus ambassador!
          </Typography>

          <Typography
           component={motion.h4}
           variants={animationChild}
           viewport={{ once: true }}
            variant="h4"
            lineHeight={1.4}
            fontWeight={400}
            color="text.secondary"
            sx={{
              fontSize: { xs: '16px', md: '17px', lg: '19px' },
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5
            }}
          >
            <Box
              sx={{
                borderColor: 'rgba(255,255,255,0.4)',
                fontSize: { xs: '17px', md: '18px', lg: '20px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <CelebrationIcon sx={{ fontSize: 'inherit' }} />
            </Box>
            5K prize money waiting for top referred ambassadors!
          </Typography>

          <Typography
           component={motion.h4}
           variants={animationChild}
           viewport={{ once: true }}
            variant="h4"
            fontWeight={400}
            lineHeight={1.4}
            color="text.secondary"
            sx={{
              fontSize: { xs: '16px', md: '17px', lg: '19px' },
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5
            }}
          >
            <Box
              sx={{
                borderColor: 'rgba(255,255,255,0.4)',
                fontSize: { xs: '17px', md: '18px', lg: '20px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <HelpOutlineIcon sx={{ fontSize: 'inherit' }} />
            </Box>
            For any queries, contact
          </Typography>

          <Typography
           component={motion.h4}
           variants={animationChild}
           viewport={{ once: true }}
            variant="h4"
            fontWeight={400}
            lineHeight={1.4}
            color="text.secondary"
            sx={{
              fontSize: { xs: '14px', md: '16px', lg: '18px' },
              mt: 1,
              textIndent: '2.5rem'
            }}
          >
            +91 81369 92380
          </Typography>
          <Typography
           component={motion.h4}
           variants={animationChild}
           viewport={{ once: true }}
            variant="h4"
            fontWeight={400}
            lineHeight={1.4}
            color="text.secondary"
            sx={{
              fontSize: { xs: '14px', md: '16px', lg: '18px' },
              textIndent: '2.5rem',
              mt: 0.5
            }}
          >
            +91 77366 12714
          </Typography>

          <Button
           component={motion.button}
           variants={animationChild}
           viewport={{ once: true }}
            variant="gradient"
            endIcon={<ArrowRightAltIcon />}
            sx={{ mt: { xs: 6, md: 8, lg: 10 } }}
            onClick={() => navigate('/ambassador-register')}
          >
            Join now
          </Button>

        <Box
          sx={{
            position: 'absolute',
            bottom: '5vh',
            right: '0.5rem',
            opacity: { xs: 0.6, md: 0.8 }
          }}
        >
          <img src={bg} style={{ width: '40vh' }} />
        </Box>
      </Container> */}
    </Container>
  )
}

export default Ambassador
