// Connect Massive
const massive = require("massive");
const connectionString = "postgres://postgres:postgres@localhost/hero";
const massiveInstance = massive.connectSync({connectionString : connectionString})
// Make DB available to export
module.exports = massiveInstance;
