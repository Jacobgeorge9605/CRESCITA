import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { motion } from 'framer-motion'
import logo from '../../../assets/teranis_logo.png'
import GMap from '../../components/GMap'

const animationParent = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.05, delay: 0.4 }
  }
}

const animationChild = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0
  }
}

function Footer() {
  return (
    <Container
      disableGutters
      maxWidth="100vw"
      sx={{
        backdropFilter: 'blur(5px) saturate(110%)',
        backgroundColor: 'rgba(255, 255, 255,0.05)'
      }}
    >
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'end',
          minHeight: { xs: '100vh', sm: '100vh', md: '55vh' }
          // pt:{md:'10rem'}
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: 5,
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{ width: '100%', flexGrow: 1, p: 4 }}
            component={motion.div}
            initial="hidden"
            whileInView="show"
            variants={animationParent}
            viewport={{ once: true }}
          >
            <Grid
              item
              xs={12}
              md={4}
              component={motion.div}
              initial="hidden"
              whileInView="show"
              variants={animationParent}
              viewport={{ once: true }}
            >
              <Box>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
                  component={motion.div}
                  variants={animationChild}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      width: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      alt="logo"
                      style={{ width: '100%', height: 'auto' }}
                      src={logo}
                    />
                  </Box>
                  <Typography
                    color="text.primary"
                    sx={{ fontSize: { xs: '20px', md: '26px', lg: '32px' } }}
                    fontWeight={600}
                    fontFamily="Audiowide"
                    letterSpacing="3px"
                    variant="h4"
                  >
                    CRESCITA 2.0
                  </Typography>
                </Box>

                <Typography
                  component={motion.h5}
                  variants={animationChild}
                  viewport={{ once: true }}
                  color="text.secondary"
                  sx={{ fontSize: { xs: '14px', md: '15px', lg: '16px' } }}
                  variant="body2"
                >
                  National Level Technical Fest
                  <br /> IEEE STUDENT BRANCH LBS College of Engineering Kasaragod
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              component={motion.div}
              initial="hidden"
              whileInView="show"
              variants={animationParent}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  my: 0
                }}
                component={motion.div}
                variants={animationChild}
                viewport={{ once: true }}
              >
                <GMap />
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}
                component={motion.div}
                initial="hidden"
                whileInView="show"
                variants={animationParent}
                viewport={{ once: true }}
              >
                <Typography
                  component={motion.h5}
                  variants={animationChild}
                  viewport={{ once: true }}
                  color="text.primary"
                  sx={{
                    mb: 0.5,
                    fontSize: { xs: '18px', md: '19px', lg: '20px' }
                  }}
                  variant="h5"
                  fontWeight={600}
                >
                  Contact
                </Typography>

                <Typography
                  component={motion.p}
                  variants={animationChild}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: { xs: '12px', sm: '13px', md: '14px' }
                  }}
                  color="text.secondary"
                  variant="body2"
                >
                  <FaPhoneAlt style={{ marginRight: '0.7rem' }} /> +91
                  8301062974 (Student coordinator)
                </Typography>

                <Typography
                  component={motion.p}
                  variants={animationChild}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: { xs: '12px', sm: '13px', md: '14px' }
                  }}
                  color="text.secondary"
                  variant="body2"
                >
                  <FaPhoneAlt style={{ marginRight: '0.7rem' }} /> +91
                  9447341312 (Staff coordinator)
                </Typography>

                <Typography
                  component={motion.p}
                  variants={animationChild}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: { xs: '12px', sm: '13px', md: '14px' }
                  }}
                  color="text.secondary"
                  variant="body2"
                >
                  <GrMail style={{ marginRight: '0.7rem' }} />
                  <Link
                    underline="hover"
                    color="inherit"
                    href="mailto:teranis@lbscek.ac.in"
                  >
                    ieeesb@lbscek.ac.in
                  </Link>
                </Typography>

                <Typography
                  component={motion.p}
                  variants={animationChild}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: { xs: '12px', sm: '13px', md: '14px' }
                  }}
                  color="text.secondary"
                  variant="body2"
                >
                  <AiFillInstagram
                    style={{ marginRight: '0.7rem', fontSize: '16px' }}
                  />
                  <Link
                    underline="hover"
                    color="inherit"
                    href="https://www.instagram.com/teranis.lbscek"
                  >
                    ieeesb.lbscek
                  </Link>
                </Typography>

                <Typography
                  component={motion.p}
                  variants={animationChild}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    alignItems: 'start',
                    fontSize: { xs: '12px', sm: '13px', md: '14px' }
                  }}
                  color="text.secondary"
                  variant="body2"
                >
                  <HiLocationMarker
                    style={{
                      marginRight: '0.7rem',
                      fontSize: '16px',
                      marginTop: '0.2rem'
                    }}
                  />
                  <Link
                    underline="hover"
                    color="inherit"
                    href="https://goo.gl/maps/kbPS5hxqpzyczmKv8"
                  >
                    Povval, Muliyar (PO),
                    <br /> Bovikanam, Kasaragod, Kerala
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            component={motion.div}
            initial="hidden"
            whileInView="show"
            variants={animationParent}
            viewport={{ once: true }}
          >
            <Divider
              sx={{ my: 2 }}
              component={motion.div}
              variants={animationChild}
              viewport={{ once: true }}
            />
            <Typography
              component={motion.h6}
              variants={animationChild}
              viewport={{ once: true }}
              color="rgba(255,255,255,0.4)"
              variant="h6"
              fontWeight={400}
              sx={{
                fontSize: { xs: '10px', sm: '11px', md: '12px' },
                px: 3,
                mb: 10
              }}
            >
              Copyright © 2024 All rights reserved | CRESCITA 2.0 2024
            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default Footer
