!function(){var e,t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,t.style.backgroundColor="green",e=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),o.addEventListener("click",(function(){clearInterval(e),t.disabled=!1,t.style.backgroundColor="white"}))}();
//# sourceMappingURL=01-color-switcher.d5a92d84.js.map