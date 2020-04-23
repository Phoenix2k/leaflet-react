import { ThemeOptions } from '@material-ui/core';
import Leaflet from 'leaflet';
import React, { ReactNode } from 'react';
import markerIcons from '../components/MarkerIcons';

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

export interface Marker {
  icon: keyof typeof markerIcons;
  position: Leaflet.LatLngTuple;
  popup?: JSX.Element;
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

export interface NavLinkProps {
  children?: ReactNode;
  href: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface Page {
  navLabel: string;
  slug: string;
  title: string;
  url: string;
}

export interface Pages {
  [key: string]: Page;
}
