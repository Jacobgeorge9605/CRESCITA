import React, {  useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EventRegistration from './EventRegistration'
import api from '../../utiils/api'
import Loading from '../../components/common/Loading'
import { NotificationContext } from '../../contexts/NotificationContext'

function Register() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { createNotification } =useContext(NotificationContext)
  const [event, setEvent] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api.common.events
      .getByName(id)
      .then((res) => {
        if (!res.data) {
          createNotification({
            type: 'error',
            message: 'Sorry, we couldn\'t get that event, try again!'
          })
          navigate('/')
        } else {
          setLoading(false)
          setEvent(res.data)
        }
      })
      .catch((err) => {
        createNotification({
          type: 'error',
          message: 'Sorry, we couldn\'t get that event, try again!'
        })
        navigate('/')
        console.log(err)
      })
  }, [])

  if (loading) return <Loading />

  return <EventRegistration event={event} />
}

export default Register
