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
  import React, { useState } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { Navigate, useNavigate } from 'react-router'
  import * as Yup from 'yup'
  import bg from '../../../assets/background/ambassador_reg.svg'
  import { toast } from "react-toastify";

  
  import { login } from '../../slices/adminAuth'
  
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
  
  function AdminLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector((state) => state.adminAuth)
    const [loading, setLoading] = useState(false)
    const Errormessage = useSelector((state) => state.message)
    const handleLogin = (formValue) => {
      const { email, password } = formValue
      // console.log(formValue)
      setLoading(true)
  
      dispatch(login({ email, password }))
        .unwrap()
        .then(() => {
          navigate('/allinallcuratorhere')
          window.location.reload()
          toast.success("Succesfully logged in")
          setLoading(false)
        })
        .catch((err) => {
          toast.error(Errormessage.message);
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
      return <Navigate to="/allinallcuratorhere" />
    }
  
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
            ADMIN LOGIN
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
                endIcon={loading ? <CircularProgress size="small" /> : undefined}
              >
                SIGN IN
              </Button>
            </div>
          </form>
        </Box>
      </Container>
    )
  }
  
  export default AdminLogin
  