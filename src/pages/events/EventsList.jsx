import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, CardActionArea, Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Chip from '@mui/material/Chip'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import { styled } from '@mui/system'
import { AnimatePresence, motion } from 'framer-motion'
import api from '../../utiils/api'
import Event from '../../components/schedules/Event'
import EventPopup from '../../components/schedules/EventPopup'
import EventCard from '../../components/events/EventCard'

const StyledAccordion = styled(Accordion)({
  '&.MuiAccordion-root': {
    backgroundColor: 'rgba(21, 24, 83,1)',
    borderRadius: '14px',
    paddingTop: '8px',
    boxShadow: 'none',
    marginTop: '0.7rem'
  }
})

const StyledAccordionDetails = styled(AccordionDetails)({
  '&.MuiAccordionDetails-root': {
    backgroundColor: '#393E89',
    borderBottomLeftRadius: '14px',
    borderBottomRightRadius: '14px',
    padding: '0.5rem'
  }
})
function EventsList() {
  const [events, setEvents] = useState([])
  const navigate = useNavigate()
  const [popup, setPopup] = useState({ show: false, event: null })
  const [animatedEvents, setAnimatedEvents] = useState([])

  useEffect(() => {
    api.common.events
      .getAll()
      .then((response) => {
        setEvents(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (events && events.length > 0) setAnimatedEvents([events[0]])
    let nextIndex = 1
    const interval = setInterval(() => {
      if (nextIndex <= events.length)
        setAnimatedEvents([...events.slice(0, nextIndex)])

      nextIndex += 1

      if (nextIndex > events.length) clearInterval(interval)
    }, 200)

    return () => clearInterval(interval)
  }, [events])

  const handlePopupClose = () => setPopup((prev) => ({ ...prev, show: false }))

  return (
    <>
      <Grid container gap={3} sx={{ justifyContent: 'center', my: 2 }}>
        <AnimatePresence>
          {animatedEvents.length > 0 &&
            animatedEvents.map((event) => (
              <Grid item xs="auto">
                <EventCard
                  component={motion.div}
                  initial={{ y: 50, x: 200, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  transition={{ type: 'tween' }}
                  viewport={{ once: true }}
                  data={event}
                  open={() => setPopup({ show: true, event })}
                />
              </Grid>
            ))}
        </AnimatePresence>
      </Grid>

      <EventPopup
        isOpen={popup.show}
        event={popup.event}
        close={() => handlePopupClose()}
      />
    </>
  )
}
export default EventsList
