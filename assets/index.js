let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLead();
  inputEl.value = ""; //clearing input field
});

// Render the leads in the unordered list to be in a listed item using ulEl.innerHTML
function renderLead() {
  let listItem = `
            <li>
                <a target='_blank' href='${inputEl.value}'>
                    ${inputEl.value}
                </a>
            </li>
        `;
  ulEl.innerHTML += listItem;
}

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
//     ulEl.innerHTML = listItems
// }
