import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Drawer from "@mui/material/Drawer";
import { Container, Modal } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import Button from "@mui/material/Button";

import {
  Add,
  AdminPanelSettingsSharp,
  AssignmentInd,
  Event,
  Logout,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import AddEventForm from "./addEventForm";
import Events from "../../components/schedules/Events";
import AllEvents from "./allEvents";
import CampusAmbassador from "./campusAmbassador";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const drawerWidth = 240;

function AdminDashboard() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const { isLoggedIn } = useSelector((state) => state.adminAuth);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {}, []);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              background: " rgba(255, 255, 255, 0.2)",

              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              webkitBackdropFilter: "blur(5px)",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <ListItemIcon>
              <AdminPanelSettingsSharp />
            </ListItemIcon>
            <Typography sx={{ fontWeight: "bold" }} noWrap component="div">
              Admin
            </Typography>
          </Toolbar>
          <Divider />

          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Events" {...a11yProps(0)} />
            <Tab label="Campus Ambassadors" {...a11yProps(1)} />
          </Tabs>
          {/* <List>
            
            <ListItem  disablePadding>
              <ListItemButton>
              <ListItemIcon>
                   <Event/>
                </ListItemIcon>
                <ListItemText primary={"Events"} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
              <ListItemIcon>
                   <AssignmentInd/>
                </ListItemIcon>
                <ListItemText primary={"Registered"} />
              </ListItemButton>
            </ListItem>
        </List> */}
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleOpen}>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText primary={"Add Event"} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("admin");
                  navigate("/allinallcuratorhere/login");
                  window.location.reload();
                }}
              >
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            marginBottom: 10,
            flexGrow: 1,
            height: "100vh",
            paddingBottom: 10,
            overflowY: "scroll",
            color: "white",
            p: 3,
          }}
        >
          <TabPanel value={value} index={0}>
            <AllEvents stateChanger={setValue} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CampusAmbassador />
          </TabPanel>
        </Box>
      </Box>
      <Modal
        sx={{ marginY: 10 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddEventForm handleClose={handleClose} />
      </Modal>
    </div>
  );
}

export default AdminDashboard;
