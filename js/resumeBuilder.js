var bio = {
	"name": "Daniel Bales",
	"role": "Ninja",
	"contacts": {
		"email": "danielfbales@gmail.com",
		"github": "danielbales",
		"twitter": "@daniel_bales",
		"location": "San Francisco, California"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm currently working as a Marketing Manager in San Francisco, California.  Thanks for stopping by!",
	"skills": ["HTML5", "CSS3", "Responsive Design"]
};

var work = {
	"jobs": [
		{
			"employer": "Anvato, Inc.",
			"title": "Marketing Manager",
			"location": "San Francisco, California",
			"datesWorked": "April 2015 - Present",
			"description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, "+
				"SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become "+
				"productive as soon as possible.  I also lead discussions around better communication between the development team and "+
				"the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount "+
				"from everyone I worked with there."
		},
		{
			"employer": "ScImage, Inc",
			"title": "Product Marketing Manager",
			"location": "Mountain View, California",
			"datesWorked": "September 2008 - March 2015",
			"description": "My primary responsibilities involve all aspects of developing and supporting critical software " +
				"applications in a variety of languages including Java, python, C++ and Perl in both greenfield and " +
				"legacy systems.  This work includes, but is not limited to, database design, software architecture design, high level and " +
				"detailed estimates as well as peer review of submitted work. I am also very involved in encouraging " +
			"communication and collaboration within the team and have experience giving technical presentations as well " +
			"as facilitating project retrospective discussions."
		},
    {
			"employer": "Visual World, LLC",
			"title": "Product Manager",
			"location": "Corte Madera, California",
			"datesWorked": "September 2008 - March 2015",
			"description": "My primary responsibilities involve all aspects of developing and supporting critical software " +
				"applications in a variety of languages including Java, python, C++ and Perl in both greenfield and " +
				"legacy systems.  This work includes, but is not limited to, database design, software architecture design, high level and " +
				"detailed estimates as well as peer review of submitted work. I am also very involved in encouraging " +
			"communication and collaboration within the team and have experience giving technical presentations as well " +
			"as facilitating project retrospective discussions."
		},
	]
};

var education = {
	"schools": [
		{ "name": "University of California, San Diego",
			"datesAttended": "2007-2010",
			"location": "La Jolla, California",
			"degree": "B.A.",
			"major": "International Studies",
			"minor": "Business Management",
			"url": "www.ucsd.edu"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud015"
		},
		{ "school": "Udacity",
			"title": "HTML5 Canvas",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud292"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ "school": "Udacity",
			"title": "Web Development",
			"completed": "August 2014",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "HTML5 Canvas Game",
			"datesWorked": "December 2014 - January 2015",
			"description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/frogger.jpg"],
			"url": "http://www.cherylcourt.ca/frogger"
		},
		{
			"title": "Online Portfolio",
			"datesWorked": "October 2014",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.jpg"],
			"url": "http://www.cherylcourt.ca/"
		},
		{
			"title": "Web Development Wiki",
			"datesWorked": "June 2014 - August 2014",
			"description": "Created an online wiki for Udacity's Web Development Course.",
			"images": ["images/web.jpg"],
			"url": "http://helpful-kit-572.appspot.com/"
		}
	]
};

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
