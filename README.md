# Reactifyme

A simple React/Redux web app that helps you build your digital presence while having a playground to practice modern frontend development.

I built Reactifyme while I was migrating my personal website to React. You can see it live (hopelly!) in [pabloporto.me](https://pabloporto.me).

You can even explore all the reusable React components created as part of Reactifyme in [pabloporto.me/storybook](https://pabloporto.me/storybook).

## Requirements

* Node >= 7.6.0
* npm >= 4.2.0 or yarn >= 0.24.6

## Usage

To run all the tests

``` bash
$ yarn test
```


To run the service locally on port 3000

``` bash
$ yarn start
```

To build the app for production

``` bash
$ yarn build
```

## Deployment

The deploy script deploys the app to Firebase. You need a Firebase account if you want to use the script.

``` bash
$ ./deploy.sh
```

> Note: You need to setup firebase-cli to use the
[Firebase Hosting service](https://firebase.google.com/docs/hosting/quickstart).
Before running the script for the first time you need to login.
``` bash
$ firebase login
```

## UI Component library
Reactifyme was created using Storybook.js, a component explorer library for React. 

You can explore all the reusable components running the component library.

``` bash
$ yarn run storybook
```

Then go to:

[http://localhost:9001](http://localhost:9001)

## Customizing Reactifyme with your own content
All the content, including page metadata and profile pictures, is consumed as static JSON data that is stored in src/data.

If you want to use Reactifyme, you just have to change the content of the data files with the ones you like.

## Contributions
Contributions are welcome! Keep in mind that the motivation behind Reactifyme is just to be a playground for people that want to learn React/Redux while building their personal website. 

If what you are looking for is to generate your own website using a mature React static site generator, you may want to look at Next.js

That said, these are some ideas of things that can be improved:
* Add linting stage in the build, ESlint?
* Add prettier for ensure code formatting consistency
* Change stored content format from JSON to markdown.
* Make Reactifyme a PWA
* Add useful plugins to Storybook.js (e.g. addon-info)

## SEO
To enable Google Analytics on production:
* Set your tracking ID as the value of REACT_APP_GA_TRACKING_ID in .env.example
* Rename .env.example to .env
* Re-deploy the app

## License

Copyright © 2017

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
