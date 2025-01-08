import { configureStore } from '@reduxjs/toolkit'
import adminAuthReducer from '../slices/adminAuth'
import authReducer from '../slices/auth'
import messageReducer from '../slices/message'

const reducer = {
  adminAuth: adminAuthReducer,
  auth: authReducer,
  message: messageReducer
}

const store = configureStore({
  reducer,
  devTools: true
})

export default store
