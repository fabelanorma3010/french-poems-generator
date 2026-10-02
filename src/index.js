function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "I love you God , I love you for the love you give me, for your eternal faithfullness ",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
