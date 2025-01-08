import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillInstagram, AiFillLinkedin, AiOutlineYoutube } from 'react-icons/ai';
import { HiOutlineGlobe } from 'react-icons/hi';
import { motion } from 'framer-motion';
import logo from '../../../assets/teranis_logo.png';
import GMap from '../../components/GMap';

const animationParent = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.05, delay: 0.4 },
  },
};

const animationChild = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  const contacts = [
    {
      label: '+91 8590635287',
      description: 'Aswin E, Chair, IEEE SB LBSCEK',
      whatsapp: 'https://wa.me/918590635287',
    },
    {
      label: '+91 7012229415',
      description: 'Hridyaprabha M, Student Co-ordinator, Crescita 2.0',
      whatsapp: 'https://wa.me/917012229415',
    },
    {
      label: '+91 9605980433',
      description: 'Jacob George, Webmaster, Crescita 2.0',
      whatsapp: 'https://wa.me/919605980433',
    },
    {
      label: '+91 9447341312',
      description: 'Staff Co-ordinator',
      whatsapp: 'https://wa.me/919447341312',
    },
  ];

  const socialHandles = [
    {
      icon: <AiFillInstagram style={{ fontSize: '20px', color: '#E4405F' }} />,
      label: <span style={{ fontSize: '10px', color: '#FFFFFF' }}>Instagram</span>,
      link: 'https://www.instagram.com/ieeesblbscek?igsh=dWVxNXFpcnBkODlz',
    },
    {
      icon: <AiFillLinkedin style={{ fontSize: '20px', color: '#0077B5' }} />,
      label: <span style={{ fontSize: '10px', color: '#FFFFFF' }}>LinkedIn</span>,
      link: 'https://www.linkedin.com/company/ieee-lbscek-sb/',
    },
    {
      icon: <AiOutlineYoutube style={{ fontSize: '20px', color: '#FF0000' }} />,
      label: <span style={{ fontSize: '10px', color: '#FFFFFF' }}>YouTube</span>,
      link: 'https://bit.ly/IEEESBLBSCEK_YOUTUBE',
    },
    {
      icon: <HiOutlineGlobe style={{ fontSize: '20px', color: '#007BFF' }} />,
      label: <span style={{ fontSize: '10px', color: '#FFFFFF' }}>Website</span>,
      link: 'https://lbsieeesb.org/',
    },
  ];


  return (
    <Container
      disableGutters
      maxWidth="100vw"
      sx={{
        backdropFilter: 'blur(5px) saturate(110%)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'end',
          minHeight: { xs: '100vh', md: '55vh' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: 5,
            flexDirection: 'column',
            justifyContent: 'space-between',
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
            {/* Left Section: Logo and Description */}
            <Grid item xs={12} md={4}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 2,
                  }}
                  component={motion.div}
                  variants={animationChild}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      width: { xs: '3rem', md: '3.5rem' },
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <img alt="logo" style={{ width: '100%', height: 'auto' }} src={logo} />
                  </Box>
                  <Typography
                    color="text.primary"
                    sx={{ fontSize: { xs: '24px', md: '30px' } }}
                    fontWeight={700}
                    fontFamily="Audiowide"
                    letterSpacing="3px"
                  >
                    CRESCITA 2.0
                  </Typography>
                </Box>
                <Typography
                  component={motion.h5}
                  variants={animationChild}
                  viewport={{ once: true }}
                  color="text.secondary"
                  sx={{ fontSize: { xs: '14px', md: '16px' }, mb: 2 }}
                >
                  National Level Technical Fest
                  <br />
                  IEEE Student Branch
                  <br />
                  LBS College of Engineering Kasaragod
                </Typography>
              </Box>
            </Grid>

            {/* Middle Section: Google Maps */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                }}
                component={motion.div}
                variants={animationChild}
                viewport={{ once: true }}
              >
                <GMap />
              </Box>
            </Grid>

            {/* Right Section: Contacts */}
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
                  sx={{ fontSize: { xs: '18px', md: '20px' }, mb: 1 }}
                  fontWeight={600}
                >
                  Contact
                </Typography>
                {contacts.map((contact, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Link
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: 'flex', alignItems: 'center', color: '#25D366' }}
                    >
                      <FaWhatsapp style={{ fontSize: '18px' }} />
                    </Link>
                    <Typography
                      sx={{
                        fontSize: { xs: '14px', md: '15px' },
                        color: 'text.secondary',
                      }}
                    >
                      {contact.label} ({contact.description})
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Social Handles Section */}
              <Box sx={{ mt: 3, display: 'flex', gap: 3, justifyContent: 'flex-start' }}>
                {socialHandles.map((handle, index) => (
                  <Link
                    key={index}
                    href={handle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {handle.icon}
                    {handle.label}
                  </Link>
                ))}

                <Link
                  href="#footer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                ></Link>

              </Box>
            </Grid>
          </Grid>

          {/* Footer Bottom */}
          <Box component={motion.div} initial="hidden" whileInView="show" variants={animationParent}>
            <Divider sx={{ my: 2 }} />
            <Typography
              component="p"
              color="rgba(255,255,255,0.7)"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '11px', md: '13px' },
                py: 2,
                color: 'white',
              }}
            >
              <span>
                &copy; {new Date().getFullYear()} Designed and Developed by IEEE SB LBSCEK
              </span>

            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Footer;
