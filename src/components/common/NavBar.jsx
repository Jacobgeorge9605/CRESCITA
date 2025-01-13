import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from '@mui/material'
import logo from '../../../assets/teranis_logo.png'
import SidePanel from './SidePanel'

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [isTop, setIsTop] = React.useState(true)
  const screenHeight = window.screen.height
  const { isLoggedIn } = useSelector((state) => state.auth)

  const pages = isLoggedIn
    ? [
      'Home',
      'About',
      'Events',
      // 'Sponsors',
      // 'CA Profile',
      // 'CA Leaderboard',
      'Gallery',
      // 'FAQ',
      'Contact',
    ]
    : [
      'Home',
      'About',
      'Events',
      // 'Sponsors',
      // 'Campus Ambassador',
      // 'CA Leaderboard',
      'Gallery',
      // 'FAQ',
      'Contact',
    ]

  React.useEffect(() => {
    const el = document.getElementById('main-cont')
    function onScroll() {
      if (el.scrollTop >= (screenHeight * 5.5) / 10) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    }

    el.addEventListener('scroll', onScroll, { passive: true })

    return () => el.removeEventListener('scroll', onScroll, { passive: true })
  }, [])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  function getLink(page) {
    switch (page) {
      case 'About':
        return '#about'
      case 'Events':
        return '/#events'
      case 'Footer':
        return '/#footer'
      case 'Sponsors':
        return '/#sponsor'
      case 'Gallery':
        return '/#gallery'
      // case 'FAQ':
      //   return '/#FAQ'
      case 'Contact':
        return '/#contact-us'
      // case 'Campus Ambassador':
      //   return '/#campus-ambassador'
      // case 'CA Profile':
      //   return '/ambassador-profile'
      // case 'CA Leaderboard':
      //   return '/ambassador-leaderboard'
      default:
        return '/'
    }
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        background: isTop ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.15)',
        backdropFilter: isTop
          ? 'blur(0) saturate(100%)'
          : 'blur(5px) saturate(130%)',
        height: isTop ? '4.5rem' : '4rem',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.5s ease-in-out',
        zIndex: 999,
        boxShadow: isTop ? 0 : 2
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
                display: 'flex',
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
                ml: 1,
                display: 'flex',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none'
              }}
            >
              CRESCITA 2.0
            </Typography>
          </Box>
          <SidePanel
            isHome
            anchorEl={anchorElNav}
            close={() => handleCloseNavMenu()}
          />

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'end',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                LinkComponent={Link}
                href={getLink(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Button
            variant="contained"
            sx={{ ml: 3, display: { xs: 'none', md: 'block' } }}
          >
            Get Tickets
          </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
