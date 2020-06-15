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
import sitemap from '../../../data/sitemap.json';
import DefaultLayout from '../../layouts/Default';
import { MapProps, MapState } from '../../types';

const Markers = dynamic(() => import('../../components/Markers') as LoaderComponent, {
  ssr: false
}) as React.FunctionComponent<MapProps>;

const ColorMarkersPage: NextPage = () => {
  const useStyles = makeStyles({
    media: {
      height: '12vh'
    },

    root: {
      maxWidth: '50vh'
    }
  });
  const classes = useStyles();
  const [mapState] = useState({
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    lat: 60.1738,
    lng: 24.9381,
    markers: [
      {
        color: 'blue',
        popup: (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Centro_Musical_de_Helsinki%2C_Finlandia%2C_2012-08-14%2C_DD_01.JPG/1280px-Centro_Musical_de_Helsinki%2C_Finlandia%2C_2012-08-14%2C_DD_01.JPG"
                title="Helsinki Music Centre"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Helsinki Music Centre
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The Helsinki Music Centre (Finnish: Helsingin musiikkitalo, Swedish: Musikhuset i
                  Helsingfors) is a concert hall and a music center in Töölönlahti, Helsinki. The
                  building is home to Sibelius Academy and two symphony orchestras, the Finnish
                  Radio Symphony Orchestra and the Helsinki Philharmonic Orchestra.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://en.wikipedia.org/wiki/Helsinki_Music_Centre"
                rel="noopener noreferrer"
                size="small"
                target="_blank">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ),
        position: [60.1737, 24.9349]
      },
      {
        color: 'green',
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
        position: [60.1718, 24.9392]
      },
      {
        color: 'red',
        popup: (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kansallismuseo_Helsinki.jpg/678px-Kansallismuseo_Helsinki.jpg"
                title="National Museum of Finland"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  National Museum of Finland
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The National Museum of Finland (Finnish: Kansallismuseo, Swedish: Nationalmuseum)
                  presents Finnish history from the Stone Age to the present day, through objects
                  and cultural history.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://en.wikipedia.org/wiki/National_Museum_of_Finland"
                rel="noopener noreferrer"
                size="small"
                target="_blank">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ),
        position: [60.1749, 24.9294]
      },
      {
        color: 'yellow',
        popup: (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Helsinki_Central_Library_Oodi%2C_2019_%2801%29.jpg/800px-Helsinki_Central_Library_Oodi%2C_2019_%2801%29.jpg"
                title="Helsinki Central Library Oodi, 2019"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Helsinki Central Library Oodi
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The Helsinki Central Library Oodi (Finnish: Helsingin keskustakirjasto Oodi;
                  Swedish: Helsingfors centrumbibliotek Ode), commonly referred to as Oodi (lit.
                  'Ode'), is a public library in Helsinki, Finland, inaugurated on December 5, 2018.
                  The library is situated in the Töölönlahti district next to Helsinki Music Centre
                  and Kiasma Museum of Contemporary Art.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://en.wikipedia.org/wiki/Helsinki_Central_Library_Oodi"
                rel="noopener noreferrer"
                size="small"
                target="_blank">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ),
        position: [60.1738, 24.9381]
      }
    ],
    maxZoom: 20,
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    zoom: 14
  } as MapState);
  return (
    <DefaultLayout>
      <Head>
        <title>Color markers</title>
        <meta name="description" content="Map of Helsinki featuring color markers" />
      </Head>
      <h1 itemProp="title" style={{ left: '-999em', position: 'absolute' }}>
        {sitemap.colorMarkers.title}
      </h1>
      <Markers {...mapState} />
    </DefaultLayout>
  );
};

export default ColorMarkersPage;
