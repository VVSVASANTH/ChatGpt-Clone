# 💬 ChatGPT Clone

A simple ChatGPT clone built using HTML, CSS, JavaScript, and Node.js. This project uses the OpenAI GPT API to simulate human-like conversations through a clean and responsive chat interface.

## ✨ Features

- Interactive chat interface
- Real-time responses from OpenAI GPT
- Responsive and user-friendly UI
- Built using only HTML, CSS, JS, and Node.js

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **API**: OpenAI GPT-3.5/4 API

## 📆 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- OpenAI API key (get it from [platform.openai.com](https://platform.openai.com))

### Setup

1. **Clone the repository:**

```bash
git clone https://github.com/vasanthvakati/chatgpt-clone.git
cd chatgpt-clone
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set your API key:**

Create a `.env` file in the root directory and add the following:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

4. **Run the server:**

```bash
node index.js
```

5. **Open the app:**

Go to [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
chatgpt-clone/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── index.js
├── package.json
└── .env
```


## ⚠️ API Key Security

Make sure your OpenAI API key is **never exposed on the frontend**. This app keeps it safe on the server side using Node.js and Express.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by VASANTH VAKATI.


Let me know if you'd like this tailored for a different tech stack or to include project screenshots or badges.

