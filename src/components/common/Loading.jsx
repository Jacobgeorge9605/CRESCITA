import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import crescita_logo from '../cover/TeranisLogo'

function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'heartbeat 1.5s ease-in-out infinite both'
      }}
    >
      {/* <TeranisLogo /> */}
      <Typography
        variant="h1"
        color="text.primary"
        letterSpacing="4px"
        fontFamily="Audiowide"
        sx={{ fontSize: { xs: '40px', md: '50px', lg: '60px' }, mb: 1 }}
      >
        CRESCITA 2.0 &apos;24
      </Typography>

      <Typography
        variant="h6"
        letterSpacing="2px"
        fontWeight={400}
        color="text.secondary"
        sx={{ opacity: 0.9 }}
      >
        LOADING...
      </Typography>
    </Box>
  )
}

export default Loading
