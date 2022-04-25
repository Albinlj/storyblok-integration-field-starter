import Plugin from './Plugin.vue'
import "./jquery-3.1.1.min.js";
import "./insertmedia.min.js";
import "./insertmediawindow.min.js";

if (process.env.NODE_ENV == 'development') {

  window.Fieldtype = Plugin
  let customComp = window.Storyblok.vue.extend(window.Fieldtype);
  window.Storyblok.vue.component('custom-plugin', customComp);
  window.StoryblokPluginRegistered = true;

} else {

  let init = Plugin.methods.initWith()
  window.storyblok.field_types[init.plugin] = Plugin

}