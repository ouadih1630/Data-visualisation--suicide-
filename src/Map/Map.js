import React from "react";
import countries from "./../Data/countries-50m.json"
import { MapContainer, GeoJSON } from "react-leaflet";
import data from "./../Data/output.json"

const MapGlobal = (props) => {
    const code = "AFG"
    var density = []
    data.forEach(obj => {
        density.push(parseInt(obj.years[2019]))
    })
    var max = Math.max.apply(null, density);
  
    function getColor(d) {
        if (d===undefined){
            return 'gray';
        }
        return d > 40 ? '#800026' :
            d > 30 ? '#BD0026' :
                d > 20 ? '#E31A1C' :
                    d > 16 ? '#FC4E2A' :
                        d > 12 ? '#FD8D3C' :
                            d > 8 ? '#FEB24C' :
                                d > 4 ? '#FED976' :
                                    '#FFEDA0';
    }
    function getdensity(code) {
        var x;
        data.forEach(obj => {
            if (obj.code === code) {
                 
                // console.log(obj.code === code);
                 x =obj.years[2019]
                //console.log(x);
               

            }
            
        })
        console.log(x);
        return x
    }
  
    function style(feature) {
        let densité=getdensity(feature.id)
       // console.log(densité);
        return {
            fillColor: getColor(densité),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 1
        }
    }



    //console.log(countries.features[0])
    return (
        <div>
            <MapContainer style={{ height: "80vh", width: "130vh", marginLeft: 20, marginTop: 20 }} zoom={0} center={[10, 10, 10]} maxZoom={6} minZoom={2} >
                <GeoJSON style={style} data={countries.features}   ></GeoJSON>

            </MapContainer>

        </div>
    )
}
export default MapGlobal