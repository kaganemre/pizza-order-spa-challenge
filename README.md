# 🍕 Pizza Ordering App

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![SPA](https://img.shields.io/badge/Application-SPA-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/github/license/kaganemre/pizza-order-spa-challenge)

A modern and interactive **SPA (Single Page Application)** built with **React + Vite**, where users can place pizza orders.

## 🚀 Project Overview  

A **single page application (SPA)** that allows users to create pizza orders by selecting the pizza size, dough type, and additional toppings.  
A **realistic order flow** is simulated using form validation and a fake (mock) API integration.

🎯 **Goal:**  
To demonstrate user-friendly form handling and state management using modern React practices.

---

## 🧱 Technologies Used  

| Technology | Description |
|------------|-------------|
| ⚛️ **React** | Building the user interface |
| 🚀 **Vite** | Fast development environment and build tool |
| 🔗 **Axios** | Handling HTTP requests |
| 🌐 **React Router** | Client-side routing |
| 💅 **CSS / SASS** | Styling |
| 📜 **JavaScript (ES6+)** | Programming language |

---

## 🗂 Project Structure
 
```
📦 root
├── 📁 images/
├── 📁 node_modules/
├── 📁 public/
│   └── 🎨 workintech.svg
├── 📁 sample-interfaces/
│   ├── 📁 iteration-1/
│   └── 📁 iteration-2/
├── 📁 src/
│   ├── 📁 assets/
│   │   └── ⚛️ react.svg
│   ├── 📁 components/
│   │   ├── 🧱 Footer.jsx
│   │   ├── 🧭 Header.jsx
│   │   ├── 🧾 OrderForm.jsx
│   │   └── 🎉 Success.jsx
│   ├── 🎨 index.css
│   ├── ⚙️ App.jsx
│   └── 🚀 main.jsx
├── ⚙️ vite.config.js
├── 🧾 package.json
├── 🧾 package-lock.json
├── 🧩 .gitignore
├── 🧾 LICENSE
├── 🏠 index.html
└── 📘 README.md
```

---

## 🧩 Components & Architecture

### 🧱 Core Components

- **Header** → Logo and navigation  
- **OrderForm** → Order form component (name, size, dough, toppings, special notes)  
- **Success** → Displays the order summary  

###	🧭 Data Flow

- React’s `useState` hook is used to manage form data.
- After form submission, the form data is passed to `App.jsx` via the `onSubmit` prop.
- The `onSubmit` function sends the form data to a mock API using  
  `axios.post("https://reqres.in/api/pizza", payload)`.
- Upon a successful response, the user is redirected to the `/success` page, where the `Success` component is rendered.

---

## 🧠 State Management Note

In this project, form data is lifted from the `OrderForm` component to `App.jsx` using **prop lifting**.  
Since the application is small-scale and requires only one-way data flow, a global state management solution was not used.

For larger applications, tools such as **Context API** or **Redux Toolkit** can be introduced to prevent prop drilling and create a more scalable and maintainable architecture.

---

## 📦 Installation & Running the App

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm run dev
```

---

## 🌐 Live Demo

🔗 [Live Application - Vercel](https://fsweb-s8-challenge-pizza-mauve.vercel.app/)

---

## 📄 License

This project was developed from scratch in accordance with the requirements of [fsweb-s8-challenge-pizza](https://github.com/Workintech/fsweb-s8-challenge-pizza) provided by Workintech, using the Figma design as a reference.

All code was written by me and is shared under the MIT License.
