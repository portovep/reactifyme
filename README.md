# Reactifyme

A simple React/Redux web app that helps you build your digital presence
while having a playground to practice modern frontend development.

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

> Note: Requires to setup firebase-cli for
[Firebase Hosting service](https://firebase.google.com/docs/hosting/quickstart).
Before running the script for the first time you need to login.
``` bash
$ firebase login
```

## UI Component library

To run the component library

``` bash
$ yarn run storybook
```

Then go to:

[http://localhost:9001](http://localhost:9001)

## SEO
To enable Google Analytics on production:
* Set your tracking ID as the value of REACT_APP_GA_TRACKING_ID in .env.example
* Rename .env.example to .env
* Re-deploy the app

## License

Copyright © 2017

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
