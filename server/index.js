// Third Party Dependencies
const dotenv = require("dotenv").config();

// Local Dependencies
const server = require("./config");
const sequelize = require("../database/config");
require("../database/config/relationships")
// Evironment Variables.
const { PORT, DEBUG } = process.env;

// Main Functionality.
function main() {
  // Start the server.
  server.listen(PORT, async () => {

    // 
    if (DEBUG === "true") {
      await sequelize.sync({ force: true });
    }

    // 
    await sequelize.sync();

    console.log(`Server listening on port ${PORT}...`);
    
  });
}

// Invoke main functionality
main();
