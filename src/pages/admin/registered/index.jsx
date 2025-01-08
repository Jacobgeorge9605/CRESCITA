import {
  DataGrid,
  GridToolbarExport,
  GridToolbarContainer
} from '@mui/x-data-grid'
// import Backdrop from '@mui/material/Backdrop';
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import React, { useEffect, Fragment, useState, useContext } from 'react'
import { Box, Button, Typography, Grow } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Tab from '@mui/material/Tab'
import instance from '../../../services/instance'
import { NotificationContext } from '../../../contexts/NotificationContext'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const columns = [
  { field: 'id', headerName: 'SI', type: 'number', width: 70 },
  { field: 'name', headerName: 'Name', width: 220 },
  { field: 'email', headerName: 'Email', width: 240 },
  { field: 'contact', headerName: 'Contact', width: 140 },
  { field: 'college', headerName: 'college', width: 130 },
  { field: 'dept', headerName: 'Department', width: 130 },
  { field: 'semester', headerName: 'Semester', width: 130 },
  { field: 'status', headerName: 'Payment Status', width: 140 },
  { field: 'certificate', headerName: 'Certificate Dispersed', width: 140 }
]
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 430,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  color: 'white'
}

function Registered() {
  const [value, setValue] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [cellVal, setCellVal] = React.useState()
  const location = useLocation()
  const { createNotification } = useContext(NotificationContext)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const currentDate = `(${day}-${month}-${year})`
  const pId = location.state?.id
  const content = null

  const [registration, setRegistration] = useState([])

  const getRegisterByid = () => {
    setRegistration([])
    if (value === 0) {
      instance({
        url: `/events/get-registrations/?eventId=${pId}&status=Approved`
      })
        .then((response) => {
          setRegistration(response.data.data)
          console.log(response.data)
        })
        .catch((error) => {
          handleClose()
          alert(error)
        })
    } else {
      instance({
        url: `/events/get-registrations/?eventId=${pId}&status=Pending`
      })
        .then((response) => {
          console.log(response.data)
          setRegistration(response.data.data)
        })
        .catch((error) => {
          handleClose()
          alert(error)
        })
    }
  }

  useEffect(() => {
    getRegisterByid()
  }, [value])

  function MyExportButton() {
    return (
      <GridToolbarContainer
        component="span"
        m={1}
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <GridToolbarExport
          printOptions={{ disableToolbarButton: true }}
          csvOptions={{
            fileName: location.state?.name + currentDate
          }}
          variant="contained"
          sx={{ paddingX: 5, marginX: 6 }}
        />
      </GridToolbarContainer>
    )
  }

  const [element, setElement] = useState()
  const changeStatus = (eventId, regId) => {
    instance({
      url: '/events/approve-registration',
      method: 'PUT',
      data: { eventId, regId }
    })
      .then((response) => {
        createNotification({
          type: 'error',
          message: 'Status Updated Succesfully'
        })

        getRegisterByid()
        handleClose()
      })
      .catch((error) => {
        createNotification({
          type: 'error',
          message: 'Failed to update status!'
        })

        handleClose()
      })
  }

  const handleCellClick = (params, event) => {
    if (params.field === 'status') {
      setElement(
        <>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  alignItems: 'center',
                  padiingX: 20
                }}
              >
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                  src={params?.row?.paymentUrl}
                  alt="No Image"
                  srcSet=""
                />
              </Box>
            </Box>{' '}
          </DialogContent>

          <DialogActions>
            {params?.row?.status === 'Pending' && (
              <Button
                onClick={(e) => {
                  changeStatus(pId, params?.row?._id)
                }}
                variant="contained"
              >
                Change to Approved{' '}
              </Button>
            )}
          </DialogActions>
        </>
      )
      handleOpen()
    }
    if (params.field === 'certificate') {
    }
  }

  const rows =
    registration && registration.length > 0
      ? registration.map((item, indx) => ({
          id: indx + 1,
          name: item?.name,
          email: item?.email,
          contact: item?.contact,
          college: item?.college,
          dept: item?.dept,
          semester: item?.semester,
          _id: item?._id,
          status: item?.status,
          paymentUrl: item?.paymentUrl,
          certificate: item?.certificateDispersed ? 'Yes' : 'No'
        }))
      : []

  return (
    <>
      {' '}
      <Box sx={{ width: '100%' }}>
        <Box sx={{ marginX: 10, marginTop: 2, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Approved" {...a11yProps(0)} />
            <Tab label="Pending" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <div
            style={{
              height: 520,
              paddingX: 20,
              margin: 20,
              width: '98%',
              textAlign: 'center'
            }}
          >
            <Typography
              sx={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}
              noWrap
              component="div"
            >
              {location.state?.name}
            </Typography>
            <DataGrid
              disableRowSelectionOnClick
              getCellClassName={(params) => {
                if (params.field === 'status') {
                  return 'pointer'
                }
              }}
              sx={{
                '& .pointer:hover': {
                  cursor: 'pointer'
                }
              }}
              onCellClick={handleCellClick}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10
                  }
                }
              }}
              pageSizeOptions={[10, 25]}
              components={{
                Toolbar: MyExportButton
              }}
            />
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div
            style={{
              height: 520,
              paddingX: 20,
              margin: 20,
              width: '98%',
              textAlign: 'center'
            }}
          >
            <Typography
              sx={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}
              noWrap
              component="div"
            >
              {location.state?.name}
            </Typography>
            <DataGrid
              rows={rows}
              disableRowSelectionOnClick
              onCellClick={handleCellClick}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10
                  }
                },
                columns: {
                  columnVisibilityModel: {
                    certificate: false
                  }
                }
              }}
              getCellClassName={(params) => {
                if (params.field === 'status') {
                  return 'pointer'
                }
              }}
              sx={{
                '& .pointer:hover': {
                  cursor: 'pointer'
                }
              }}
              pageSizeOptions={[10, 25]}
              components={{
                Toolbar: MyExportButton
              }}
            />
          </div>
        </TabPanel>
      </Box>
      <Dialog open={open} onClose={handleClose} scroll="paper" maxWidth="sm">
        <DialogTitle>
          <Typography variant="h5">Payment Screenshot</Typography>
        </DialogTitle>
        {element}
      </Dialog>
    </>
  )
}

export default Registered
