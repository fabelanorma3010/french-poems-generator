function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "I love you in every universe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
