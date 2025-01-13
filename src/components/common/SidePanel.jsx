/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { logout } from '../../slices/auth'

const animationParent = {
  hidden: { opacity: 0, y: 5, x: 10 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.05, delay: 0.1 }
  }
}

const animationChild = {
  hidden: { opacity: 0, y: 5, x: 10 },
  show: {
    opacity: 1,
    y: 0,
    x: 0
  }
}

function SidePanel({ anchorEl, close, isHome = false }) {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const pages = isLoggedIn
    ? isHome
      ? [
        'Home',
        'About',
        'Events',
        
        // 'CA Profile',
        // 'CA Leaderboard',

        'Gallery',
        'Contact US',
      ]
      : ['Home', 'CA Profile', 'CA Leaderboard']
    : isHome
      ? [
        'Home',
        'About',
        'Events',
        'Contact US',

        // 'Campus Ambassador',
        // 'CA Leaderboard',
        'Gallery'
      ]
      : ['Home']
  // 'Campus Ambassador', 'CA Leaderboard']

  function getLink(page) {
    switch (page) {
      case 'Home':
        return '/'
      case 'About':
        return '#about'
      case 'Events':
        return '#events'
      
      case 'Gallery':
        return '#gallery'
      case 'Sponsors':
        return '#Contact US'
      case 'Contact US':
        return '#Contact US'
      // case 'Campus Ambassador':
      //   return '/#campus-ambassador'
      // case 'CA Profile':
      //   return '/ambassador-profile'
      // case 'CA Leaderboard':
        // return '/ambassador-leaderboard'
      default:
        return '#about'
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    // localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Drawer anchor="right" open={Boolean(anchorEl)} onClose={close}>
        <Box
          sx={{
            pt: 10,
            height: '100%',
            background: ' rgba(25, 26, 56, 1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8.3px)',
            WebkitBackdropFilter: 'blur(8.3px)',
            border: '1px solid rgba(33, 36, 92, 0.56)'
          }}
          role="presentation"
          onClick={close}
          onKeyDown={close}
        >
          <List
            component={motion.div}
            initial="hidden"
            whileInView="show"
            variants={animationParent}
            viewport={{ once: true }}
          >
            {pages.map((page) => (
              <ListItemButton
                component={motion.a}
                variants={animationChild}
                viewport={{ once: true }}
                sx={{ pl: 3, pr: 5 }}
                key={page}
                // onClick={() => handleMenuClick(page)}
                LinkComponent={Link}
                href={getLink(page)}
              >
                <ListItemText primary={page} />
              </ListItemButton>
            ))}
            {isLoggedIn && (
              <ListItemButton
                component={motion.a}
                variants={animationChild}
                viewport={{ once: true }}
                sx={{ pl: 3, pr: 5 }}
                onClick={handleLogout}
              >
                <ListItemText primary="Logout" />
              </ListItemButton>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default SidePanel
