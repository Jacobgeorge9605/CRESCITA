import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import logo from '../../../assets/teranis_logo.png'

function TeranisLogo() {
  useEffect(() => {
    const img = new Image()
    img.src = logo
  }, [])
  
  return (
    <Box
      sx={{
        width: { xs: 'min(50%,12rem)', sm: 'min(40vw,30rem)' },
        opacity: 0.8,
        mx: 'auto'
        // display: { xs: 'none', sm: 'block' }
      }}
    >
      <img
        style={{ width: '100%', height: 'auto' }}
        alt="teranis-logo"
        src={logo}
      />
    </Box>
  )
}

export default TeranisLogo
