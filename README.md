# MiniGame-Network

### Repo for CTP Project by 

* Aijie Chen
* Ahmed Elsaeyed
* Muhammad Rehman
* Jefferson Wong


### How to Install the Database

1. Run the following: 

   * `sudo apt-get update`
   * `sudo apt-get install -y postgresql-9.5 postgresql-server-dev-9.5`

2. Create a User: 

   * `createuser -P -s -e db_username`

3. Create a Database: 


   * `createdb -h localhost -U db_username gamehub_development`


### Setting up the app

1. Clone the respository

2. In terminal type 
   * `npm install`
   * `cd app`
   * `npm start`
3. Open up a new terminal tab and go to the repository
   * `cd server`
   * `npm start`
   
4. Go to localhost:3000 to access the front-end app
  

