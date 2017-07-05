export const fakeLinks = [
  {
    type: 'demo',
    link: '#'
  },
  {
    type: 'paper',
    link: '#'
  },
  {
    type: 'download',
    link: '#'
  },
  {
    type: 'repo',
    link: '#'
  }
];

export const fakeProjects = [
  {
    id: 1,
    name: 'Crowdtransport',
    date: 2011,
    description: "<p>Platform based on a mobile app and a REST web service that provides real time public transport information using crowdsourcing techniques. The app allows users to share with others valuable public transport geolocation data while enabling real time visualization of the geolocation of buses and taxis.</p><p>Awarded final year project based on an idea of my own and involving the usage of state of the art Android technologies like text to speech processing (TTS), GPS tracking, Maps API and Google Cloud Messaging.</p>",
    teamSize: 3,
    technologies: "Android SDK, Java, Restlet, MySQL, AWS",
    links: [
      {
        type: 'repo',
        link: 'https://github.com/portovep/crowdtransport'
      },
      {
        type: 'download',
        link: 'https://github.com/portovep/crowdtransport/releases'
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
    id: 2,
    name: 'WebRTC - Streaming',
    date: 2013,
    description: "<p>Research project that analyzes the feasibility of implementing live video streaming protocols into web applications using WebRTC. The feasibility analysis is accompanied with a practical implementation of a peer-to-peer streaming protocol in WebRTC that runs natively in the browser.</p>" +
    "<p>The research highlights current limitations and future challenges when implementing sophisticated peer-to-peer solutions in a technology that is still in its infancy. </p>",
    teamSize: 3,
    technologies: "WebRTC, peer.js, jQuery, HTML5/CSS, Bootstrap, Google AppLayout Engine",
    links: [
      {
        type: 'demo',
        link: 'http://webrtc-playground.appspot.com'
      },
      {
        type: 'paper',
        link: 'http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6916588&queryText%3Dwebrtc+p2p'
      }]
  },
];