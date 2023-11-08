import * as React from 'react';
import Fab from '@mui/material/Fab';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function GoToRankButton() {
    return (
        <Fab color="primary" aria-label="goToRank">
          <EmojiEventsIcon />
        </Fab>
    );
  }