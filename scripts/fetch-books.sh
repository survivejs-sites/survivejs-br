#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

mkdir -p books
mkdir -p books/react-book

cd books/react-book
if [ -d ".git" ]; then git pull;
else git clone -b master https://github.com/survivejs-translations/react-book-br.git .;
fi
