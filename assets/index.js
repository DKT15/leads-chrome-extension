let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log("button clicked");
});

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  ulEl.textContent += myLeads[i] + "";
}
