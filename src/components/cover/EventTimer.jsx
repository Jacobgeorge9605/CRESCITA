// import { Box, Typography } from '@mui/material'
// import React, { useState, useEffect } from 'react'

// function CounterBox({ size, children }) {
//   return (
//     <Box
//       sx={{
//         border: 2,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         py: 1.2,
//         width: {
//           xs: size === 'medium' ? '3rem' : '2.4rem',
//           lg: size === 'medium' ? '4rem' : '3rem'
//         },
//         px: { xs: 1, sm: 1.5, md: 2, lg: 3 },
//         borderColor: 'rgba(255,255,255,0.15)'
//       }}
//     >
//       {children}
//     </Box>
//   )
// }

// function EventTimer({ date, size = 'medium' }) {
//   const [timeRemaining, setTimeRemaining] = useState({
//     months: 1,
//     days: 2,
//     hours: 1,
//     minutes: 15,
//     seconds: 20
//   })
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentDate = new Date()
//       const endDate = new Date(date)

//       const yearDiff = endDate.getFullYear() - currentDate.getFullYear()
//       const monthDiff = endDate.getMonth() - currentDate.getMonth()
//       const dayDiff = endDate.getDate() - currentDate.getDate()
//       const hourDiff = endDate.getHours() - currentDate.getHours()
//       const minDiff = endDate.getMinutes() - currentDate.getMinutes()
//       const secDiff = endDate.getSeconds() - currentDate.getSeconds()

//       let months = yearDiff * 12 + monthDiff
//       let days = dayDiff
//       let hours = hourDiff
//       let minutes = minDiff
//       let seconds = secDiff

//       if (seconds < 0) {
//         seconds += 60
//         minutes -= 1
//       }
//       if (minutes < 0) {
//         minutes += 60
//         hours -= 1
//       }
//       if (hours < 0) {
//         hours += 24
//         days -= 1
//       }
//       if (days < 0) {
//         const daysInMonth = new Date(
//           currentDate.getFullYear(),
//           currentDate.getMonth() + 1,
//           0
//         ).getDate()
//         days += daysInMonth
//         months -= 1
//       }

//       setTimeRemaining({ months, days, hours, minutes, seconds })
//     }, 1000)

//     return () => clearInterval(intervalId)
//   }, [])

//   const getFontSize = () => {
//     const xs = size === 'medium' ? '28px' : '20px'
//     const sm = size === 'medium' ? '36px' : '28px'
//     const md = size === 'medium' ? '44px' : '36px'
//     const lg = size === 'medium' ? ' 52px' : '44px'

//     return { xs, sm, md, lg }
//   }

//   const formatTime = (time) => String(time).padStart(2, '0')

//   return (
//     <>
//       <CounterBox>
//         <Typography
//           sx={{
//             fontSize: getFontSize(),
//             lineHeight: 1.2
//           }}
//           fontWeight={600}
//           color="text.primary"
//           align="center"
//         >
//           {formatTime(timeRemaining.days)}
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: { xs: '9px', sm: '12px', md: '14px', lg: '16px' }
//           }}
//           align="center"
//           color="text.secondary"
//         >
//           Days
//         </Typography>
//       </CounterBox>
//       <CounterBox>
//         <Typography
//           sx={{
//             fontSize: getFontSize(),
//             lineHeight: 1.2
//           }}
//           fontWeight={600}
//           color="text.primary"
//           align="center"
//         >
//           {formatTime(timeRemaining.hours)}
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: { xs: '9px', sm: '12px', md: '14px', lg: '16px' }
//           }}
//           align="center"
//           color="text.secondary"
//         >
//           Hours
//         </Typography>
//       </CounterBox>
//       <CounterBox>
//         <Typography
//           sx={{
//             fontSize: getFontSize(),
//             lineHeight: 1.2
//           }}
//           fontWeight={600}
//           color="text.primary"
//           align="center"
//         >
//           {formatTime(timeRemaining.minutes)}
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: { xs: '9px', sm: '12px', md: '14px', lg: '16px' }
//           }}
//           align="center"
//           color="text.secondary"
//         >
//           Minutes
//         </Typography>
//       </CounterBox>
//       <CounterBox>
//         <Typography
//           sx={{
//             fontSize: getFontSize(),
//             lineHeight: 1.2
//           }}
//           fontWeight={600}
//           color="text.primary"
//           align="center"
//         >
//           {formatTime(timeRemaining.seconds)}
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: { xs: '9px', sm: '12px', md: '14px', lg: '16px' }
//           }}
//           align="center"
//           color="text.secondary"
//         >
//           Seconds
//         </Typography>
//       </CounterBox>
//     </>
//   )
// }

// export default React.memo(EventTimer)


import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

function CounterBox({ size, children }) {
  return (
    <Box
      sx={{
        border: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 1.2,
        width: {
          xs: size === 'medium' ? '3rem' : '2.4rem',
          lg: size === 'medium' ? '4rem' : '3rem'
        },
        px: { xs: 1, sm: 1.5, md: 2, lg: 3 },
        borderColor: 'rgba(255,255,255,0.15)'
      }}
    >
      {children}
    </Box>
  )
}

function EventTimer({ date ="2024-12-31T23:59:59", size = 'medium' }) {
  const calculateTimeRemaining = () => {
    const currentDate = new Date()
    const endDate = new Date(date)

    const yearDiff = endDate.getFullYear() - currentDate.getFullYear()
    const monthDiff = endDate.getMonth() - currentDate.getMonth()
    const dayDiff = endDate.getDate() - currentDate.getDate()
    const hourDiff = endDate.getHours() - currentDate.getHours()
    const minDiff = endDate.getMinutes() - currentDate.getMinutes()
    const secDiff = endDate.getSeconds() - currentDate.getSeconds()

    let months = yearDiff * 12 + monthDiff
    let days = dayDiff
    let hours = hourDiff
    let minutes = minDiff
    let seconds = secDiff

    if (seconds < 0) {
      seconds += 60
      minutes -= 1
    }
    if (minutes < 0) {
      minutes += 60
      hours -= 1
    }
    if (hours < 0) {
      hours += 24
      days -= 1
    }
    if (days < 0) {
      const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate()
      days += daysInMonth
      months -= 1
    }

    return { months, days, hours, minutes, seconds }
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [date])

  const getFontSize = () => {
    const xs = size === 'medium' ? '28px' : '20px'
    const sm = size === 'medium' ? '36px' : '28px'
    const md = size === 'medium' ? '44px' : '36px'
    const lg = size === 'medium' ? ' 52px' : '44px'

    return { xs, sm, md, lg }
  }

  const formatTime = (time) => String(time).padStart(2, '0')

  return (
    <>
      {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
        <CounterBox key={unit}>
          <Typography
            sx={{
              fontSize: getFontSize(),
              lineHeight: 1.2
            }}
            fontWeight={600}
            color="text.primary"
            align="center"
          >
            {formatTime(timeRemaining[unit])}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '9px', sm: '12px', md: '14px', lg: '16px' }
            }}
            align="center"
            color="text.secondary"
          >
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </Typography>
        </CounterBox>
      ))}
    </>
  )
}

export default React.memo(EventTimer)
