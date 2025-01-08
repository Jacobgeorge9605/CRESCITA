import { Box, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

import '../../components/cover/cover.css'
import EventTimer from '../../components/cover/EventTimer'
import TeranisLogo from '../../components/cover/TeranisLogo'

const animationParent = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.05 }
  }
}

const animationChild = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0
  }
}

function Cover() {
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
        backgroundColor: 'rgba(255, 255, 255,0.05)'
      }}
      component={motion.div}
      initial="hidden"
      whileInView="show"
      variants={animationParent}
      viewport={{ once: true }}
    >
      <motion.div variants={animationChild} viewport={{ once: true }}>
        <TeranisLogo />
      </motion.div>
      <Typography
        component={motion.h1}
        variants={animationChild}
        viewport={{ once: true }}
        variant="h1"
        color="text.primary"
        letterSpacing="4px"
        fontFamily="Audiowide"
        sx={{ fontSize: { xs: '40px', md: '50px', lg: '60px' }, mb: 1 }}
      >
        CRESCITA 2.0 
        {/* &apos;24 */}
      </Typography>
      <Typography
        component={motion.h1}
        variants={animationChild}
        viewport={{ once: true }}
        variant="h1"
        color="text.secondary"
        sx={{ fontSize: { xs: '12px', md: '20px', lg: '28px' } }}
      >
        IEEE Student Branch LBS College of Engineering Kasaragod
      </Typography>
      <Typography
        component={motion.p}
        variants={animationChild}
        viewport={{ once: true }}
        variant="body1"
        color="secondary.light"
        sx={{
          letterSpacing: '1.5px',
          fontSize: { xs: '10px', md: '14px', lg: '18px' },
          mt: 1,
          mb: 5
        }}
      >
        LBS COLLEGE OF ENGINEERING KASARAGOD
      </Typography>
      {/* <Typography
        component={motion.p}
        variants={animationChild}
        viewport={{ once: true }}
        variant="body2"
        color="text.disabled"
        sx={{
          letterSpacing: '1.5px',
          minWidth: '19rem',
          width: 'min(70vw,30rem)',
          mt: 1
        }}
      >
        begins in
      </Typography>
      <Box
        component={motion.div}
        variants={animationChild}
        viewport={{ once: true }}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'end',
          justifyContent: 'space-between',
          gap: 3,
          px: 1,
          my: 0.5
        }}
      >
        <EventTimer date="2023-04-28T00:00:00" size="small" />
      </Box>
      <Typography
        component={motion.p}
        variants={animationChild}
        viewport={{ once: true }}
        variant="body2"
        color="text.secondary"
        align="right"
        sx={{
          minWidth: '19rem',
          letterSpacing: '1.5px',
          width: 'min(70vw,30rem)',
          mb: 4
        }}
      >
        stay tuned.
      </Typography> */}
    </Box>
  )
}

export default Cover
