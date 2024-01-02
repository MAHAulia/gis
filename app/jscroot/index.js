import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import { url } from "https://mahaulia.github.io/gis/app//jscroot/url/config.js";
import { getContentURL } from "https://mahaulia.github.io/gis/app//jscroot/url/content.js";
import {onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";
import {runAfterHeader,runAfterContent,runAfterHashChange} from "https://mahaulia.github.io/gis/app//jscroot/controller/main.js";



insertHTML(url.header,"header__container",runAfterHeader);
insertHTML(getContentURL(),"content",runAfterContent);
onHashChange(runAfterHashChange);


