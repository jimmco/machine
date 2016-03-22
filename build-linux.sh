#!/bin/sh
cd src && npm install electron-connect
electron-packager . machine  --platform=linux --arch=x64 --version="0.37.2"
