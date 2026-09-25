# PrivySearch 🔍

A privacy-focused search interface prototype built with HTML, CSS, JavaScript, Node.js, and Express.

PrivySearch demonstrates a clean search experience with a lightweight Express backend, temporary browser data controls, and a mock search-results API.

> **Project status:** Prototype. The current backend returns sample results and does not connect to a live search provider yet.

---

## ✨ Core Features

- Clean and responsive search interface
- Express backend API route at `/api/search`
- Mock search results for demonstration
- Temporary session data stored in browser `localStorage`
- Button to clear locally stored application data
- Privacy information panel explaining the project's limitations
- Responsive layout for desktop and mobile screens

## 🛠️ Technology Stack
* **Frontend:** HTML5, CSS3, JavaScript ES6 (Asynchronous Fetch APIs, responsive flex design layouts)
* **Backend:** Node.js, Express.js (Restrained secure route proxy handling modules)

---

## 📦 Project Structure
```text
privysearch/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server/
│   └── server.js
└── README.md
```

---

## ⚙️ Installation & Local Setup

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) runtime engine environment configurations set up.

### Steps
1. **Unzip the downloaded folder structures.**
2. **Navigate into the target folder path:**
   ```bash
   cd privysearch
   ```
3. **Install routing packages dependencies:**
   ```bash
   npm install
   ```
4. **Boot up the server:**
   ```bash
   npm start
   ```
5. Open your local browser to access the endpoint portal interface at `http://localhost:3000`.
