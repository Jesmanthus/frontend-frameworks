let links = document.querySelectorAll(".return-link")

links.forEach(function (link) {

  link.addEventListener("click", function (ev) {

    ev.preventDefault()

    let content = document.querySelector(".content")
    content.classList.add("animate__fadeOutUp")

    setTimeout(function () {
      location.href = "../index.html"
    }, 1000)

  })
})

