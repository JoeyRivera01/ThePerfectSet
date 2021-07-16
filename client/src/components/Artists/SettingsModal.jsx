import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IoMdCloseCircle } from 'react-icons/io'
import AppContext from './../AppContext.js'

const SettingsModal = ({showSettings, setShowSettings, handleCloseSettings}) => {
  const handleLogOut = () => console.log('logged out');
  const appContext = useContext(AppContext);

  return (
    <>
      <Modal show={showSettings} onHide={handleCloseSettings}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Username</b>: {appContext.username} <br/>
          <b>Website</b>: {appContext.website} <br/>
          <b>Bio</b>: {appContext.bio}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogOut}>
            Log Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsModal;