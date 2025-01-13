import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import logo from '../../../assets/teranis_logo.png'

export default function EventAppBar() {
  const [currentPage, setCurrentPage] = React.useState(0)
  const windowHeight = window.innerHeight

  React.useEffect(() => {
    const handleScroll = () => {
      const pageOffset = window.pageYOffset
      const newPage = Math.ceil(pageOffset / windowHeight)
      setCurrentPage(newPage)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [windowHeight])

  return currentPage > 0.5 ? null : (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(5px) saturate(130%)',
          height: '4rem',
          top: 0,
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.5s ease-in-out',
          zIndex: 999,
          boxShadow: 0
        }}
      >
          <Link to="/" style={{textDecoration:'none', outline:'none'}}>
        <Toolbar disableGutters sx={{ justifyContent: 'flex-start' }}>
          <Box
            sx={{
              width: { xs: '2.5rem', md: '2rem', lg: '2.5rem' },
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
            >
            <img
              alt="logo"
              style={{ width: '100%', height: 'auto' }}
              src={logo}
              />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            color="text.primary"
            fontFamily="Audiowide"
            href="/"
            sx={{
              ml:1,
              display: 'flex',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration:'none'
            }}
          >
            CRESCITA 2.0
          </Typography>
        </Toolbar>
              </Link>
      </AppBar>
    </Box>
  )
}
