import { ThemeOptions } from '@material-ui/core';
import Leaflet, { DivIcon } from 'leaflet';
import { ReactNode } from 'react';

export interface Config {
  a11yEnv: Array<string>;
  emotion: EmotionTheme;
  materialUI: ThemeOptions;
  pages: Pages;
}

export interface DefaultLayoutProps {
  children?: ReactNode;
}

export interface EmotionTheme {
  classes: {
    navLinkActive: string;
  };
  colors: {
    backgroundColor: string;
    borderColor: string;
    color: string;
    navLink: string;
    navLinkActive: string;
  };
  typography: {
    sansSerif: string;
  };
}

export interface MapProps {
  attribution: string;
  lat: number;
  lng: number;
  markers: Marker[];
  maxZoom: number;
  url: string;
  zoom: number;
}

export interface MapState {
  attribution: string;
  lat: number;
  lng: number;
  markers: Marker[];
  maxZoom: number;
  url: string;
  zoom: number;
}

export interface Marker {
  color: MarkerIconColor;
  position: Leaflet.LatLngTuple;
  popup?: JSX.Element;
}

export const markerIconColors = ['blue', 'green', 'red', 'yellow'] as const;

export type MarkerIconColors = typeof markerIconColors;

export type MarkerIconColor = MarkerIconColors[number];

export type MarkerIcons = {
  [key in MarkerIconColor]: DivIcon;
};

export interface Page {
  navLabel: string;
  slug: string;
  title: string;
  url: string;
}

export interface Pages {
  [key: string]: Page;
}

export interface SVGMarkerProps {
  fillColor: string;
  height: number;
  innerFillColor: string;
  outerFillColor: string;
  ringFillColor: string;
  width: number;
}
