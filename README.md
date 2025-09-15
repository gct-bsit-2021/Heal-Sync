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

## 🏗️ Architecture

### **Tech Stack**

| Layer              | Technology Used                                                           |
| ------------------ | ------------------------------------------------------------------------- |
| **Frontend**       | React.js (with React Router, Tailwind/Bootstrap for styling)|
| **Backend**        | Node.js (Express.js framework) |
| **Database**       | MongoDB (NoSQL, Mongoose ORM) |
| **Real-time**      | Socket.IO ( live updates & emergency alerts) |
| **Authentication** | JWT (JSON Web Tokens) with role-based access control      |

---

## 👥 Roles & Permissions

| Role                         | Permissions                                                                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Admin**                    | Manage Principals, HoDs, Teachers, and Students. Modify upper management and global settings. View full activity logs.                        |
| **Principal / Management**   | Post announcements visible to all users, oversee reports and logs, manage department-level data.                                              |
| **Head of Department (HoD)** | Add, edit, or remove students/teachers for their department, oversee class and department communications, post department-only announcements. |
| **Teacher**                  | Access class groups, post assignments, reply to student queries, share files.                                                                 |
| **Student**                  | Access class groups and private student-only batch groups, communicate with peers and teachers, share files and collaborate on projects.      |

---

## ✨ Features

✅ **Role-Based Authentication & Authorization**

* ASP.NET Core Identity integrated with a custom `ApplicationUser` and `User_Profile` table.
* Email + unique username-based login.
* Secure password storage and role management.

✅ **Group Management**

* Auto-generated groups for classes, departments, and private student batches.
* Dynamic group creation for projects and discussions.
* Stored procedures (`CreateBatch`, `DeleteBatch`) for managing batch tables dynamically.

✅ **Real-Time Chat & File Sharing**

* Chat system using **SignalR** for instant communication.
* File uploads with per-group access control.

✅ **Announcements & Notifications**

* Principals/management can create **global announcements** (read-only).
* HoDs can create **department-specific announcements**.
* Students and teachers receive instant notifications for updates.

✅ **Profile Management**

* Users can view/edit their profile with profile picture support.
* Securely update information without forcing profile picture re-upload.

✅ **Search Functionality**

* Fast and efficient user search using an API endpoint.
* Search by name, department, or batch.

✅ **Activity Logs & Reports**

* Admins & Principals can access high-level reports.
* HoDs can view department-level activities.

---

## 🗂️ Project Structure (ASP.NET Core MVC)

```
Zenithix/
 ├── Controllers/
 │    ├── AccountController.cs
 │    ├── AdminController.cs
 │    ├── AnnouncementController.cs
 │    ├── ChatController.cs
 │    └── ProfileController.cs
 │
 ├── Models/
 │    ├── ApplicationUser.cs
 │    ├── User_Profile.cs
 │    ├── Group.cs
 │    ├── Message.cs
 │    └── FileUpload.cs
 │
 ├── Views/
 │    ├── Account/
 │    ├── Admin/
 │    ├── Chat/
 │    ├── Announcement/
 │    └── Shared/
 │
 ├── wwwroot/
 │    ├── css/
 │    ├── js/
 │    └── uploads/
 │
 ├── Data/
 │    ├── ApplicationDbContext.cs
 │    └── Repositories/
 │
 └── Program.cs / Startup.cs
```

---

## 🛠️ Setup Instructions

### 1️⃣ **Clone Repository**

```bash
git clone https://github.com/your-username/zenithix.git
cd zenithix
```

### 2️⃣ **Configure Database**

* Update `appsettings.json` with your SQL Server connection string.

```jsonc
"ConnectionStrings": {
  "DefaultConnection": "Server=.;Database=ZenithixDB;Trusted_Connection=True;"
}
```

### 3️⃣ **Build & Run**

```bash
dotnet restore
dotnet build
dotnet run
```

### 4️⃣ **Setup Roles and Admin User**

Run the seed data script (or initialize manually) to create:

* Admin account
* Default roles: Admin, Principal, HoD, Teacher, Student

---

## 🧪 Testing

* ✅ Unit Testing: Models and controllers tested with xUnit.
* ✅ Integration Testing: Database queries validated using a staging DB.
* ✅ Manual Testing: Verified all role-based features, group chat, and profile updates.

---

## 🚀 Future Enhancements

* ✅ Better UI/UX with full Bootstrap + Tailwind styling.
* ✅ AI Chatbot for basic student inquiries.
* ✅ Video calls and voice chat for real-time meetings.
* ✅ Advanced search with filters (department, year, subject).
* ✅ Mobile-friendly responsive design.

---

## 👨‍💻 Author

**Talha Ellahi**
📧 [wasadasad323@gmail.com](mailto:wasadasad323@gmail.com)
💻 Full-Stack ASP.NET Developer | Passionate about scalable, secure applications

---
