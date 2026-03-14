# AI Assisted Journal System

An AI-powered journaling application where users write journal entries after immersive nature sessions (forest, ocean, mountain).  
The system stores journal entries, analyzes emotions using an LLM, and provides insights about the user's mental state over time.

---

# Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Gemini LLM API

### Frontend
- React (Vite)
- Axios

---

# Features

- Create journal entries
- AI-powered emotion analysis using Gemini
- View previous journal entries
- Generate insights about emotional patterns
- Simple and responsive UI

---

# Project Structure

ai-journal-system
│
├── backend
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── services
│ └── server.js
│
├── frontend
│ ├── src
│ │ ├── components
│ │ └── App.jsx
│
├── README.md
└── ARCHITECTURE.md


---

# API Endpoints

### Create Journal Entry

POST `/api/journal`

Example Request:

```json
{
  "userId": "123",
  "ambience": "forest",
  "text": "I felt calm listening to the rain."
}

Get User Journals

GET /api/journal/:userId

Example: GET /api/journal/123


Analyze Journal Text
POST /api/journal/analyze
{
"text": "I felt calm today after listening to rain"
}

Get Insights

GET /api/journal/insights/:userId

Example response:
{
  "totalEntries": 8,
  "topEmotion": "calm",
  "mostUsedAmbience": "forest",
  "recentKeywords": ["focus", "nature", "rain"]
}

Installation & Running the Project
1. Clone the Repository

git clone https://github.com/your-username/ai-journal-system.git
cd ai-journal-system

2. Backend Setup
cd backend
npm install
npm run dev

Backend runs on: [link](http://localhost:5000)

3. Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on: [link](http://localhost:5173)

Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection
GEMINI_API_KEY=your_gemini_api_key