# Employee Management

A simple full-stack Employee Management application built with React for the frontend and Flask (Python) with MongoDB for the backend. This app allows you to add employees and view the list of all employees.

---

## Features

- Add new employees with name and role.
- View a list of all employees.
- Data is persisted in MongoDB.
- Simple, clean UI with React.

---

## Tech Stack

- **Frontend:** React
- **Backend:** Flask (Python)
- **Database:** MongoDB
- **HTTP client:** Axios
- **Styling:** CSS

---

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3
- MongoDB (running locally on `mongodb://localhost:27017/` by default)
- pip (Python package manager)

---

### Backend Setup (Flask + MongoDB)

1. **Install dependencies:**
    ```bash
    pip install flask flask-cors pymongo
    ```

2. **Start MongoDB:**  
   Make sure your MongoDB server is running at `mongodb://localhost:27017/`.

3. **Run the Flask server:**
    ```bash
    python app.py
    ```
   The backend server will start at `http://localhost:5000/`.

---

### Frontend Setup (React)

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Start the React app:**
    ```bash
    npm start
    ```
   The frontend will start at `http://localhost:3000/` by default.

---

## Project Structure

```
├── App.css
├── App.js
├── App.test.js
├── app.py
├── index.css
├── index.js
├── package.json
└── ...
```

- **App.js**: Main React component for UI and API calls.
- **app.py**: Flask backend API for employee operations.
- **App.css / index.css**: Styling files.
- **App.test.js**: App test file (default, can be expanded).
- **index.js**: ReactDOM root.

---

## API Endpoints

- `GET /employees`: Returns list of all employees.
- `POST /add-employee`: Adds a new employee (expects JSON with `name` and `role`).

---

## Example Usage

- Add employee by submitting the form (name and role).
- The employee list updates automatically.

---

## Notes

- The backend expects MongoDB to be running locally. You can change the connection string in `app.py` if you use MongoDB Atlas or different settings.
- CORS is enabled for local development.

---

## License

This project is for demonstration/learning purposes.
