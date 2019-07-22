// Flight Button
const flightHandlerFunction = () => {
  document.querySelector("#flight").classList.toggle("disabled")
  document.querySelector("#flight").classList.toggle("enabled")
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

// Mind Reading Button
const mindReadingHandlerFunction = () => {
  document.querySelector("#mindreading").classList.toggle("disabled")
  document.querySelector("#mindreading").classList.toggle("enabled")
}

document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction)

// Xray Button
const xrayHandlerFunction = () => {
  document.querySelector("#xray").classList.toggle("disabled")
  document.querySelector("#xray").classList.toggle("enabled")
}

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

// Activate All and Deactivate All
const collectionOfSections = document.querySelectorAll(".power")
const allEventHandlerFunction = () => {
  collectionOfSections.forEach(section => {
    section.classList.toggle("disabled")
    section.classList.toggle("enabled")
  })
}

document.querySelector("#activate-all").addEventListener("click", allEventHandlerFunction)

document.querySelector("#deactivate-all").addEventListener("click", allEventHandlerFunction) 

