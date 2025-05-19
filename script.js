const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

let messages = [
  { role: "system", content: "You are a helpful assistant." }
];

function appendMessage(role, text, isStreaming = false) {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${role}`;
  wrapper.innerHTML = `
    <div class="avatar">${role === "user" ? "🧑" : "🤖"}</div>
    <div class="text">${isStreaming ? "<span class='stream'></span>" : text}</div>
  `;
  chatBox.appendChild(wrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
  return wrapper.querySelector(".stream");
}

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = userInput.value.trim();
  if (!input) return;

  appendMessage("user", input);
  messages.push({ role: "user", content: input });
  userInput.value = "";

  const streamEl = appendMessage("assistant", "", true);
  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages })
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");

  let fullText = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split("\n").filter(line => line.trim());

    for (const line of lines) {
      if (line.startsWith("data:")) {
        const token = line.replace("data: ", "");
        if (token === "[DONE]") return;

        fullText += token;
        streamEl.innerHTML += token.replace(/\n/g, "<br>");
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }
  }

  messages.push({ role: "assistant", content: fullText });
});