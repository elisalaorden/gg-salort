/* =========================================
   GG SALORT — INTERACTIONS
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const studioOverlay = document.getElementById("studioOverlay");
const sampleOverlay = document.getElementById("sampleOverlay");
const liveOverlay = document.getElementById("liveOverlay");

const openStudio = document.getElementById("openStudio");
const openSamplePack = document.getElementById("openSamplePack");
const openLive = document.getElementById("openLive");

const closeStudio = document.getElementById("closeStudio");
const closeSample = document.getElementById("closeSample");
const closeLive = document.getElementById("closeLive");


/* =========================================
   OPEN OVERLAY
========================================= */

function openOverlay(overlay) {

  overlay.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE OVERLAY
========================================= */

function closeOverlay(overlay) {

  overlay.classList.remove("active");

  document.body.style.overflow = "";

}


/* =========================================
   STUDIO
========================================= */

openStudio.addEventListener("click", function () {

  openOverlay(studioOverlay);

});


closeStudio.addEventListener("click", function () {

  closeOverlay(studioOverlay);

});


/* =========================================
   SAMPLE PACK
========================================= */

openSamplePack.addEventListener("click", function () {

  openOverlay(sampleOverlay);

});


closeSample.addEventListener("click", function () {

  closeOverlay(sampleOverlay);

});


/* =========================================
   LIVE
========================================= */

openLive.addEventListener("click", function () {

  openOverlay(liveOverlay);

});


closeLive.addEventListener("click", function () {

  closeOverlay(liveOverlay);

});


/* =========================================
   CLOSE BY CLICKING OUTSIDE WINDOW
========================================= */

studioOverlay.addEventListener("click", function (event) {

  if (event.target === studioOverlay) {
    closeOverlay(studioOverlay);
  }

});


sampleOverlay.addEventListener("click", function (event) {

  if (event.target === sampleOverlay) {
    closeOverlay(sampleOverlay);
  }

});


liveOverlay.addEventListener("click", function (event) {

  if (event.target === liveOverlay) {
    closeOverlay(liveOverlay);
  }

});


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    closeOverlay(studioOverlay);
    closeOverlay(sampleOverlay);
    closeOverlay(liveOverlay);

  }

});