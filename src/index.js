import chalk from "chalk";
import chalkTable from "chalk-table";
import DraftLog from "draftlog";
import readline from "readline";
import database from "./../database.json" assert { type: "json" }; // on package json we need to inform that this is a module
import Person from "./person.js";

//instantiate DraftLog that inject draft method into the console instance
DraftLog(console).addLineListener(process.stdin);

const options = {
  leftPaf: 2,
  columns: [
    { field: "id", name: chalk.cyan("ID") },
    { field: "vehicles", name: chalk.magenta("Vehicles") },
    { field: "kmTravel", name: chalk.cyan("KmTravel") },
    { field: "from", name: chalk.cyan("From") },
    { field: "to", name: chalk.cyan("To") },
  ],
};

// Initialize chalkTable
const table = chalkTable(
  options,
  database.map((item) => new Person(item).formatted("pt-br"))
);
const print = console.draft(table); //console.draft replace the global instance of console

/** Simulate a database update (draftlog must update the terminal (console) log automatically
 
  setInterval(() => {
    database.push({ id: Date.now(), vehicles: ["test" + Date.now()] });
    const table = chalkTable(options, database);
    print(table);
  }, 400);

*/

// to obtain user input from terminal
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
