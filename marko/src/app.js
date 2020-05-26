import AppTemplate from "./app.marko";
 
AppTemplate.renderSync({ value: "World" }).appendTo(document.body);