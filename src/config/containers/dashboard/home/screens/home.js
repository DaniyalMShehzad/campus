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
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import Home2 from './home/home2';
import { useDispatch, useSelector } from 'react-redux';
import { signout, uiddata } from '../../../../firebaseconfig/firebaseconfig';
import { ConstructionOutlined } from '@mui/icons-material';

const drawerWidth = 240;

export default function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate =useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const dispatch=useDispatch()
  const [data,setData] = useState({})
  const state = useSelector((e)=>e)
  useEffect(() => {
    dispatch((dispatch)=>uiddata(setLoader,dispatch,navigate))
  }, []);
  // console.log(loader);
  const logout=()=>{
    dispatch((dispatch)=>signout(navigate,dispatch))
  }
  useEffect(()=>{
    setData(state)
  },[state])
  // useEffect                
  // const firstData = window().location.pathname.split("/")
  
  // console.log(firstData);
  const drawer = (
    <>
    <div>
      <Toolbar />
      <Divider />
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
            <div className="stateuiddata">
              <h5>{data?.uiddata?.userid?.username}</h5>
              <h5>{data?.uiddata?.userid?.email}</h5>
              <button onClick={()=>logout()}>signout</button>
              </div>
        {/* ))} */}
      <Divider />
      <List>
        {['Home', 'Post', 'data'].map((text, index) => (
          <ListItem button key={text} onClick={()=>navigate(`/login${text}2`,)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <>
    {console.log(data)}
    {/* {
    (data?.uiddata?.userid?.type?.type==="Company")?
    null
    :
    data?.uiddata?.userid?.type?.type==="user"? */}
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
        <div >
          {props.children}
        </div>
      </Box>
    </Box>
    {/* :
    null
      } */}
    </>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
