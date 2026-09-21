# PrivySearch 🔍

A privacy-focused search engine web application designed to provide a minimal, clean search experience while reducing unnecessary local data retention and tracking.

---

## ✨ Core Features
* **Live Search Integration:** Fetches and processes web results (titles, snippets, and source domains) safely via an external backend router structure.
* **Privacy-Conscious Architecture:** Minimizes local footprint data retention; routes client lookups through a Node secure layer to safeguard downstream credentials.
* **On-Demand Data Control:** Features a dedicated client-side dashboard module to instantly clear temporary session metadata structures from browser local storage storage blocks.
* **Responsive Interface:** Fully optimized fluid layout structure built for seamless cross-device compatibility handling across desktop, tablet, and mobile breakpoints.

---

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
