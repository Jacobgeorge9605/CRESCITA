import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Chip from '@mui/material/Chip'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import { styled } from '@mui/system'
import api from '../../utiils/api'

const StyledAccordion = styled(Accordion)({
  '&.MuiAccordion-root': {
    backgroundColor: 'rgba(21, 24, 83,1)',
    borderRadius: '14px',
    paddingTop: '8px',
    boxShadow: 'none',
    marginTop: '0.7rem'
  }
})

const StyledAccordionDetails = styled(AccordionDetails)({
  '&.MuiAccordionDetails-root': {
    backgroundColor: '#393E89',
    borderBottomLeftRadius: '14px',
    borderBottomRightRadius: '14px',
    padding: '0.5rem'
  }
})
function EventsList() {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    api.common.events
      .getAll()
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Grid container>
      {data.map((data) => (
        <Grid item xs={12} sm={6} md={4} key={data.id}>
          <Card
            sx={{
              margin: '20px',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '16px',
              marginBottom: '0px'
            }}
          >
            <CardActionArea>
              <Chip
                color="primary"
                label={data.eventType}
                size="small"
                sx={{
                  margin: '5px',
                  // height: '20px',
                  zIndex: '1',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  // color: 'white',
                  // bgcolor: '#616161',
                  opacity: '70%'
                }}
              />
              <CardMedia
                component="img"
                height="140px"
                width="140px"
                image={data.bannerUrl}
                alt="green iguana"
                padding
              />
              <CardContent
                sx={{
                  p: 1
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  color="white"
                  fontWeight="500"
                  align="left"
                  lineHeight="20px"
                  paddingLeft="10px"
                >
                  {data.name}
                </Typography>

                <StyledAccordion>
                  <AccordionSummary
                    a
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      minHeight: 0,
                      px: 1,
                      opacity: '80%'
                    }}
                  >
                    <Grid
                      container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography
                          varient="subtitle2"
                          fontSize="12px"
                          display="flex"
                          textAlign="center"
                          alignItems="center"
                          justifyContent="left"
                          paddingLeft="10px"
                          sx={{ lineHeight: '0px' }}
                        >
                          ₹{data.fee}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <Typography
                          xs={6}
                          varient="subtitle2"
                          fontSize="12px"
                          sx={{
                            lineHeight: '0px',
                            paddingLeft: '35px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <CalendarMonthOutlinedIcon
                            sx={{ width: '18px', height: '16px' }}
                          />
                          {data.date}
                        </Typography>
                      </Grid>

                      <Grid item lineHeight="0px" height="10px">
                        <ExpandMoreOutlinedIcon />
                      </Grid>
                    </Grid>
                  </AccordionSummary>

                  <StyledAccordionDetails sx={{ bgcolor: 'white' }}>
                    <Typography
                      variant="caption"
                      display="flex"
                      color="whitesmoke"
                      textAlign="left"
                      sx={{ whiteSpace: 'pre-wrap' }}
                    >
                      {data.desc}
                    </Typography>
                    <Grid
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Grid
                        sx={{
                          display: 'flex',
                          justifyContent: 'left',
                          paddingTop: '10px'
                        }}
                      >
                        <AccessTimeRoundedIcon
                          color="success"
                          sx={{
                            width: '18px',
                            height: '16px',
                            paddingBottom: '10px'
                          }}
                        />
                        <Typography
                          fontSize="12px"
                          paddingLeft="5px"
                          color="#E7E8EE"
                        >
                          {data.from} - {data.to}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography
                          fontSize="12px"
                          paddingLeft="5px"
                          color="#E7E8EE"
                        >
                          Prize: ₹{data.prize}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      disableElevation
                      onClick={() => {
                        navigate('/eventregister', {
                          state: {
                            name: data?.name,
                            id: data?._id,
                            fee: data?.fee
                          }
                        })
                      }}
                      size='small'
                      sx={{
                        width: '100%',
                        borderRadius: '10px' 
                      }}
                    >
                      Register
                    </Button>
                  </StyledAccordionDetails>
                </StyledAccordion>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
export default EventsList
