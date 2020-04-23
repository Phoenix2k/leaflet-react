import { LatLngTuple } from 'leaflet';
import React from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import { MapProps } from '../../types';
import markerIcons from '../MarkerIcons';
import { MapContainer } from './styles';

const Markers: React.FunctionComponent<MapProps> = ({
  attribution,
  lat,
  lng,
  markers,
  maxZoom,
  url,
  zoom
}) => {
  const mapCenter: LatLngTuple = [lat, lng];
  return (
    <MapContainer>
      <LeafletMap animate={true} center={mapCenter} maxZoom={maxZoom} zoom={zoom}>
        <TileLayer attribution={attribution} url={url} />
        {markers.map((marker, markerIndex) => (
          <Marker icon={markerIcons[marker.color]} key={markerIndex} position={marker.position}>
            {marker.popup && <Popup>{marker.popup}</Popup>}
          </Marker>
        ))}
      </LeafletMap>
    </MapContainer>
  );
};

export default Markers;
