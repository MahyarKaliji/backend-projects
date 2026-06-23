#!/usr/bin/env node

async function fetchActivities(user) {
  const response = await fetch(`https://api.github.com/users/${user}/events`);

  if (!response.ok) {
    if (response.status === 404) {
      console.log(`User not found! Please check the username and try again`);
      return;
    } else {
      console.log(`Error fetching data: ${response.status}`);
      return;
    }
  }

  return response.json();
}

function displayActivities(activities) {
  if (!Array.isArray(activities)) {
    console.log("No recent activity found");
    return;
  }

  activities.forEach((activity) => {
    let action;
    switch (activity.type) {
      case "PushEvent":
        console.log(`- Pushed to ${activity.repo.name}`);
        break;

      case "CreateEvent":
        console.log(
          `- Created a ${activity.payload.ref_type} in ${activity.repo.name}`,
        );
        break;

      case "DeleteEvent":
        console.log(
          `- Deleted a ${activity.payload.ref_type} from ${activity.repo.name}`,
        );
        break;

      case "WatchEvent":
        console.log(`- Starred ${activity.repo.name}`);
        break;

      default:
        console.log(
          `- ${activity.type.replace("Event", "")} on ${activity.repo.name}`,
        );
        break;
    }
  });
}

const user = process.argv[2];
if (!user) {
  console.log("Please enter a Github username.");
  return;
}
// const userActitvities = fetchActivities(user);
fetchActivities(user)
  .then((activities) => {
    if (!activities) return;

    displayActivities(activities);
    // return activities.map((activity) => ({
    //   id: activity.id,
    //   type: activity.type,
    //   actor: activity.actor.display_login,
    // }));
  })
  .catch((err) => console.log(err));
