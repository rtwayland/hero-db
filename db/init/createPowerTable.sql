CREATE TABLE IF NOT EXISTS Power(
  id serial primary key,
  name varchar(50),
  description varchar(400),
  icon varchar(400)
)
/* Would normally link to a customer instead of just
 putting a string name in.  But we can only do so
 much at once*/
