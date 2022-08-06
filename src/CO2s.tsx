import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function CO2s() {
  return (
    <React.Fragment>
      <Title>Recent CO2</Title>
      <Typography component="p" variant="h4">
        1020[ppm]
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        03/13 14:32
      </Typography>
    </React.Fragment>
  );
}
