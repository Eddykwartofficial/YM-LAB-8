# YM LAB 8

CAPSTONE PROJECT


A full-featured **STEM Education Lab website** built with **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and **json-server** for a mock backend.

The app includes pages for **Home, Gallery, Programs, Projects & Awards, About, Donate, Login, Signup**, and integrates **state management with React Context**, **local storage authentication**, and **API fetching**.

---

## 📂 Project Structure

src/
├── App.jsx
├── main.jsx
├── context/
│ └── AppContext.jsx
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Container.jsx
│ └── Card.jsx
├── pages/
│ ├── HomePage.jsx
│ ├── GalleryPage.jsx
│ ├── ProgramsPage.jsx
│ ├── ProjectsAwardsPage.jsx
│ ├── AboutPage.jsx
│ ├── DonatePage.jsx
│ ├── LoginPage.jsx
│ ├── SignupPage.jsx
│ └── NotFound.jsx
└── services/
└── api.js


---

## ⚙️ Setup Instructions

### 1. Clone and install
```bash
git clone https://github.com/yourusername/stem-lab-app.git
cd stem-lab-app
npm install

2. Install dependencies
npm install react-router-dom axios framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

3. Configure Tailwind

In tailwind.config.js update content paths:

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}


In src/index.css add:

@tailwind base;
@tailwind components;
@tailwind utilities;

4. Mock API with json-server

Create db.json at project root:

{
  "programs": [
    { "id": 1, "title": "Robotics Basics", "description": "Intro to building robots" }
  ],


