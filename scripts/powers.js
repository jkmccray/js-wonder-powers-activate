// // Flight Button
// const flightHandlerFunction = (event) => {
//   document.querySelector("#flight").classList.toggle("disabled")
//   document.querySelector("#flight").classList.toggle("enabled")
// }

// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

// // Mind Reading Button
// const mindReadingHandlerFunction = (event) => {
//   document.querySelector("#mindreading").classList.toggle("disabled")
//   document.querySelector("#mindreading").classList.toggle("enabled")
// }

// document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction)

// // Xray Button
// const xrayHandlerFunction = (event) => {
//   document.querySelector("#xray").classList.toggle("disabled")
//   document.querySelector("#xray").classList.toggle("enabled")
// }

// document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

// // Activate All and Deactivate All
const collectionOfSections = document.querySelectorAll(".power")
const activateAllHandlerFunction = (event) => {
  collectionOfSections.forEach(section => {
    section.classList.remove("disabled")
    section.classList.add("enabled")
  })
}

document.querySelector("#activate-all").addEventListener("click", activateAllHandlerFunction)

const deactivateAllHandlerFunction = (event) => {
  collectionOfSections.forEach(section => {
    section.classList.add("disabled")
    section.classList.remove("enabled")
  })
}
document.querySelector("#deactivate-all").addEventListener("click", deactivateAllHandlerFunction) 


// ------ Challenge: One Function to Rule Them All ------
const collectionOfButtons = document.querySelectorAll("button")
collectionOfButtons.forEach(button => {
  const idArray = button.id.split("-")
  if (idArray[1] !== "all") {
    button.addEventListener("click", genericHandlerFunction)
  }
})

function genericHandlerFunction(event) {
  const sectionById = document.querySelector(`#${event.target.id.split("-")[1]}`)
  sectionById.classList.toggle("disabled")
  sectionById.classList.toggle("enabled")
}


