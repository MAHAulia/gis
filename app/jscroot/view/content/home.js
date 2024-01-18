import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.2/croot.js";

export function main(){
    setInner("biggreet","Halo Pengunjung");

    fetch("https://geojson-api.fly.dev/coffee_shops")
        .then((response) => response.json())
        .then((data) => {
            const point = data.features.filter((item) => item.geometry.type === 'Point')
            const lineString = data.features.filter((item) => item.geometry.type === 'LineString')
            const polygon = data.features.filter((item) => item.geometry.type === 'Polygon')
            setInner("point", point.length.toLocaleString());
            setInner("linestring",lineString.length.toLocaleString());
            setInner("poligon",polygon.length.toLocaleString());
            setInner("total",data.features.length.toLocaleString());

            const tbody = document.getElementById("table-body");

            tbody.innerHTML = "";

            data.features.forEach((rowData, key) => {
                    const row = document.createElement("tr");

                    const no = document.createElement("td");
                    no.textContent = key + 1;
                    row.appendChild(no);
                
                    const nama = document.createElement("td");
                    nama.textContent = rowData.properties.name;
                    row.appendChild(nama);
                
                    const type = document.createElement("td");
                    type.textContent = rowData.geometry.type;
                    row.appendChild(type);
                
                    const coord = document.createElement("td");
                    coord.textContent = JSON.stringify(rowData.geometry);
                    row.appendChild(coord);
                
                    tbody.appendChild(row);
                }
            );
        })
        .catch((err) => {
            alert("Gagal Mengambil data GeoJSON")
        });
}

