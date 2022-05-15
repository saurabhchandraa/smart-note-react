## Live on https://smart-note-react.netlify.app/
## Spring Boot Backend Code URL: https://github.com/tesla2101/smart-note-backend


# SmartNote: A note taking app
![Vocabulary and Notepad](https://raw.githubusercontent.com/tesla2101/assets/main/smart-note3.png)

- Registration and User Login flow with `Spring Security` and `JWT`.
- Rest API with `Spring Boot` and `MYSQL`.
- Backend JAR deployed on [AWS Elastic Bean Stalk](https://aws.amazon.com/elasticbeanstalk/) using [AWS RDS](https://aws.amazon.com/rds/) for db.connection. 
- REST Endpoints exposed to [AWS API Gateway](https://aws.amazon.com/api-gateway/) for `ReactJS` Frontend to access.
- React Frontend Code deployed on [Netlify](https://www.netlify.com/).

<!-- ABOUT THE PROJECT -->
## About The Project
SmartNote is a Note taking app. You can register and login to the app and start using.
* The Vocabulary Builder option is your personal space that lets you save the words.
* As you enter the word, the meaning will be searched using the Merriam Webster API and appear in the meaning box.
* Edit it if you want to and click on save. 
* It'll be saved into the table and you can export the entire table as a PDF by clicking on the download button.
* The second section is your personal notepad.
* Here are a few examples for reference.

###### Login Page
![Login Page](https://github.com/tesla2101/assets/blob/main/smart-note1.png?raw=true)

###### Home Page After login
![Home Page](https://raw.githubusercontent.com/tesla2101/assets/main/smart-note2.png)

###### Add to Vocabulary and Notepad
![Vocabulary and Notepad](https://raw.githubusercontent.com/tesla2101/assets/main/smart-note3.png)

###### Save as PDF
![Downloded PDF](https://raw.githubusercontent.com/tesla2101/assets/main/smart-note4.png)


### Built With

Frameworks/libraries used.

* [React.js](https://reactjs.org/)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [MYSQL](https://www.mysql.com/)
* [Spring Security](https://spring.io/projects/spring-security)
* [JWT](https://jwt.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Material UI](https://mui.com/)
* [AWS Elastic Bean Stalk](https://aws.amazon.com/elasticbeanstalk/)
* [AWS RDS](https://aws.amazon.com/rds/)
* [AWS API Gateway](https://aws.amazon.com/api-gateway/)
* [Netlify](https://www.netlify.com/)



<!-- GETTING STARTED -->
## Getting Started

Instructions to run the project locally

### Installation

_Instructions on setting up the code locally._

1. Clone the repo
   ```sh
   git clone https://github.com/tesla2101/smart-note-react.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   ```sh
   npm install
   ```
4. Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
   ```sh
   npm run build
   ```




