# Food-Reel

Food-Reel is a simple food listing and partner management app consisting of a Node/Express backend and a React + Vite frontend. This repository contains the backend server and the frontend client used for authentication, food partner management, and food item CRUD operations.

**Key features**
- User and Food Partner authentication (JWT)
- Image uploads via ImageKit
- MongoDB persistence for users and food items
- Vite + React frontend with form validation and protected routes

**Tech stack**
- Backend: Node.js, Express, Mongoose, JWT, ImageKit
- Frontend: React, Vite, Tailwind (configured), React Router

**Repository structure**
- `backend/` – Express server and API
  - `server.js` – start script
  - `src/app.js` – Express app configuration
  - `src/controllers/` – controller implementations
  - `src/routes/` – API route definitions
  - `src/models/` – Mongoose models
  - `src/services/storage.service.js` – ImageKit integration
- `frontend/` – React client (Vite)
  - `src/` – React components, pages and routes
  - `src/api/axiosInstance.js` – client API axios instance

Getting started
---------------

Prerequisites
- Node.js (v16+ recommended)
- npm (comes with Node)
- MongoDB (local or MongoDB Atlas)

Environment variables
---------------------
Create a `.env` file in the `backend/` folder (or set env vars in your host). The backend code references the following variables:

- `PORT` – (optional) port the server listens on (default 3000)
- `MONGODB_URI` – MongoDB connection string (required)
- `FOOD_REEL_JWt_SECRET` – JWT secret used for signing tokens (required)
- `FRONTEND_URL` – Frontend origin allowed by CORS (optional)
- `IMAGEKIT_PUBLIC_KEY` – ImageKit public key (optional, for uploads)
- `IMAGEKIT_PRIVATE_KEY` – ImageKit private key (optional, for uploads)
- `IMAGEKIT_URL_ENDPOINT` – ImageKit URL endpoint (optional)

Note: The backend code uses the `FOOD_REEL_JWt_SECRET` variable (note the capitalization used in code). Ensure the key name matches exactly when you set it.

Backend: install & run
----------------------
Open PowerShell and run:

```
cd backend
npm install
# start server
node server.js
```

If you prefer auto-restart on changes, install `nodemon` globally and run:

```
npm i -g nodemon; cd backend; nodemon server.js
```

Frontend: install & run (development)
------------------------------------
Open PowerShell and run:

```
cd frontend
npm install
npm run dev
```

Build frontend for production

```
cd frontend
npm run build
```

API overview
------------
API route files live in `backend/src/routes/`:

- `auth.routes.js` – login, register, token endpoints
- `food.routes.js` – food item CRUD and partner endpoints

Controllers are implemented in `backend/src/controllers/` and use Mongoose models from `backend/src/models/`.

Troubleshooting
---------------
- If the frontend dev server fails: ensure dependencies are installed and the correct Node version is used.
- If the backend cannot connect to MongoDB: verify `MONGODB_URI` and that your DB allows connections from your host.
- For JWT issues: confirm `FOOD_REEL_JWt_SECRET` is set and consistent across environments.

Contributing
------------
Contributions are welcome — open an issue or submit a pull request. When contributing, keep changes focused and include short descriptions of why a change is necessary.

License
-------
This repository does not include a license file. Add a `LICENSE` if you wish to publish under a specific license.

Maintainer / Contact
--------------------
Repository owner: Swapnil-2210
