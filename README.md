# 📱 PhoneBoarder

**PhonBoarder** is a MERN-based web application designed to help first-time smartphone users learn how to operate their devices through guided lessons, interactive simulations, and step-by-step tutorials.

---

## 🚀 Features

- **Interactive Lessons** – Covers essential topics like calling, texting, contacts, camera, and settings.
- **Simulated Phone Interface** – Hands-on practice without risk of breaking anything.
- **Progress Tracking** – Users can see how far they’ve come and revisit lessons.
- **Multilingual Support** – Lessons available in multiple languages for accessibility.
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile browsers.

---

## 🛠️ Tech Stack

| Layer        | Technology |
|-------------|------------|
| **Frontend** | React, Tailwind CSS |
| **Backend**  | Node.js, Express |
| **Database** | MongoDB |
| **State Mgmt** | Context API |
| **Containerization** | Docker (for development & deployment) |

---

## 📂 Project Structure

phonboarder/
├── client/ # React frontend
├── server/ # Express backend
├── docker/ # Docker configurations
├── docs/ # Project documentation
└── README.md # Present file


---

## ⚙️ Getting Started

Follow these steps to run **PhonBoarder** locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/phonboarder.git

# 2. Navigate into the project folder
cd phonboarder

# 3. Install dependencies
npm install         # installs root dependencies
cd client && npm install  # installs frontend dependencies
cd ../server && npm install  # installs backend dependencies

# 4. Run the app (development mode)
npm run dev


Open http://localhost:3000