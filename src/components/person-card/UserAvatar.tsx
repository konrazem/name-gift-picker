import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function UserAvatar({ girl }: { girl: boolean }) {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar alt='Remy Sharp' src={`https://mui.com/static/images/avatar/${girl ? '3' : '2'}.jpg`} />
    </Stack>
  );
}
