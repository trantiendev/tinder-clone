import React from 'react';
import './stylesheets/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from 'react-router-dom';

function Header({backButton}) {
  const history = useHistory()
  return (
    <div className="header">
      {
        backButton ? (
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        ): (
          <IconButton>
            <PersonIcon fontSize="large" />
          </IconButton>
        )
      }

      <Link to="/">
        <img src="https://img.icons8.com/bubbles/2x/--tinder.png" alt="Tinder Logo" width="60" />
      </Link>
      
      <Link to="/chat">
        <IconButton>
          <SendIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
