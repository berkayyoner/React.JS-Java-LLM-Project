# About This Project
This project includes my personal website server files made with React.Js, Java Springboot and Python. Currently I'm working on developing my own LLM AI Chatbot for adding inside the project.

## Including
* **Front-End:** React.Js (includes Axios and Redux)
* **Back-End:** Java (Spring Boot, Hibernate and Maven)
* **Database:** Oracle SQL
* **Service Test Tools:** Postman
* **Web Test Tools:** Selenium
* **Container:** Docker
* **Data Transfer:** Redis

## Setups
1. Install Node.Js for front-end project.
2. Install Docker for database and redis server.
3. Import Docker image in the project directory to your Docker application. Run Oracle and Redis servers.
4. Install JDK 21 for back-end project. (https://adoptium.net/en-GB/temurin/releases?version=21&os=any&arch=any)
5. DBeaver is recomended for database connections.
6. Edit config.json from front-end>src directory.
7. Go to front-end project directory on Terminal or CMD by "cd [directory]" command. Run the frond-end project by "npm start" command.
8. Install Maven and extract to C:/ directory. Add path to System Properties->Environment Variables as MAVEN_HOME → C:\apache-maven-version\bin.
9. Go to back-end project directory on Terminal or CMD by "cd [directory]" command. Install dependancies by "mvnw clean install" command and run the back-end project by "mvnw spring-boot:run -Dspring-boot.run.profiles=dev" command.

## Database informations
* **Database user name:** berkay
* **Password:** 1234
* **Port:** 1521
* **Service name:** XEPDB1

### Notes
* **Clean Docker Oracle setup command:** docker run -d --name oracle-db -p 1522:1521 -e ORACLE_PASSWORD=1234 -e APP_USER=berkay -e APP_USER_PASSWORD=1234 gvenzl/oracle-xe
* **Redis run command:** docker run -d --name redis -p 6379:6379 redis
