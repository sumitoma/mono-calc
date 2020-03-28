#!/bin/bash

sudo npm install -g express@4.17.1

export EXPRESS_HOME=$(npm root -g)

echo "express home set to ${EXPRESS_HOME}"