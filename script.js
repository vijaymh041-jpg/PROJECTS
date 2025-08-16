function loadGroups() {
  const groupList = document.getElementById("group-list");
  groupList.innerHTML = "";
  groups.forEach((group, index) => {
    groupList.innerHTML += `<li>${group}</li>`;
  });
}

function createGroup() {
  const groupName = prompt("Enter group name:");
  if (groupName) {
    groups.push(groupName);
    loadGroups();
  }
}

function loadRoutines() {
  const routineList = document.getElementById("routine-list");
  routineList.innerHTML = "";
  routines.forEach((routine) => {
    routineList.innerHTML += `<li>${routine}</li>`;
  });
}

function addRoutine() {
  const routineName = prompt("Enter routine activity:");
  if (routineName) {
    routines.push(routineName);
    loadRoutines();
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadGroups();
  loadRoutines();
});
