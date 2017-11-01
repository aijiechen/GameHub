# MiniGame-Network

Repo for CTP Project by 
<ul>
<li>Aijie Chen</li>
<li>Ahmed Elsaeyed</li>
<li>Muhammad Rehman</li>
<li>Jefferson Wong</li>
</ul>

How to Install the Database

Run the following: 
<ul>
<li> sudo apt-get update</li>
<li> sudo apt-get install -y postgresql-9.5 postgresql-server-dev-9.5</li>
</ul>


Create a User: 
<ul>
<li> createuser -P -s -e ctp_user</li>
<li> You will be prompted for a password, it is also ctp_user</li>
</ul>

Create a Database: 
<ul>
<li> createdb -h localhost -U ctp_user gamehub_development</li>
<li> you have now created a databse named gamehub_development, which is tied to the user ctp_user</li>
<li> remember the username is ctp_user and password is also ctp_user</li>
</ul>


