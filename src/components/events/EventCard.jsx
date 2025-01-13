// /* eslint-disable react/jsx-props-no-spreading */
// import {
//   Box,
//   Button,
//   Card as MuiCard,
//   CardActions,
//   CardContent as MuiCardContent,
//   CardMedia,
//   Typography,
//   styled,
//   Accordion as MuiAccordion,
//   AccordionSummary,
//   AccordionDetails,
//   Chip
// } from '@mui/material'
// import React from 'react'
// import { BsFillGiftFill } from 'react-icons/bs'
// import { MdCategory, MdLocationPin } from 'react-icons/md'
// import { IoTicketOutline } from 'react-icons/io5'
// import { AiFillCalendar, AiFillClockCircle } from 'react-icons/ai'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { useNavigate } from 'react-router-dom'
// import imagefile from '../../../assets/teranis_22/1.jpg'

// const Card = styled(MuiCard)(() => ({
//   '&.MuiCard-root': {
//     background: 'rgba(255,255,255,0.1)',
//     backdropFilter: 'blur(5px) saturate(130%)',
//     width: 'min(90vw,20rem)',
//     borderRadius: '16px'
//   }
// }))

// const CardContent = styled(MuiCardContent)(() => ({
//   '&.MuiCardContent-root': {
//     paddingBottom: '0.6rem'
//   }
// }))

// const Accordion = styled(MuiAccordion)(() => ({
//   '&.MuiAccordion-root': {
//     background: 'rgba(255,255,255,0.1)',
//     backdropFilter: 'blur(5px) saturate(130%)',
//     borderRadius: '12px',
//     boxShadow: 'none'
//   }
// }))

// function Field({ children }) {
//   return (
//     <Typography
//       textTransform="uppercase"
//       color="text.secondary"
//       variant="h5"
//       align="left"
//       fontSize={{ xs: '12px', sm: '13px', md: '14px' }}
//       sx={{ display: 'flex', gap: 1, mb: 1 }}
//     >
//       {children}
//     </Typography>
//   )
// }

// function EventCard({ data, open, ...props }) {
//   return (
//     <Card sx={{ maxWidth: 345 }} {...props}>
//       {data?.eventType && (
//         <Chip
//           color="primary"
//           label={data.eventType}
//           size="small"
//           sx={{
//             margin: '5px',
//             // height: '20px',
//             zIndex: '1',
//             position: 'absolute',
//             right: 0,
//             top: 0,
//             // color: 'white',
//             // bgcolor: '#616161',
//             opacity: '80%'
//           }}
//         />
//       )}
//       <CardMedia
//         sx={{ height: 'min(35vw,10rem)' }}
//         image={data?.bannerUrl}
//         title={data?.name}
//       />
//       <CardContent sx={{ p: '0.6rem' }}>
//         <Typography variant="h5" sx={{ px: 1 }}>
//           {data?.name}
//         </Typography>

//         <Typography sx={{ px: 1, mt: 1 }}>
//           {data?.date && <Field>DATE: {data.date}</Field>}
//         </Typography>

//         <Typography sx={{ px: 1 }}>
//           {data?.fee && <Field>ENTRY FEE: &#8377;{data.fee}</Field>}
//         </Typography>

//         <Typography sx={{ px: 1 }}>
//           {data?.prize && <Field>PRIZES WORTH &#8377;{data.prize}</Field>}
//         </Typography>
//         {/* <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography>MORE DETAILS</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             {data?.date && (
//               <Field>
//                 <AiFillCalendar />
//                 {data.date}
//               </Field>
//             )}
//             {data?.from || data?.to ? (
//               <Field>
//                 <AiFillClockCircle />
//                 {data.from}
//                 {` - ${data.to}`}
//               </Field>
//             ) : null}
//             {data?.venue && (
//               <Field>
//                 <MdLocationPin />
//                 {data.venue}
//               </Field>
//             )}
//             {data?.contact && <Field>CONTACT: {data.contact}</Field>}
//           </AccordionDetails>
//         </Accordion> */}
//       </CardContent>
//       <CardActions sx={{ pt: 0 }}>
//         <Button
//           fullWidth
//           variant="contained"
//           onClick={open}
//           size="small"
//           sx={{ borderRadius: '14px' }}
//           disableElevation
//         >
//           More Details
//         </Button>
//       </CardActions>
//     </Card>
//   )

//   //   return (
//   //     <Box
//   //       component={Button}
//   //       fullWidth
//   //       onClick={open}
//   //       {...props}
//   //       sx={{

//   //         display: 'flex'
//   //       }}
//   //     >
//   //       <Box
//   //         sx={{
//   //           height: 'min(6rem,20vw)',
//   //           width: 'min(6rem,20vw)',
//   //           my: 9,
//   //           p: 0.7,
//   //           mt: 'max(-4vw,-1.2rem)',
//   //           ml: 'max(-4vw,-1.2rem)',
//   //           position: 'relative',
//   //           zIndex: 1,
//   //           background: 'rgba(255,255,255,0.2)',
//   //           backdropFilter: 'blur(5px) saturate(130%)',
//   //           clipPath: 'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
//   //         }}
//   //       >
//   //         {data?.bannerUrl ? (
//   //           <img
//   //             alt="data"
//   //             loading="lazy"
//   //             style={{
//   //               width: '100%',
//   //               height: '100%',
//   //               objectFit: 'cover',
//   //               objectPosition: 'center center',
//   //               clipPath: 'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
//   //             }}
//   //             src={data.bannerUrl}
//   //           />
//   //         ) : (
//   //           <img
//   //             alt="data"
//   //             loading="lazy"
//   //             style={{
//   //               width: '100%',
//   //               height: '100%',
//   //               objectFit: 'cover',
//   //               objectPosition: 'center center',
//   //               clipPath: 'polygon(0% 1rem, 1rem 0%, 100% 0%, 100% 100%, 0% 100%)'
//   //             }}
//   //             src={imagefile}
//   //           />
//   //         )}
//   //       </Box>
//   //       <Box
//   //         sx={{
//   //           position: 'relative',
//   //           background: 'rgba(255,255,255,0.1)',
//   //           backdropFilter: 'blur(5px) saturate(130%)',
//   //           display: 'flex',
//   //           flexGrow: 1,
//   //           height: 'min(7rem,25vw)',
//   //           boxShadow: 5,
//   //           ml: 'max(-5.5rem,-16vw)',
//   //           mt: 'min(0.3rem,1vw)',
//   //           borderRight: 4,
//   //           borderColor: 'rgba(255,255,255,0.3)',
//   //           transform: 'skewX(-4deg)',
//   //           clipPath:
//   //             'polygon(0% 0%, 100% 0%, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0% 100%)'
//   //         }}
//   //       >
//   //         <Box
//   //           sx={{
//   //             display: 'flex',
//   //             position: 'absolute',
//   //             left: 'min(6.5rem,17vw)',
//   //             transform: 'skewX(4deg)',
//   //             top: { xs: 5, sm: 6, md: 7 }
//   //           }}
//   //         >
//   //           <Typography
//   //             fontWeight={300}
//   //             color="text.primary"
//   //             sx={{
//   //               display: 'flex',
//   //               alignItems: 'center',
//   //               gap: 0.6,
//   //               fontSize: { xs: '11px', md: '12px', lg: '14px' }
//   //             }}
//   //           >
//   //             <AiFillCalendar />
//   //             {data?.date ? data.date : 'Date'}
//   //           </Typography>
//   //         </Box>

//   //         {data?.prize && (
//   //           <Box
//   //             sx={{
//   //               background: 'rgba(255,255,255,0.1)',
//   //               backdropFilter: 'blur(5px) saturate(130%)',
//   //               // boxShadow: 1,
//   //               border: 1,
//   //               borderTop: 0,
//   //               borderColor: 'rgba(255,255,255,0.2)',
//   //               position: 'absolute',
//   //               right: '0.5rem',
//   //               // transform: 'skewX(4deg)',
//   //               top: 0,
//   //               px: 1,
//   //               py: 0.4,
//   //               color: 'rgba(255,255,255,0.95)',
//   //               display: 'flex',
//   //               alignItems: 'center',
//   //               gap: 0.7,
//   //               fontSize: { xs: '13px', md: '14px', lg: '15px' }
//   //             }}
//   //           >
//   //             <BsFillGiftFill />
//   //             <Typography
//   //               variant="body2"
//   //               fontSize="inherit"
//   //             >{`₹${data.prize}`}</Typography>
//   //           </Box>
//   //         )}

//   //         <Box
//   //           sx={{
//   //             ml: 'min(6.5rem,18vw)',
//   //             mt: { xs: 2.8, sm: 3.2, md: 3.6 },
//   //             py: 1.5,
//   //             transform: 'skew(4deg)',
//   //             display: 'flex',
//   //             flexDirection: 'column',
//   //             gap: 1,
//   //             textAlign: 'start'
//   //           }}
//   //         >
//   //           <Typography
//   //             variant="h6"
//   //             whiteSpace="nowrap"
//   //             sx={{
//   //               fontSize: { xs: '16px', md: '18px', lg: '20px' },
//   //               overflow: 'hidden',
//   //               textOverflow: 'ellipsis',
//   //               maxWidth: 'min(60vw)'
//   //             }}
//   //             letterSpacing="1.5px"
//   //             color="rgba(255,255,255,1)"
//   //           >
//   //             {data?.name ? data.name : 'data name'}
//   //           </Typography>

//   //           <Box sx={{ display: 'flex', gap: 2, mt: '0.1rem' }}>
//   //             <Typography
//   //               fontWeight={300}
//   //               color="text.secondary"
//   //               sx={{
//   //                 display: 'flex',
//   //                 alignItems: 'center',
//   //                 gap: 0.6,
//   //                 fontSize: { xs: '11px', md: '12px', lg: '14px' }
//   //               }}
//   //             >
//   //               <MdCategory />
//   //               {data?.eventType ? data.eventType : 'data type'}
//   //             </Typography>

//   //             <Typography
//   //               fontSize="0.7rem"
//   //               fontWeight={300}
//   //               color="text.secondary"
//   //               sx={{
//   //                 display: 'flex',
//   //                 alignItems: 'center',
//   //                 gap: 0.5,
//   //                 fontSize: { xs: '11px', md: '12px', lg: '14px' }
//   //               }}
//   //             >
//   //               <IoTicketOutline />
//   //               {data?.fee ? `₹${data.fee}` : 'Entry fee'}
//   //             </Typography>
//   //           </Box>
//   //         </Box>
//   //       </Box>
//   //     </Box>
//   //   )
// }

// export default EventCard


/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent as MuiCardContent,
  CardMedia,
  Typography,
  styled,
  Chip
} from '@mui/material';
import React from 'react';

const Card = styled(MuiCard)(() => ({
  '&.MuiCard-root': {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(5px) saturate(130%)',
    width: 'min(90vw,20rem)',
    borderRadius: '16px'
  }
}));

const CardContent = styled(MuiCardContent)(() => ({
  '&.MuiCardContent-root': {
    paddingBottom: '0.6rem'
  }
}));

function Field({ children }) {
  return (
    <Typography
      textTransform="uppercase"
      color="text.secondary"
      variant="h5"
      align="left"
      fontSize={{ xs: '12px', sm: '13px', md: '14px' }}
      sx={{ display: 'flex', gap: 1, mb: 1 }}
    >
      {children}
    </Typography>
  );
}

// Static list of random events
const events = [
  {
    name: "Hackathon 2024",
    eventType: "Coding",
    date: "March 15, 2024",
    fee: 100,
    prize: 50000,
    bannerUrl: "https://via.placeholder.com/400x200?text=Hackathon+2024"
  },
  {
    name: "Tech Fest 2024",
    eventType: "Exhibition",
    date: "April 10, 2024",
    fee: 200,
    prize: 30000,
    bannerUrl: "https://via.placeholder.com/400x200?text=Tech+Fest+2024"
  },
  {
    name: "Startup Summit",
    eventType: "Conference",
    date: "May 20, 2024",
    fee: 150,
    prize: 10000,
    bannerUrl: "https://via.placeholder.com/400x200?text=Startup+Summit"
  },
  {
    name: "AI Workshop",
    eventType: "Workshop",
    date: "June 5, 2024",
    fee: 50,
    prize: null,
    bannerUrl: "https://via.placeholder.com/400x200?text=AI+Workshop"
  }
];

function EventCard({ open, ...props }) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={3}
      justifyContent="center"
      {...props}
    >
      {events.map((event, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          {event.eventType && (
            <Chip
              color="primary"
              label={event.eventType}
              size="small"
              sx={{
                margin: '5px',
                zIndex: '1',
                position: 'absolute',
                right: 0,
                top: 0,
                opacity: '80%'
              }}
            />
          )}
          <CardMedia
            sx={{ height: 'min(35vw,10rem)' }}
            image={event.bannerUrl}
            title={event.name}
          />
          <CardContent sx={{ p: '0.6rem' }}>
            <Typography variant="h5" sx={{ px: 1 }}>
              {event.name}
            </Typography>

            <Typography sx={{ px: 1, mt: 1 }}>
              {event.date && <Field>DATE: {event.date}</Field>}
            </Typography>

            <Typography sx={{ px: 1 }}>
              {event.fee && <Field>: &#8377;{event.fee}</Field>}
            </Typography>

            <Typography sx={{ px: 1 }}>
              {event.prize && <Field>PRIZES WORTH &#8377;{event.prize}</Field>}
            </Typography>
          </CardContent>
          <CardActions sx={{ pt: 0 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => open(event)}
              size="small"
              sx={{ borderRadius: '14px' }}
              disableElevation
            >
              More Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default EventCard;
