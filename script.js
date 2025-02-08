document.addEventListener('DOMContentLoaded', (event) => {
  // Highlight.js
  document.querySelectorAll('pre code').forEach(block => {
    hljs.highlightBlock(block);
  });

  // Collapsible sections
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Ripple effect
  document.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('pixel-button') || target.classList.contains('collapsible')) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      target.appendChild(ripple);

      ripple.addEventListener('animationend', function () {
        ripple.remove();
      });
    }
  });
});