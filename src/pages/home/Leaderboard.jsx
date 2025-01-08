/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { Avatar, Box, Container, Paper, Typography } from '@mui/material'
import stringAvatar from '../../components/ambassador/stringAvatar'
import api from '../../utiils/api'
import Appbar from '../../components/ambassador/AppBar'

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1
//   }
// }

function LeaderboardItem({ id, name, college, points, image }) {
  return (
    <Box
      component={Paper}
      sx={{
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        // border: 1.5,
        p: 2.5,
        my: 1.5,
        gap: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(8px) saturate(130%)',
        background:
          'linear-gradient(135deg, rgba(123,126,175,0.3) 0%, rgba(223,66,177,0.3) 100%)'
      }}
    >
      <Typography color="text.primary">{id}</Typography>
      {image === null ? (
        <Avatar
          {...stringAvatar(String(name))}
          sx={{
            ...stringAvatar(String(name)).sx,

            fontSize: '24px',
            width: '2.5rem',
            height: '2.5rem',
            fontWeight: 600,
            mx: 1
          }}
        />
      ) : (
        <Avatar
          src={image}
          sx={{
            width: '2.5rem',
            height: '2.5rem',
            mx: 1
          }}
        />
      )}
      <div style={{ flexGrow: 1 }}>
        <Typography color="text.primary">{name}</Typography>
        <Typography variant="body2" fontSize="0.7rem" color="text.primary">
          {college}
        </Typography>
      </div>
      <Typography color="text.primary">{points}</Typography>
    </Box>
  )
}

export default function Leaderboard() {
  const [rows, setRows] = React.useState([])

  // React.useEffect(() => {
  //   const reArrange = () => {
  //     let prevRows = [...rows]
  //     prevRows = prevRows.sort(
  //       (row1, row2) => Number(row1.points) < Number(row2.points)
  //     )
  //     setRows(prevRows)
  //   }

  //   const timeoutId = setTimeout(reArrange, [500])

  //   return clearTimeout(timeoutId, reArrange)
  // }, [])

  React.useEffect(() => {
    api.ambassador.leaderboard
      .get()
      .then((res) => {
        setRows(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Appbar />
      <Container maxWidth="md" sx={{ p: 2, pb: 10 }}>
        <Typography
          variant="h4"
          fontSize="1.5rem"
          color="text.primary"
          fontWeight={600}
          sx={{ mt: 2 }}
        >
          Leaderboard
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: 'white',
            mt: 2
          }}
        >
          <span>Position</span>
          <span>CA Details</span>
          <span>Score</span>
        </Box>
        {/* 
      <AnimatePresence
        initial={false}
        mode="wait"
        animate="visible"
        exit="hidden"
      > */}
        <div style={{ height: '70vh', overflowY: 'auto' ,paddingRight:'0.6rem'}}>
          {rows.map((row, index) => (
            // <motion.div key={row.name} variants={item}>
            <LeaderboardItem
              key={row?.name ? row.name : `item${index}`}
              id={index + 1}
              college={row?.college ? row.college : 'College name'}
              name={row?.name ? row.name : 'Name'}
              points={row?.score ? row.score : 0}
              image={row?.profileUrl ? row.profileUrl : null}
            />
            // </motion.div>
          ))}
        </div>
        {/* </AnimatePresence> */}
      </Container>
    </>
  )
}
