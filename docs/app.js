// ... (all your existing code remains) ...

// NEW: Dedication & Surname modals
const dedicationModal = $("#dedication-modal");
const surnameModal = $("#surname-modal");
const closeDedication = $("#close-dedication");
const closeSurname = $("#close-surname");
const surnameBtn = $("#surname-history-btn");

// Show dedication on first visit
function showDedication() {
  if (!localStorage.getItem("dedicationSeen")) {
    dedicationModal.classList.remove("hidden");
  }
}

// Close handlers
closeDedication.addEventListener("click", () => {
  dedicationModal.classList.add("hidden");
  localStorage.setItem("dedicationSeen", "true");
});
surnameBtn.addEventListener("click", () => {
  dedicationModal.classList.add("hidden");
  surnameModal.classList.remove("hidden");
});
closeSurname.addEventListener("click", () => surnameModal.classList.add("hidden"));

// In init() at the very end:
initMap();
buildTimeline();
showDedication();   // <-- new call