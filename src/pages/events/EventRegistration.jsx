// import {
//   Box,
//   Button,
//   CircularProgress,
//   Container,
//   Paper,
//   TextField,
//   Typography
// } from '@mui/material'
// import { useLocation } from 'react-router-dom'
// import { useFormik } from 'formik'
// import React, { useContext, useState } from 'react'

// import { useNavigate } from 'react-router'
// import * as Yup from 'yup'

// import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
// import instance from '../../services/instance'
// import bg from '../../../assets/background/ambassador_reg.svg'
// import EventAppBar from './Navbar'
// import Payment from '../../components/events/Payment'
// import Loading from '../../components/common/Loading'
// import { NotificationContext } from '../../contexts/NotificationContext'

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('This field is required!'),

//   contact: Yup.string()
//     .required('This field is required!')
//     .matches(/^\d+$/, 'Phone number must contain only digits.')
//     .length(10, 'Phone Number must be exactly 10 digits long.'),

//   email: Yup.string()
//     .email('Enter a valid Email Id!')
//     .required('This field is required!'),

//   college: Yup.string().required('This field is required!'),

//   dept: Yup.string().required('This field is required!'),
//   //   payment:Yup.string().required('This field is required!'),
//   semester: Yup.number()
//     .required('This field is required!')
//     .min(1, 'Semester must be at least 1'),
//   payment: Yup.mixed().required('Payment screenshot is required')
// })

// // function EventRegistration({ event }) {
// //   const location = useLocation()
// //   const navigate = useNavigate()
// //   const [loading, setLoading] = useState(false)
// //   const [paymentPopup, setPaymentPopup] = useState(false)
// //   const { createNotification } = useContext(NotificationContext)

// //   // const [event, setEvent] = useState(location.state)

// //   // useEffect(() => {
// //   //   if (location.state)
// //   //     localStorage.setItem('selectedEvent', JSON.stringify(location.state))
// //   //   else if (localStorage.getItem('selectedEvent'))
// //   //     setEvent(JSON.parse(localStorage.getItem('selectedEvent')))
// //   //   else navigate('/')
// //   // }, [])

// //   const initialValues = {
// //     name: '',
// //     contact: '',
// //     email: '',
// //     college: '',
// //     dept: '',
// //     semester: '',
// //     payment: null,
// //     referralCode: localStorage.getItem('referrer')
// //       ? localStorage.getItem('referrer')
// //       : ''
// //   }

// //   const submitForm = (val) => {
// //     instance({
// //       url: `/events/register/${event?._id}`,
// //       method: 'POST',
// //       data: val,
// //       headers: {
// //         'content-type': 'multipart/form-data'
// //       }
// //     })
// //       .then((response) => {
// //         createNotification({
// //           type: 'success',
// //           message: 'Registered Succesfully',
// //         })
// //         setLoading(false)
// //         localStorage.removeItem('selectedEvent')
// //         navigate('/')
// //       })
// //       .catch((error) => {
// //         setLoading(false)

// //         createNotification({
// //           type: 'error',
// //           message: error.response.data.message,
// //         })
// //         console.log(error)
// //       })
// //   }
// //   const formik = useFormik({
// //     initialValues,
// //     validationSchema,
// //     onSubmit: (values) => {
// //       setLoading(true)
// //       const formData = new FormData()
// //       // eslint-disable-next-line no-restricted-syntax
// //       // console.log(values)
// //       for (const [field, value] of Object.entries(values))
// //         formData.append(field, value)

// //       submitForm(formData)
// //     }
// //   })

// //   const setPayment = (file) => {
// //     formik.setFieldValue('payment', file)
// //   }

// //   const closePaymentPopup = () => {
// //     setPaymentPopup(false)
// //   }


// //   return (
// //     <>
// //       <EventAppBar />
// //       <Container
// //         maxWidth="lg"
// //         disableGutters
// //         sx={{
// //           display: 'flex',
// //           height: '90vh',
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           p: 1.5,
// //           overflowY: 'auto'
// //         }}
// //       >
// //         <Box
// //           component={Paper}
// //           elevation={2}
// //           sx={{
// //             maxWidth: 'min(40rem,90vw)',
// //             background: `url(${bg})`,
// //             backgroundPosition: '100% 100%',
// //             // backgroundSize:'100% 100%',
// //             backgroundRepeat: 'no-repeat',
// //             // background:
// //             //   'linear-gradient(330deg, rgba(123,126,175,0.1) 0%, rgba(223,66,177,0.1) 100%)',
// //             backdropFilter: 'blur(12px) saturate(90%)',
// //             p: 3,
// //             borderRadius: 5
// //           }}
// //         >
// //           <Box
// //             sx={{
// //               display: 'flex',
// //               alignItems: 'center',
// //               width: '100%',
// //               justifyContent: 'center',
// //               mb: 1
// //             }}
// //           >
// //             <Typography
// //               variant="h6"
// //               noWrap
// //               color="text.primary"
// //               fontFamily="Audiowide"
// //               sx={{
// //                 ml: 1,
// //                 fontWeight: 700,
// //                 letterSpacing: '.3rem',
// //                 textDecoration: 'none'
// //               }}
// //             >
// //               TERANIS
// //             </Typography>
// //           </Box>
// //           <Typography
// //             variant="h5"
// //             fontWeight={600}
// //             align="center"
// //             color="text.primary"
// //             sx={{ mb: 1 }}
// //           >
// //             EVENT REGISTRATION
// //           </Typography>
// //           <Typography
// //             variant="h4"
// //             fontWeight={600}
// //             align="center"
// //             color="secondary"
// //             sx={{ mb: 1, fontSize: 30 }}
// //           >
// //             {event?.name}
// //           </Typography>

// //           <form
// //             encType="multipart/form-data"
// //             onSubmit={formik.handleSubmit}
// //             style={{
// //               display: 'flex',
// //               flexDirection: 'column',
// //               gap: '1rem',
// //               alignItems: 'center'
// //             }}
// //           >
// //             <Box
// //               display="grid"
// //               gridTemplateColumns="repeat(12, 1fr)"
// //               gap={2}
// //               my={1}
// //               width="100%"
// //             >
// //               <Box gridColumn={{ xs: 'span 12', md: 'span 6' }}>
// //                 <TextField
// //                   fullWidth
// //                   color="secondary"
// //                   autoFocus
// //                   disabled={loading}
// //                   size="small"
// //                   id="name"
// //                   name="name"
// //                   label="Full Name"
// //                   value={formik.values.name}
// //                   onChange={formik.handleChange}
// //                   error={formik.touched.name && Boolean(formik.errors.name)}
// //                   helperText={formik.touched.name && formik.errors.name}
// //                 />
// //               </Box>
// //               <Box gridColumn={{ xs: 'span 12', md: 'span 6' }}>
// //                 <TextField
// //                   fullWidth
// //                   color="secondary"
// //                   disabled={loading}
// //                   size="small"
// //                   id="contact"
// //                   name="contact"
// //                   label="Phone no"
// //                   value={formik.values.contact}
// //                   onChange={formik.handleChange}
// //                   error={
// //                     formik.touched.contact && Boolean(formik.errors.contact)
// //                   }
// //                   helperText={formik.touched.contact && formik.errors.contact}
// //                 />
// //               </Box>
// //               <Box gridColumn={{ xs: 'span 12', md: 'span 6' }}>
// //                 <TextField
// //                   fullWidth
// //                   color="secondary"
// //                   disabled={loading}
// //                   size="small"
// //                   id="email"
// //                   name="email"
// //                   label="Email"
// //                   value={formik.values.email}
// //                   onChange={formik.handleChange}
// //                   error={formik.touched.email && Boolean(formik.errors.email)}
// //                   helperText={formik.touched.email && formik.errors.email}
// //                 />
// //               </Box>

// //               <Box gridColumn={{ xs: 'span 12', md: 'span 6' }}>
// //                 <TextField
// //                   fullWidth
// //                   color="secondary"
// //                   disabled={loading}
// //                   size="small"
// //                   id="college"
// //                   name="college"
// //                   label="College"
// //                   value={formik.values.college}
// //                   onChange={formik.handleChange}
// //                   error={
// //                     formik.touched.college && Boolean(formik.errors.college)
// //                   }
// //                   helperText={formik.touched.college && formik.errors.college}
// //                 />
// //               </Box>

// //               <Box gridColumn="span 6">
// //                 <TextField
// //                   fullWidth
// //                   color="secondary"
// //                   disabled={loading}
// //                   size="small"
// //                   id="dept"
// //                   name="dept"
// //                   label="Department"
// //                   value={formik.values.dept}
// //                   onChange={formik.handleChange}
// //                   error={formik.touched.dept && Boolean(formik.errors.dept)}
// //                   helperText={formik.touched.dept && formik.errors.dept}
// //                 />
// //               </Box>
// //               <Box gridColumn="span 6">
// //                 <TextField
// //                   fullWidth
// //                   color="secondary"
// //                   disabled={loading}
// //                   size="small"
// //                   id="semester"
// //                   name="semester"
// //                   label="Semester"
// //                   value={formik.values.semester}
// //                   onChange={formik.handleChange}
// //                   error={
// //                     formik.touched.semester && Boolean(formik.errors.semester)
// //                   }
// //                   helperText={formik.touched.semester && formik.errors.semester}
// //                 />
// //               </Box>
// //               <Box
// //                 gridColumn={{ xs: 'span 12', transform: 'translateY(-0.6rem)' }}
// //               >
// //                 <Typography fontSize="12px" color="text.secondary">
// //                   NB: Above details will be used for certification purpose
// //                 </Typography>
// //               </Box>
// //               <Box gridColumn={{ xs: 'span 12' }}>
// //                 <TextField
// //                   fullWidth
// //                   color="secondary"
// //                   disabled={loading}
// //                   size="small"
// //                   id="referralCode"
// //                   name="referralCode"
// //                   label="Referral Code"
// //                   value={formik.values.referralCode}
// //                   onChange={formik.handleChange}
// //                   error={
// //                     formik.touched.referralCode &&
// //                     Boolean(formik.errors.referralCode)
// //                   }
// //                   helperText={
// //                     'Enter your Referral Code here' ||
// //                     (formik.touched.referralCode && formik.errors.referralCode)
// //                   }
// //                 />
// //               </Box>
// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   flexDirection: 'column',
// //                   gap: 1,
// //                   justifyContent: 'center'
// //                 }}
// //                 gridColumn={{ xs: 'span 12' }}
// //               >
// //                 <Typography variant="body2">
// //                   Event Registration Fee: &#8377;{event?.fee}
// //                 </Typography>
// //                 <Button
// //                   variant="outlined"
// //                   size="small"
// //                   color="secondary"
// //                   type="button"
// //                   sx={{ borderRadius: '20px', ml: 1 }}
// //                   onClick={() => setPaymentPopup(true)}
// //                   endIcon={
// //                     formik.values.payment && formik.values.payment !== '' ? (
// //                       <CheckCircleOutlineIcon />
// //                     ) : (
// //                       <QueryBuilderIcon />
// //                     )
// //                   }
// //                 >
// //                   Payment details
// //                 </Button>
// //                 {formik.touched.payment && formik.errors.payment ? (
// //                   <Typography
// //                     variant="body2"
// //                     fontSize="12px"
// //                     color="#F99891"
// //                     align="center"
// //                     sx={{}}
// //                   >
// //                     {formik.errors?.payment}
// //                   </Typography>
// //                 ) : null}
// //               </Box>
// //             </Box>

// //             <div>
// //               <Button
// //                 variant="gradient"
// //                 type="submit"
// //                 disabled={loading}
// //                 endIcon={
// //                   loading ? <CircularProgress size="small" /> : undefined
// //                 }
// //               >
// //                 REGISTER
// //               </Button>
// //             </div>
// //           </form>
// //         </Box>

// //         <Payment
// //           isOpen={paymentPopup}
// //           close={() => closePaymentPopup()}
// //           payment={formik.values.payment}
// //           setPayment={(file) => setPayment(file)}
// //         />
// //       </Container>
// //     </>
// //   )
// // }

// export default EventRegistration
