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

// Öffnet ein Ziel (z. B. WhatsApp) direkt bei Klick in einem neuen Tab, statt
// erst einen Link einzublenden. Die Zieladresse wird auch hier erst hier zur
// Klickzeit zusammengesetzt, damit sie nicht im statischen HTML steht.
function openDirect(buttonId, href) {
  var button = document.getElementById(buttonId);
  if (!button) return;
  button.addEventListener("click", function () {
    window.open(href, "_blank", "noopener");
  });
}

// Baut einen Link (z. B. WhatsApp) erst nach Klick zusammen, damit die Zieladresse
// nicht schon beim Laden der Seite im statischen HTML steht (Schutz vor einfachem
// automatisiertem Abgreifen, z. B. Telefonnummern-Scraper).
function revealLink(buttonId, wrapId, href, label, className) {
  var button = document.getElementById(buttonId);
  if (!button) return;
  button.addEventListener("click", function () {
    var wrap = document.getElementById(wrapId);
    var link = document.createElement("a");
    link.href = href;
    link.className = className || "link-cta";
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = label;
    wrap.innerHTML = "";
    wrap.appendChild(link);
  });
}
