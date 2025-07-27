// Show last update timestamp
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lastUpdate").innerText = new Date().toLocaleString();
});

// Example: Fetch logs from backend
async function fetchLogs() {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/logs");
    const data = await response.json();
    const logList = document.getElementById("recent-logs");
    logList.innerHTML = "";
    data.forEach(log => {
      const li = document.createElement("li");
      li.textContent = log;
      logList.appendChild(li);
    });
  } catch (e) {
    console.error("Error fetching logs", e);
  }
}

fetchLogs();
