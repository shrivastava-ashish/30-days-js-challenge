async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) throw new Error("HTTP error! status: " + response.status);
    const data = await response.json();
    div.textContent = `"${data.quote}" — ${data.author}`;
  } catch (error) {
    console.error("Fetch error:", error);
    div.textContent = "Failed to fetch quote. Please try again.";
  }
}

btn.addEventListener("click", fetchData);

window.addEventListener("DOMContentLoaded", fetchData);