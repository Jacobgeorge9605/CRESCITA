import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Edit, Delete, AppRegistration } from '@mui/icons-material'
import { Modal } from '@mui/material'
import { toast } from 'react-toastify'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import ConfirmDialog from '../../../components/common/confirmDialog'
import EditEventForm from './EditEventForm'
import instance from '../../../services/instance'

function AllEvents({ stateChanger }) {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmOpen2, setConfirmOpen2] = useState(false)
  const navigate = useNavigate()

  const [events, setEvents] = useState([])
  const [deleteId, setDeleteId] = useState()
  const [initVal, setInitVal] = useState()
  const [eventStatus, seteventStatus] = useState({ eventId: '', status: '' })
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const getEvents = () => {
    instance({
      url: '/events'
    })
      .then((response) => {
        setEvents(response.data.data)
      })
      .catch((error) => {
        handleClose()
        console.log(error)
      })
  }
  
  useEffect(() => {
    getEvents()
  }, [])

  const deleteEvent = () => {
    instance({
      url: `/events/${deleteId}`,
      method: 'DELETE'
    })
      .then((response) => {
        toast.success('Event Deleted Succesfully')

        setDeleteId()
        getEvents()
      })
      .catch((error) => {
        toast.error('Event Delete failed')

        setDeleteId()
        handleClose()
      })
  }
  const statusUpdate = () => {
    if (eventStatus.status == 'Opened') {
      instance({
        url: `/events/change-status/${eventStatus?.eventId}`,
        method: 'PUT',
        data: { status: 'Closed' }
      })
        .then((response) => {
          toast.success('Event Updated Succesfully')

          getEvents()
        })
        .catch((error) => {
          toast.error('Event Update failed')

          handleClose()
        })
    }

    if (eventStatus.status == 'Closed') {
      instance({
        url: `/events/change-status/${eventStatus?.eventId}`,
        method: 'PUT',
        data: { status: 'Opened' }
      })
        .then((response) => {
          toast.success('Event Updated Succesfully')

          getEvents()
        })
        .catch((error) => {
          toast.error('Event Update failed')

          handleClose()
        })
    }
  }
  return (
    <div>
      <Grid sx={{ marginBottom: 10, marginTop: 0 }} container spacing={2}>
        {events.map((item, index) => (
          <Grid item xs={6} md={4}>
            <Card
              sx={{
                maxWidth: 'min(27rem,100vw)',
                backdropFilter: 'blur(3px) saturate(120%)',
                backgroundColor: 'rgba(255, 255, 255,0.1)',
                p: 2,
                borderRadius: 5,
                maxHeight: '22rem'
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item?.bannerUrl}
              />
              <CardContent sx={{ overflow: 'auto', maxHeight: '8rem' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.desc}
                </Typography>
                <Typography variant="body2" color="white">
                  Date: {item?.date}
                </Typography>
                <Typography variant="body2" color="white">
                  Event Type: {item?.eventType}
                </Typography>
                <Typography variant="body2" color="white">
                  Fee: {item?.fee}
                </Typography>
                <Typography variant="body2" color="white">
                  Prize: {item?.prize}
                </Typography>
              </CardContent>
              <div sx={{ flexGrow: 1 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  sx={{ alignItems: 'center', justifyContent: 'center' }}
                  rowSpacing={1}
                >
                  <Grid item xs={2}>
                    <Button
                      sx={{ color: 'white' }}
                      onClick={(e) => {
                        e.preventDefault()
                        setInitVal(item)
                        setOpen(true)
                      }}
                      size="small"
                    >
                      <Edit />
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        setDeleteId(item?._id)
                        setConfirmOpen(true)
                      }}
                      sx={{ color: 'white' }}
                    >
                      <Delete />
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="white">
                      status:
                      <Chip
                        onClick={(e) => {
                          setConfirmOpen2(true)
                          eventStatus.eventId = item?._id
                          eventStatus.status = item?.status
                          seteventStatus({ ...eventStatus })
                        }}
                        label={item?.status}
                      />
                    </Typography>{' '}
                  </Grid>
                  <Grid xs={6}>
                    <Button
                      sx={{ color: 'white' }}
                      onClick={(e) => {
                        navigate('/allinallcuratorhere/registered', {
                          state: { name: item?.name, id: item?._id }
                        })
                      }}
                      size="small"
                    >
                      <AppRegistration />
                      Registrations
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              {/* <Button onClick={(e) => {e.preventDefault();setDeleteId(item?._id);setConfirmOpen(true)}}  sx={{color:"white"}}>Status: {item?.status}</Button> */}
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        sx={{ marginY: 10 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditEventForm
          callEvent={getEvents}
          initialVal={initVal}
          handleClose={handleClose}
        />
      </Modal>

      <ConfirmDialog
        title="Delete Post?"
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={deleteEvent}
      >
        Are you sure you want to delete this post?
      </ConfirmDialog>

      <ConfirmDialog
        title="Change Status?"
        open={confirmOpen2}
        setOpen={setConfirmOpen2}
        onConfirm={statusUpdate}
      >
        Are you sure you want change status?
      </ConfirmDialog>
    </div>
  )
}

export default AllEvents
