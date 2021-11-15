import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserAvatar from './UserAvatar';

export default function PersonCard({ name }: { name: string }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <UserAvatar girl={false} />
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
