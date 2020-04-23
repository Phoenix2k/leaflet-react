import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EcoIcon from '@material-ui/icons/Eco';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import sitemap from '../../../data/sitemap.json';
import manifest from '../../../public/manifest.json';
import DefaultLayout from '../../layouts/Default';

const useStyles = makeStyles(() => ({
  grid: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center'
  },

  icon: {
    fontSize: '20vh'
  },

  root: {
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  }
}));

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <DefaultLayout>
      <Head>
        <title>{manifest.short_name}</title>
        <meta name="description" content={manifest.name} />
      </Head>
      <div className={classes.root}>
        <Grid
          alignItems="center"
          className={classes.grid}
          container
          direction="column"
          justify="center"
          spacing={5}>
          <Grid item xs={12} className={classes.grid}>
            <EcoIcon className={classes.icon} color="primary" />
            <Typography color="textPrimary" component="h1" variant="h3">
              <span itemProp="title">{sitemap.home.title}</span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </DefaultLayout>
  );
};

export default Home;
