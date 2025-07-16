# Sweet Shop Frontend

A modern, responsive inventory management UI for a Sweet Shop, built with React, Vite, and Tailwind CSS.

## Features
- View, search, and filter sweets
- Add new sweets
- Delete sweets
- Purchase/restock sweets (with inventory management)
- Responsive, attractive UI
- Real-time feedback for actions

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

## Getting Started

### 1. Clone the repository
```
git clone <your-repo-url>
cd sweet-shop-frontend
```

### 2. Install dependencies
```
npm install
```

### 3. Start the development server
```
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### 4. Connect to the Backend
Make sure your backend API is running at `http://localhost:3000/api/sweets` (or update `src/api/sweets.js` if different).

## Project Structure
```
src/
  api/
    sweets.js         # Axios API helpers
  components/
    SweetsList.jsx    # Sweets card grid
    AddSweetForm.jsx  # Add sweet form
    SearchBar.jsx     # Search/filter form
  App.jsx             # Main app
  index.css           # Tailwind CSS imports
```

## Customization
- Edit `src/api/sweets.js` to change the backend API URL.
- Tweak Tailwind classes in components for your own style.

