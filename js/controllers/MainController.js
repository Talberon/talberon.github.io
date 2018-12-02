app.controller('MainController', ['$scope', '$sce', 'githubRepos', 'githubREADMEs', function($scope, $sce, githubRepos, githubREADMEs) {
    $scope.nonsense = 'PROJECTSSSS';

    $scope.projects = [{
        title: 'Ars Tactica',
        technologies: ['C#','Monogame'],
        description: 'Tactical Game',
        url: 'https://talberon.github.io'
    },
    {
        title: 'Web Portfolio',
        technologies: ['HTML','CSS','JavaScript','AngularJS','Bootstrap'],
        description: 'My own personal portfolio!',
        url: 'https://talberon.github.io'
    },
    {
        title: 'Game Roulette',
        technologies: ['C#','ASP.NET', 'Entity Framework', 'SQL Server'],
        description: 'Data application that helps you decide which game in your collection to play next!',
        url: 'https://talberon.github.io'
    }];

    githubRepos.success(function(data){
        $scope.repositories = data;

        githubREADMEs.getAPIgithubREADMEs().success(function(data){
            $scope.readmes = $sce.trustAsHtml(data);
            $scope.selectedProject = $scope.repositories[0].name;
        });
    });

    $scope.updateREADME = function(repo){
        $scope.selectedProject = repo.name;
        githubREADMEs.getAPIgithubREADMEs(repo.url).success(function(data){
            $scope.readmes = $sce.trustAsHtml(data);
        }).error(function(err){
            $scope.readmes = $sce.trustAsHtml("Not found.");
        });
    };

    $scope.jobs = [{
        title: 'Consultant, Java Developer (Full Stack)',
        timeline: 'March 2018 - Present (TBD)',
        employer: 'CGI Group, Inc.',
        location: 'Halifax, NS',
        description: 'Developing and testing full stack solutions in Java 8+, Spring, AngularJS and MariaDB for an aviation client. Automated testing with JUnit and Cucumber and developing in an Agile team using Gitflow and Docker deployments.',
        url: 'http://www.cgi.com/',
    },
	{
        title: 'Consultant, Java Developer',
        timeline: 'October 2017 - February 2018 (5 months)',
        employer: 'CGI Group, Inc.',
        location: 'Halifax, NS',
        description: 'Developed and tested a large human resourcing application using Java 6, Ant, JUnit and Team Foundation Server in an Agile development team.',
        url: 'http://www.cgi.com/',
    },
	{
        title: 'Consultant, Java Application Support',
        timeline: 'July 2017 - September 2017 (3 months)',
        employer: 'CGI Group, Inc.',
        location: 'Halifax, NS',
        description: '',
        url: 'http://www.cgi.com/',
    },
	{
        title: 'Consultant, Java Developer/Tester',
        timeline: 'April 2017 - June 2017 (3 months)',
        employer: 'CGI Group, Inc.',
        location: 'Halifax, NS',
        description: 'Developed and tested microservices for a satellite imaging client using new Java 8 technologies and test automation tools such as Cucumber in an Agile development structure.',
        url: 'http://www.cgi.com/',
    },
	{
        title: 'Consultant, Oracle PL/SQL Developer',
        timeline: 'December 2016 - April 2017 (5 months)',
        employer: 'CGI Group, Inc.',
        location: 'Halifax, NS',
        description: 'everse engineering of legacy code to facilitate rewrite of business rules from Oracle PLSQL to Java services.',
        url: 'http://www.cgi.com/',
    },
	{
        title: 'Consultant, Database QA Tester',
        timeline: 'March 2016 - May 2016 (3 months)',
        employer: 'CGI Group, Inc.',
        location: 'Halifax, NS',
        description: 'Create test plans, coordinate with QA testers and design test cases for a database language rewrite for a large-scale health insurance claim processing system. Coordinate with team leads, developers and project manager to develop a data-driven testing strategy to streamline and identify issues in ETL load based on results from the old system and reverse-engineering documentation.',
        url: 'http://www.cgi.com/',
    },
    {
        title: 'Consultant, Oracle PL/SQL Developer',
        timeline: 'August 2013 - March 2016 (31 Months)',
        employer: 'CGI Group, Inc.',
        location: 'Halifax, NS',
        description: 'Design, development and unit testing Oracle PL/SQL stored procedures for ETL and Abstraction layer data manipulation while maintaining version control. Create and modify Unix scripts for ETL job kickoffs. Manage and create job tasks in Enterprise Scheduler to kickoff ETL jobs. Reverse-engineer and document legacy code systems for rewrite purposes. Gather requirements and deliver estimates for work tasks. Reorganize document management system to conform to department standards.',
        url: 'http://www.cgi.com/',
    },
    {
        title: 'Intern, Oracle Production Support',
        timeline: 'May 2013 - August 2013 (4 months)',
        employer: 'CGI Group, Inc.',
        location: 'Halifax, NS',
        description: 'Complete multiple short-term tasks including code fixes, data updates and Enterprise Scheduler configuration to support the production environment for a client Health Insurance company.',
        url: 'http://www.cgi.com/',
    },
    {
        title: 'Java/C++ Tutor',
        timeline: 'February 2012 - April 2013 (14 months)',
        employer: 'Nova Scotia Community College',
        location: 'Halifax, NS',
        description: 'Instructed and helped hands-on with students struggling with school curriculum and worked together to improve individual comprehension and retention of basic programming concepts and syntax.',
        url: 'http://www.nscc.ca/',
    },
    {
        title: 'Instructor',
        timeline: 'July 2012 (1 week term)',
        employer: 'Artech Camps ',
        location: 'Halifax, NS',
        description: 'Instructed students in a week-long summer camp on creating role-playing video games with RPG Maker software. Supervised students during recess and lunch breaks. Assisted students when help was needed to provide a rich learning environment.',
        url: 'https://www.artechcamps.com/',
    }
    ];


    $scope.schools = [{
        title: 'Information Technology - Programming',
        timeline: 'September 2011 - June 2013 (2 years)',
        school: 'Nova Scotia Community College',
        location: 'Halifax, NS',
        courses: ['Programming: C#, Java, C++, Visual Basic',
                    'Web Development: HTML, CSS, Javascript, MVC Frameworks, Web Services',
                    'Software Analysis & Development (SAAD): Class Diagrams, Unit Testing, Project Planning, Use Cases, Domain Diagrams, Activity Diagrams, Software QA',
                    'Database Development: Oracle SQL, MySQL, SQLite, T-SQL, Access',
                    'Android Development: Java, XML; Hardware with BIOS, CMOS, DOS, CompTIA A+ Curriculum',
                    'Operating Systems: Linux, UNIX, Scripting, SSH',
                    'Networking: IIS, FTP, Cisco Packet Tracer, Apache Tomcat'],
        url: 'http://www.nscc.ca/',
    }
    ];

}]);
