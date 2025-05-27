const title = document.getElementById('projectTitle');
const moreInfo = document.getElementById('moreInfo');
const toggleLink = document.getElementById('toggleLink');

title.addEventListener('dblclick', () => {
    moreInfo.classList.toggle('hidden');
});

toggleLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    moreInfo.classList.toggle('hidden');
});
function redirectToHome() {
  window.location.href = "Home.html"; 
}
function redirectToMyWebsite() {
    window.location = "https://mz6wsk-3000.csb.app/certificates.html";
}
