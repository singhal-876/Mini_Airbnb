<div align="center">

# 🏠 Mini Airbnb Clone - Vacation Rental Platform

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Now-blue?style=for-the-badge&logo=render)](https://mini-airbnb-rgoo.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-v22.16.0-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v5.2.1-black?style=flat-square&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/cloud/atlas)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Hosting-blue?style=flat-square&logo=cloudinary)](https://cloudinary.com/)
[![Mapbox](https://img.shields.io/badge/Mapbox-Maps%20&%20Geocoding-blue?style=flat-square&logo=mapbox)](https://www.mapbox.com/)

A full-stack web application that replicates core Airbnb functionality. Users can list, discover, review, and book vacation rentals worldwide. Built with **Node.js**, **Express**, **MongoDB**, **Mapbox**, and **Cloudinary**.

[🚀 **Live Demo**](https://mini-airbnb-rgoo.onrender.com) • [📋 Key Features](#-key-features) • [🛠️ Tech Stack](#%EF%B8%8F-tech-stack) • [📚 Setup Guide](#-getting-started)

</div>

---

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [📁 Directory Structure](#-directory-structure)
- [🏗️ Architecture](#%EF%B8%8F-architecture--design-patterns)
- [🚀 Getting Started](#-getting-started)
- [📖 API Routes](#-api-routes)
- [🗄️ Database Schema](#️-database-schema)
- [🔒 Security](#-security-features)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Author](#-author)

---

## ✨ Key Features

### 👤 User Management
- ✅ **Secure Authentication** - Signup/Login with bcrypt password hashing
- ✅ **Passport.js** - Industry-standard authentication framework
- ✅ **Session Management** - MongoDB session persistence
- ✅ **Authorization** - Role-based access control
- ✅ **Logout** - Secure session termination

### 🏡 Listing Management (Full CRUD)
- ✅ **Create** - Add new vacation properties with details
- ✅ **Read** - Browse all listings and view details
- ✅ **Update** - Edit property info (owner only)
- ✅ **Delete** - Remove listings (owner only)
- ✅ **Search** - Filter and browse properties
- ✅ **Validation** - Joi schema validation

### 📸 Image Management
- ✅ **Cloudinary Integration** - Cloud image hosting
- ✅ **Auto-Optimization** - Responsive images
- ✅ **Multer Upload** - Secure file handling
- ✅ **Cloud Storage** - No local storage needed
- ✅ **Auto-Deletion** - Old images cleaned up

### 🗺️ Geolocation & Maps
- ✅ **Mapbox Integration** - Interactive location maps
- ✅ **Geocoding** - Address to coordinates conversion
- ✅ **Satellite View** - High-quality aerial imagery
- ✅ **GeoJSON** - Proper geographic data format
- ✅ **Location Markers** - Visual property identification

### ⭐ Reviews & Ratings
- ✅ **5-Star System** - User ratings for properties
- ✅ **Text Reviews** - Guest comments and feedback
- ✅ **Review Management** - Users can delete own reviews
- ✅ **Author Attribution** - Track who left reviews
- ✅ **Visual Ratings** - Star display on listings

### 🎨 User Interface
- ✅ **Bootstrap 5** - Responsive design
- ✅ **Mobile Ready** - Works on all devices
- ✅ **Flash Messages** - Real-time user feedback
- ✅ **Form Validation** - Client-side checks
- ✅ **Star Rating Widget** - Interactive ratings

### 🔒 Security
- ✅ **Env Variables** - Secure credential management
- ✅ **Password Hashing** - Bcrypt encryption
- ✅ **Session Security** - Encrypted tokens
- ✅ **CSRF Protection** - Form validation
- ✅ **Input Validation** - Joi schema validation
- ✅ **MongoDB Prevention** - Query parameterization

---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Use |
|---|---|---|
| Node.js | v22.16.0 | Runtime |
| Express.js | v5.2.1 | Framework |
| MongoDB | Atlas | Database |
| Mongoose | v9.0.1 | ODM |

### Authentication
| Package | Version | Use |
|---|---|---|
| Passport.js | v0.7.0 | Auth middleware |
| Passport-Local | v1.0.0 | Username/password |
| Passport-Local-Mongoose | v9.0.1 | User model |
| Express-Session | v1.18.2 | Sessions |
| Connect-Mongo | v6.0.0 | Session store |

### Frontend
| Package | Version | Use |
|---|---|---|
| EJS | v3.1.10 | Templating |
| EJS-Mate | v4.0.0 | Layouts |
| Bootstrap | v5.x | CSS |

### Cloud Services
| Service | Use |
|---|---|
| Cloudinary | Image hosting |
| Mapbox | Maps & geocoding |
| MongoDB Atlas | Cloud database |
| Render | Hosting |

### File Upload
| Package | Version | Use |
|---|---|---|
| Multer | v2.0.2 | File uploads |
| Multer-Storage-Cloudinary | v4.0.0 | Cloud storage |

### Validation & Utilities
| Package | Version | Use |
|---|---|---|
| Joi | v18.0.2 | Schema validation |
| Dotenv | v17.2.3 | Env variables |
| Method-Override | v3.0.0 | HTTP methods |
| Cookie-Parser | v1.4.7 | Cookies |
| Connect-Flash | v0.1.1 | Flash messages |

---

## 📁 Directory Structure

 ```
Mini_Airbnb/
├── controller/              # Business Logic (MVC - C)
│   ├── listings.js          # CRUD operations for listings
│   ├── review.js            # Review creation and deletion logic
│   └── user.js              # Signup, Login, and Logout logic
│
├── models/                  # Database Schemas (MVC - M)
│   ├── listing.js           # Listing Schema (Title, Description, Image, Price, Location, Geometry)
│   ├── review.js            # Review Schema (Comment, Rating, Author)
│   └── user.js              # User Schema (Email, Passport-Local-Mongoose integration)
│
├── routes/                  # Express Routers
│   ├── listings.js          # Routes for /listings
│   ├── review.js            # Routes for /listings/:id/reviews
│   └── user.js              # Routes for /signup, /login, /logout
│
├── views/                   # EJS Templates (MVC - V)
│   ├── includes/            # Component Partials
│   │   ├── flash.ejs        # Success/Error alert messages
│   │   ├── footer.ejs       # Global site footer
│   │   └── navbar.ejs       # Global navigation bar
│   ├── layouts/             # Master Templates
│   │   └── boilerplate.ejs  # The base HTML structure (Navbar, Flash, Body, Footer)
│   ├── listings/            # Listing Pages
│   │   ├── index.ejs        # Homepage displaying all cards
│   │   ├── show.ejs         # Detailed view of a single listing + Mapbox
│   │   ├── new.ejs          # Form to create a new listing
│   │   └── edit.ejs         # Form to update an existing listing
│   └── users/               # Authentication Pages
│       ├── login.ejs        # User login form
│       └── signup.ejs       # User registration form
│
├── public/                  # Static Assets
│   ├── css/                 # Stylesheets
│   │   ├── style.css        # Main custom layout styles
│   │   └── rating.css       # Starability CSS for star ratings
│   └── js/                  # Client-side Scripts
│       ├── map.js           # Mapbox GL JS implementation for show page
│       └── script.js        # Bootstrap form validation & UI logic
│
├── utils/                   # Helpers & Error Handling
│   ├── ExpressError.js      # Custom error class for status codes
│   └── wrapAsync.js         # Wrapper function to catch async errors
│
├── init/                    # Data Initialization
│   ├── data.js              # Array of sample listing objects
│   └── index.js             # Script to clear and re-seed the database
│
├── app.js                   # Application Entry Point
├── middleware.js            # Custom Middleware (isLoggedIn, isOwner, validateListing)
├── schema.js                # Joi Validation Schemas (Server-side validation)
├── cloudConfig.js           # Cloudinary storage configuration
├── package.json             # NPM dependencies and scripts
├── .env                     # Environment Variables (Secrets)
├── .gitignore               # Files ignored by Git
└── README.md                # Project documentation
```

---

## 🏗️ Architecture & Design Patterns

### MVC Pattern

```
Request → Routes → Controllers → Models → Database
↓
Response
```

**Models** - Database schemas (Mongoose)
**Views** - EJS templates
**Controllers** - Business logic

### Middleware Stack

```
Request
↓
Body Parser → Cookie Parser → Session → Passport → Custom Middleware → Route Handler
↓
Response
```

### Authentication Flow

```
User Input → Passport Local Strategy → Password Hash Check → Session Created → Stored in MongoDB
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16+ - [Download](https://nodejs.org/)
- **npm** v7+ - Included with Node.js
- **Git** - [Download](https://git-scm.com/)
- **MongoDB Atlas Account** - [Free Tier](https://www.mongodb.com/cloud/atlas/register)
- **Cloudinary Account** - [Free Tier](https://cloudinary.com/users/register/free)
- **Mapbox Account** - [Create](https://www.mapbox.com/)

### Installation Steps

#### 1️⃣ Clone Repository

```
git clone https://github.com/singhal-876/Mini_Airbnb.git
cd Mini_Airbnb
```

#### 2️⃣ Install Dependencies

```
npm install
```

#### 3️⃣ Create `.env` File
Create `.env` in root directory:

```
# CLOUDINARY
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

# MAPBOX
MAP_TOKEN=your_mapbox_token

# MONGODB
ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/mini-airbnb?retryWrites=true&w=majority

# SESSION
SECRET=your_secret_key_anything_works
```

#### 4️⃣ Get Cloudinary Credentials

1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up (free)
3. Dashboard → Copy:
    - Cloud Name → `CLOUD_NAME`
    - API Key → `CLOUD_API_KEY`
    - API Secret → `CLOUD_API_SECRET`

#### 5️⃣ Get Mapbox Token

1. Go to [Mapbox](https://www.mapbox.com/)
2. Create account
3. Account → Tokens
4. Copy Public Access Token → `MAP_TOKEN`

#### 6️⃣ Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free M0 cluster
3. Create database user
4. Get connection string
5. Replace username:password
6. Paste into `ATLASDB_URL`

Connection String Format:
```
mongodb+srv://myuser:mypassword@cluster0.xxx.mongodb.net/mini-airbnb?retryWrites=true&w=majority
```

#### 7️⃣ Seed Database (Optional)
```
node init/index.js
```

#### 8️⃣ Start Server
```
node app.js
```

Or with nodemon:
```
nodemon app.js
```

#### 9️⃣ Open in Browser
```
http://localhost:8080/listings
```

---

## 📖 API Routes

### User Routes

| Method | Route | Description | Auth |
|---|---|---|---|
| GET | /signup | Signup form | No |
| POST | /signup | Create user | No |
| GET | /login | Login form | No |
| POST | /login | Authenticate | No |
| GET | /logout | Logout user | Yes |

### Listing Routes

| Method | Route | Description | Auth |
|---|---|---|---|
| GET | /listings |	All listings | No |
| GET | /listings/new | Create form | Yes |
| POST | /listings | Create listing | Yes |
| GET | /listings/:id | View details | No |
| GET | /listings/:id/edit | Edit form | Owner |
| PUT | /listings/:id | Update | Owner |
| DELETE | /listings/:id | Delete | Owner |

### Review Routes
| Method | Route | Description | Auth |
|---|---|---|---|
| POST | /listings/:id/reviews | Add review | Yes |
| DELETE | /listings/:id/reviews/:rid | Delete review | Author |

---

## 🗄️ Database Schema

### User Schema
```
{
  username: String (unique),
  email: String (unique),
  password: String (hashed by Passport)
}
```

### Listing Schema
```
{
  title: String (required),
  description: String (required),
  image: {
    url: String,
    filename: String
  },
  price: Number (required),
  location: String (required),
  country: String (required),
  owner: ObjectId (ref: User),
  reviews: [ObjectId] (ref: Review),
  geometry: {
    type: 'Point',
    coordinates: [longitude, latitude]
  }
}
```

### Review Schema
```
{
  comment: String (required),
  rating: Number (1-5, required),
  author: ObjectId (ref: User),
  listing: ObjectId (ref: Listing)
}
```

### Relationships Diagrams
```
Users
  ├─── owns many ---> Listings
  └─── writes many ---> Reviews

Listings
  ├─── owned by <--- Users
  ├─── has many ---> Reviews
  └─── geo data ---> Mapbox

Reviews
  ├─── by <--- Users
  └─── on <--- Listings
```

---

## 🔒 Security Features

### Authentication & Authorization
- **Passport.js** - Secure username/password authentication
- **Password Hashing** - Bcrypt automatic hashing via Passport-Local-Mongoose
- **Session Management** - MongoDB-backed sessions with encryption
- **Authorization Middleware** - `isLoggedIn` and `isOwner` checks on protected routes

### Data Protection
- **Environment Variables** - Sensitive data stored in `.env` file
- **HTTPS/SSL** - Automatic on Render deployment
- **Secure Cookies** - httpOnly and secure flags enabled in production

### Input Validation
- **Joi Schemas** - Request body validation for listings and reviews
- **Server-Side Validation** - All inputs validated before database operations
- **Custom Error Messages** - No sensitive information exposed

### File Upload Security
- **Cloudinary** - Secure cloud storage (no local file vulnerabilities)
- **Multer** - Safe file upload handling with size limits (5MB)
- **Image Validation** - Only JPEG, PNG allowed

### Additional Security
- **CSRF Protection** - Method override for safe PUT/DELETE requests
- **Flash Messages** - Session-based notifications
- **Error Handling** - Custom error pages (no stack traces exposed)
- **SQL Injection Prevention** - MongoDB with Mongoose prevents injection attacks

---

## 🌐 Deployment

### Deploy on Render

#### Prerequisites
- GitHub account connected
- MongoDB Atlas account (free)
- Cloudinary account (free)
- Mapbox token (free)

#### Deployment Steps

1. **Push code to GitHub**
   ```
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Create Render Web Service**
    - Go to [Render Dashboard](https://dashboard.render.com/)
    - Click "New +" → "Web Service"
    - Connect your GitHub repo
    - Select `main` branch

3. **Configure Service**
    - Name: Name it yourself
    - Build Command: `npm install`
    - Start Command: `node app.js`
    - Region: Singapore (or closest to you)

4. **Add Environment Variables**
```
ATLASDB_URL=mongodb+srv://...
SECRET=your_secret_key
MAP_TOKEN=your_mapbox_token
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
NODE_ENV=production
```

5. **Deploy**
    - Click "Create Web Service"
    - Wait for build and deployment
    - Get your live URL (e.g., `https://mini-airbnb-rgoo.onrender.com`)

#### Auto-Deploy on Push
Every push to `main` branch automatically redeploys the app.

#### Manual Redeploy
- Go to Render Dashboard → Your Service
- Click "Manual Deploy" → "Deploy latest commit"

#### Troubleshooting
| Issue | Solution |
|---|---|
| Build fails | Check npm install works locally |
| Database connection error | Verify ATLASDB_URL and MongoDB whitelist |
| Images not loading | Check Cloudinary credentials in env vars |
| Page not found | Verify routes work locally first |

#### Performance
- **Free Tier:** Sleeps after 15 min inactivity (slow first request)
- **Starter Plan ($7/month):** Always-on, better for production

---

## 🤝 Contributing
We welcome contributions! Here's how:

### Fork & Clone
```
git clone https://github.com/your-username/Mini_Airbnb.git
cd Mini_Airbnb
npm install
```

### Create Feature Branch
```
git checkout -b feature/your-feature-name
npm run dev
```

### Make Changes & Commit
```
git add .
git commit -m "Add feature description"
git push origin feature/your-feature-name
```

### Open Pull Request
- Go to GitHub repo
- Click "New Pull Request"
- Describe your changes
- Wait for review

### Code Guidelines
- Follow existing code style
- Use meaningful variable names
- Add comments for complex logic
- Test changes locally before pushing

### Feature Ideas
- Advanced search & filters
- Wishlist/favorites system
- Booking calendar
- Payment integration (Stripe/Razorpay)
- Email notifications
- User ratings dashboard
- Multiple languages
- Real-time chat

### Report Bugs
- Check if issue already exists
- Provide detailed description
- Include steps to reproduce
- Mention your environment (OS, browser, Node version)

---

## 👨‍💻 Author

### Abhinav Singhal
- **📍 Location:** Dehradun, Uttarakhand, India
- **📧 Email:** [abhinavasinghal876@gmail.com](mailto:abhinavasinghal876@gmail.com)
- **💼 LinkedIn:** [Abhinav Singhal](www.linkedin.com/in/abhinav-singhal-069a16260)
- **🐙 GitHub:** [singhal-876](https://github.com/singhal-876)

### Tech Stack
- **Frontend:** HTML5, CSS3, Bootstrap, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Cloud Services:** Cloudinary, Mapbox, Render
- **Tools:** Git, VS Code

### Other Projects
- [Simon Says Game](https://github.com/singhal-876/Simon_Says_Game)
- [Spotify Web Clone](https://github.com/singhal-876/Spotify_Web_Clone)
- [To-Do App](https://github.com/singhal-876/To_Do_App)

### Acknowledgments
- **MongoDB Atlas** - Database hosting
- **Cloudinary** - Image storage
- **Mapbox** - Mapping services
- **Render** - Application hosting
- **Airbnb** - Inspired from the Airbnb web application.
- **Bootstrap** - Uses Bootstrap 5 for responsive styling and components.
- **Font Awesome** - Uses Font Awesome for icons.

---

<div align="center">

## Made with ❤️ by Abhinav Singhal
#### Last Updated: January 13, 2026

</div>