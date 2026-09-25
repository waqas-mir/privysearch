# PrivySearch 🔍

A privacy-focused search interface prototype built with HTML, CSS, JavaScript, Node.js, and Express.

PrivySearch demonstrates a clean search experience with a lightweight Express backend, temporary browser data controls, and a mock search-results API.

> Project status: Prototype. The current backend returns sample results and does not connect to a live external search provider yet.

---

## ✨ Features

- Clean and minimal search interface
- Responsive layout for desktop and mobile screens
- Express backend API route at `/api/search`
- Mock search results for demonstration
- Temporary browser session data stored in `localStorage`
- Clear-data button to remove local temporary data
- Privacy notice explaining the app’s limitations

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Browser storage: `localStorage`
- Architecture: simple frontend + mock API prototype

---

## 📁 Project Structure

```text
privysearch/
├── index.html
├── style.css
├── script.js
├── server.js
├── docs/
│   └── homepage.png
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Prerequisites
- Node.js installed on your machine

### Steps
1. Open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open the app in your browser:
   ```text
   http://localhost:3000
   ```

---

## 🧠 How It Works

This project is a frontend prototype with a small Express backend. The frontend sends user queries to `/api/search`, and the backend responds with mock search results for demonstration purposes. The app also includes a privacy panel and a clear-data button to show how temporary session data can be managed on the client side.

---

## 📸 Screenshots

![PrivySearch homepage](./docs/homepage.png)

---

## 📝 Notes

This project is designed as a concept/demo rather than a production-grade search engine. It is useful for showcasing frontend/backend integration, client-side privacy controls, and UI design ideas.

---

## 🔗 Links

- GitHub: https://github.com/waqas-mir/privysearch
- LinkedIn: https://www.linkedin.com/in/waqasmir-dev/
- Email: waqasmir2005@gmail.com
