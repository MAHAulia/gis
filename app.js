import dataGeoJson from "./data.json" assert { type: "json" };

const tbody = document.getElementById("table-body");

tbody.innerHTML = "";

dataGeoJson.features.forEach((rowData, key) => {
    const row = document.createElement("tr");

    const no = document.createElement("td");
    no.textContent = key + 1;
    no.classList.add('border', 'border-slate-300', 'dark:border-slate-700', 'p-4', 'text-slate-500', 'dark:text-slate-400');
    row.appendChild(no);
  
    const nama = document.createElement("td");
    nama.textContent = rowData.propertie.name;
    nama.classList.add('border', 'border-slate-300', 'dark:border-slate-700', 'p-4', 'text-slate-500', 'dark:text-slate-400');
    row.appendChild(nama);
  
    const type = document.createElement("td");
    type.textContent = rowData.geometry.type;
    type.classList.add('border', 'border-slate-300', 'dark:border-slate-700', 'p-4', 'text-slate-500', 'dark:text-slate-400');
    row.appendChild(type);
  
    const coord = document.createElement("td");
    coord.textContent = JSON.stringify(rowData.geometry);
    coord.classList.add('border', 'border-slate-300', 'dark:border-slate-700', 'p-4', 'text-slate-500', 'dark:text-slate-400');
    row.appendChild(coord);
  
    tbody.appendChild(row);
});
