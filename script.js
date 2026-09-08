/* =========================================================
   GG SALORT WEBSITE
   Overlay windows
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const openButtons = document.querySelectorAll("[data-open]");
  const closeButtons = document.querySelectorAll("[data-close]");
  const overlays = document.querySelectorAll(".overlay");


  /* =======================================================
     OPEN WINDOW
  ======================================================= */

  openButtons.forEach(button => {

    button.addEventListener("click", () => {

      const targetId = button.dataset.open;
      const target = document.getElementById(targetId);

      if (!target) return;

      target.classList.add("is-open");

      document.body.style.overflow = "hidden";

    });

  });


  /* =======================================================
     CLOSE WINDOW
  ======================================================= */

  closeButtons.forEach(button => {

    button.addEventListener("click", () => {

      closeAllWindows();

    });

  });


  /* =======================================================
     CLICK OUTSIDE WINDOW
  ======================================================= */

  overlays.forEach(overlay => {

    overlay.addEventListener("click", event => {

      if (event.target === overlay) {

        closeAllWindows();

      }

    });

  });


  /* =======================================================
     ESC KEY
  ======================================================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      closeAllWindows();

    }

  });


  /* =======================================================
     CLOSE FUNCTION
  ======================================================= */

  function closeAllWindows() {

    overlays.forEach(overlay => {

      overlay.classList.remove("is-open");

    });

    document.body.style.overflow = "";

  }

});