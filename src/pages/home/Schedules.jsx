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
  const [events, setEvents] = useState([
    {
      id: 1,
      name: '🛠 Workshops',
      desc: 'Various technical workshops.',
      bannerUrl: 'https://i.gyazo.com/b24d4a7ef0496e801231b162a909e9a1.jpg',
      fee: '10',
      date: '2022-10-10',
      eventType: 'Technical'
    },
    {
      id: 2,
      name: '🎙 Inspiring Talks',
      desc: 'Motivational and educational talks.',
      bannerUrl: '/path/to/inspiring_talks.jpg',
      fee: '15'
    },
    {
      id: 3,
      name: '🎭 Cultural Events',
      desc: 'Celebrating diverse cultures.',
      bannerUrl: '/path/to/cultural_events.jpg',
      fee: '20'
    },
    {
      id: 4,
      name: '🎶 Musical Night',
      desc: 'Live music and performances.',
      bannerUrl: '/path/to/musical_night.jpg',
      fee: '25'
    },
    {
      id: 5,
      name: '🎮 Fun, Games & More',
      desc: 'Games, activities, and fun sessions.',
      bannerUrl: '/path/to/fun_games.jpg',
      fee: '5'
    }
  ])
  const [animatedEvents, setAnimatedEvents] = useState([])
  const [popup, setPopup] = useState({ show: false, event: null })
  const eventsCont = useRef(null)
  const navigate = useNavigate()

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
              {/* <Button color="secondary" onClick={() => navigate('/events')}>
                Show me more events
              </Button> */}
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

