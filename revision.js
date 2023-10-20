var btn = document.getElementById("button");
btn.onclick = function() {
    btn.innerText = "dark mode";
    btn.style.backgroundColor = "aqua";
    btn.style.width = "200px";
    btn.style.height = "70px";
    btn.style.borderRadius = "24px";
    btn.style.fontSize = "30px";
    btn.style.transition = "1.5s";
    document.body.style.backgroundColor = "black";
}