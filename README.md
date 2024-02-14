# Github users profile and repositories fetch using angular

##Overview
This project is an Angular 14+ single-page application (SPA) designed to take a GitHub username as input and display the public repositories belonging to the user. It utilizes the GitHub API to fetch repository data and provides features like pagination, search, and a zero state for non-existent users.


##Features
Search bar to input GitHub username.
Display of public repositories for the provided GitHub username.
Zero state display for non-existent users.
Server-side pagination with customizable page size.
Skeleton loader for indicating API calls in progress.


##Installation and Setup
Clone the repository:
git clone https://github.com/<your-username>/<your-repository>.git

Navigate to the project directory:
cd <your-repository>


##Install dependencies:
npm install

Start the development server:
npm start


##Usage
Enter a valid GitHub username in the search bar.
Click on the search button to fetch and display repositories.
Adjust page size using the dropdown for pagination.
Explore the repositories listed.

##Testing
Component Tests
Run unit tests for github-profile and github-search:
npm run test:github-profile

##Service Tests
Run unit tests for ApiService
npm run test:ApiService

##Deployment
This SPA is deployed on netlify.com Access it here.

##Libraries Used
Angular 14+
Tailwind CSS


Folder Structure
/src
|-- app
|   |-- components
|   |   |-- <Component 1>
|   |   |-- <Component 2>
|   |-- services
|   |   |-- <Service 1>
|   |   |-- <Service 2>
|-- assets
|-- ...



