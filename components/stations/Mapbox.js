import {useState, useMemo} from 'react'
import Map, {Marker, Popup} from 'react-map-gl'

import {FaMapMarkerAlt} from 'react-icons/fa'

export default function MapBox({coordinates}) {
  const [popupInfo, setPopupInfo] = useState(null)

  const pins = useMemo(
    () =>
      coordinates.map((station, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={station.longitude}
          latitude={station.latitude}
          anchor="bottom">
          <FaMapMarkerAlt
            size="2em"
            className="text-blue-700 cursor-pointer"
            onClick={() => setPopupInfo(station)}
          />
        </Marker>
      )),
    [coordinates]
  )

  return (
    <section className="mt-8">
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 4,
        }}
        style={{width: '100%', height: 600}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}>
        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}>
            <div className="max-w-full px-4">
              <h3 className="px-4 mb-2 text-lg">{popupInfo.name}</h3>
              <div className="flex flex-col gap-2"></div>
            </div>
          </Popup>
        )}
      </Map>
    </section>
  )
}
