/* eslint-disable react/no-this-in-sfc */
import React, { useEffect, useRef, useState } from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from '../../components/common/NavBar'
import About from './About'
import Schedules from './Schedules'
import Footer from './Footer'
import Sponsor from './Sponsor'
import designBgTrans from '../../../assets/background/CircuitBoardTrans.svg'
import Gallery from './Gallery'
import Ambassador from './Ambassador'
import Cover from './Cover'
import Loading from '../../components/common/Loading'
// import FaqSection from './faq'

const pageCount = 6

function Home() {
  const parallax = useRef(null)
  const [hideCover, setHideCover] = useState(false)
  const [loading, setLoading] = useState(true)
  const screenHeight = window.screen.height

  const scrollTo = (pageNo) => {
    if (parallax !== null) parallax.current.scrollTo(pageNo)
  }

  useEffect(() => {
    const el = document.getElementById('main-cont')
    function onScroll() {
      if (el.scrollTop >= (screenHeight * 6) / 10) {
        setHideCover(true)
      } else {
        setHideCover(false)
      }
    }

    const timoutId = setTimeout(() => {
      setLoading(false)

      if (el) el.addEventListener('scroll', onScroll, { passive: true })
    }, [100])

    return () => {
      clearTimeout(timoutId)
      if (el) el.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [])

  if (loading) return <Loading />

  return (
    <div id="main-cont">
      {/* style={{ background: `url(${designBgTrans})` }}> */}
      <NavBar scrollTo={scrollTo} />

      <Cover />
      <About />
      {/* <Event /> */}
      <Schedules />
      {/* <Sponsor /> */}
      {/* <Ambassador /> */}
      <Gallery />
      {/* <FaqSection /> */}
      <Footer />
    </div>
  )
}

export default Home
