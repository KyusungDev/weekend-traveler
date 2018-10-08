import React from 'react';
import NaverMap from 'react-naver-map';

const ReactNaverMap = () => {
  return (
    <NaverMap
      clientId="OlLR0QGiSvxdxObM0p5m"
      style={{ width: '100%', height: '100%' }}
      initialPosition={{ lat: 37.4012237, lng: 126.95227679999994 }}
      initialZoom={8}
      initialBounds={{
        // When you provide initialBounds, it will ignores initialPosition and initialZoom
        south: 35.9732265,
        west: 129.2055044,
        north: 36.1130996,
        east: 129.4883056
      }}
      onInit={(map, naver) => {}} // map: naver map object, naver: window.naver object
      onBoundChange={bounds => {}} // bounds: naver.maps.LatLngBounds
      onMapClick={event => {}} // event: PointerEvent
      submodules={['drawing', 'geocoder']}
    />
  );
};

export default ReactNaverMap;
