/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  Typography,
  styled
} from '@mui/material'
import React, { useRef, useState } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import qr from '../../../assets/payment_qr.jpg'

const Dialog = styled(MuiDialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: 0,
    background: 'rgba(14, 16, 58,0.2)',
    backdropFilter: 'blur(20px) saturate(130%)',
    border: '2px solid rgba(255,255,255,0.1)',
    padding: 1,
    maxHeight: '80vh',
    margin: '0.8rem',
    overflowX: 'hidden',
    minWidth: 'min(90%,25rem)',
    minHeight: 'min(50vh,25rem)'
  }
}))

const Transition = React.forwardRef((props, ref) => (
  <Grow in style={{ transitionDuration: '350ms' }} {...ref} {...props} />
))

function Payment({ isOpen, close, payment, setPayment }) {
  const [page, setPage] = useState(0)
  const fileInput = useRef(null)

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      scroll="paper"
      TransitionComponent={Transition}
      maxWidth="sm"
    >
      <DialogTitle>
        <Typography variant="h5">PAYMENT DETAILS</Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {page === 0 && (
            <>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Account number:
                </Typography>
                <Typography variant="body2" color="text.primary">
                  3668015520
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Account name:
                </Typography>
                <Typography variant="body2" color="text.primary">
                  TERANIS
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  IFSC Code:
                </Typography>
                <Typography variant="body2" color="text.primary">
                  CBIN0283191
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Bank details:
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Central Bank of India, Kasaragod branch
                </Typography>
              </Box>

              <Box
                sx={{ display: 'flex', gap: 1, mt: 1, flexDirection: 'column' }}
              >
                <Typography
                  align="center"
                  variant="body1"
                  fontWeight={500}
                  color="text.primary"
                >
                  UPI ID: 10826407@cbin
                </Typography>
                <Box sx={{ width: 'min(90%,20rem)', mx: 'auto' }}>
                  <img
                    src={qr}
                    alt="payment_qr"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Box>
            </>
          )}
          {page === 1 && (
            <>
              {!payment && (
                <Typography variant="body2" color="text.secondary">
                  Upload the proper screenshot of your transaction here and
                  proceed with your registration
                </Typography>
              )}
              <input
                style={{ display: 'none' }}
                type="file"
                ref={fileInput}
                onChange={(e) => {
                  setPayment(e.currentTarget.files[0])
                }}
                accept="image/*"
                id="payment"
                name="payment"
              />
              <Button
                type="button"
                size="small"
                variant="outlined"
                color="secondary"
                sx={{
                  borderRadius: '20px'
                }}
                onClick={() => [fileInput.current.click()]}
                startIcon={<CameraAltIcon />}
              >
                <Typography
                  variant="body2"
                  sx={{
                    width: '90%',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                  }}
                >
                  {payment ? 'Change Screenshot' : 'Upload Screenshot'}
                </Typography>
              </Button>
              {payment && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    width: '95%',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                  }}
                >
                  {payment?.name}
                </Typography>
              )}
              <Box sx={{ mx: 'auto' }}>
                {payment && (
                  <img
                    src={URL.createObjectURL(payment)}
                    alt="payment_qr"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                )}
              </Box>
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        {page === 0 && (
          <Button
            color="primary"
            autoFocus
            variant="contained"
            disableElevation
            onClick={() => setPage(1)}
          >
            Next
          </Button>
        )}
        {page === 1 && (
          <>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setPage(0)}
              // variant="text"
              disableElevation
              startIcon={<KeyboardBackspaceIcon />}
            >
              PAYMENT DETAILS
            </Button>
            <Button
              autoFocus
              onClick={close}
              variant="contained"
              disableElevation
            >
              Finish
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default Payment
