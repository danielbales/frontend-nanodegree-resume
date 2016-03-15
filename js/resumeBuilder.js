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

var biopic = "I'm currently working at Anvato, Inc in San Francisco, California.";
var formattedBiopic = HTMLbioPic.replace("%data%", biopic);

var welcome = "I'm currently working at Anvato, Inc in San Francisco, California.";
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", welcome);

var skillsstart = "I'm currently working at Anvato, Inc in San Francisco, California.";
var formattedSkillsStart = HTMLskillsStart.replace("%data%", skillsstart);

var skills = "HTML5";
var formattedSkills = HTMLskills.replace("%data%", skills);

var skills1 = "CSS3";
var formattedSkills1 = HTMLskills.replace("%data%", skills1);

var skills2 = "JavaScript";
var formattedSkills2 = HTMLskills.replace("%data%", skills2);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$('#topContacts').prepend(formattedEmail);
$('#topContacts').prepend(formattedGithub);
$('#topContacts').prepend(formattedMobile);
$('#header').append(formattedWelcome);
$('#header').append(formattedBiopic);
$('#header').append(formattedSkillsStart);
$('#header').append(formattedSkills);
$('#header').append(formattedSkills1);
$('#header').append(formattedSkills2);


console.log(formattedName);





$('#workExperience').append(HTMLworkStart);
