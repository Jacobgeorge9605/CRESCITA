/* eslint-disable jsx-a11y/alt-text */
import { Grid, Typography, Box, Container } from '@mui/material'
import { motion} from 'framer-motion'
import React from 'react'
import lbsconnect from '../../../assets/sponsored/lbsconnect.png'
import bg from '../../../assets/background/sponsor_bg.svg'

const animationParent = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.05,delay:0.4 }
  }
}

const animationChild = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0
  }
}

function Sponsor() {
  // const controls = useAnimation()
  // const [ref, inView] = useInView()

  // useEffect(() => {
  //   if (inView) {
  //     controls.start({
  //       scale: [1, 2, 2, 1, 1],
  //       rotate: [0, 0, 270, 270, 0],
  //       borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  //       transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
  //     })
  //   }
  // }, [controls, inView])
  return (
    <Container
      id="sponsor"
      disableGutters
      maxWidth="100vw"
      sx={{
        backdropFilter: 'blur(3px) saturate(110%)',
        backgroundColor: 'rgba(255, 255, 255,0.01)'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', minHeight: '80vh', pt: '10vh' }}
        component={motion.div}
        initial="hidden"
        whileInView="show"
        variants={animationParent}
        viewport={{ once: true }}
      >
        <Typography
          color="secondary"
          variant="h6"
          align="center"
          sx={{
            borderBottom: 2,
            whiteSpace: 'nowrap',
            py: 0.8,
            letterSpacing: '1px',
            width: '10.5rem',
            mb: 2,
            fontSize: { xs: '14px', lg: '16px' }
          }}
          component={motion.h6}
          variants={animationChild}
          viewport={{ once: true }}
        >
          PARTNERS & SPONSORS
        </Typography>

        <Typography
          component={motion.h3}
          variants={animationChild}
          viewport={{ once: true }}
          variant="h3"
          fontWeight={600}
          color="text.primary"
          sx={{ fontSize: { xs: '24px', md: '28px', lg: '32px' } }}
        >
          OFFICIAL SPONSOR
        </Typography>

        <Grid
          component={motion.div}
          variants={animationChild}
          viewport={{ once: true }}
          container
          spacing={2}
          justifyContent="center"
          sx={{
            marginTop: '1rem'
          }}
        >
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <Box
              style={{
                backgroundImage: `url(${lbsconnect})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '200px',
                height: '200px'
              }}
            />
          </Grid>
        </Grid>

        {/* <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: '1rem',
          opacity: { xs: 0.4, md: 0.7 }
        }}
      >
        <img src={bg} style={{ width: '35vh' }} />
      </Box> */}
      </Container>
    </Container>
  )
}

export default Sponsor
