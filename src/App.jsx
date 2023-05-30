// import React from 'react'
import "./App.css"
// import New from "./new.jsx"

import { useState } from "react";
 import { MapContainer, TileLayer, Marker, Popup, ImageOverlay} from 'react-leaflet'
const App = () => {
  const [image, setImage] = useState(null);

        const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
    setImage(URL.createObjectURL(event.target.files[0]));
    }
    };
    
  return (
    <div>

<input type="file" onChange={onImageChange} className="filetype" />
{/* {image && <img src={image} alt="preview image" />} */}
  
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
<ImageOverlay
       url="./Frontend_1.tif"
        bounds={[
          [32, -130],
          [13, -100],
        ]}
        // play={play}
       
      />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</div>
  )
}

export default App
