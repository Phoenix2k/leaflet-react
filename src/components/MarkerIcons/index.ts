import L from 'leaflet';

const greenMarkerIcon = new L.Icon({
  iconAnchor: [5, 55],
  iconRetinaUrl: '../icon-marker-green.svg',
  iconSize: [30, 40],
  iconUrl: '../icon-marker-green.svg',
  popupAnchor: [10, -44],
  shadowAnchor: [20, 92],
  shadowSize: [68, 95],
  shadowUrl: ''
});

export const markerIcons = {
  green: greenMarkerIcon
};

export default markerIcons;
