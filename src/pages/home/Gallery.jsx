import * as React from 'react'
import { Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'

// image imports
// cultural
import image1 from '../../../assets/teranis_22/1.jpg' // 1
import image2 from '../../../assets/teranis_22/2.jpg'
import image3 from '../../../assets/teranis_22/3.JPG'
import image4 from '../../../assets/teranis_22/4.jpg'
import image5 from '../../../assets/teranis_22/5.jpg'
import image8 from '../../../assets/teranis_22/8.jpg'
// import image16 from '../../../assets/teranis_22/16.JPG'
import image9 from '../../../assets/teranis_22/9.jpg'
import image13 from '../../../assets/teranis_22/13.jpg'

// inauguration

// events
import image6 from '../../../assets/teranis_22/6.jpg'
import image7 from '../../../assets/teranis_22/7.jpg'

import image10 from '../../../assets/teranis_22/10.JPG'
import image11 from '../../../assets/teranis_22/11.JPG'
import image14 from '../../../assets/teranis_22/14.JPG'
import image15 from '../../../assets/teranis_22/15.JPG'
import image16 from '../../../assets/teranis_22/16.jpg'




import GalleryImages from '../../components/gallery/GalleryImages'

const imageFiles = [
  image3,
  image4,
  image1,
  image6,
  image2,
  image5,
  image7,
  image8,
  image9,
  image10,
  image11,
  image15,
  image13,
  image14,
  image15,
  image16,
]

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

export default function Gallery() {
  return (
    <Container
      id="gallery"
      disableGutters
      maxWidth="100vw"
      sx={{
        backdropFilter: 'blur(3px) saturate(110%)',
        backgroundColor: 'rgba(255, 255, 255,0.01)',
        pt: '5vh'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ minHeight: '100vh', pt: '5vh' }}
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
            color:'#04d9ff',
            borderBottom: 2,
            py: 0.8,
            letterSpacing: '1px',
            width: '3.5rem',
            mb: 2,
            fontSize: { xs: '14px', lg: '16px' }
          }}
          component={motion.h6}
          variants={animationChild}
          viewport={{ once: true }}
        >
          GALLERY
        </Typography>

        <Typography
          variant="h4"
          fontWeight={600}
          color="text.primary"
          sx={{ fontSize: { xs: '10px', md: '24px', lg: '28px' }, mb: 2 }}
          component={motion.h4}
          variants={animationChild}
          viewport={{ once: true }}
        >
          Moments of CRESCITA 1.0
           {/* &apos;23 */}
        </Typography>

        <GalleryImages
          imageFiles={imageFiles}
          component={motion.div}
          variants={animationChild}
          viewport={{ once: true }}
        />
      </Container>
    </Container>
  )
}
