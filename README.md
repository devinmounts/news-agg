# News Aggregator

#### Epicodus Capstone, 09/21/2018

#### By Devin Mounts

## A web application that displays news articles based on user queries. Users can query News API by various parameters to return articles with image, title, description and a link to content.  

## Component Structure
![Component Structure](./src/public/component-tree.png)

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Program displays top headlines for US on page load | N/A| Display List |
| Program allows a user to search top headlines by news source | New York Times | Display List is populated with query results |
| Program allows user to view results, navigating through multiple 'pages' of content when applicable | Display List: page 1 20 articles; Click: page 2  | Page 2 Display List shows following 20 articles |
| Program allows users to search all articles in database by keyword, new source and/or language from a specified date range. | Politics, french from 09/26/2018 to 09/27/2018 | Display List returns all articles meeting these parameters |
| Program allows users to filter search by relevancy, popularity, most recent publication | Politics, french from 09/26/2018 to 09/27/2018: filter by popularity | Display List returns all articles meeting these parameters filtered with popular sources and publishers |


## Setup on OSX

* Install Node.js
* Clone the repo
* Create a `.eslintrc.json` file with desired rules.
* Create a `.gitignore` file and include: `.DS_STORE, node_modules, build.`
* `npm install` to install dependencies
* `webpack-dev-server` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* React
* Redux
* Babel
* Webpack
* ESLint
* Jest
* News API

## Links

* Repo: https://github.com/devinmounts/meeting-manager

## Notes

* Displaying dynamic data.
* Best practice for locating logic.

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Devin Mounts**
