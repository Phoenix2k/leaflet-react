import { blue, green, red, yellow } from '@material-ui/core/colors';
import { MarkerIcons } from '../../types';
import SVGMarkerIcon from '../SVGMarkerIcon';

export const markerIcons: MarkerIcons = {
  blue: SVGMarkerIcon({ fillColor: blue[500] }),
  green: SVGMarkerIcon({ fillColor: green[500] }),
  red: SVGMarkerIcon({ fillColor: red[500] }),
  yellow: SVGMarkerIcon({ fillColor: yellow[500] })
};

export default markerIcons;
