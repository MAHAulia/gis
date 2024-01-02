import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.2/croot.js";

export function main(){
    setInner("biggreet","Halo Pengunjung");

    fetch("https://mahaulia.github.io/gis/app/api/data.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        });
}

