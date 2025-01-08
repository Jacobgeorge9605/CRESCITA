/* eslint-disable react/jsx-props-no-spreading */
import React, {  useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, Box, Button, Link, Menu, MenuItem } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SidePanel from '../common/SidePanel'
import logo from '../../../assets/teranis_logo.png'
import stringAvatar from './stringAvatar'
import api from '../../utiils/api'
import { logout } from '../../slices/auth'

const pages = ['Home', 'Profile', 'CA Leaderboard']

function Appbar() {
  const [anchorElMenu, setAnchorElMenu] = useState(null)
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [profileUrl, setProfileUrl] = useState(null)
  const [username, setUsername] = useState('Teranis User')
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  React.useEffect(() => {
    api.ambassador.profile
      .get()
      .then((res) => {
        setProfileUrl(res.data?.profileUrl)
        setUsername(res.data?.name ? res.data.name : 'Teranis User')
      })
      .catch((err) => console.log(err))
  }, [])

  // console.log(profileUrl)
  const open = Boolean(anchorElMenu)

  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorElMenu(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    // localStorage.removeItem('user')
    window.location.reload()
  }

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleMenuClick = (page) => {
    switch (page) {
      case 'Home':
        navigate('/')
        break
      case 'Profile':
        navigate('/ambassador-profile')
        break
      case 'CA Leaderboard':
        navigate('/ambassador-leaderboard')
        break
      default:
        navigate('/ambassador-profile')
    }
  }

  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(5px) saturate(130%)',
        height: '4rem',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ mr: 1, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'start' }
          }}
        >
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

        <Box
          sx={{
            flexGrow: 1,
            width: { xs: 0, md: 'auto' },
            justifyContent: 'end',
            display: { xs: 'none', md: 'flex' }
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleMenuClick(page)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
          {isLoggedIn && (
            <Button
              onClick={handleLogout}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Logout
            </Button>
          )}
        </Box>

        <div>
          {isLoggedIn && (
            <IconButton
              sx={{ display: { md: 'none' } }}
              size="large"
              aria-controls={open ? 'menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickMenu}
              color="inherit"
            >
              {profileUrl ? (
                <Avatar
                  src={profileUrl}
                  sx={{
                    width: 28,
                    height: 28
                  }}
                />
              ) : (
                <Avatar
                  {...stringAvatar(username)}
                  sx={{
                    ...stringAvatar(username).sx,
                    width: 28,
                    height: 28,
                    fontSize: '16px'
                  }}
                />
              )}
            </IconButton>
          )}
          <Menu
            id="menu"
            open={open}
            anchorEl={anchorElMenu}
            onClick={handleCloseMenu}
            onClose={handleCloseMenu}
            PaperProps={{
              sx: {
                width: '190px',
                bgcolor: '#070b42',
                borderRadius: '8px'
              }
            }}
          >
            <Link
              component={RouterLink}
              to="/ambassador-profile"
              underline="none"
            >
              <MenuItem
                onClick={handleCloseMenu}
                sx={{ color: 'white', textDecoration: 'none !important' }}
              >
                Profile
              </MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
        <SidePanel anchorEl={anchorElNav} close={() => handleCloseNavMenu()} />
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
