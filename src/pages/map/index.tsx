import { Button, Link, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import dynamic, { LoaderComponent } from 'next/dynamic';
import Head from 'next/head';
import React, { useState } from 'react';
import DefaultLayout from '../../layouts/Default';
import { MapProps, MapState } from '../../types';

const useStyles = makeStyles({
  media: {
    height: 160
  },

  root: {
    margin: '1.5em 0 !important',
    maxWidth: '50vh'
  }
});

const Markers = dynamic(() => import('../../components/Markers') as LoaderComponent, {
  ssr: false
}) as React.FunctionComponent<MapProps>;

const MapPage: NextPage = () => {
  const classes = useStyles();
  const [mapState] = useState({
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    lat: 60.1019,
    lng: 24.5629,
    markers: [
      {
        icon: 'green',
        popup: (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://upload.wikimedia.org/wikipedia/commons/3/3f/Entrance_to_the_Helsinki_Railway_Station.jpg"
                title="The main entrance to the Helsinki Central Station on Kaivokatu"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Helsinki Central Station
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Helsinki Central Station (Finnish: Helsingin päärautatieasema, Swedish:
                  Helsingfors centralstation) (HEC) is the main station for commuter rail and
                  long-distance trains departing from{' '}
                  <Link
                    color="primary"
                    href="https://en.wikipedia.org/wiki/Helsinki"
                    rel="noopener noreferrer"
                    target="_blank">
                    Helsinki
                  </Link>
                  ,{' '}
                  <Link
                    color="secondary"
                    href="https://en.wikipedia.org/wiki/Finland"
                    rel="noopener noreferrer"
                    target="_blank">
                    Finland
                  </Link>
                  .
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://en.wikipedia.org/wiki/Helsinki_Central_Station"
                rel="noopener noreferrer"
                size="small"
                target="_blank">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ),
        position: [60.1019, 24.5629]
      }
    ],
    maxZoom: 20,
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    zoom: 14
  } as MapState);
  return (
    <DefaultLayout>
      <Head>
        <title>Map</title>
        <meta name="description" content="Leaflet example" />
      </Head>
      <h1 itemProp="title" style={{ left: '-999em', position: 'absolute' }}>
        Map
      </h1>
      <Markers {...mapState} />
    </DefaultLayout>
  );
};

export default MapPage;
