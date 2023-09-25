function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}
*/
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo com óculos escuros e fundo azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
