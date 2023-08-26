const changeAdvice = () => {
  const loadingElement = document.getElementById("loading")
  const adviceElement = document.getElementById("advice")
  const adviceId = document.getElementById("advice-id")
  loadingElement.classList.remove("hide")
  adviceElement.classList.add("hide")
  adviceId.classList.add("hide")
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      response.json().then((data) => {
        document.querySelector(".advice").innerHTML =
          "&#8220;" + data.slip.advice + "&#8221;"
        document.querySelector("#advice-id").innerHTML = "#" + data.slip.id
      })
    })
    .finally(() => {
      loadingElement.classList.add("hide")
      adviceElement.classList.remove("hide")
      adviceId.classList.remove("hide")
    })
}
