/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useNavigate } from 'react-router-dom'
import {
  styled,
  Dialog as MuiDialog,
  Typography,
  Box,
  IconButton,
  Grow
} from '@mui/material'
import { MdCategory, MdLocationPin } from 'react-icons/md'
import { AiFillCalendar, AiFillClockCircle } from 'react-icons/ai'
import CloseIcon from '@mui/icons-material/Close'
import imagefile from '../../../assets/teranis_22/1.jpg'

const Dialog = styled(MuiDialog)(() => ({
  '& .MuiDialog-paper': {
    clipPath:
      'polygon(0% 0%, 100% 0%, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0% 100%)',
    borderRadius: 0,
    background: 'rgba(14, 16, 58,0.2)',
    backdropFilter: 'blur(20px) saturate(130%)',
    border: '2px solid rgba(255,255,255,0.1)',
    padding: 0,
    height: '40rem',
    maxHeight: '85vh',
    margin: '0.8rem',
    overflowX: 'hidden'
  }
}))

const Transition = React.forwardRef((props, ref) => (
  <Grow in style={{ transitionDuration: '350ms' }} {...ref} {...props} />
))

function Field({ children }) {
  return (
    <Typography
      textTransform="uppercase"
      color="text.secondary"
      variant="h4"
      align="left"
      fontSize={{ xs: '14px', sm: '16px', md: '18px' }}
    >
      {children}
    </Typography>
  )
}

export default function EventPopup({ event, close, isOpen = false }) {
  const navigate = useNavigate()
  console.log(event)
  return (
    <Dialog
      open={isOpen}
      onClose={close}
      scroll="paper"
      TransitionComponent={Transition}
      maxWidth="sm"
    >
      {event?.prize && (
        <Box
          sx={{
            px: 2,
            alignItems: 'center',
            display: 'flex',
            position: 'absolute',
            transform: 'rotate(90deg)',
            right: { xs: '-5.3rem', sm: '-2.3rem', md: '-5.8rem' },
            backgroundColor: 'rgba(255,255,255,0.1)',
            gap: 0.8,
            py: 1,
            top: '9rem',
            boxShadow: 2,
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px'
          }}
        >
          <Typography
            textTransform="uppercase"
            variant="h4"
            align="left"
            // color="text.secondary"
            fontSize={{ xs: '14px', sm: '15px', md: '16px' }}
          >
            PRIZES WORTH
          </Typography>
          <Typography
            textTransform="uppercase"
            variant="h4"
            align="left"
            fontSize={{ xs: '14px', sm: '15px', md: '16px' }}
            // color="text.secondary"
          >
            &#8377;{event.prize}
          </Typography>
        </Box>
      )}

      <DialogTitle>
        {close ? (
          <IconButton
            aria-label="close"
            onClick={close}
            size="small"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}

        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          my={2}
          gap={1.3}
          width="100%"
        >
          <Box gridColumn={{ xs: 'span 12', sm: 'span 7' }} gridRow="span 1">
            <Typography
              textTransform="uppercase"
              variant="h4"
              fontSize="min(5vw,1.6rem)"
              align="center"
              sx={{ mb: { xs: 2, sm: 0 } }}
              fontWeight={600}
            >
              {event?.name ? event.name : 'event name'}
            </Typography>
          </Box>

          <Box
            gridColumn="span 5"
            gridRow={{ xs: 'span 4', sm: 'span 5' }}
            order={{ xs: 0, sm: -1 }}
          >
            <Box
              sx={{
                height: 'min(12rem,27vw)',
                width: 'min(12rem,27vw)',
                mr: { sm: 1, md: 2 },
                p: 0.5,
                // mt: 'max(-7vw,-2rem)',
                // ml: 'max(-6vw,-1rem)',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(5px) saturate(130%)',
                clipPath:
                  'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              {event?.bannerUrl ? (
                <img
                  alt="event"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    clipPath:
                      'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                  src={event.bannerUrl}
                />
              ) : (
                <img
                  alt="event"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    clipPath:
                      'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                  src={imagefile}
                />
              )}
            </Box>
          </Box>
          <Box gridColumn="span 6" display="flex" gap={1} alignItems="center">
            {event?.eventType && (
              <>
                <Field>
                  <MdCategory />
                </Field>
                <Field>{event.eventType}</Field>
              </>
            )}
          </Box>

          <Box
            gridColumn="span 6"
            color="text.secondary"
            display="flex"
            gap={1}
            alignItems="center"
          >
            {event?.date && (
              <>
                <Field>
                  <AiFillCalendar />
                </Field>
                <Field> {event.date}</Field>
              </>
            )}
          </Box>

          <Box gridColumn="span 6" display="flex" gap={1} alignItems="center">
            {event?.from || event?.to ? (
              <>
                <Field>
                  <AiFillClockCircle />
                </Field>
                <Field>
                  {event.from}
                  {` - ${event.to}`}
                </Field>
              </>
            ) : null}
          </Box>

          <Box
            gridColumn="span 6"
            color="text.secondary"
            display="flex"
            gap={1}
            alignItems="center"
          >
            {event?.venue && (
              <>
                <Field>
                  <MdLocationPin />
                </Field>
                <Field> {event.venue}</Field>
              </>
            )}
          </Box>

          <Box
            gridColumn={{ xs: 'span 12', md: 'span 7' }}
            display="flex"
            gap={1}
            mt={1}
            alignItems="center"
          >
            {event?.contact && (
              <>
                <Field>CONTACT:</Field>
                <Field>{event.contact}</Field>
              </>
            )}
          </Box>

          <Box
            gridColumn={{ xs: 'span 12', md: 'span 5' }}
            display="flex"
            gap={1}
            mt={1}
            alignItems="center"
          >
            {event?.fee && (
              <>
                <Field>ENTRY FEE:</Field>
                <Field>&#8377;{event.fee}</Field>
              </>
            )}
          </Box>

          <Box
            gridColumn="span 12"
            display="flex"
            gap={1}
            alignItems="center"
            my={1}
          >
            {event?.lastDate && (
              <>
                <Field>REGISTER BEFORE:</Field>
                <Field>{event.lastDate}</Field>
              </>
            )}
          </Box>
        </Box>

        <Typography
          fontSize={{ xs: '14px', md: '16px' }}
          fontWeight={600}
          sx={{ mb: -1 }}
        >
          EVENT INFO
        </Typography>
      </DialogTitle>

      <DialogContent>
        {event?.desc && (
          <DialogContentText sx={{ whiteSpace: 'pre-wrap' }}>
            {event.desc}
          </DialogContentText>
        )}
      </DialogContent>

      <DialogActions
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          my: 1,
          gap: 1
        }}
      >
        {event?.uniqueName && (
          <Button
            variant="outlined"
            color="secondary"
            disabled={!(event?.status && event.status === 'Opened')}
            onClick={() => {
              navigate(`/event/${event.uniqueName}`)
            }}
          >
            REGISTER
          </Button>
        )}

        {!(event?.status && event.status === 'Opened') ? (
          <Typography variant="body2" color="text.secondary" fontSize="12px">
            Registration will be opened soon!
          </Typography>
        ) : null}
      </DialogActions>
    </Dialog>
  )
}
