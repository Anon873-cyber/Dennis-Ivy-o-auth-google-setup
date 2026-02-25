# Google OAuth with Appwrite – Playground Project

This is a simple project created as a playground and reference to learn and understand how to implement **Google OAuth authentication using Appwrite**.

This project demonstrates how users can log in using their Google account and how Appwrite handles authentication, sessions, and user data.

---

## 🚀 Features

* Google OAuth login using Appwrite
* Secure authentication flow
* Session management with Appwrite
* Fetch authenticated user information
* Simple and clean implementation for learning purposes

---

## 🧠 What You Will Learn

* How OAuth works in real applications
* How to configure Google OAuth in Google Cloud Console
* How to configure OAuth provider in Appwrite
* How to authenticate users using Appwrite SDK
* How to handle user sessions

---

## 🛠️ Tech Stack


* Backend/Auth: Appwrite with express 
* OAuth Provider: Google OAuth 2.0

---

## 📦 Project Structure

```
project-folder/
│
├── index.js
├── appwrite.js
└── .env
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
```

```
cd your-repo-name
```

---

### 2. Create an Appwrite Project

1. Go to Appwrite Console
2. Create a new project
3. Copy the Project ID

---

### 3. Enable Google OAuth in Appwrite

1. Go to Appwrite Console → Auth → Settings → OAuth Providers
2. Enable Google
3. Enter:

* Client ID
* Client Secret

(from Google Cloud Console)

---

### 4. Configure Google Cloud Console

1. Go to Google Cloud Console
2. Create OAuth 2.0 credentials
3. Add Authorized Redirect URI:

```
https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/YOUR_PROJECT_ID
```

---

### 5. Configure your project

Update your Appwrite configuration in your JavaScript file:

```
const client = new Appwrite.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("YOUR_PROJECT_ID");
```

---

### 6. Run the project

You can use Live Server or open index.html in your browser.

---

## 🔐 How Authentication Works

1. User clicks "Login with Google"
2. Appwrite redirects user to Google login
3. User grants permission
4. Google redirects back to Appwrite
5. Appwrite creates a session
6. User is now authenticated

---

## 🎯 Purpose of this Project

This project is created for learning and understanding OAuth authentication using Appwrite. It is intended for beginners who want to see a real implementation example.


## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome.

---

## 📄 License

This project is open source 
---

## 👨‍💻 Author

Dennis Ivy Created for learning Appwrite and OAuth authentication.
