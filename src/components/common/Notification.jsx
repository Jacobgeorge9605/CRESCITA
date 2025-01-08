/* eslint-disable react/jsx-props-no-spreading */
import { Alert, Slide, Snackbar } from '@mui/material'
import React, { useEffect } from 'react'

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

function Notification({ message = '', variant, children }) {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    if (message && message !== '') setOpen(true)
  }, [message])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  return (
    <>
      <Snackbar
      TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </>
  )
}

export default Notification
