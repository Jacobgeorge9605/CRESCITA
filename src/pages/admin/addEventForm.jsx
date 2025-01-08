import React, { useState } from 'react'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Box, Button } from '@mui/material'
import { useFormik } from 'formik'
import axios from 'axios'
import Switch from '@mui/material/Switch'
import { Label } from '@mui/icons-material'
import { toast } from 'react-toastify'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import instance from '../../services/instance'

const initialValues = {
  name: '',
  fee: '',
  desc: '',
  prize: '',
  eventType: '',
  date: '',
  from: '',
  to: '',
  banner: '',
  featured: false,
  contact: '',
  lastDate: '',
  venue: '',
  whatsappLink: ''
}
const modalStyle = {
  '& .MuiTextField-root': { m: 1, width: '40ch' },

  position: 'absolute',
  top: '50%',
  left: '50%',

  transform: 'translate(-50%, -50%)',
  width: '24vw',
  bgcolor: '#020202',
  border: 'none',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  height: '100%',
  display: 'block'
}

function AddEventForm({ handleClose }) {
  const [checked, setChecked] = useState(false)
  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])

  const switchHandler = (event) => {
    setChecked(event.target.checked)
  }

  const submitForm = (val) => {
    instance({
      url: '/events',
      method: 'POST',
      data: val,
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then((response) => {
        toast.success('Event Registered Succesfully')

        handleClose()
        window.location.reload(true)
        toast.success('Event Registered Succesfully')
      })
      .catch((error) => {
        toast.error(error.response.data.message)
        console.log(error)
      })
  }
  const formik = useFormik({
    initialValues,

    onSubmit: (values) => {
      const { name, ...formData } = values
      const trimmedName = String(name).trim()
      submitForm({ name: trimmedName, ...formData })
    }
  })
  return (
    <div>
      <Box sx={modalStyle}>
        <Typography
          sx={{ marginBottom: '15px', fontSize: '20px' }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color="secondary"
        >
          Add an Event
        </Typography>
        <form
          encType="multipart/form-data"
          onSubmit={formik.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center'
          }}
        >
          <TextField
            required
            size="small"
            color="secondary"
            id="name"
            name="name"
            label="Event Name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          <TextField
            size="small"
            color="secondary"
            id="prize"
            name="prize"
            label="Prize"
            variant="outlined"
            value={formik.values.prize}
            onChange={formik.handleChange}
          />

          <TextField
            required
            size="small"
            color="secondary"
            id="fee"
            name="fee"
            label="Fee"
            variant="outlined"
            value={formik.values.fee}
            onChange={formik.handleChange}
          />

          <InputLabel id="demo-simple-select-label">
            Event Type{' '}
            <Select
              required
              color="secondary"
              id="eventType"
              name="eventType"
              label="Event Type"
              variant="outlined"
              size="small"
              value={formik.values.eventType}
              onChange={formik.handleChange}
            >
              <MenuItem value="Inter Event"> Inter Event</MenuItem>
              <MenuItem value="Intra Event">Intra Event</MenuItem>
              <MenuItem value="Workshop">Workshop</MenuItem>
              <MenuItem value="Webinar">Webinar</MenuItem>
              <MenuItem value="Tournament">Tournament</MenuItem>
              <MenuItem value="Games">Games</MenuItem>
              <MenuItem value="Exhibition">Exhibition</MenuItem>
            </Select>
          </InputLabel>

          <TextField
            required
            size="small"
            color="secondary"
            id="from"
            name="from"
            label="From"
            variant="outlined"
            value={formik.values.from}
            onChange={formik.handleChange}
          />
          <TextField
            required
            size="small"
            color="secondary"
            id="to"
            name="to"
            label="To"
            variant="outlined"
            value={formik.values.to}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            color="secondary"
            id="date"
            required
            name="date"
            label="date"
            variant="outlined"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            color="secondary"
            id="contact"
            required
            name="contact"
            label="contact"
            variant="outlined"
            value={formik.values.contact}
            onChange={formik.handleChange}
          />

          <TextField
            size="small"
            color="secondary"
            id="lastDate"
            required
            name="lastDate"
            label="lastDate"
            variant="outlined"
            value={formik.values.lastDate}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            color="secondary"
            id="venue"
            required
            name="venue"
            label="venue"
            variant="outlined"
            value={formik.values.venue}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            color="secondary"
            id="whatsappLink"
            name="whatsappLink"
            label="Whatsapp Link"
            variant="outlined"
            value={formik.values.whatsappLink}
            onChange={formik.handleChange}
          />

          <TextField
            multiline
            size="small"
            color="secondary"
            id="desc"
            required
            name="desc"
            label="Description"
            variant="outlined"
            value={formik.values.desc}
            onChange={formik.handleChange}
          />
          <Typography
            sx={{ color: 'white', fontSize: '16px' }}
            id="modal-modal-title"
          >
            Banner
            <input
              id="banner"
              name="banner"
              required
              onChange={(e) => {
                formik.setFieldValue('banner', e.currentTarget.files[0])
              }}
              label="banner"
              type="file"
            />{' '}
          </Typography>
          <Typography
            sx={{ color: 'white', fontSize: '16px' }}
            id="modal-modal-title"
          >
            Featured
            <Switch
              id="featured"
              name="featured"
              checked={formik.values.featured}
              onChange={formik.handleChange}
            />{' '}
          </Typography>

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  )
}

export default AddEventForm
