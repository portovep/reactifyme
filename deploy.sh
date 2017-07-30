#!/usr/bin/env bash

# build app
echo "Building app..."
yarn build


# build storybook
echo "Building storybook..."
yarn build:storybook

# deploy as static site
echo "Deploying app to Firebase..."
firebase deploy
