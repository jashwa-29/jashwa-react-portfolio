import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './project.css'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className='container'
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='container'>
    <Box  sx={{ width:'100%', bgcolor: 'background.paper', }}>
      <Box sx={{width: '100%', maxWidth: '1200px', }} >
        <Tabs value={value} onChange={handleChange} centered 
          textColor="inherit"   TabIndicatorProps={{style: {
            display: 'none' // Hide the default indicator
          }}}
      variant="standard scrollable"
      scrollButtons="auto"
      sx={{  '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
        flexWrap: 'wrap'
      } }}  >
          <Tab
    label={<span style={{ display: 'flex', justifyContent: 'center',fontWeight: 'bold',fontFamily: 'Rubik' , fontSize: '18px' }}>HTML & CSS</span>}
    {...a11yProps(0)}
  />
          <Tab 
    label={<span style={{ display: 'flex', justifyContent: 'center',fontWeight: 'bold' ,fontFamily: 'Rubik' , fontSize: '18px' }}>Bootstrap</span>} 
    {...a11yProps(1)} 
  />
            <Tab 
    label={<span style={{ display: 'flex', justifyContent: 'center',fontWeight: 'bold',fontFamily: 'Rubik' , fontSize: '18px' }}>JavaScript</span>} 
    {...a11yProps(2)} 
  />
          <Tab 
    label={<span style={{ display: 'flex', justifyContent: 'center',fontWeight: 'bold' ,fontFamily: 'Rubik' , fontSize: '18px' }}>React</span>} 
    {...a11yProps(3)} 
  />
            {/* <Tab 
    label={<span style={{ display: 'flex', justifyContent: 'center',fontWeight: 'bold' ,fontFamily: 'Rubik' , fontSize: '18px' }}>Wordpress</span>} 
    {...a11yProps(4)} 
  /> */}

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="project-row">

<a href="https://jashwa-29.github.io/Resume-maker/">
<div class="card"  data-aos="flip-left">
 <img src={require('../../Assets/resume-maker.webp')} alt="" />
 <div class="cardBody">
     <h1 class="cardTitle">Resume Maker</h1>
     <p class="cardInfo">single page website using HTML & CSS</p>
 </div>
</div>
</a>
                

<a href="https://jashwa-29.github.io/The-Pawsome-Friends/">
<div class="card"  data-aos="flip-left">
 <img src={require('../../Assets/pet-shop.webp')} alt="" />
 <div class="cardBody">
     <h1 class="cardTitle">The Pawsome Friends</h1>
     <p class="cardInfo">Multi page website  in HTML & CSS</p>
 </div>
</div>
</a>



</div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="project-row">
      <a href="https://jashwa-29.github.io/the-Wefix-Repair-services/">
<div class="card"  data-aos="flip-left">
 <img src={require('../../Assets/repair-web.webp')} alt="" />
 <div class="cardBody">
     <h1 class="cardTitle">Wefix repair service</h1>
     <p class="cardInfo">Single page website using Bootstrap</p>
 </div>
</div>
</a>

<a href="https://jashwa-29.github.io/the-Wefix-Repair-services/">               
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/sneaker-web.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Classix Senakers</h1>
        <p class="cardInfo">Multi page website using Bootstrap</p>
    </div>
</div>
</a>
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="project-row">
      <a href="https://jashwa-29.github.io/timer-project-javascript/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/timer.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Digital Clock</h1>
        <p class="cardInfo">using Javascript</p>
    </div>
</div>
</a>

<a href="https://jashwa-29.github.io/Crud-Operation-Javascript/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/crud-op.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Crud operation </h1>
        <p class="cardInfo">Registration Form with Crud operation using javascript</p>
    </div>
</div>
</a>

<a href="https://jashwa-29.github.io/javascript-english-dictionary-api/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/dictionary-api.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">English Dictionary </h1>
        <p class="cardInfo">Dictionary API using Javascript</p>
    </div>
</div>
</a>


      </div>
   </CustomTabPanel>

     <CustomTabPanel value={value} index={3}>
      <div className="project-row">
      <a href="https://jashwa-react-chat-app.netlify.app/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/react-chat-app.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">Chat-App </h1>
        <p class="cardInfo">React Chat app</p>
    </div>
</div>
</a>

<a href="https://watchzz.netlify.app/">
<div class="card"  data-aos="flip-left">
    <img src={require('../../Assets/react-ecommerce-website.webp')} alt="" />
    <div class="cardBody">
        <h1 class="cardTitle">React <br />E-commerce Website </h1>
        <p class="cardInfo">Watchzz  react mulipage website</p>
    </div>
</div>
</a>
</div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        
      </CustomTabPanel>
    </Box>
    </div>
  );
}




