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
import { useNavigate, useParams } from 'react-router'
import * as Yup from 'yup'
import bg from '../../../assets/background/ambassador_reg.svg'

import api from '../../utiils/api'
import { NotificationContext } from '../../contexts/NotificationContext'

const initialValues = {
  password: '',
  repassword: ''
}

const validationSchema = Yup.object().shape({
  password: Yup.string().required('This field is required!'),
  repassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  )
})

function ResetPassword() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const { createNotification } = useContext(NotificationContext)

  const handleLogin = (formValue) => {
    const { password } = formValue
    setLoading(true)
    api.ambassador.forgotPassword
      .submitPassword({ token: params?.id, password })
      .then(() => {
        setLoading(false)
        createNotification({
          type: 'success',
          message: 'Your password has been updated successfully',
        })
      })
      .catch((error) => {
        console.log(error)
        createNotification({
          type: 'error',
          message: error?.response?.data?.message,
        })
        setLoading(false)
        navigate('/ambassador-login')
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
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        display: 'flex',
        height: '100vh',
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
          RESET PASSWORD
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
            id="password"
            name="password"
            type="password"
            label="New password"
            sx={{ mb: 1 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            fullWidth
            color="secondary"
            disabled={loading}
            size="small"
            id="repassword"
            name="repassword"
            label="Confirm new password"
            type="password"
            value={formik.values.repassword}
            onChange={formik.handleChange}
            error={
              formik.touched.repassword && Boolean(formik.errors.repassword)
            }
            helperText={formik.touched.repassword && formik.errors.repassword}
          />

          <div>
            <Button
              variant="gradient"
              type="submit"
              disabled={loading}
              endIcon={loading ? <CircularProgress size="small" /> : undefined}
            >
              Change password{' '}
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  )
}

export default ResetPassword
