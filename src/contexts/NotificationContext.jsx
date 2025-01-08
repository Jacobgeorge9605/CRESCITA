/* eslint-disable react/prop-types */
import { Snackbar, Alert as MuiAlert, Slide, styled } from '@mui/material'
import React, { createContext, useState, useRef } from 'react'

const Alert = styled(MuiAlert)(() => ({
  '&.MuiAlert-standard': {
    background: 'rgba(14, 16, 58,0.2)',
    backdropFilter: 'blur(12px) saturate(130%)',
    border:'1.5px solid rgba(255,255,255,0.2)'
  }
}))

function SlideTransition(props) {
  return <Slide {...props} direction="left" />
}

function Notification({
  type,
  message,
  isOpen,
  handleSnackbarClose,
  handleExited
}) {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleSnackbarClose}
      TransitionProps={{ onExited: handleExited }}
      TransitionComponent={SlideTransition}
    >
      <Alert
        variant="standard"
        onClose={handleSnackbarClose}
        severity={type}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export const NotificationContext = createContext()

export function NotificationProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [snackbar, setSnackbar] = useState(undefined)
  const queueRef = useRef([])

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  function processQueue() {
    if (queueRef.current.length > 0) {
      setOpen(true)
      setSnackbar(queueRef.current.shift())
    }
  }

  const createNotification = (notification) => {
    queueRef.current.push(notification)

    if (open) setOpen(false)
    else processQueue()
  }

  function handleExited() {
    processQueue()
  }

  return (
    <NotificationContext.Provider value={{ createNotification }}>
      {children}
      <Notification
        isOpen={open}
        {...snackbar}
        handleSnackbarClose={handleSnackbarClose}
        handleExited={handleExited}
      />
    </NotificationContext.Provider>
  )
}
