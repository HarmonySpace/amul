import app from "./app";
import { startConnection } from "./database";

startConnection();
app.listen(3000);

// server messages up
console.log("       _ _ _ _ _ _ _ _ _");
console.log("     /|||||||||||||||||/|\\");
console.log("    /|||||||||||||||||/ | \\");
console.log("   /7‾7‾7‾7‾7‾7‾7‾7‾7/  |  \\");
console.log("  /                 /|  |_ _\\");
console.log(" / S P A C E B O X / |--|");
console.log("/_ _ _ _ _ _ _ _ _/  |--/ ");
console.log("   |//////////////   |-/");
console.log("   |/////////////    |/");
console.log("    ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ");
console.log(" ");
console.log("- - - -> SERVER RUNNING <- - - - ");
