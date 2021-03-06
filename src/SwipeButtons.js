import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './stylesheets/SwipeButtons.css'

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="btn-repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>

      <IconButton className="btn-close">
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="btn-star">
        <StarRateIcon fontSize="large" />
      </IconButton>

      <IconButton className="btn-favor">
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton className="btn-lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
