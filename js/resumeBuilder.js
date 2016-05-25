var bio = {
 	"name": "Daniel Bales",
 	"role": "Ninja",
 	"contacts": {
 		"email": "danielfbales@gmail.com",
 		"github": "danielbales",
 		"twitter": "@daniel_bales",
    "mobile": "+1 858-414-2528",
 		"location": "San Francisco, California"
 	},
 	"bioPic": "images/white-mhz-logo.png",
 	"welcomeMsg": "I'm currently working as a Marketing Manager at Anvato, Inc in San Francisco, California.",
 	"skills": ["HTML5", "CSS3", "Responsive Design"]

 }

 var work = {
 	"jobs": [
 		{
 			"employer": "Anvato, Inc.",
 			"title": "Marketing Manager",
 			"location": "San Francisco, California",
 			"dates": "April 2015 - Present",
 			"description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become productive as soon as possible.  I also lead discussions around better communication between the development team and the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount from everyone I worked with there."
 		},
 		{
 			"employer": "ScImage, Inc",
 			"title": "Product Marketing Manager",
 			"location": "Mountain View, California",
 			"dates": "September 2008 - March 2015",
 			"description": "My primary responsibilities involve all aspects of developing and supporting critical software applications in a variety of languages including Java, python, C++ and Perl in both greenfield and legacy systems.  This work includes, but is not limited to, database design, software architecture design, high level and detailed estimates as well as peer review of submitted work. I am also very involved in encouraging communication and collaboration within the team and have experience giving technical presentations as well as facilitating project retrospective discussions."
 		},
     {
			"employer": "Visual World, LLC",
 			"title": "Product Manager",
 			"location": "Corte Madera, California",
 			"dates": "September 2008 - March 2015",
 			"description": "My primary responsibilities involve all aspects of developing and supporting critical software applications in a variety of languages including Java, python, C++ and Perl in both greenfield and legacy systems.  This work includes, but is not limited to, database design, software architecture design, high level and detailed estimates as well as peer review of submitted work. I am also very involved in encouraging communication and collaboration within the team and have experience giving technical presentations as well as facilitating project retrospective discussions."
     	}]
     }


 var education = {
	"schools": [{
		"name": "University of California, San Diego",
		"datesAttended": "2007-2010",
		"location": "La Jolla, California",
		"degree": "B.A.",
		"major": "International Studies",
		"minor": "Business Management",
		"url": "www.ucsd.edu"
	}],
	"onlineCourses": [{
		"school": "Udacity",
		"title": "Object-Oriented Javascript",
		"completed": "November 2014",
		"url": "https://www.udacity.com/course/ud015"
	}, {
		"school": "Udacity",
		"title": "HTML5 Canvas",
		"completed": "November 2014",
		"url": "https://www.udacity.com/course/ud292"
	}, {
		"school": "Udacity",
		"title": "Javascript Basics",
		"completed": "October 2014",
		"url": "https://www.udacity.com/course/ud804"
	}, {
		"school": "Udacity",
		"title": "Intro to HTML and CSS",
		"completed": "October 2014",
		"url": "https://www.udacity.com/course/ud304"
	}, {
		"school": "Udacity",
		"title": "Web Development",
		"completed": "August 2014",
		"url": "https://www.udacity.com/course/cs253"
	}],
}

var projects = {
	"projects": [
		{
			"title": "HTML5 Canvas Game",
			"dates": "December 2014 - January 2015",
			"description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree.",
			"images": ["images/frogger.jpg"],
			"url": "http://www.cherylcourt.ca/frogger"
		},
		{
			"title": "Online Portfolio",
			"dates": "October 2014",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
			"images": ["images/portfolio.jpg"],
			"url": "http://www.cherylcourt.ca/"
		},
		{
			"title": "Web Development Wiki",
			"dates": "June 2014 - August 2014",
			"description": "Created an online wiki for Udacity's Web Development Course.",
			"images": ["images/web.jpg"],
			"url": "http://helpful-kit-572.appspot.com/"
		}
	]
}

function displayBio() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    var skillsstart = "I'm currently working at Anvato, Inc in San Francisco, California.";
    var formattedSkillsStart = HTMLskillsStart.replace("%data%", skillsstart);
    var skills = "HTML5";
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    var skills1 = "CSS3";
    var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
    var skills2 = "JavaScript";
    var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBiopic);
    $('#header').append(formattedWelcome);
    $('#header').append(formattedSkillsStart);
    $('#header').append(formattedSkills);
    $('#header').append(formattedSkills1);
    $('#header').append(formattedSkills2);
    $('#topContacts').prepend(formattedEmail);
    $('#topContacts').prepend(formattedGithub);
    $('#topContacts').prepend(formattedMobile);
    $('#topContacts').append(formattedLocation);
}
displayBio();


function displayEducation() {

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


  $('#education').append(formattedSchoolStart);
  $('#education').append(formattedSchoolName);
  $('#education').append(formattedschoolDates);
  $('#education').append(formattedSchoolLocation);
  $('#education').append(formattedSchoolMajor);
  $('#education').append(formattedOnlineClasses);
  $('#education').append(formattedOnlineTitle);
  $('#education').append(formattedOnlineDates);
  $('#education').append(formattedOnlineURL);
}
displayEducation();

function displayProjects() {

  var formattedProjectStart = HTMLprojectStart;
  var project1 = "Online Portfolio";
  var formattedProject1 = HTMLprojectTitle.replace("%data%", project1);
  var project1Dates = "Online Portfolio";
  var formattedProject1Dates = HTMLprojectDates.replace("%data%", project1Dates);
  var project1Description = "Online Portfolio";
  var formattedProject1Description = HTMLprojectDescription.replace("%data%", project1Description);
  var project1Image = "Online Portfolio";
  var formattedProject1Image = HTMLprojectImage.replace("%data%", project1Image);

  $('#projects').append(formattedProjectStart);
  $('#projects').append(HTMLprojectTitle);
  $('#projects').append(HTMLprojectDates);
  $('#projects').append(formattedProject1Description);
  $('#projects').append(formattedProject1Image);

}
displayProjects();

function displayMap() {

var formattedGoogleMap = googleMap;

$('#mapDiv').append(formattedGoogleMap);
//$('#mapDiv').append(bio);

}
displayMap();

function displayWork() {

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}
}
displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
}
  );
