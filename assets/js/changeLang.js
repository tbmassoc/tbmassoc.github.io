const q = new URLSearchParams(window.location.search);

function changeLang() {

  var en = document.getElementById("lang-en").style,
    it = document.getElementById("lang-it").style,
    ja = document.getElementById("lang-ja").style;

  const l = q.get("lang");

  if (l == "it") {
    document.title = "thebelovedmoon e associati 🌙";
    en.display = "none";
    it.display = "block";
    ja.display = "none";
  } else if (l == "ja") {
    document.title = "thebelovedmoon and associates 🌙";
    en.display = "none";
    it.display = "none";
    ja.display = "block";
  } else {
    document.title = "thebelovedmoon and associates 🌙";
    en.display = "block";
    it.display = "none";
    ja.display = "none";
  }

}