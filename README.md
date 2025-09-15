#  HealSync Project
#  HealSync
## Overview

**Heal Sync** is a healthcare management and telehealth platform designed to connect patients, families, and healthcare providers in one system. It provides features like appointment booking, medication reminders, health record management, real-time alerts, and emergency support. By integrating both backend and frontend technologies, Heal Sync ensures smooth communication, secure data handling, and user-friendly access to healthcare services anytime, anywhere.

---

##  Objectives

*To enhance communication between patients,caregivers through a centralized platform.
*To provide appointment booking, medication reminders, and emergency alert services.
*To offer a secure space for family members to track patient health and progress.
*To enable real-time notifications and alerts for critical updates.
*To ensure safe storage and easy access to patient medical records.
*To support role-based access control for patients, doctors, and administrators.
*To increase transparency with activity logs and secure data handling.
*To improve overall healthcare accessibility through telehealth integration.

---

## Architecture

### **Tech Stack**

| Layer              | Technology Used                                                           |
| ------------------ | ------------------------------------------------------------------------- |
| **Frontend**       | React.js (with React Router, Tailwind/Bootstrap for styling)|
| **Backend**        | Node.js (Express.js framework) |
| **Database**       | MongoDB (NoSQL, Mongoose ORM) |
| **Real-time**      | Socket.IO ( live updates & emergency alerts) |
| **Authentication** | JWT (JSON Web Tokens) with role-based access control      |

---

##  Features

**User Management**

*The system allows patients and family members to create and manage separate accounts.
*Family members can edit care plans and monitor patient logs.

**Mood & Behaviour Tracking**

*The mood and behavior tracking feature enables patients to log their daily mood and behavioral changes. 
*The system analyzes patterns and alerts family members if abnormal trends are detected.


**Health Monitoring**

*The health monitoring feature allows patients to manually log vital health parameters like weight, glucose levels, and blood pressure.
*The system generates trend analysis reports for family members to track patient health


**Shared Calendars & Appointments**

*The shared calendar and appointment management feature enables patients and family members to schedule, update, and track medical appointments with automated reminders.


**Emergency Alerts & SOS Button**

*The emergency alert and SOS button feature allows patients to send an immediate distress signal to family members with their live location in case of an emergency


**Task & Plan Management**
*The task and plan management feature allows family members to assign and track care-related tasks for patients, ensuring timely completion of essential health activities


**Notifications & Alerts**
*The notifications and alerts feature ensures that patients and family members receive timely reminders for appointments, medications, and emergency situations.


**Live Location Tracking**
*The live location tracking feature allows family members to monitor the real-time location of a patient in case of an emergency or when needed.


**Resource Center**
*The resource center provides patients and family members with educational materials such as articles, videos, and health-related resources.


**Progress Tracking & Reports**
*The progress tracking and reports feature allows patients and family members to generate and review health trends, completed tasks, and overall progress

---

##  Setup Instructions

###  **Clone Repository**

```bash
git clone https://github.com/your-username/heal-sync.git
cd heal-sync

```

###  **Clone Repository**
Backend (Node.js + Express):

```bash
cd backend
npm install

```
Frontend (React.js):

```bash
cd my-app
npm install

```
### 2️⃣ **Configure Database**

* Heal Sync uses MongoDB. Update your backend/config/db.js with the connection string:

```js
const MONGODB_URI = "mongodb://localhost:5000/heal_sync";

}
```

### 3️⃣ **Build & Run**
*Backend (API server):

```bash
cd backend
npm run dev


*Frontend (React app):

cd my-app
npm install react-scripts
npm start

```

### 4️⃣ **Setup Roles and Admin User**

*By default, insert initial roles and an admin user in MongoDB:

*roles collection
```json
[
  { "name": "Admin" },
  { "name": "Doctor" },
  { "name": "Patient" },
  { "name": "Family" }
]

````
*users collection (example admin user):
```json
{
  "username": "admin",
  "email": "admin@healsync.com",
  "password": "<hashed-password>",
  "role": "Admin"
}
```
##  Testing

*  Unit Testing:Each individual module (e.g., user authentication, mood logging, health data submission) is tested independently once coding is completed. This ensures          that the internal logic of each module works as expected
*  Integration Testing: Integration testing verifies that modules interact correctly with one another. For example, it checks whether the mood logging module correctly          links with the user profile and database components.

---



