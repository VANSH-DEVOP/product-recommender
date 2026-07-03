# AI Product Recommendation System

## Tech Stack

- React (Vite)
- Node.js
- Express
- Gemini API
- Axios

## Features

- Displays a list of products.
- Accepts natural language preferences.
- Uses Gemini AI to recommend matching products.
- Returns AI-generated reasons for each recommendation.

## Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file in the backend:

```
GEMINI_API_KEY=YOUR_API_KEY
PORT=5000
```