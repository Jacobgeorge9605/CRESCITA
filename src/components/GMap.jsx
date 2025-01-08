import React from 'react'

function GMap() {
  return (
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.1816926982005!2d75.07860701525318!3d12.50411312834559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4846bda0b9525%3A0x1a6965b115fbfb96!2sLBS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1680552452559!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{
        filter: 'grayscale(50%) invert(10%) contrast(90%)',
        border: '0',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        opacity: 0.9,
        alignItems: 'center'
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}

export default GMap
