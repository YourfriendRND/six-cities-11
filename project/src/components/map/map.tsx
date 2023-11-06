import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Location } from '../../types/offers-type';
import useMap from '../../hooks/useMap';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getActivePlaceCoordinates } from '../../store/offers-process/selectors';
import { setOfferCoordinates } from '../../store/creation-form-process/creation-form-process';

type MapProp = {
  city: Location;
  points: {
    locations: Location;
    id: string;
  }[];
  selectedPlaceId: string;
  isMainPage: boolean;
  isNewPlace?: boolean;
}

const Map = ({ city, points, selectedPlaceId, isMainPage, isNewPlace }: MapProp): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const dispatch = useAppDispatch();
  const activeCardCoordinates = useAppSelector(getActivePlaceCoordinates);


  const pin = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [20, 30],
    iconAnchor: [10, 15],
  });

  const pinActive = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [20, 30],
    iconAnchor: [10, 15]
  });

  const markerList = points.map((point) => leaflet.marker({
    lat: point.locations.latitude,
    lng: point.locations.longitude,
  }, {
    icon: selectedPlaceId === point.id ? pinActive : pin,
  }));

  const draggableMarker = isNewPlace ? leaflet.marker({
    lat: city.latitude,
    lng: city.longitude,
  }, {
    icon: pinActive,
    draggable: true,
  }) : null;

  const addMarkersToCard = (markers: leaflet.Marker[], mapLayer: leaflet.Map) => markers.forEach((marker) => marker.addTo(mapLayer));

  const cleanMarkers = (markers: leaflet.Marker[]) => markers.forEach((marker) => marker.remove());

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted && map) {
      const centerCoordinates = activeCardCoordinates && map.getZoom() > city.zoom && isMainPage ? activeCardCoordinates : {
        lat: city.latitude,
        lng: city.longitude
      };

      const currentZoom = map.getZoom() !== city.zoom
        ? map.getZoom()
        : city.zoom;

      addMarkersToCard(markerList, map);

      if (draggableMarker) {
        addMarkersToCard([draggableMarker], map);
        draggableMarker.addEventListener('dragend', (_evt: leaflet.DragEndEvent) => {
          const latitude = draggableMarker.getLatLng().lat;
          const longitude = draggableMarker.getLatLng().lng;
          dispatch(setOfferCoordinates({
            latitude,
            longitude,
            zoom: currentZoom,
          }));
        });
      }

      map.setView(centerCoordinates, currentZoom);
    }
    return () => {
      if (draggableMarker) {
        markerList.push(draggableMarker);
      }

      cleanMarkers(markerList);
      isComponentMounted = false;
    };
  }, [map, markerList, city, activeCardCoordinates, isMainPage, draggableMarker, dispatch]);

  return (
    <section className={cn(
      'map',
      { 'cities__map': isMainPage },
      { 'property__map': !isMainPage }
    )}
    ref={mapRef}
    >
    </section>
  );
};

export default Map;
