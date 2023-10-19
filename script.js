function toggleMode() {
  //pega html
  const html = document.documentElement

  /*se isso que está aqui for verdadeiro exectura um código se não executa outro
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  html.classList.toggle("light")

  //pega a tag img e se tiver light mode substitui a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const desc = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Isabelly sorrindo, angulo de cima com parte do cabelo branco e fundo branco e rosa."
    )
  } else {
    desc.setAttribute(
      "alt",
      "Foto de Isabelly sorrindo, usando camisa preta e fundo branco."
    )
  }
}
