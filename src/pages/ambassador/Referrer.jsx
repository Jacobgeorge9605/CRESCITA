/* eslint-disable no-plusplus */
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/common/Loading'
import api from '../../utiils/api'
import { NotificationContext } from '../../contexts/NotificationContext'

function Referrer() {
  const navigate = useNavigate()
  const params = useParams()
  const { createNotification } = useContext(NotificationContext)

  useEffect(() => {
    if (params?.id)
      api.ambassador.referralCode
        .verify({ referralCode: params.id })
        .then(() => {
          localStorage.setItem('referrer', params.id)
        })
        .catch((err) => {
          createNotification({
            type: 'error',
            message: 'Failed to verify referrer!',
          })
          console.log(err)
        })

    navigate('/')
  }, [])

  return <Loading />
}

export default Referrer
