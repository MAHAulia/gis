import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
import { url } from "./config.js";

export function getContentURL(){
    let hashlink=parseInt(getHash());
    switch (hashlink) {
        case 1:
            return url.content+"home.html";
        case 2:
            return url.content+"peta.html";
        case 3:
            return url.content+"open_layer.html";
        default:
            return url.content+"home.html";
    }

}



export function getURLContentJS(){
    let hashlink=parseInt(getHash());
    switch (hashlink) {
        case 1:
            return url.contentview+"home.js";
        case 2:
            return url.contentview+"peta.js";
        case 3:
            return url.contentview+"open_layer.js";
        default:
            return url.contentview+"home.js";
    }

}