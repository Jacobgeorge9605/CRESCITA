import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Grid from '@mui/material/Grid'
import EventCard from '../../components/events/EventCard'
import EventPopup from '../../components/schedules/EventPopup'

function EventsList() {
  const [popup, setPopup] = useState({ show: false, event: null })
  const events = [
    { id: 1, name: '🛠 Workshops', description: 'Various technical workshops.' },
    { id: 2, name: '🎙 Inspiring Talks', description: 'Motivational and educational talks.' },
    { id: 3, name: '🎭 Cultural Events', description: 'Celebrating diverse cultures.' },
    { id: 4, name: '🎶 Musical Night', description: 'Live music and performances.' },
    { id: 5, name: '🎮 Fun, Games & More', description: 'Games, activities, and fun sessions.' }
  ]

  const handlePopupClose = () => setPopup((prev) => ({ ...prev, show: false }))

  return (
    <>
      <Grid container gap={3} sx={{ justifyContent: 'center', my: 2 }}>
        {events.map((event) => (
          <Grid item xs="auto" key={event.id}>
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
