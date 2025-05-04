//Looping through the tasks, incrementing the task each time until it reaches it has reached the second one
for (let i = 1; i <= 2; i++) {
  let title = window.prompt(`Enter task ${i} title: `);
  let description = window.prompt(`Enter task ${i} description: `);
  //Creating the variables outside of the while loop to prevent any issues
  let status;
  let lowercaseStatus;

  //Asking for a status until a valid one is entered
  while (true) {
    status = window.prompt(`Enter the status of task ${i}: `);
    lowercaseStatus = status.toLowerCase(); //Turns any input given by user into lowercase

    if (
      lowercaseStatus === "todo" ||
      lowercaseStatus === "doing" ||
      lowercaseStatus === "done"
    ) {
      break;
    } else {
      window.alert("Invalid Status. Please Enter 'todo', 'doing' or 'done' ");
    }
  }

  console.log(`Title: ${title}, Status ${lowercaseStatus}`);
  if (lowercaseStatus !== "done") {
    console.log("No tasks complete, let's get to work!"); //A message that appears in the console if none of the tasks are labelled as "done"
  }
}
