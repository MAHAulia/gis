import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import { url } from "https://github.com/MAHAulia/gis/app/jscroot/url/config.js";
import { getURLContentJS } from "https://github.com/MAHAulia/gis/app/jscroot/url/content.js";
import { showMenu,activeLink } from "https://github.com/MAHAulia/gis/app/jscroot/controller/navbar.js";
import { getContentURL } from "https://github.com/MAHAulia/gis/app/jscroot/url/content.js";


export function runAfterHashChange(evt){
    insertHTML(getContentURL(),"content",runAfterContent);
}

export function runAfterHeader(){
    insertHTML(url.navbar,"navbar",runAfterNavbar);
}

function runAfterNavbar(){
    showMenu('header-toggle','navbar');
    activeLink('.nav__link');
    activeLink('.nav__dropdown-item');
}

export async function runAfterContent(){
    let urljs = getURLContentJS();
    let module = await import(urljs);
    module.main();
    console.log(urljs);
}