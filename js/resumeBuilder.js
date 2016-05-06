var name = "Daniel Bales";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var email = "danielfbales@gmail.com";
var formattedEmail = HTMLemail.replace("%data%", email);

var github = "danielbales";
var formattedGithub = HTMLgithub.replace("%data%", github);

var mobile = "858 414 2528";
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

var employer = "Anvato, Inc. - Marketing Manager";
var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);

var workdates = "April 2015 - Present";
var formattedWorkDates = HTMLworkDates.replace("%data%", workdates);

var worklocation = "San Francisco, California";
var formattedworkLocation = HTMLworkLocation.replace("%data%", worklocation);

var workdescription = "My core responsibilities at Anvato include ongoing design and development of our dotcom properties, manage and optimize Anvato's digital marketing campaigns, monitor and maintain company’s online presence, and to author and publish external communications, including press releases, newsletters, blog posts, social network messaging, and more";
var formattedWorkDescription = HTMLworkDescription.replace("%data%", workdescription);

var formattedProjectStart = HTMLprojectStart;

var project1 = "Online Portfolio";
var formattedProject1 = HTMLprojectTitle.replace("%data%", project1);

var project1Dates = "Online Portfolio";
var formattedProject1Dates = HTMLprojectDates.replace("%data%", project1Dates);

var project1Description = "Online Portfolio";
var formattedProject1Description = HTMLprojectDescription.replace("%data%", project1Description);

var project1Image = "Online Portfolio";
var formattedProject1Image = HTMLprojectImage.replace("%data%", project1Image);

var SchoolStart = "Online Portfolio";
var formattedSchoolStart = HTMLschoolStart.replace("%data%", SchoolStart);

var SchoolName = "University of California, San Diego - B.A. International Studies/Business Management";
var formattedSchoolName = HTMLschoolName.replace("%data%", SchoolName);

var SchoolDates = "2007 - 2010";
var formattedschoolDates = HTMLschoolDates.replace("%data%", SchoolDates);

var SchoolLocation = "San Diego, California";
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", SchoolLocation);

var SchoolMajor = "International Studies";
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", SchoolMajor);

var OnlineClasses = "International Studies";
var formattedOnlineClasses = HTMLonlineClasses.replace("%data%", OnlineClasses);

var OnlineTitle = "Intro to HTML and CSS - Udacity";
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", OnlineTitle);

var OnlineDates = "March 2016";
var formattedOnlineDates = HTMLonlineDates.replace("%data%", OnlineDates);

var OnlineURL = "https://www.udacity.com/course/ud304";
var formattedOnlineURL = HTMLonlineURL.replace("%data%", OnlineURL);

var formattedGoogleMap = googleMap;

 var bio = {
  "location" : "San Francisco, California",
 };

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
$('#workExperience').append(HTMLworkStart);
$('#workExperience').append(formattedEmployer);
$('#workExperience').append(formattedWorkDates);
$('#workExperience').append(formattedworkLocation);
$('#workExperience').append(formattedWorkDescription);
$('#projects').append(formattedProjectStart);
$('#projects').append(HTMLprojectTitle);
$('#projects').append(HTMLprojectDates);
$('#projects').append(formattedProject1Description);
$('#projects').append(formattedProject1Image);
$('#education').prepend(formattedSchoolStart);
$('#education').append(formattedSchoolName);
$('#education').append(formattedSchoolLocation);
$('#education').append(formattedSchoolMajor);
$('#education').append(formattedOnlineClasses);
$('#education').append(formattedOnlineTitle);
$('#education').append(formattedOnlineDates);
$('#education').append(formattedOnlineURL);
$('#mapDiv').append(formattedGoogleMap);
$('#mapDiv').append(bio);


console.log(formattedName);
console.log(formattedBiopic);
