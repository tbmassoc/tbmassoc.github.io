const q = new URLSearchParams(window.location.search);

function changeLang() {

  var en = document.getElementById("lang-en").style,
    it = document.getElementById("lang-it").style,
    ja = document.getElementById("lang-ja").style;

  const l = q.get("lang");

  if (l == "it") {
    en.display = "none";
    it.display = "block";
    ja.display = "none";
  } else if (l == "ja") {
    en.display = "none";
    it.display = "none";
    ja.display = "block";
  } else {
    en.display = "block";
    it.display = "none";
    ja.display = "none";
  }

}