function applyThemeOnLoad() {
  let theme = localStorage.getItem("theme");
  switch (theme) {

    case "light":

      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
      document.querySelector(".themeChanger").innerText = "dark_mode";
      document.querySelector(".themeChanger").onclick = () => { manualThemer("dark"); };
      document.querySelector(".themeChanger").title = "switch to dark mode";

      document.querySelector("meta[name='theme-color']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='msapplication-TileColor']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='msapplication-navbutton-color']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", "#dcc6bb");

      // root header
      try { document.querySelector(".laLunaLogo").src = `/assets/svg/luna_${theme}.svg`; }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // La Luna 🌙 (logo)
      try {
        document.querySelector(".laLunaLogoFull").src = `/assets/svg/tbmassoc_${theme}.svg`;
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // vtNet (logo)
      try {
        document.querySelector(".vtNetLogoFull").src = "/assets/images/logo/vtNet_logo_light.png";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      // sub-page articles
      try { document.querySelector(".subPageHeader").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')"; }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      finally {

        // requires /vtNet/assets/js/theme.js
        try { vtNetLogos(theme); }
        catch (error) { console.warn("/vtNet/assets/js/theme.js not found. skipping.."); }

        return localStorage.setItem("theme", theme);

      }

    case "dark":

      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      document.querySelector(".themeChanger").innerText = "light_mode";
      document.querySelector(".themeChanger").onclick = () => { manualThemer("light"); };
      document.querySelector(".themeChanger").title = "switch to light mode";

      document.querySelector("meta[name='theme-color']").setAttribute("content", "#3d374c");
      document.querySelector("meta[name='msapplication-TileColor']").setAttribute("content", "#3d374c");
      document.querySelector("meta[name='msapplication-navbutton-color']").setAttribute("content", "#3d374c");
      document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", "#3d374c");

      // root header
      try { document.querySelector(".laLunaLogo").src = `/assets/svg/luna_${theme}.svg`; }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // La Luna 🌙 (logo)
      try {
        document.querySelector(".laLunaLogoFull").src = `/assets/svg/tbmassoc_${theme}.svg`;
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/damien-dufour-66PqHexp9DQ-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // vtNet (logo)
      try {
        document.querySelector(".vtNetLogoFull").src = "/assets/images/logo/vtNet_logo_dark.png";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/damien-dufour-66PqHexp9DQ-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      // sub-page articles
      try { document.querySelector(".subPageHeader").style.backgroundImage = "url('/assets/images/background/damien-dufour-66PqHexp9DQ-unsplash.jpg')"; }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      finally {

        // requires /vtNet/assets/js/theme.js
        try { vtNetLogos(theme); }
        catch (error) { console.warn("/vtNet/assets/js/theme.js not found. skipping.."); }

        return localStorage.setItem("theme", theme);

      }

    default:

      document.body.classList.add("theme-light");
      document.querySelector(".themeChanger").innerText = "dark_mode";
      document.querySelector(".themeChanger").onclick = () => { manualThemer("dark"); };
      document.querySelector(".themeChanger").title = "switch to dark mode";

      document.querySelector("meta[name='theme-color']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='msapplication-TileColor']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='msapplication-navbutton-color']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", "#dcc6bb");

      // root header
      try { document.querySelector(".laLunaLogo").src = `/assets/svg/luna_light.svg`; }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // La Luna 🌙 (logo)
      try {
        document.querySelector(".laLunaLogoFull").src = `/assets/svg/tbmassoc_light.svg`;
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // vtNet (logo)
      try {
        document.querySelector(".vtNetLogoFull").src = "/assets/images/logo/vtNet_logo_light.png";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      // sub-page articles
      try { document.querySelector(".subPageHeader").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')"; }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      finally {

        // requires /vtNet/assets/js/theme.js
        try { vtNetLogos("light"); }
        catch (error) { console.warn("/vtNet/assets/js/theme.js not found. skipping.."); }

        return localStorage.setItem("theme", "light");

      }

  }
}

function manualThemer(theme) {
  switch (theme) {

    case "light":

      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
      document.querySelector(".themeChanger").innerText = "dark_mode";
      document.querySelector(".themeChanger").onclick = () => { manualThemer("dark"); };
      document.querySelector(".themeChanger").title = "switch to dark mode";

      document.querySelector("meta[name='theme-color']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='msapplication-TileColor']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='msapplication-navbutton-color']").setAttribute("content", "#dcc6bb");
      document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", "#dcc6bb");

      // root header
      try { document.querySelector(".laLunaLogo").src = `/assets/svg/luna_${theme}.svg`; }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // La Luna 🌙 (logo)
      try {
        document.querySelector(".laLunaLogoFull").src = `/assets/svg/tbmassoc_${theme}.svg`;
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // vtNet (logo)
      try {
        document.querySelector(".vtNetLogoFull").src = "/assets/images/logo/vtNet_logo_light.png";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      // sub-page articles
      try { document.querySelector(".subPageHeader").style.backgroundImage = "url('/assets/images/background/davies-designs-studio-f5_lfi2S-d4-unsplash.jpg')"; }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      finally {

        // requires /vtNet/assets/js/theme.js
        try { vtNetLogos(theme); }
        catch (error) { console.warn("/vtNet/assets/js/theme.js not found. skipping.."); }

        return localStorage.setItem("theme", theme);

      }

    case "dark":

      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      document.querySelector(".themeChanger").innerText = "light_mode";
      document.querySelector(".themeChanger").onclick = () => { manualThemer("light"); };
      document.querySelector(".themeChanger").title = "switch to light mode";

      document.querySelector("meta[name='theme-color']").setAttribute("content", "#3d374c");
      document.querySelector("meta[name='msapplication-TileColor']").setAttribute("content", "#3d374c");
      document.querySelector("meta[name='msapplication-navbutton-color']").setAttribute("content", "#3d374c");
      document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", "#3d374c");

      // root header
      try { document.querySelector(".laLunaLogo").src = `/assets/svg/luna_${theme}.svg`; }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // La Luna 🌙 (logo)
      try {
        document.querySelector(".laLunaLogoFull").src = `/assets/svg/tbmassoc_${theme}.svg`;
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/damien-dufour-66PqHexp9DQ-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // vtNet (logo)
      try {
        document.querySelector(".vtNetLogoFull").src = "/assets/images/logo/vtNet_logo_dark.png";
        document.querySelector(".laLunaHero").style.backgroundImage = "url('/assets/images/background/damien-dufour-66PqHexp9DQ-unsplash.jpg')";
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      // sub-page articles
      try { document.querySelector(".subPageHeader").style.backgroundImage = "url('/assets/images/background/damien-dufour-66PqHexp9DQ-unsplash.jpg')"; }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      finally {

        // requires /vtNet/assets/js/theme.js
        try { vtNetLogos(theme); }
        catch (error) { console.warn("/vtNet/assets/js/theme.js not found. skipping.."); }

        return localStorage.setItem("theme", theme);

      }

    default: return;

  }
}