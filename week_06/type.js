const text = document.querySelector("#text");
const title = document.querySelector("#title");

const headingContent = "Lorem ipsum";
const poem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis expedita unde doloremque, fuga nobis, repellat illum suscipit hic laborum numquam harum maiores! Enim rem maxime neque quod nisi doloribus?";

let headingCounter = 0;
function titleTypewriter() {
  if (headingCounter < headingContent.length) {
    title.textContent += headingContent[headingCounter];
    headingCounter++;
  }
}

let textCounter = 0;
function textTypewriter() {
  if (textCounter < poem.length) {
    text.textContent += poem[textCounter];
    textCounter++;
  }
}

function runAfterDelay() {
  setInterval(textTypewriter, 100);
}

// Start the title typewriter immediately
setInterval(titleTypewriter, 100);

// Start the paragraph typewriter after a delay
setTimeout(runAfterDelay, 2000);
