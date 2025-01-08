import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Container, Typography } from '@mui/material'
import Event from './Event'
import api from '../../utiils/api'

function CustomTab(props) {
  return (
    <Tab
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      sx={{
        bgcolor: 'primary.dark',
        px: 2,
        '&:first-child': {
          borderTopLeftRadius: '15px',
          borderBottomLeftRadius: '15px'
        },
        '&:last-child': {
          borderTopRightRadius: '15px',
          borderBottomRightRadius: '15px'
        }
      }}
    />
  )
}

export default function Events() {
  const [value, setValue] = React.useState(0)
  const [events, setEvents] = React.useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  React.useEffect(() => {
    api.common.events
      .getAll()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err))

    // setEvents(
    //   res.data.length > 0 ? res.data.filter((event) => event.featured) : []
    // )
  }, [])

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="transparent"
        sx={{ mt: 3 }}
        centered
      >
        <CustomTab
          value={0}
          label={
            <>
              <Typography
                sx={{ mb: 0.7, fontSize: { xs: '12px', sm: '16px' } }}
                variant="h6"
                color="text.primary"
              >
                Friday
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                variant="body2"
                color="text.secondary"
              >
                April 28, 2023
              </Typography>
            </>
          }
        />
        <CustomTab
          value={1}
          label={
            <>
              <Typography
                sx={{ mb: 0.7, fontSize: { xs: '12px', sm: '16px' } }}
                variant="h6"
                color="text.primary"
              >
                Saturday
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                variant="body2"
                color="text.secondary"
              >
                April 29, 2023
              </Typography>
            </>
          }
        />
      </Tabs>
    </>
  )
}
