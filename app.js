let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let input = prompt("please enter your name:");
  alert(input);

  let span = document.querySelector("span");
  span.innerText = input;
});
