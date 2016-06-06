var bio = {
    "name": "Daniel Bales",
    "role": "Ninja",
    "contacts": {
        "email": "danielfbales@gmail.com",
        "github": "danielbales",
        "twitter": "@daniel_bales",
        "mobile": "+1-858-414-2528",
        "location": "San Francisco, California"
    },
    "biopic": "images/Discovery_Shark_Week-300x300.jpg",
    "welcomeMessage": "I'm currently working as a Marketing Manager at Anvato, Inc in San Francisco, California.",
    "skills": ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
};

var work = {
    "jobs": [{
        "employer": "Anvato, Inc.",
        "title": "Marketing Manager",
        "location": "San Francisco, California",
        "dates": "April 2015 - Present",
        "description": "Core responsibilities include ongoing design and development of Anvato's dotcom properties, management and optimize Anvato's digital marketing campaigns, monitor and maintain company’s online presence, authoring external communications including press releases, newsletters, blog posts, social network messaging, etc."
    }, {
        "employer": "ScImage, Inc",
        "title": "Product Marketing Manager",
        "location": "Mountain View, California",
        "dates": "September 2013 - March 2015",
        "description": "As Product Marketing Manager at ScImage, I was responsible for all digital marketing strategies and web design/development efforts."
    }, {
        "employer": "Visual World, LLC",
        "title": "Product Manager",
        "location": "Corte Madera, California",
        "dates": "January 2013 - September 2013",
        "description": "Worked directly with software engineers to help create and launch a digital marketing platform. Led web development team in charge of HTML5, Ruby on Rails and Java applications. Conducted quality assurance testing using various web browser automation tools. Executed Scrum, including daily stand-ups and scoping iterations; analyze project success. Authored e-commerce site's content, text and website page format."
    }, {
        "employer": "Development Laboratories",
        "title": "Scrum Master",
        "location": "Del Mar, California",
        "dates": "August 2011 - January 2013",
        "description": "Managed a distributed team across Asia, the United States and Europe; directly supervised six employees. Led web development team in charge of HTML and Ruby on Rails. Created and designed materials for e-commerce including marketing and legal information. Executing Scrum, including daily stand-ups and scoping iterations; analyzed project success. Supervised development efforts for creation of e-commerce website designed to sell management tools for the software development industry. Authored the business plan for the company's flagship products."
    }]
};


var education = {
    "schools": [{
        "name": "University of California, San Diego",
        "dates": "2007-2010",
        "location": "La Jolla, California",
        "degree": "Bachelor of the Arts",
        "majors": ["International Studies/Business Management"],
        "url": "www.ucsd.edu"
    }, {
        "name": "University of California, San Diego",
        "dates": "2007-2010",
        "location": "La Jolla, California",
        "degree": "Bachelor of the Arts",
        "majors": ["International Studies/Business Management"],
        "url": "www.ucsd.edu"
    }, {
        "name": "La Jolla High School",
        "dates": "2007-2010",
        "location": "La Jolla, California",
        "degree": "Bachelor of the Arts",
        "majors": ["International Studies"],
        "url": "www.lajollahighschool.edu"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Javascript Basics",
        "date": "May 2016",
        "url": "https://www.google.com"
    }, {
        "school": "Udacity",
        "title": "Intro to HTML and CSS",
        "date": "March 2016",
        "url": "https://www.udacity.com/course/ud304"
    }, {
        "school": "Udacity",
        "title": "Web Development",
        "date": "August 2016",
        "url": "https://www.udacity.com/course/cs253"
    }],
};

var projects = {
    "projects": [{
        "title": "HTML5 Canvas Game",
        "dates": "December 2015 - January 2016",
        "description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree.",
        "images": ["images/Discovery_Shark_Week-300x300.jpg"],
        "url": "http://www.cherylcourt.ca/frogger"
    }, {
        "title": "Online Portfolio",
        "dates": "October 2014",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
        "images": ["images/fry.jpg"],
        "url": "http://www.cherylcourt.ca/"
    }, {
        "title": "Web Development Wiki",
        "dates": "June 2014 - August 2014",
        "description": "Created an online wiki for Udacity's Web Development Course.",
        "images": ["images/15803-Warner-Bros.-145.jpg"],
        "url": "http://helpful-kit-572.appspot.com/"
    }]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    $("#header").prepend(formattedName, formattedRole);
    $('#header').append(formattedBiopic, formattedWelcome, HTMLskillsStart);
    //skills loop below
    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
    $('#topContacts').prepend(formattedLocation, formattedEmail, formattedGithub, formattedTwitter, formattedMobile);
    $('#footerContacts').prepend(formattedLocation, formattedEmail, formattedGithub, formattedTwitter, formattedMobile);
};
bio.display();

$("#education").append(HTMLschoolStart);

education.display = function() {

    //loop starts below
    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", school.url);


        $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedschoolDates, formattedSchoolMajor, formattedSchoolLocation, formattedSchoolUrl);
    });

    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);

    //loop starts below
    education.onlineCourses.forEach(function(s) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", s.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", s.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", s.date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", s.url);


        $(".education-entry:last").append(formattedOnlineSchool, formattedOnlineTitle, formattedOnlineDates, formattedOnlineURL);

    });
};

education.display();

projects.display = function() {

    // Start the loop
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

        //$('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
            $('.project-entry:last').append(formattedProjectImage);
        });
    });
};
projects.display();

var map = {};
map.display = function() {
    var formattedGoogleMap = googleMap;

    $('#mapDiv').append(formattedGoogleMap);

};
map.display();


work.display = function() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

console.log(locationizer(work));

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase(); + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

var map = {};
map.display = function() {
    var googleMap;
};

function displayMap() {
    $('#mapDiv').append(googleMap);
}

function display() {
    displayMap(googleMap);
}
