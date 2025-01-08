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
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import * as Yup from 'yup'
import api from '../../utiils/api'
import bg from '../../../assets/background/ambassador_reg.svg'
import Appbar from '../../components/ambassador/AppBar'
import { NotificationContext } from '../../contexts/NotificationContext'

const initialValues = {
  email: ''
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email!')
    .required('This field is required!')
})

function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const { createNotification } = useContext(NotificationContext)

  const handleLogin = (formValue) => {
    setLoading(true)
    api.ambassador.forgotPassword
      .setEmail(formValue)
      .then(() => {
        setLoading(false)
        createNotification({
          type: 'info',
          message: 'Password reset link has been sent to your email'
        })
      })
      .catch((error) => {
        console.log(error)
        createNotification({
          type: 'error',
          message: 'Failed to register!',
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
          alignItems: 'center'
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
            CA Forgot Password
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

            <div>
              <Button
                variant="gradient"
                type="submit"
                disabled={loading}
                // sx={{ mr: 2 }}
                endIcon={
                  loading ? <CircularProgress size="small" /> : undefined
                }
              >
                Reset password
              </Button>

              {/* <Button
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
            </Button> */}
            </div>
          </form>
        </Box>
      </Container>
    </>
  )
}

export default ForgotPassword
