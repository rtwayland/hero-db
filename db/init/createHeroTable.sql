/* Create Table It does Not Exist */

CREATE TABLE IF NOT EXISTS Hero(
  id serial primary key,
  name varchar(50),
  origin varchar(500),
  hometown varchar(50),
  imageUrl varchar(400)
)
