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
    id: 10,
    name: 'Fake project 2',
    date: 2014,
    description:
      '<p>Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever since the " +
      '1500s, when an unknown printer took a galley of type and scrambled it to make a ' +
      'type specimen book.</p>' +
      '<p>It has survived not only five centuries, but also the leap into electronic ' +
      'typesetting, remaining essentially unchanged.</p>',
    teamSize: 2,
    technologies:
      'Clojure, Compojure, ClojureScript, Om, ElasticSearch, Redis, Bootstrap',
    links: [
      {
        type: 'demo',
        link: '#'
      },
      {
        type: 'paper',
        link: '#'
      },
      {
        type: 'repo',
        link: '#'
      },
      {
        type: 'download',
        link: '#'
      }
    ],
    images: [
      '/img/media/media_crowdtransport_1.png',
      '/img/media/media_crowdtransport_2.png',
      '/img/media/media_crowdtransport_3.png',
      '/img/media/media_crowdtransport_4.png',
      '/img/media/media_crowdtransport_5.png'
    ]
  },
  {
    id: 1,
    name: 'Fake project 1',
    date: 2011,
    description:
      '<p>Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever since the " +
      '1500s, when an unknown printer took a galley of type and scrambled it to make a ' +
      'type specimen book.</p>' +
      '<p>It has survived not only five centuries, but also the leap into electronic ' +
      'typesetting, remaining essentially unchanged.</p>',
    teamSize: 2,
    technologies: 'Fancy JS framework, Next Fancy JS framework',
    links: [
      {
        type: 'demo',
        link: '#'
      },
      {
        type: 'download',
        link: 'https://google.com'
      }
    ]
  }
];
