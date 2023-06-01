const copies = document.querySelectorAll(".copy-icon");
copies.forEach((copy) => {
  copy.addEventListener("click", copyToClibpoard);
});

function copyToClibpoard(e) {
  const copiedText = e.target.parentElement.innerText.trim();
  navigator.clipboard.writeText(copiedText);
}
