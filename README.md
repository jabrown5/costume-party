# costume-party
Costume party practice

## SQL commands for creating a database + user
-- We create a DB for every project and a specific user in the db for that project. This is for security purposes!


```
create database costume_party
create user 'l33tdba'@'localhost' identified by 'yellowpencil';
grant all privileges on constume_party.* to 'l33tdba'@'localhost';

use costume_party 
-will change into that DB

```

