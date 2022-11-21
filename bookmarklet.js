javascript: void
function() {
  if (document.location.pathname.indexOf("/v1/") == 0) {
    var a = document.getElementById("iframeplayer").src,
      b = window.open("about:blank", "_blank"),
      c = b.document.createElement("iframe");
    c.allowFullscreen = "true", c.src = a, c.style.position = "fixed", c.style.top = "0px", c.style.left = "0px", c.style.height = "100%", c.style.width = "100%", c.style.zIndex = "999999", c.style.textAlign = "center", c.scrolling = "no", c.frameBorder = "0%", b.document.body.appendChild(c), b.document.title = "VirescentOverlord";
    var d = b.document.querySelector("link[rel~='icon']");
    d || (d = b.document.createElement("link"), d.rel = "icon", b.document.getElementsByTagName("head")[0].appendChild(d)), d.href = "https://plyr.link/favicon.ico"
}
}();
