import { Button, Container, List, ListItem, Paper, Typography } from '@mui/material';
import GiftCard from 'components/gift-card/GiftCard';
import MyAppBar from 'components/MyAppBar';
import PersonCard from 'components/person-card/PersonCard';
import Head from 'next/head';
import React from 'react';

const Footer = () => {
  return <div style={{ padding: '20px', backgroundColor: 'red' }}></div>;
};

export default function Home() {
  const chosenPerson = {};

  return (
    <div>
      <Head>
        <title>Losuj osobę</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MyAppBar />
      <Container>
        <Typography variant='h2'>Jan Kowalski</Typography>

        <Typography>Wylosowana osoba: Kasia</Typography>
        <PersonCard name='Kasia' />
        <Typography>Lista prezentów:</Typography>
      </Container>
      <List>
        <ListItem>
          <GiftCard />
        </ListItem>
        <ListItem>
          <GiftCard />
        </ListItem>
      </List>

      <Footer />
    </div>
  );
}
