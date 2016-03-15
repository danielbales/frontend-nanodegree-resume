var name = "Daniel Bales";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var email = "danielfbales@gmail.com";
var formattedEmail = HTMLemail.replace("%data%", email);

var github = "danielbales";
var formattedGithub = HTMLgithub.replace("%data%", github);

var mobile = "+01 858 414 2528";
var formattedMobile = HTMLmobile.replace("%data%", mobile);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$('#topContacts').prepend(formattedEmail);
$('#topContacts').prepend(formattedGithub);
$('#topContacts').prepend(formattedMobile);


console.log(formattedName);





$('#workExperience').append(HTMLworkStart);
