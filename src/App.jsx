import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Box } from '@mui/material'
import { ToastContainer, Bounce } from 'react-toastify'
import Loading from './components/common/Loading'
import PrivateRoutes from './utiils/ProtectedRoute'
import AmbassadorPrivateRoutes from './utiils/ProtectedRouteAmbassador'
import 'react-toastify/dist/ReactToastify.css'
import Particles from './components/cover/Particles'
import Home from './pages/home/Home'

//import card


// pages for lazy load
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'))
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'))
const AmbassadorDashboard = React.lazy(() =>
  import('./pages/ambassador/AmbassadorDashboard')
)
const Event = React.lazy(() => import('./pages/events/EventsTab'))
const Referrer = React.lazy(() => import('./pages/ambassador/Referrer'))
const EventRegistration = React.lazy(() =>
  import('./pages/events/EventRegistration')
)
const ForgotPassword = React.lazy(() =>
  import('./pages/ambassador/ForgotPassword')
)
const ResetPassword = React.lazy(() =>
  import('./pages/ambassador/ResetPassword')
)
const Leaderboard = React.lazy(() => import('./pages/home/Leaderboard'))
const AmbassadorLogin = React.lazy(() =>
  import('./pages/ambassador/AmbassadorLogin')
)
const AmbassadorRegister = React.lazy(() =>
  import('./pages/ambassador/AmbassadorRegister')
)
const Registered = React.lazy(() => import('./pages/admin/registered'))
const E404 = React.lazy(() => import('./pages/E404'))
const Register = React.lazy(() => import('./pages/events/Register'))

function WaitWhileLoad({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        closeOnClick
        hideProgressBar
        autoClose={2000}
        closeButton={false}
        theme="dark"
        transition={Bounce}
      />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            index
            element={
              <WaitWhileLoad>
                <>
                  <Box
                    sx={{
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                      right: 0,
                      maxHeight: '100vh',
                      overflow: 'hidden'
                    }}
                  >
                    <Particles />
                  </Box>
                  <Home />
                </>
              </WaitWhileLoad>
            }
          />

            {/* card section like card component inside router tag  */}




          <Route
            exact
            path="/events"
            element={
              <WaitWhileLoad>
                <Event />
              </WaitWhileLoad>
            }
          />

          <Route
            exact
            path="/referrer/:id"
            element={
              <WaitWhileLoad>
                <Referrer />
              </WaitWhileLoad>
            }
          />

          <Route
            exact
            path="/referrer"
            element={
              <WaitWhileLoad>
                <Referrer />
              </WaitWhileLoad>
            }
          />

          {/* <Route
            exact
            path="/eventregister"
            element={
              <WaitWhileLoad>
                <EventRegistration />
              </WaitWhileLoad>
            }
          /> */}

          <Route
            exact
            path="event/:id"
            element={
              <WaitWhileLoad>
                <Register />
              </WaitWhileLoad>
            }
          />

          <Route
            exact
            path="/referrer"
            element={
              <WaitWhileLoad>
                <Referrer />
              </WaitWhileLoad>
            }
          />

          <Route
            exact
            path="/allinallcuratorhere/login"
            element={
              <WaitWhileLoad>
                <AdminLogin />
              </WaitWhileLoad>
            }
          />

          <Route
            exact
            path="/ambassador-register"
            element={
              <WaitWhileLoad>
                <AmbassadorRegister />
              </WaitWhileLoad>
            }
          />

          <Route
            exact
            path="/forgot-password"
            element={
              <WaitWhileLoad>
                <ForgotPassword />
              </WaitWhileLoad>
            }
          />

          <Route
            exact
            path="/password-reset/ca/:id"
            element={
              <WaitWhileLoad>
                <ResetPassword />
              </WaitWhileLoad>
            }
          />

          <Route element={<PrivateRoutes />}>
            <Route
              exact
              path="/allinallcuratorhere"
              element={
                <WaitWhileLoad>
                  <AdminDashboard />
                </WaitWhileLoad>
              }
            />

            <Route
              exact
              path="/allinallcuratorhere/registered"
              element={
                <WaitWhileLoad>
                  <Registered />
                </WaitWhileLoad>
              }
            />
          </Route>

          <Route
            exact
            path="/ambassador-login"
            element={
              <WaitWhileLoad>
                <AmbassadorLogin />
              </WaitWhileLoad>
            }
          />
          <Route element={<AmbassadorPrivateRoutes />}>
            <Route
              path="/ambassador-profile"
              element={
                <WaitWhileLoad>
                  <AmbassadorDashboard />
                </WaitWhileLoad>
              }
            />
          </Route>

          <Route
            exact
            path="/ambassador-leaderboard"
            element={<Leaderboard />}
          />

          <Route path="*" element={<E404 />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
