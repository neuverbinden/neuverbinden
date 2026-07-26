function loadEmbed(buttonId, wrapId, src, title) {
  var button = document.getElementById(buttonId);
  if (!button) return;
  button.addEventListener("click", function () {
    var wrap = document.getElementById(wrapId);
    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title;
    iframe.loading = "lazy";
    wrap.innerHTML = "";
    wrap.appendChild(iframe);
  });
}
