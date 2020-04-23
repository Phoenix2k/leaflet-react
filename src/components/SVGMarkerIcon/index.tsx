import { divIcon, DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { SVGMarkerProps } from '../../types';
import SVGMarker from '../SVGMarker';

const SVGMarkerIcon: (props: Partial<SVGMarkerProps>) => DivIcon = (props) => {
  return divIcon({
    className: 'svg-marker',
    html: ReactDOMServer.renderToString(<SVGMarker {...props} />),
    iconAnchor: [5, 55],
    iconSize: [30, 40],
    popupAnchor: [10, -44],
    shadowAnchor: [20, 92],
    shadowSize: [68, 95],
    shadowUrl: ''
  });
};

export default SVGMarkerIcon;
