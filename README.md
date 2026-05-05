## 💡 Overview
This project is a full-stack banking support system designed to automatically handle failed transactions using AI-based ticket resolution.

When a transaction fails, the system intelligently generates a support ticket and suggests a resolution, reducing manual effort and improving response time.

---

## 🧩 Features
- User Registration & Login (Spring Security)
- Perform Banking Transactions
- Detect Transaction Success & Failure
- 🤖 AI-based Auto Ticket Creation
- AI Suggestion for Ticket Resolution
- Admin Panel to View & Resolve Tickets
- Ticket Tracking System

---

## 🔄 Workflow
1. User logs in and performs a transaction  
2. If success → transaction stored in database  
3. If failure → AI automatically creates a ticket  
4. Ticket stored in database  
5. Admin views and resolves ticket  
6. User can track ticket status  

---

## 🏗️ Architecture
- Frontend: React.js  
- Backend: Spring Boot (REST APIs)  
- Database: MySQL  
- AI Module: Auto ticket creation & suggestion  

---

## 🛠️ Tech Stack
Java | Spring Boot | React.js | MySQL | REST APIs | AI  

---

## 📸 Screenshots
<p align="center">
  <img src="https://github.com/user-attachments/assets/41b00836-eb0d-4b78-b415-048dbea09a4e" width="45%"/>
  <img src="https://github.com/user-attachments/assets/708757b3-4b3b-40f3-b7f4-cf6aa0ca7ead" width="45%"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/b8c599a0-befd-44d7-b628-5a0da1b3a134" width="45%"/>
  <img src="https://github.com/user-attachments/assets/eaf78c8d-4aee-4a2b-b119-bb97d8dd1e51" width="45%"/>
</p>

## 📡 API Endpoints

### Auth
- POST /api/auth/register  
- POST /api/auth/login  

### Transaction
- POST /api/transaction  

### Ticket
- POST /api/ticket  
- GET /api/ticket  
- PUT /api/ticket/{id}  

---

## ▶️ How to Run

### Backend
- Configure MySQL  
- Run Spring Boot  

### Frontend
- npm install  
- npm start  

---

## 💡 Future Improvements
- Real-time notifications  
- Better AI model  
- Cloud deployment  

---

## 👩‍💻 Author
Prachi Wankar
