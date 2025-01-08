import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Appbar from '../../components/ambassador/AppBar'
import Profile from './Profile'

function AmbassadorDashboard() {

  return (
    <div>
      <Appbar />
      <Routes>
        <Route index element={<Profile />} />

      </Routes>
    </div>
  )
}

export default AmbassadorDashboard
