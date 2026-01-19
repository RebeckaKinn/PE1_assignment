const API_URL = "https://v2.api.noroff.dev";
const form = document.getElementById("login-form");
const message = document.getElementById("message");

form.addEventListener("submit", loginUser);

async function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const loginData = {
    email: email,
    password: password
  };

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": "2191ebfa-cc8f-48e9-a01f-9af139045325"
      },
      body: JSON.stringify(loginData)
    });

    const result = await response.json();

    if (!response.ok) {
      message.textContent = result.errors?.[0]?.message || "Login failed";
      message.style.color = "red";
      console.log("login failed")
      return;
    }

    localStorage.setItem("accessToken", result.data.accessToken);
    localStorage.setItem("user", JSON.stringify({
      name: result.data.name,
      email: result.data.email,
      avatar: result.data.avatar
    }));
    console.log("name: " + result.data.name);

    message.textContent = "Success!";
    message.style.color = "green";

    setTimeout(() => {
      window.location.href = "/index.html";
    }, 500);

  } catch (error) {
    console.error(error);
    message.textContent = "Something went wrong";
    message.style.color = "red";
  }
}
