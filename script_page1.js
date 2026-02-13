const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yayText = document.getElementById("yay");
const yayText1 = document.getElementById("yay1");
const can1 = document.getElementById("can1");
const can = document.getElementById("can");

noBtn.addEventListener("click", () => {
  yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
  yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;
});

yesBtn.addEventListener("click", () => {
  can.style.display = "none";
  can1.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  
  // Show the animated YAYYIEEE text
  yayText.classList.add("show");
  yayText1.style.display = "block";

  // Delay changing the page to page2.html by 2 seconds
  setTimeout(() => {
    window.location.href = 'page2.html';
  }, 2000);
});
