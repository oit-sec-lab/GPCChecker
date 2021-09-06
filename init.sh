#!/bin/bash

if [ -d "extension/" ]; then
    rm -r extension
fi
mkdir extension

cp manifest.json extension/
cp content.js extension/
cd extension/
wget https://code.jquery.com/jquery-3.6.0.min.js
