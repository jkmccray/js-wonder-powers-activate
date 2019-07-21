const flightHandlerFunction = () => {
  document.querySelector("#flight").classList.toggle("disabled")
  document.querySelector("#flight").classList.toggle("enabled")
}

document.querySelector("#activate-flight").addEventListener("click",flightHandlerFunction)

