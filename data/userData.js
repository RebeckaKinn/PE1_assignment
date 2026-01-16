const API_URL = "https://v2.api.noroff.dev";
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmViZWNrYWtpbm4iLCJlbWFpbCI6InJlYmtpbjAyNzU1QHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzY4Mjk1OTEyfQ.HLmQo1sRE5U9DMjuEm-oLZc2iqi6SJV_XJ9Z7_4c0PA',
    "X-Noroff-API-Key": '2191ebfa-cc8f-48e9-a01f-9af139045325'
  }
};

const form = document.getElementById("register-form");
const message = document.getElementById("message");

form.addEventListener("submit", registerUser);

async function registerUser(event) {
  event.preventDefault();
}