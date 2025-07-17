# Sweet Shop Backend

A Node.js + Express backend for Sweet Shop inventory management, featuring in-memory storage, RESTful API, and full test-driven development (TDD) with Jest and Supertest.

## UI Screenshot
![Sweet Shop UI Screenshot](https://github.com/utsavpatoliya/Sweet-Shop/blob/e96403d46123e9617e19f8a2e416723077c16586/sweet-shop-frontend/Screenshot%20(172).png)
![Sweet Shop UI Screenshot](https://github.com/utsavpatoliya/Sweet-Shop/blob/e96403d46123e9617e19f8a2e416723077c16586/sweet-shop-frontend/Screenshot%20(173).png)
![Sweet Shop UI Screenshot](https://github.com/utsavpatoliya/Sweet-Shop/blob/e96403d46123e9617e19f8a2e416723077c16586/sweet-shop-frontend/Screenshot%20(174).png)
![Sweet Shop UI Screenshot](https://github.com/utsavpatoliya/Sweet-Shop/blob/e96403d46123e9617e19f8a2e416723077c16586/sweet-shop-frontend/Screenshot%20(175).png)

## Features
- Add, view, delete sweets
- Search/filter sweets by name, category, and price range
- Purchase/restock sweets with inventory management
- In-memory data storage (no database required)
- TDD: All features covered by automated tests

## Tech Stack
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/) & [Supertest](https://github.com/ladjs/supertest) for TDD

## Getting Started

### 1. Clone the repository
```
git clone <your-repo-url>
cd sweet-shop
```

### 2. Install dependencies
```
npm install
```

### 3. Run the backend server
```
node index.js
```
The API will be available at [http://localhost:3000/api/sweets](http://localhost:3000/api/sweets).

### 4. Run tests (TDD)
```
npm test
```
All endpoints and logic are covered by Jest/Supertest tests in `tests/sweets.test.js`.

## API Endpoints
- `POST   /api/sweets`         — Add a new sweet
- `GET    /api/sweets`         — List/search/filter sweets
- `DELETE /api/sweets/:id`     — Delete a sweet
- `POST   /api/sweets/:id/purchase` — Purchase (decrease stock)
- `POST   /api/sweets/:id/restock`  — Restock (increase stock)

## Project Structure
```
controllers/
  sweetsController.js   # API logic
models/
  sweet.js              # In-memory data model
routes/
  sweets.js             # Express routes
index.js                # App entry point

# Tests
/tests/sweets.test.js   # Jest + Supertest TDD
```

## Connect to the Frontend
Use with the [Sweet Shop Frontend](../sweet-shop-frontend) React app for a complete solution.


## License
MIT

