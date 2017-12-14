export const experiments = [
  {
    id: 10,
    name: "Cloujera",
    date: 2014,
    description: "<p>Cloujera lets you do a fine-grained search for spoken words in Coursera's videos. We built " +
    "Cloujera to enhance Coursera's limited search functionality, for those times when you want to quickly search for " +
    "and learn about a specific topic.</p>" +
    "<p>Cloujera was built in 48 hours for <a href=\"https://clojurecup.com\" target=\"_blank\">ClojureCup 2014</a>. " +
    "People and judges found Cloujera highly useful and enjoy the design and performance of the app. " +
    "We ended up winning the public's favourite award while finishing second among the 100 teams that took part " +
    "in the hackathon. My personal motivation for this project was to play a bit with ClojureScript and Om.</p>",
    teamSize: 4,
    technologies: "Clojure, Compojure, ClojureScript, Om, ElasticSearch, Redis, Bootstrap",
    links: [
      {
        type: "repo",
        link: "https://github.com/clojurecup2014/cloujera"
      }]
  },
  {
    id: 9,
    name: "EcoShifter RESTful API",
    date: 2014,
    description: "<p>Developed a personal cloud for the smart driving Android app " +
    "<a href=\"http://ecoshifter.com\" target=\"_blank\">EcoShifter</a> allowing users to upload their car profiles to " +
    "the cloud and keep them synchronized between all their devices.</p>" +
    "<p>Users of older versions of EcoShifter had to create again the same profiles for their cars each time they " +
    "switch devices. Moreover, they had to enter information like the make and model of the car manually. " +
    "I have helped the project by developing a new backend that solves these problems by allowing users to choose " +
    "existing makes and models offered  and to save their car profiles on the cloud.</p>",
    teamSize: 2,
    technologies: "Python, Django, Django REST Framework, MySQL",
    links: [
      {
        type: "demo",
        link: "https://play.google.com/store/apps/details?id=com.ecoshifter.beta"
      }]
  },
  {
    id: 8,
    name: "portovep.com",
    date: 2013,
    description: "<p>My personal website. I really liked the concept of static websites for small projects after " +
    "reading <a href=\"http://www.allthingsdistributed.com/2011/08/Jekyll-amazon-s3.html\" target=\"_blank\">this</a> " +
    "post by Amazon CTO Werner Vogels. The idea of not having to deal with constant CMS updates and keeping everything " +
    "simple sounded very appealing.</p>" +
    "<p>The website is very simple, I have built the core in less than two days by leveraging the magic of " +
    "<a href=\"https://github.com/koenbok/Cactus\" target=\"_blank\">Cactus</a> and Bootstrap 3. Cactus allows me " +
    "to deploy newer versions to Amazon S3 with one command line and Bootstrap works " +
    "like a charm to make the site design clean, beautiful and responsive on small devices at the same time.</p>",
    teamSize: 1,
    technologies: "Cactus, Bootstrap 3, Amazon S3, Amazon Route 53"
  },
  {
    id: 7,
    name: "Escriba",
    date: 2013,
    description: "<p>Web application developed as part as a masters dissertation studying the impact of adaptive user " +
    "interfaces (AUI). 4 months project which involved attending meetings with localization experts and members of the " +
    "W3C working group in charge of defining the ITS 2.0 standard specification.</p>" +
    "<p>The app features functionality that adapts the UI based on the translator experience and past recorded " +
    "behavior while allowing the translation of documents represented by XLIFF files and the creation and process of " +
    "ITS 2.0 metadata. The research analyzes how adaptive user interfaces can influence learning processes in " +
    "localization tasks and how ITS 2.0, the next version of the W3C standard to foster the adoption of " +
    "the multilingual Web, can be implemented in a web CAT tool.</p>",
    teamSize: 1,
    technologies: "HTML5 APIs, jQuery, jQuery UI, Bootstrap, XML, XPath, GAE",
    links: [
      {
        type: "demo",
        link: "http://mobile-webcat.appspot.com"
      },
      {
        type: "paper",
        link: "http://www.localisation.ie/news/archive/information/localisation-focus-volume-12-issue-1-available-free-download%C2%A073mb"
      }]
  },
  {
    id: 6,
    name: "WebRTC - Streaming",
    date: 2013,
    description: "<p>Research project that analyzes the feasibility of implementing live video streaming " +
    "protocols into web applications using WebRTC. The feasibility analysis is accompanied with a practical" +
    " implementation of a peer-to-peer streaming protocol in WebRTC that runs natively in the browser.</p>" +
    "<p>The research highlights current limitations and future challenges when implementing sophisticated" +
    " peer-to-peer solutions in a technology that is still in its infancy. </p>",
    teamSize: 3,
    technologies: "WebRTC, peer.js, jQuery, HTML5/CSS, Bootstrap, Google AppLayout Engine",
    links: [
      {
        type: "demo",
        link: "http://webrtc-playground.appspot.com"
      },
      {
        type: "paper",
        link: "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6916588&queryText%3Dwebrtc+p2p"
      }]
  },
  {
    id: 5,
    name: "Hungr.ie",
    date: 2012,
    description: "<p>Platform based on a mobile app, a web service and a web app that provides restaurants with the " +
    "opportunity to take orders online and bid for featured spots to promote their products.</p>" +
    "<p>Developed as part of a six month competition between twelve team from participating universities, involving " +
    "the creation of a business plan, development of a software product and an investment pitch to consultants from " +
    "Red Hat, Cisco, Microsoft and Citi bank. As CTO, I was responsible of assessing the technology decisions and " +
    "guiding the team during the development phase.</p>",
    teamSize: 4,
    technologies: "Python, Django REST Framework, PostgreSQL, jQuery, Android SDK, Amazon EC2"
  },
  {
    id: 4,
    name: "Improve",
    date: 2012,
    description: "<p>A simple Facebook app that leverage the information provided by the Facebook Graph API to help " +
    "people to achieve their goals. The app was created from the idea that sharing goals raises people motivation.</p>" +
    "<p>The project aimed to potentiate the virality and stickiness of the app by using a development cycle based " +
    "on continuous feedback implementation. I was in charge of implementing the back-end functionality and coordinating " +
    "the development process.</p>",
    teamSize: 4,
    technologies: "Python, JavaScript, Graph API, GAE, App Engine Datastore, Git",
    links: [
      {
        type: "demo",
        link: "https://apps.facebook.com/improve-app"
      },
      {
        type: "repo",
        link: "https://github.com/portovep/improve"
      }]
  },
  {
    id: 3,
    name: "FlightBooker",
    date: 2012,
    description: "<p>Academic project which involved the design and implementation of a scalable distributed booking " +
    "system working over simulated delay tolerant networks (DTN). The system requirements involved seat allocation " +
    "fairness, load-balancing, data replication and fault tolerance to warranty that the system can process booking " +
    "requests issued from different locations and under different connectivity conditions.</p>" +
    "<p>A custom communication protocol was built on top of Java sockets to meet the requirements. Java threads were " +
    "used to implement concurrency in the server side. MySQL DBMs features were used to achieve data replication.</p>",
    teamSize: 1,
    technologies: "Java SE {Sockets, Threads, Swing}, MySQL",
    links: [
      {
        type: "repo",
        link: "https://github.com/portovep/flight-booker"
      }]
  },
  {
    id: 2,
    name: "Crowdtransport",
    date: 2011,
    description: "<p>Platform based on a mobile app and a REST web service that provides real " +
    "time public transport information using crowdsourcing techniques. The app allows users to " +
    "share with others valuable public transport geolocation data while enabling real time visualization " +
    "of the geolocation of buses and taxis.</p>" +
    "<p>Awarded final year project based on an idea of my own " +
    "and involving the usage of state of the art Android technologies like text to speech processing (TTS), " +
    "GPS tracking, Maps API and Google Cloud Messaging.</p>",
    teamSize: 1,
    technologies: "Android SDK, Java, Restlet, MySQL, AWS",
    links: [
      {
        type: "repo",
        link: "https://github.com/portovep/crowdtransport"
      },
      {
        type: "download",
        link: "https://github.com/portovep/crowdtransport/releases"
      }],
    images: [
      "/img/media/media_crowdtransport_1.png",
      "/img/media/media_crowdtransport_2.png",
      "/img/media/media_crowdtransport_3.png",
      "/img/media/media_crowdtransport_4.png",
      "/img/media/media_crowdtransport_5.png",
    ]
  },
  {
    id: 1,
    name: "Frogs",
    date: 2011,
    description: "<p>A videogame based on the arcade game Frogger developed together with some friends. " +
    "The 2D engine was created following the wisdom contained in the book " +
    "<a href=\"http://www.amazon.com/Beginning-Android-Games-Mario-Zechner/dp/1430246774\" " +
    "target=\"_blank\">Beginning Android Games</a> by Mr. Mario Zechner.</p>" +
    "<p>The motivation of the project was to learn how to design and implement a game for the Android platform. " +
    "My role was to integrate the game mechanics and audio into the Android platform and to develop a scoring system " +
    "to engage players.</p>",
    teamSize: 2,
    technologies: "Android SDK, Git"
  },
];