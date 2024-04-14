let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Check if leadsFromLocalStorage is truthy. If so, set myLeads to its value and call render()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage; //setting myLeads to what's inside local storage.
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  // query chrome for its tabs. The active tab is set to true. The current window is also set to true in case the user has another browser window in the background.
  // The function will trigger once chrome has found the tab its been told to look for.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url); // adds the tabs url
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //adds lead to local storage
    render(myLeads);
  });
});

// Render the leads in the unordered list to be in a listed item using ulEl.innerHTML
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
          <li>
              <a target='_blank' href='${leads[i]}'>
                  ${leads[i]}
              </a>
          </li>
      `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  console.log("double clicked!");
  localStorage.clear();
  myLeads = [];
  render(myLeads); //triggered now as the array has been emptied.
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""; //clearing input field
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Save the myLeads array to localStorage
  render(myLeads);
});
