window.addEventListener('load', function() {
  const gal = document.querySelector(".gallery")
  
  mainSCSSImages.forEach(path => {
    gal.innerHTML += `<a href="${path}">
        <img src="${path}" alt="scss">
    </a>`
  })
  
  baguetteBox.run('.gallery', {buttons: "auto", noScrollbars: true});
});

const mainSCSSImages = [ "https://cdn.discordapp.com/attachments/704792091955429426/951204496548196412/Capture_2022_m03.d09_2030.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204493704429638/Capture_2022_m03.d09_2030_2.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204494031597589/Capture_2022_m03.d09_2033.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204494358757407/Capture_2022_m03.d09_2032.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204494648180776/Capture_2022_m03.d09_2032_3.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204494992089128/Capture_2022_m03.d09_2032_2.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204495331831878/Capture_2022_m03.d09_2031.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204495751254036/Capture_2022_m03.d09_2031_3.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204496241991750/Capture_2022_m03.d09_2031_2.png", "https://cdn.discordapp.com/attachments/704792091955429426/951204496812433418/Capture_2022_m03.d09_2030_3.png"
]