import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Container } from '@mui/system'
import { Box, Grid, Link, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import EventsNavbar from './Navbar'
import EventsList from './EventsList'

export default function EventsTab() {
  return (
    <Container maxWidth="100vw" disableGutters>
      <EventsNavbar />
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Link
          component={RouterLink}
          to="/"
          color="text.secondary"
          underline="hover"
          sx={{
            mx: 1,
            fontSize: 'min(5vw,1.6rem)',
            fontWeight: 600,
            fontFamily: 'Poppins',
            color: 'text.primary',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <ArrowBackIosIcon fontSize="inherit" />
          EVENTS
        </Link>
        <Box sx={{ height: '80vh', overflowY: 'auto', my: 1,overflowX:'hidden' }}>
          <EventsList />
        </Box>
      </Container>
    </Container>
  )
}
