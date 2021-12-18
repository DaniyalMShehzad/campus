import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signout, uiddata,  } from '../../firebaseconfig/firebaseconfig';
import { useEffect } from 'react';
const drawerWidth = 240;

export default function CompanyHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate =useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const dispatch=useDispatch()
  // const dispatch=useDispatch()
  useEffect(() => {
    dispatch((dispatch)=>uiddata(setLoader,dispatch,navigate))
}, []);
const logout=()=>{
  dispatch(()=>signout(navigate,dispatch))
}
const state=useSelector((e)=>e)
// console.log(state);
// console.log(state.uiddata.userid.type.type);
  // useEffect(()=>{
  //   const firstData = window().location.pathname.split("/")
  // },[])                
  // console.log(firstData);
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <div className="stateuiddata">
              {/* <h5>{state.uiddata2reducer2.userid.username}</h5>
              <h5>{state.uiddata2reducer2.userid.email}</h5> */}
              <button onClick={()=>logout()}>signout</button>
              </div>
      </List>
      <Divider />
      <List> n 
        {['Home', 'Account', 'Data',"Hireforjob",'Notification',].map((text, index) => (
          <ListItem button key={text} onClick={()=>navigate(`/company${text}2`,)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    {
      (state?.uiddata?.userid?.type?.type==="user")?
      null
      :
      (state?.uiddata?.userid?.type?.type==="company")?
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            responsive
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography >
          {props.children}
        </Typography>
      </Box>
    </Box>
    :
    null
    }
        </>
  );
}

CompanyHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
