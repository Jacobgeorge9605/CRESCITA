/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import Event from '../../components/schedules/Event'
import api from '../../utiils/api'
import EventPopup from '../../components/schedules/EventPopup'

const animationParent = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.05}
  }
}

const animationChild = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0
  }
}

function Schedules() {
  const [events, setEvents] = React.useState([])
  const [animatedEvents, setAnimatedEvents] = useState([])
  const [popup, setPopup] = useState({ show: false, event: null })
  const eventsCont = useRef(null)
  const navigate = useNavigate()

  React.useEffect(() => {
    api.common.events
      .getAll()
      .then((res) =>
        res.data && res.data
          ? setEvents(res.data.filter((item, index) => item?.featured))
          : []
      )
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (events && events.length > 0) setAnimatedEvents([events[0]])
    let nextIndex = 1
    const interval = setInterval(() => {
      if (
        eventsCont.current &&
        eventsCont.current.getBoundingClientRect().top < 200
      ) {
        if (nextIndex <= events.length)
          setAnimatedEvents([...events.slice(0, nextIndex)])

        nextIndex += 1
      }
      if (
        eventsCont.current &&
        eventsCont.current.scrollTop < eventsCont.current.scrollHeight
      )
        eventsCont.current.scrollTop = eventsCont.current.scrollHeight

      if (nextIndex > events.length) clearInterval(interval)
    }, 200)

    return () => clearInterval(interval)
  }, [events])

  const handlePopupClose = () => setPopup((prev) => ({ ...prev, show: false }))

  return (
    <Container
      disableGutters
      ref={eventsCont}
      id="events"
      maxWidth="100vw"
      sx={{
        backdropFilter: 'blur(3px) saturate(110%)',
        backgroundColor: 'rgba(255, 255, 255,0.05)',
        pt: '5vh'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          width: '100vw',
          minHeight: '100vh',
          pt: '5vh',
          overflowX: 'hidden'
        }}
      >
        <Box
          sx={{ pl: 2, pr: 1, py: 3 }}
          component={motion.div}
          initial="hidden"
          whileInView="show"
          variants={animationParent}
          viewport={{ once: true }}
        >
          {/* <Typography
          color="secondary"
          variant="h6"
          align="center"
          sx={{
            borderBottom: 2,
            fontSize: { xs: '14px', lg: '16px' },
            py: 0.8,
            letterSpacing: '1px',
            width: '6.5rem',
            whiteSpace: 'nowrap',
            mb: 2
          }}
        >
          OUR SCHEDULE
        </Typography> */}
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: '24px', md: '28px', lg: '32px' }, mb: 5 }}
            fontWeight={600}
            color="text.primary"
            component={motion.h4}
            variants={animationChild}
            viewport={{ once: true }}
          >
            EVENTS
          </Typography>

          <Container
            maxWidth="md"
            disableGutters
            component={motion.div}
            variants={animationChild}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {animatedEvents.length > 0 &&
                animatedEvents.map((event) => (
                  <Event
                    component={motion.div}
                    initial={{ y: 50, x: 200, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    transition={{ type: 'tween' }}
                    viewport={{ once: true }}
                    data={event}
                    open={() => setPopup({ show: true, event })}
                  />
                ))}
            </AnimatePresence>

            <Box
              sx={{ display: 'flex', alignItems: 'center' }}
              component={motion.div}
              variants={animationChild}
              viewport={{ once: true }}
            >
              <Divider sx={{ flexGrow: 1 }} />
              {/* <Link
                component={RouterLink}
                to="/events"
                color="text.secondary"
                // underline="hover"
                sx={{ mx: 1, fontSize: '0.9rem', fontFamily: 'Poppins' }}
              >
                show me more events
              </Link> */}
              <Button color="secondary" onClick={() => navigate('/events')}>
                Show me more events
              </Button>

              <Divider sx={{ flexGrow: 1 }} />
            </Box>
          </Container>

          <EventPopup
            isOpen={popup.show}
            event={popup.event}
            close={() => handlePopupClose()}
          />
        </Box>
      </Container>
    </Container>
  )
}

export default Schedules
