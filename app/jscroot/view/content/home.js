import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.2/croot.js";

export function main(){
    setInner("biggreet","Halo Pengunjung");

    fetch("https://mahaulia.github.io/gis/app/api/data.json")
        .then((response) => response.json())
        .then((data) => {
            const point = data.features.filter((item) => item.geometry.type === 'Point')
            const lineString = data.features.filter((item) => item.geometry.type === 'LineString')
            const polygon = data.features.filter((item) => item.geometry.type === 'Polygon')
            console.log(data, point, lineString, polygon)
        });
}

