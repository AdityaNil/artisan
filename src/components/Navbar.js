import React from 'react';
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/Login")
  }

  const handlesignup = () => {
    navigate("/Signup") 
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',fontFamily:'San Francisco, Helvetica, Arial, san-serifery',}}>
      <div style={{ display: 'flex'}}>
        <img style={styles.logo} src={logo} alt="Logo"/>
        <h3 style={styles.heading}>Artisan <span style={{color:'red'}}>Alley</span></h3>
      </div>
      <div style={styles.navLinks}>
        <h4 style={styles.navLink}>Explore</h4>
        <h4 style={styles.navLink}>About</h4>
        <h4 style={styles.navLink}>Business</h4>
        <h4 style={styles.navItem1} onClick={handlelogin}>Log in</h4>
        <h4 style={styles.navItem2} onClick={handlesignup}>Sign Up</h4>
      </div>      
    </div>
  );
};

const styles = {
  logo:{
    backgroundImage:`url(${logo})`,
    margin:'4vh 1vh 0 4vh',
    height: '8vh', 
    width: '9vh', 
  },
  heading: {
    fontFamily:'Snell Roundhand, cursive',
    fontSize: '5vh',
    
  },
  navLinks: {
    fontSize: '2.5vh',
    display: 'flex',
    gap: '7vh',
    marginRight:'4vh',
    cursor: 'pointer', 
  },
  navLink:{
    paddingTop:'1vh'

  },
  navItem1: {
    backgroundColor:"#e60023",
    color:'white',
    borderRadius:'10vh',
    padding: '1vh 1.2vh',
    
  },
  navItem2: {
    backgroundColor:"#e9e9e9",
    color:'black',
    borderRadius:'10vh',
    padding: '1vh 1.2vh',
  }
};

export default Navbar;
