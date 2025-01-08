/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import { useFormik } from 'formik'
import React, { useContext, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'
import * as Yup from 'yup'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { Link as RouterLink } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import bg from '../../../assets/background/ambassador_reg.svg'

import { register } from '../../slices/auth'
import Appbar from '../../components/ambassador/AppBar'
import { NotificationContext } from '../../contexts/NotificationContext'

const initialValues = {
  photo: '',
  name: '',
  phone: '',
  email: '',
  password: '',
  college: '',
  dept: '',
  semester: ''
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),

  phone: Yup.string()
    .required('This field is required!')
    .matches(/^\d+$/, 'Phone number must contain only digits.')
    .length(10, 'Phone Number must be exactly 10 digits long.'),

  email: Yup.string()
    .email('Enter a valid Email Id!')
    .required('This field is required!'),

  password: Yup.string()
    .required('This field is required!')
    .min(6, 'Password must be at least 6 characters'),

  college: Yup.string().required('This field is required!'),

  dept: Yup.string().required('This field is required!'),

  semester: Yup.number()
    .required('This field is required!')
    .min(1, 'Semester must be at least 1')
})

function AmbassadorRegister() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoggedIn } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const fileInput = useRef(null)
  const { createNotification } = useContext(NotificationContext)

  const handleLogin = (formValue) => {
    // const { email, password } = formValue
    // console.log(formValue)
    setLoading(true)

    dispatch(register(formValue))
      .unwrap()
      .then(() => {
        navigate('/ambassador-profile')
        window.location.reload()
        setLoading(false)
        createNotification({
          type: 'success',
          message: 'Registered Successfully',
        })
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        createNotification({
          type: 'error',
          message: err?.message
        })
      })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData()
      // eslint-disable-next-line no-restricted-syntax
      for (const [field, value] of Object.entries(values))
        formData.append(field, value)
      handleLogin(formData)
    }
  })

  if (isLoggedIn) {
    return <Navigate to="/ambassador-profile" />
  }

  return (
    <>
      <Appbar />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: 'flex',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1.5,
          overflowY: 'auto'
        }}
      >
        <Box
          component={Paper}
          elevation={2}
          sx={{
            maxWidth: 'min(40rem,90vw)',
            background: `url(${bg})`,
            backgroundPosition: '100% 100%',
            // backgroundSize:'100% 100%',
            backgroundRepeat: 'no-repeat',
            // background:
            //   'linear-gradient(330deg, rgba(123,126,175,0.1) 0%, rgba(223,66,177,0.1) 100%)',
            backdropFilter: 'blur(12px) saturate(90%)',
            p: 3,
            borderRadius: 5
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              mb: 1
            }}
          >
            <Typography
              variant="h6"
              noWrap
              color="text.primary"
              fontFamily="Audiowide"
              sx={{
                ml: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none'
              }}
            >
              TERANIS
            </Typography>
          </Box>
          <Typography
            variant="h4"
            fontWeight={600}
            align="center"
            color="text.primary"
            sx={{ mb: 1 }}
          >
            CAMPUS AMBASSADOR REGISTRATION
          </Typography>

          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}
          >
            <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gap={2}
              my={1}
              width="100%"
            >
              <Box
                gridColumn={{ xs: 'span 12', md: 'span 4' }}
                gridRow="span 3"
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '6rem',
                    height: '6rem',
                    mx: 'auto'
                  }}
                >
                  <Avatar
                    src={
                      formik.values?.photo
                        ? URL.createObjectURL(formik.values.photo)
                        : undefined
                    }
                    sx={{ width: '6rem', height: '6rem' }}
                  />
                  <input
                    style={{ display: 'none' }}
                    type="file"
                    ref={fileInput}
                    onChange={(e) => {
                      formik.setFieldValue('photo', e.currentTarget.files[0])
                    }}
                    className="hidden"
                    accept="image/*"
                  />

                  <Button
                    type="button"
                    sx={{
                      width: '6rem',
                      height: '6rem',
                      background:
                        'linear-gradient(0deg, rgba(0,0,0,0.3) 40%, transparent 40%);',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      position: 'absolute',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'end',
                      p: 1,
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.6)'
                    }}
                    //   disabled={!!imageUploading}
                    onClick={() => [fileInput.current.click()]}
                  >
                    <CameraAltIcon />
                  </Button>
                </Box>
              </Box>

              <Box gridColumn={{ xs: 'span 12', md: 'span 8' }}>
                <TextField
                  fullWidth
                  color="secondary"
                  autoFocus
                  disabled={loading}
                  size="small"
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Box>
              <Box gridColumn={{ xs: 'span 12', md: 'span 8' }}>
                <TextField
                  fullWidth
                  color="secondary"
                  disabled={loading}
                  size="small"
                  id="phone"
                  name="phone"
                  label="Phone no"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Box>

              <Box gridColumn={{ xs: 'span 12', md: 'span 8' }}>
                <TextField
                  fullWidth
                  color="secondary"
                  disabled={loading}
                  size="small"
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box gridColumn={{ xs: 'span 12', md: 'span 6' }}>
                <TextField
                  fullWidth
                  color="secondary"
                  disabled={loading}
                  size="small"
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Box gridColumn={{ xs: 'span 12', md: 'span 6' }}>
                <TextField
                  fullWidth
                  color="secondary"
                  disabled={loading}
                  size="small"
                  id="college"
                  name="college"
                  label="College"
                  value={formik.values.college}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.college && Boolean(formik.errors.college)
                  }
                  helperText={formik.touched.college && formik.errors.college}
                />
              </Box>

              <Box gridColumn="span 6">
                <TextField
                  fullWidth
                  color="secondary"
                  disabled={loading}
                  size="small"
                  id="dept"
                  name="dept"
                  label="Department"
                  value={formik.values.dept}
                  onChange={formik.handleChange}
                  error={formik.touched.dept && Boolean(formik.errors.dept)}
                  helperText={formik.touched.dept && formik.errors.dept}
                />
              </Box>
              <Box gridColumn="span 6">
                <TextField
                  fullWidth
                  color="secondary"
                  disabled={loading}
                  size="small"
                  id="semester"
                  name="semester"
                  label="Semester"
                  value={formik.values.semester}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.semester && Boolean(formik.errors.semester)
                  }
                  helperText={formik.touched.semester && formik.errors.semester}
                />
              </Box>
            </Box>

            <div>
              <Button
                variant="gradient"
                type="submit"
                disabled={loading}
                endIcon={
                  loading ? <CircularProgress size="small" /> : undefined
                }
                sx={{ mr: 2 }}
              >
                REGISTER
              </Button>

              <Button
                variant="outlined"
                type="button"
                color="secondary"
                disabled={loading}
                component={RouterLink}
                to="/ambassador-login"
                endIcon={<ArrowRightAltIcon />}
                sx={{ borderRadius: '20px' }}
              >
                LOG IN
              </Button>
            </div>
          </form>

          <Typography
            variant="body2"
            fontSize="12px"
            color="text.secondary"
            align="center"
            sx={{ mt: 2 }}
          >
            Try LOG IN if you&apos;re already registered.
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default AmbassadorRegister
