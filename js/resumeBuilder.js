var name = "Daniel Bales";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

console.log(formattedName);
