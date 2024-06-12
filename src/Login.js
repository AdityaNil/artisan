import React, { useState } from 'react';
import Modal from 'react-modal';
import {useNavigate} from 'react-router-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height:'70vh',
    width:'50vh'
  }
};

// Modal.setAppElement('#root');

const Login = () => {

  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
    navigate('/')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    closeModal();
  };

  return (
    <div style={styles.main}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <div style={{marginBottom:'10px', display:'inline-flex', gap:'20px'}}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div style={{marginBottom:'10px',display:'inline-flex', gap:'20px'}}>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
          </div>
          <div style={{display:'inline-flex', gap:'20px'}}>
            <button type="submit">Submit</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

const styles = {
  main:{
    
  },
  heading:{
      fontSize:'34px',
      textAlign: 'center'
  },
  form:{
    textAlign:'center',
  }

}

export default Login;
