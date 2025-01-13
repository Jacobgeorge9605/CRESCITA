/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { BsFillGiftFill } from 'react-icons/bs'
import { MdCategory } from 'react-icons/md'
// import { IoTicketOutline } from 'react-icons/io5'
import { AiFillCalendar } from 'react-icons/ai'
import imagefile from '../../../assets/teranis_22/2.jpg'

function Event({ data, open, ...props }) {
  return (
    <Box
      component={Button}
      fullWidth
      onClick={open}
      {...props}
      sx={{
    
        display: 'flex'
      }}
    >
      <Box
        sx={{
          height: 'min(6rem,20vw)',
          width: 'min(6rem,20vw)',
          my: 9,
          p: 0.7,
          mt: 'max(-4vw,-1.2rem)',
          ml: 'max(-4vw,-1.2rem)',
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(5px) saturate(130%)',
          clipPath: 'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      >
        {data?.bannerUrl ? (
          <img
            alt="event"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              clipPath: 'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
            src={data.bannerUrl}
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
              clipPath: 'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
            src={imagefile}
          />
        )}
      </Box>
      <Box
        sx={{
          position: 'relative',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(5px) saturate(130%)',
          display: 'flex',
          flexGrow: 1,
          height: 'min(7rem,25vw)',
          boxShadow: 5,
          ml: 'max(-5.5rem,-16vw)',
          mt: 'min(0.3rem,1vw)',
          borderRight: 4,
          borderColor: 'rgba(255,255,255,0.3)',
          transform: 'skewX(-4deg)',
          clipPath:
            'polygon(0% 0%, 100% 0%, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0% 100%)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            left: 'min(6.5rem,17vw)',
            transform: 'skewX(4deg)',
            top: { xs: 5, sm: 6, md: 7 }
          }}
        >
          <Typography
            fontWeight={300}
            color="text.primary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.6,
              fontSize: { xs: '11px', md: '12px', lg: '14px' }
            }}
          >
            <AiFillCalendar />
            {data?.date ? data.date : 'Date'}
          </Typography>
        </Box>

        {data?.prize && (
          <Box
            sx={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(5px) saturate(130%)',
              // boxShadow: 1,
              border: 1,
              borderTop: 0,
              borderColor: 'rgba(255,255,255,0.2)',
              position: 'absolute',
              right: '0.5rem',
              // transform: 'skewX(4deg)',
              top: 0,
              px: 1,
              py: 0.4,
              color: 'rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'center',
              gap: 0.7,
              fontSize: { xs: '13px', md: '14px', lg: '15px' }
            }}
          >
            <BsFillGiftFill />
            <Typography
              variant="body2"
              fontSize="inherit"
            >{`₹${data.prize}`}</Typography>
          </Box>
        )}

        <Box
          sx={{
            ml: 'min(6.5rem,18vw)',
            mt: { xs: 2.8, sm: 3.2, md: 3.6 },
            py: 1.5,
            transform: 'skew(4deg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            textAlign: 'start'
          }}
        >
          <Typography
            variant="h6"
            whiteSpace="nowrap"
            sx={{
              fontSize: { xs: '16px', md: '18px', lg: '20px' },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: 'min(60vw)'
            }}
            letterSpacing="1.5px"
            color="rgba(255,255,255,1)"
          >
            {data?.name ? data.name : 'Event name'}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: '0.1rem' }}>
            <Typography
              fontWeight={300}
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.6,
                fontSize: { xs: '11px', md: '12px', lg: '14px' }
              }}
            >
              <MdCategory />
              {data?.eventType ? data.eventType : 'Event type'}
            </Typography>

            <Typography
              fontSize="0.7rem"
              fontWeight={300}
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                fontSize: { xs: '11px', md: '12px', lg: '14px' }
              }}
            >
              {/* <IoTicketOutline /> */}
              {/* {data?.fee ? `₹${data.fee}` : 'Entry fee'} */}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Event
