for (let i = 1; i <= 2; i++) {
  let title = window.prompt(`Enter task ${i} title: `);
  let description = window.prompt(`Enter task ${i} description: `);
  let status;
  let lowercaseStatus;

  while (true) {
    status = window.prompt(`Enter the status of task ${i}: `);
    lowercaseStatus = status.toLowerCase();

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
    console.log("No tasks complete, let's get to work!");
  }
}
