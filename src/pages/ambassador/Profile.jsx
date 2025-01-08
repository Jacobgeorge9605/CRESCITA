/* eslint-disable no-return-await */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  FormLabel,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import stringAvatar from '../../components/ambassador/stringAvatar'
import api from '../../utiils/api'
import { logout } from '../../slices/auth'

function Profile() {
  const [copied, setCopied] = useState(false)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    // localStorage.removeItem('user')
    navigate('/ambassador-login')
    window.location.reload()
  }

  React.useEffect(() => {
    setLoading(true)
    api.ambassador.profile
      .get()
      .then((res) => {
        setLoading(false)
        setProfile(res.data)
      })
      .catch((err) => {
        setLoading(false)
        if (err?.response?.status === 401) handleLogout()
        console.log(err.response.status)
      })
  }, [])

  const copyAnyway = async (textToCopy) => {
    // Navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
    } else {
      // Use the 'out of viewport hidden text area' trick
      const textArea = document.createElement('textarea')
      textArea.value = textToCopy

      // Move textarea out of the viewport so it's not visible
      textArea.style.position = 'absolute'
      textArea.style.left = '-999999px'

      document.body.prepend(textArea)
      textArea.select()

      try {
        document.execCommand('copy')
        setCopied(true)
      } catch (error) {
        console.error(error)
        setCopied(false)
      } finally {
        textArea.remove()
      }
    }
  }

  return (
    <Container maxWidth="sm" disableGutters sx={{ p: { xs: 1.5, sm: 3 } }}>
      <Box
        sx={{
          backdropFilter: 'blur(5px) saturate(120%)',
          background:
            'radial-gradient(circle, rgba(238,174,202,0.3) 0%, rgba(148,187,233,0.3) 100%)',
          borderRadius: '32px',
          border: '1px solid rgba(255, 255, 255, 0.125)',
          p: 2,
          width: 'min(85vw,100%)',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        component={Paper}
        elevation={2}
      >
        <Box
          sx={{
            mb: 3,
            mx: 'auto',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '8rem',
            height: '8rem',
            p: 1.5,
            border: 1,
            borderColor: 'rgba(255,255,255,0.2)',
            borderRadius: '50%'
          }}
        >
          {loading && (
            <CircularProgress
              size="8.5rem"
              thickness={1}
              sx={{ position: 'absolute' }}
            />
          )}
          {profile?.profileUrl ? (
            <Avatar
              src={profile.profileUrl}
              sx={{
                fontSize: '56px',
                width: '100%',
                height: '100%',
                fontWeight: 600
              }}
            />
          ) : (
            <Avatar
              {...stringAvatar(profile?.name ? profile.name : 'Teranis User')}
              sx={{
                ...stringAvatar(profile?.name ? profile.name : 'Teranis User')
                  .sx,

                fontSize: '56px',
                width: '100%',
                height: '100%',
                fontWeight: 600
              }}
            />
          )}
        </Box>

        <Typography
          variant="h4"
          fontWeight={600}
          fontSize="1.4rem"
          color="text.primary"
          align="center"
        >
          {profile?.name ? profile.name : 'User'}
        </Typography>

        <Typography
          variant="h5"
          fontWeight={400}
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}
        >
          {profile?.email ? profile.email : 'user@email.com'}
        </Typography>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            my: 2,
            justifyContent: 'center'
          }}
        >
          <Chip
            label={`Score: ${profile?.score ? profile.score : 0}`}
            variant="outlined"
            color="success"
            disabled={!profile?.score && profile?.score !== 0}
            onClick={() => {}}
          />
        </Box>

        <div style={{ marginTop: '1rem' }}>
          <FormLabel
            htmlFor="referrer-code"
            sx={{
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.5)',
              pl: 0.5
            }}
          >
            Referral link
          </FormLabel>
          <Box
            sx={{
              display: 'flex',
              mt: 0.5,
              width: '100%',
              alignItems: 'stretch'
            }}
          >
            <TextField
              size="small"
              fullWidth
              InputLabelProps={{ shrink: false }}
              readOnly
              disabled={!profile?.referralCode}
              value={
                profile?.referralCode
                  ? `https://www.teranis.in/referrer/${profile.referralCode}`
                  : 'Failed to retrieve URL'
              }
            />
            <Button
              variant="outlined"
              disabled={copied || !profile?.referralCode}
              sx={{
                borderColor: 'text.secondary',
                color: 'text.secondary',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                ml: -1,
                px: 0,
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' }
              }}
              onClick={() =>
                copyAnyway(
                  `https://www.teranis.in/referrer/${profile.referralCode}`
                )
              }
            >
              {copied ? <CheckCircleOutlineIcon /> : <ContentCopyIcon />}
            </Button>
          </Box>
        </div>

        <Box
          sx={{
            width: '95%',
            mt: 3,
            px: 2,
            py: 1,
            borderRadius: '24px',
            overflow: 'hidden',
            backdropFilter: 'blur(20px) saturate(130%)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <Box display="flex" my={1}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              College:
            </Typography>
            <Typography variant="body2" color="text.primary">
              {profile?.college ? profile.college : <i>College name</i>}
            </Typography>
          </Box>

          <Box display="flex" my={1}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Department:
            </Typography>
            <Typography variant="body2" color="text.primary">
              {profile?.dept ? profile.dept : <i>Department</i>}
            </Typography>
          </Box>

          <Box display="flex" my={1}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Semester:
            </Typography>
            <Typography variant="body2" color="text.primary">
              {profile?.semester ? profile.semester : <i>Semester</i>}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Profile
