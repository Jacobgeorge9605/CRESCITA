/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import { Box, ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

function GalleryImages({ imageFiles,...props }) {
  const [images, setImages] = React.useState([])
  const galleryCont = React.useRef(null)

  React.useEffect(() => {
    let nextIndex = 0
    const interval = setInterval(() => {
      if (
        galleryCont.current &&
        galleryCont.current.getBoundingClientRect().top < 600
      ) {
        if (nextIndex <= imageFiles.length)
          setImages(
            nextIndex === 0
              ? [imageFiles[0]]
              : [...imageFiles.slice(0, nextIndex)]
          )

        nextIndex += 1
      }
      if (
        galleryCont.current &&
        galleryCont.current.scrollTop < galleryCont.current.scrollHeight
      )
        galleryCont.current.scrollTop = galleryCont.current.scrollHeight

      if (nextIndex > imageFiles.length) clearInterval(interval)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const matchesTab = useMediaQuery('(min-width:600px)')
  const matchesPC = useMediaQuery('(min-width:900px)')

  return (
    <Box
      sx={{
        height: '70vh',
        overflowY: 'auto',
        //   pr: 2,
        scrollBehavior: 'smooth'
      }}
      className="hide-scrollbar"
      ref={galleryCont}
      {...props}
    >
      <ImageList
        variant="masonry"
        cols={matchesPC ? 4 : matchesTab ? 3 : 2}
        gap={8}
        className="hide-scrollbar"
      >
        <AnimatePresence>
          {images.length > 0 &&
            images.map((item) => (
              <ImageListItem
                key={item}
                component={motion.div}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                sx={{ overflow: 'hidden' }}
                transition={{ type: 'tween' }}
                viewport={{ once: true }}
              >
                <img className="gallery-image" src={item} alt={item.title}/>
              </ImageListItem>
            ))}
        </AnimatePresence>
      </ImageList>
    </Box>
  )
}

export default React.memo(GalleryImages)
