UPDATE Power
SET name = COALESCE($2, name),
SET description = COALESCE($2, description),
SET icon = COALESCE($2, icon)
WHERE id = $1
RETURNING *;
/*If you want to return the updated value*/
