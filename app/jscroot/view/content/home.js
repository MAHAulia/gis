import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.2/croot.js";

export function main(){
    setInner("biggreet","Halo Pengunjung");

    fetch("https://mahaulia.github.io/gis/app/api/data.json")
        .then((response) => response.json())
        .then((data) => {
            const point = data.features.filter((item) => item.geometry.type === 'Point')
            const lineString = data.features.filter((item) => item.geometry.type === 'LineString')
            const polygon = data.features.filter((item) => item.geometry.type === 'Polygon')
            setInner("point", point.length.toLocaleString());
            setInner("linestring",lineString.length.toLocaleString());
            setInner("poligon",polygon.length.toLocaleString());
            setInner("total",data.features.length.toLocaleString());
            console.log(data, point, lineString, polygon)
        });
}

