function scrollToElement(element) {
    let historyElement = document.getElementById(element);
    let offsetBottom =
      historyElement.getBoundingClientRect().top + window.pageYOffset - historyElement.offsetHeight;
    let duration = 800; // Durée de l'animation en millisecondes
    let start = window.pageYOffset;
    let startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();
  
    function scroll() {
      let now =
        "now" in window.performance ? performance.now() : new Date().getTime();
      let time = Math.min(1, (now - startTime) / duration);
      let timeFunction = easeInOutQuad(time);
      window.scroll(0, Math.ceil(timeFunction * (offsetBottom - start) + start));
  
      if (Math.abs(window.pageYOffset - offsetBottom) < 1 || time >= 1) {
        return;
      }
  
      requestAnimationFrame(scroll);
    }
  
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  
    scroll();
  }


  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li");
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      
      // Vérifie si la section est au centre de la vue
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        // Réinitialise les couleurs des liens
        navLinks.forEach(link => link.classList.remove("here"));
        
        // Ajoute la couleur spéciale au lien actif
        navLinks[index].classList.add("here");
      }
    });
  });


window.onload = () =>{
  document.querySelector('main').style.display = "none";
  setTimeout(() =>{
    document.querySelector('main').style.display = "block";

  },1995);
  document.querySelector('form').reset();

}