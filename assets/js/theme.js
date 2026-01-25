function applyThemeOnLoad() {
  let theme = localStorage.getItem("theme");
  switch (theme) {
    case "light":
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
      try {
        document.querySelector(".themeChanger").innerText = "dark_mode";
        document.querySelector(".themeChanger").onclick = () => { manualThemer("dark"); };
        document.querySelector(".themeChanger").title = "switch to dark mode";
        document.querySelector(".laLunaLogo").src = "/assets/svg/luna_light.svg";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
        document.querySelector(".laLunaLogoFull").src = "/assets/svg/laLuna_light.svg";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      finally { return localStorage.setItem("theme", theme); }
    case "dark":
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      try {
        document.querySelector(".themeChanger").innerText = "light_mode";
        document.querySelector(".themeChanger").onclick = () => { manualThemer("light"); };
        document.querySelector(".themeChanger").title = "switch to light mode";
        document.querySelector(".laLunaLogo").src = "/assets/svg/luna_dark.svg";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/damien-dufour-66PqHexp9DQ-unsplash.jpg')";
        document.querySelector(".laLunaLogoFull").src = "/assets/svg/laLuna_dark.svg";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      finally { return localStorage.setItem("theme", theme); }
    default:
      document.body.classList.add("theme-light");
      try {
        document.querySelector(".themeChanger").innerText = "dark_mode";
        document.querySelector(".themeChanger").onclick = () => { manualThemer("dark"); };
        document.querySelector(".themeChanger").title = "switch to dark mode";
        document.querySelector(".laLunaLogo").src = "/assets/svg/luna_light.svg";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
        document.querySelector(".laLunaLogoFull").src = "/assets/svg/laLuna_light.svg";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      finally { return localStorage.setItem("theme", "light"); }
  }
}

function manualThemer(theme) {
  switch (theme) {
    case "light":
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
      try {
        document.querySelector(".themeChanger").innerText = "dark_mode";
        document.querySelector(".themeChanger").onclick = () => { manualThemer("dark"); };
        document.querySelector(".themeChanger").title = "switch to dark mode";
        document.querySelector(".laLunaLogo").src = "/assets/svg/luna_light.svg";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
        document.querySelector(".laLunaLogoFull").src = "/assets/svg/laLuna_light.svg";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      finally { return localStorage.setItem("theme", theme); }
    case "dark":
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      try {
        document.querySelector(".themeChanger").innerText = "light_mode";
        document.querySelector(".themeChanger").onclick = () => { manualThemer("light"); };
        document.querySelector(".themeChanger").title = "switch to light mode";
        document.querySelector(".laLunaLogo").src = "/assets/svg/luna_dark.svg";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/damien-dufour-66PqHexp9DQ-unsplash.jpg')";
        document.querySelector(".laLunaLogoFull").src = "/assets/svg/laLuna_dark.svg";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      finally { return localStorage.setItem("theme", theme); }
    default: return;
  }
}