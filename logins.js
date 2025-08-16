document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Basic validation
    if (!email || !password) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Simulate login (Replace this with actual API call)
    if (email === "lingarajgn45@gmail.com" && password === "password123") {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to the dashboard
    } else {
      alert("Invalid email or password.");
    }
  });