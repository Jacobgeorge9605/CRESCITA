/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'
import * as Yup from 'yup'
import { Link as RouterLink } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import bg from '../../../assets/background/ambassador_reg.svg'

import { login } from '../../slices/auth'
import Appbar from '../../components/ambassador/AppBar'
import { NotificationContext } from '../../contexts/NotificationContext'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email!')
    .required('This field is required!'),
  password: Yup.string().required('This field is required!')
})

function AmbassadorLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const { message } = useSelector((state) => state.message)
  const { createNotification } = useContext(NotificationContext)

  const handleLogin = (formValue) => {
    const { email, password } = formValue
    // console.log(formValue)
    setLoading(true)
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/ambassador-profile')
        window.location.reload()
        setLoading(false)
        createNotification({
          type: 'success',
          message:'Logged in Successfully'
        })
      })
      .catch((error) => {
        console.log(error)
        createNotification({
          type: 'error',
          message: 'Failed to login!',
        })
        setLoading(false)
      })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values)
    }
  })

  if (isLoggedIn) {
    return <Navigate to="/ambassador-profile" />
  }

  return (
    <>
      {' '}
      <Appbar />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: 'flex',
          height: '90vh',
          justifyContent: 'center',
          p: 1,
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Box
          component={Paper}
          elevation={2}
          sx={{
            maxWidth: 'min(25rem,90vw)',
            backdropFilter: 'blur(3px) saturate(120%)',
            // backgroundColor: 'rgba(255, 255, 255,0.1)',
            background: `url(${bg})`,
            backgroundPosition: '100% 100%',
            // backgroundSize:'100% 100%',
            backgroundRepeat: 'no-repeat',
            p: 2.5,
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
            sx={{ mb: 2 }}
          >
            CAMPUS AMBASSADOR LOGIN
          </Typography>

          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              marginTop: '2rem'
            }}
          >
            <TextField
              fullWidth
              color="secondary"
              autoFocus
              disabled={loading}
              size="small"
              id="email"
              name="email"
              label="Email"
              sx={{ mb: 1.5 }}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              color="secondary"
              disabled={loading}
              size="small"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <div>
              <Button
                variant="gradient"
                type="submit"
                disabled={loading}
                sx={{ mr: 2 }}
                endIcon={
                  loading ? <CircularProgress size="small" /> : undefined
                }
              >
                SIGN IN
              </Button>

              <Button
                variant="outlined"
                type="button"
                color="secondary"
                disabled={loading}
                component={RouterLink}
                to="/ambassador-register"
                endIcon={<ArrowRightAltIcon />}
                sx={{ borderRadius: '20px' }}
              >
                REGISTER
              </Button>
            </div>
          </form>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              mt: 1
            }}
          >
            <Button
              variant="text"
              type="button"
              disabled={loading}
              color="secondary"
              component={RouterLink}
              to="/forgot-password"
            >
              Forgot password?
            </Button>

            <Typography
              variant="body2"
              fontSize="12px"
              color="text.secondary"
              align="center"
            >
              Try REGISTER if you&apos;re new here.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default AmbassadorLogin
