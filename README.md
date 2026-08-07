🔗 URL Shortener — Full Stack
<p align="center">

A production-oriented full-stack URL shortening platform built with Java, Spring Boot, React, PostgreSQL, Docker and cloud deployment.

Create short URLs, securely manage links, track clicks, visualize analytics and redirect users to their original destinations.

</p>
🚀 Overview

This project is a full-stack URL Shortener application that converts long URLs into compact, shareable links.

Example

Original URL

https://www.example.com/products/category/item?id=12345

Short URL

https://your-domain.com/s/6rKgdSfF

When a user accesses the shortened URL, the backend resolves the short code, retrieves the original URL from PostgreSQL and performs an HTTP redirect.

The application also provides authentication, a personalized dashboard and click analytics.

✨ Features
🔗 URL Shortening
Convert long URLs into short unique URLs.
Generate unique short identifiers.
Store URL mappings in PostgreSQL.
Redirect users to the original URL.
🔐 Authentication
User registration
User login
JWT-based authentication
Protected dashboard
Authorization using Bearer tokens
Private frontend routes
📊 Analytics
Track URL clicks
Display click counts
View URL creation dates
Visualize analytics using graphs
📋 URL Management
View all shortened URLs
Copy shortened URLs
Open shortened URLs in a new tab
View individual URL analytics
🎨 Modern UI
Responsive React interface
Tailwind CSS styling
Framer Motion animations
Toast notifications
Responsive dashboard
Clean card-based URL management interface
🐳 Containerization
Dockerized Spring Boot backend
Multi-stage Docker build
Separate build and runtime environments
☁️ Cloud Deployment

The application is deployed using a decoupled architecture:

Frontend  → Netlify
Backend   → Render
Database  → Neon PostgreSQL
🛠 Tech Stack
Frontend
Technology	Purpose
React	Frontend UI
Vite	Frontend build tool
React Router	Client-side routing
Axios	HTTP/API communication
Tailwind CSS	Styling
Framer Motion	Animations
React Icons	Icons
Day.js	Date formatting
React Hot Toast	Notifications
Recharts	Analytics visualization
Backend
Technology	Purpose
Java	Backend programming language
Spring Boot	Backend framework
Spring Web	REST APIs
Spring Security	Authentication and authorization
JWT	Stateless authentication
Spring Data JPA	Persistence layer
Hibernate	ORM
Lombok	Boilerplate reduction
Maven	Dependency management
Database
PostgreSQL
    ↓
Neon Cloud PostgreSQL
DevOps / Deployment
Docker
Git
GitHub
Render
Netlify
Neon PostgreSQL
🏗 System Architecture

The application follows a decoupled client-server architecture.

                         ┌───────────────────┐
                         │       USER        │
                         │    Web Browser    │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │  React Frontend   │
                         │    Vite + UI      │
                         │      Netlify      │
                         └─────────┬─────────┘
                                   │
                              HTTPS / REST
                                   │
                                   ▼
                         ┌───────────────────┐
                         │  Spring Boot API  │
                         │      Render       │
                         │                   │
                         │   Controllers     │
                         │   Services        │
                         │   Repositories    │
                         │   Spring Security │
                         └─────────┬─────────┘
                                   │
                              JPA / Hibernate
                                   │
                                   ▼
                         ┌───────────────────┐
                         │ Neon PostgreSQL   │
                         │     Database      │
                         └───────────────────┘
🧠 High-Level System Design
                         INTERNET
                             │
                             ▼
                  ┌─────────────────────┐
                  │       NETLIFY       │
                  │                     │
                  │    React + Vite     │
                  │      Frontend       │
                  └──────────┬──────────┘
                             │
                             │ HTTPS
                             ▼
                  ┌─────────────────────┐
                  │       RENDER        │
                  │                     │
                  │   Spring Boot API   │
                  │    Dockerized       │
                  └──────────┬──────────┘
                             │
             ┌───────────────┼────────────────┐
             │               │                │
             ▼               ▼                ▼
       Authentication   URL Management   Analytics
             │               │                │
             └───────────────┼────────────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │   NEON POSTGRESQL   │
                  │      Database       │
                  └─────────────────────┘
🔄 Application Flow

The application contains several major flows.

                         USER
                           │
            ┌──────────────┼───────────────┐
            │              │               │
            ▼              ▼               ▼
       Registration      Login        Shorten URL
            │              │               │
            ▼              ▼               ▼
           User           JWT          URL Mapping
            │              │               │
            └──────────────┼───────────────┘
                           │
                           ▼
                       Dashboard
                           │
                  ┌────────┴────────┐
                  │                 │
                  ▼                 ▼
              Analytics          Redirect
🔗 URL Shortening Flow

When a user creates a shortened URL:

                    USER
                      │
                      │ Enter long URL
                      ▼
              ┌───────────────┐
              │ React Frontend│
              └───────┬───────┘
                      │
                      │ REST API
                      ▼
              ┌───────────────┐
              │   Controller  │
              └───────┬───────┘
                      │
                      ▼
              ┌───────────────┐
              │    Service    │
              │     Layer     │
              └───────┬───────┘
                      │
               Generate code
                      │
                      ▼
              ┌───────────────┐
              │  Repository   │
              └───────┬───────┘
                      │
                      ▼
              ┌───────────────┐
              │  PostgreSQL   │
              └───────┬───────┘
                      │
                      ▼
                Short URL
                      │
                      ▼
              React Dashboard
Example
Original URL

https://github.com/spring-projects/spring-boot

↓

Generated short code

Ab3Xy91

↓

Short URL

https://your-domain.com/s/Ab3Xy91
🔀 URL Redirection Flow

When a user opens a short URL:

Browser
   │
   │ /s/Ab3Xy91
   ▼
React Frontend
   │
   ▼
ShortenUrlPage
   │
   │ Redirect request
   ▼
Spring Boot Backend
   │
   │ GET /Ab3Xy91
   ▼
RedirectController
   │
   ▼
UrlMappingService
   │
   ▼
PostgreSQL
   │
   ▼
Find original URL
   │
   ▼
HTTP 302 Redirect
   │
   ▼
Original Website

The backend uses the Location HTTP response header.

Conceptually:

HTTP/1.1 302 Found
Location: https://example.com
📊 Analytics Flow

The application tracks clicks associated with shortened URLs.

User clicks short URL
        │
        ▼
Backend receives request
        │
        ▼
Identify short URL
        │
        ▼
Update / record click information
        │
        ▼
Persist information
        │
        ▼
Dashboard requests analytics
        │
        ▼
Analytics REST API
        │
        ▼
React Graph Component
        │
        ▼
Analytics Visualization

The dashboard provides users with information such as:

Total Clicks
Creation Date
Click History
Analytics Graph
🔐 Authentication Architecture

The application uses JWT-based stateless authentication.

                     USER
                       │
                       │ Login
                       ▼
                React Frontend
                       │
                       │ POST Login
                       ▼
                Spring Boot API
                       │
                       ▼
              Authentication Layer
                       │
                       ▼
              Validate Credentials
                       │
                       ▼
                 Generate JWT
                       │
                       ▼
                Return JWT Token
                       │
                       ▼
                React Frontend
                       │
                       │ Store token
                       ▼
              Authenticated Request
                       │
                       │ Authorization:
                       │ Bearer <JWT>
                       ▼
             Spring Security Filter
                       │
                       ▼
                 Validate JWT
                       │
                       ▼
                  Controller
🔒 Protected Route Flow

Frontend routes such as:

/dashboard

are protected using a private route mechanism.

User
 │
 ▼
/dashboard
 │
 ▼
PrivateRoute
 │
 ├── JWT exists
 │       │
 │       ▼
 │   Dashboard
 │
 └── JWT missing
         │
         ▼
       Login
🎨 Frontend Architecture

The frontend follows a component-based React architecture.

React Application
│
├── App
│
├── Router
│
├── Authentication
│   ├── LoginPage
│   ├── RegisterPage
│   └── PrivateRoute
│
├── Public Pages
│   ├── LandingPage
│   ├── AboutPage
│   └── ErrorPage
│
├── URL Shortener
│   └── ShortenUrlPage
│
├── Dashboard
│   ├── DashboardLayout
│   ├── ShortenUrlList
│   ├── ShortenItem
│   └── Graph
│
├── Common Components
│   ├── Navbar
│   └── Footer
│
├── Context
│   └── ContextApi
│
└── API Layer
    └── Axios
⚙️ Backend Architecture

The backend follows a layered architecture.

                  HTTP Request
                       │
                       ▼
              ┌─────────────────┐
              │   Controller    │
              │     Layer       │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │    Service      │
              │     Layer       │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   Repository    │
              │     Layer       │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │    Database     │
              └─────────────────┘
Controller Layer

Responsible for:

HTTP request handling
Endpoint mapping
Request parameters
HTTP responses
Redirect handling

Example:

RedirectController
Service Layer

Responsible for:

Business logic
URL generation
URL lookup
Analytics processing
Authentication operations

Example:

UrlMappingService
Repository Layer

Responsible for:

Database communication
CRUD operations
Query execution
Entity persistence
Model / Entity Layer

Responsible for representing persistent application data.

Example:

UrlMapping
🗄️ Database Design

The production database uses PostgreSQL.

Conceptually, the application has user and URL mapping relationships.

┌─────────────────────────┐
│          User           │
├─────────────────────────┤
│ id                      │
│ username / email        │
│ password                │
└────────────┬────────────┘
             │
             │ 1 : N
             │
             ▼
┌─────────────────────────┐
│       UrlMapping        │
├─────────────────────────┤
│ id                      │
│ originalUrl             │
│ shortUrl                │
│ clickCount              │
│ createdDate             │
│ user_id                 │
└─────────────────────────┘
🔌 REST API Design

The backend exposes REST APIs for authentication, URL management and analytics.

Authentication APIs
Register
POST /api/auth/public/register

Creates a new user account.

Login
POST /api/auth/public/login

Authenticates the user and returns a JWT.

🔗 URL APIs
Create Short URL
POST /api/urls

Creates a new shortened URL.

Get User URLs
GET /api/urls

Retrieves URLs associated with the authenticated user.

🔀 Redirect API
GET /{shortUrl}

Resolves the short code and redirects to the original URL.

Example:

GET /Ab3Xy91

Response:

HTTP/1.1 302 Found
Location: https://example.com
📊 Analytics API
GET /api/urls/analytics/{shortUrl}

Retrieves analytics information for a shortened URL.

🛡️ Security

The application implements several security mechanisms.

JWT Authentication

Authenticated requests use:

Authorization: Bearer <JWT_TOKEN>
Protected Backend APIs

Spring Security validates JWT tokens before allowing access to protected operations.

Protected Frontend Routes

The dashboard is protected using:

PrivateRoute
CORS

The backend is configured to allow communication between the deployed frontend and backend.

Frontend
   │
   │ HTTPS
   ▼
Backend API
Environment Variables

Sensitive production configuration is stored using environment variables.

Examples:

DATABASE_URL
DATABASE_USERNAME
DATABASE_PASSWORD
DATABASE_DIALECT
JWT_SECRET
FRONTEND_URL

Sensitive credentials should never be committed to GitHub.

🐳 Docker Architecture

The Spring Boot backend is containerized using a multi-stage Docker build.

                    Docker Build
                         │
                         ▼
              ┌─────────────────────┐
              │     Build Stage     │
              │                     │
              │ Eclipse Temurin JDK │
              │          +          │
              │ Maven               │
              │          +          │
              │ Spring Boot         │
              └──────────┬──────────┘
                         │
                         │ JAR
                         ▼
              ┌─────────────────────┐
              │    Runtime Stage    │
              │                     │
              │ Eclipse Temurin JRE │
              │          +          │
              │      app.jar        │
              └──────────┬──────────┘
                         │
                         ▼
                   Spring Boot
                    Container
Benefits
Reproducible environment
Portable application
Dependency isolation
Easier deployment
Separation between build and runtime
Reduced runtime image size
☁️ Deployment Architecture

The production system follows:

                         USER
                           │
                           │ HTTPS
                           ▼
                ┌─────────────────────┐
                │       NETLIFY       │
                │                     │
                │    React + Vite     │
                │      Frontend       │
                └──────────┬──────────┘
                           │
                           │ REST API
                           │ HTTPS
                           ▼
                ┌─────────────────────┐
                │       RENDER        │
                │                     │
                │ Docker Container    │
                │ Spring Boot API     │
                └──────────┬──────────┘
                           │
                           │ JDBC
                           ▼
                ┌─────────────────────┐
                │        NEON         │
                │     PostgreSQL      │
                └─────────────────────┘
📁 Project Structure
url-project/
│
├── shortener-sb/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── url/
│   │   │   │           └── shortener/
│   │   │   │               │
│   │   │   │               ├── controller/
│   │   │   │               │
│   │   │   │               ├── service/
│   │   │   │               │
│   │   │   │               ├── repository/
│   │   │   │               │
│   │   │   │               ├── models/
│   │   │   │               │
│   │   │   │               ├── security/
│   │   │   │               │
│   │   │   │               └── ShortenerSbApplication.java
│   │   │   │
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   │
│   │   └── test/
│   │
│   ├── url-shortener-frontend/
│   │   │
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── utils/
│   │   │   ├── contextApi/
│   │   │   ├── App.jsx
│   │   │   └── main.jsx
│   │   │
│   │   ├── public/
│   │   ├── package.json
│   │   └── vite.config.js
│   │
│   ├── Dockerfile
│   ├── pom.xml
│   └── mvnw
│
└── README.md
🔑 Environment Configuration
Backend

Example:

DATABASE_URL=jdbc:postgresql://<neon-host>/<database>?sslmode=require
DATABASE_USERNAME=<database-user>
DATABASE_PASSWORD=<database-password>

DATABASE_DIALECT=org.hibernate.dialect.PostgreSQLDialect

JWT_SECRET=<strong-secret>

FRONTEND_URL=<frontend-url>
Frontend

Example:

VITE_BACKEND_URL=<backend-url>

VITE_REACT_FRONT_END_URL=<frontend-url>

VITE_REACT_SUBDOMAIN=<subdomain-url>
⚠️ Security

Never commit:

DATABASE_PASSWORD
JWT_SECRET
API_KEYS
PRIVATE_KEYS

to GitHub.

Use environment variables instead.

💻 Local Development
1. Clone the Repository
git clone <repository-url>

Navigate into the project:

cd url-project
⚙️ Backend Setup

Navigate to the backend:

cd shortener-sb

Configure your environment variables.

Then run:

Windows PowerShell
.\mvnw spring-boot:run
Linux / macOS
./mvnw spring-boot:run

The backend will start on the configured server port.

🎨 Frontend Setup

Navigate to the frontend:

cd url-shortener-frontend

Install dependencies:

npm install

Run the development server:

npm run dev
🐳 Docker Setup

Navigate to the backend directory:

cd shortener-sb

Build the Docker image:

docker build -t url-shortener-backend .

Run the container:

docker run -p 8080:8080 url-shortener-backend
🏭 Production Build
Frontend

Create a production build:

npm run build

Vite generates:

dist/

The dist directory contains the optimized frontend assets.

Backend

Build the Spring Boot application:

./mvnw clean package -DskipTests

The resulting JAR will be generated inside:

target/
🚀 Deployment

The application is designed for independent deployment.

                   GitHub Repository
                          │
             ┌────────────┴────────────┐
             │                         │
             ▼                         ▼
          Netlify                   Render
             │                         │
             ▼                         ▼
         Frontend                  Backend
                                       │
                                       ▼
                                  Neon Database
Frontend Deployment

Build:

npm run build

Deploy the generated:

dist/

directory to the frontend hosting platform.

Backend Deployment

Build the Docker image:

docker build -t url-shortener-backend .

Deploy the containerized Spring Boot backend.

📈 Scalability Design

The current architecture works well for a small-to-medium scale URL shortening platform.

For larger traffic volumes, the system can be extended.

1. Redis Caching

Short URLs are frequently accessed.

Instead of querying PostgreSQL every time:

Request
   │
   ▼
Redis
   │
   ├── Cache Hit
   │      │
   │      ▼
   │  Original URL
   │
   └── Cache Miss
          │
          ▼
      PostgreSQL

This can significantly reduce database reads.

2. Database Indexing

Frequently queried columns should have indexes.

Potential candidates:

shortUrl
userId
createdDate

This improves lookup performance as the database grows.

3. Load Balancing

Multiple backend instances can be deployed behind a load balancer.

                         Load Balancer
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
          Backend #1      Backend #2      Backend #3
              │               │               │
              └───────────────┼───────────────┘
                              │
                              ▼
                         PostgreSQL
4. Asynchronous Analytics

Analytics processing can be moved to a message queue.

User Click
    │
    ▼
Backend
    │
    ▼
Message Queue
    │
    ▼
Analytics Worker
    │
    ▼
Database

This keeps the redirect path fast.

5. CDN

Static frontend assets can be served through a CDN to improve:

Global latency
Asset delivery
Caching
Scalability
📊 Performance Considerations

The critical redirect path should remain lightweight.

Short Code
    │
    ▼
Lookup
    │
    ▼
Original URL
    │
    ▼
302 Redirect

For higher traffic:

Redis Cache
     +
Database Index
     +
Load Balancer
     +
Async Analytics

can be introduced.

🧪 Testing Strategy

A mature version of the application can follow a testing pyramid.

                     ┌──────────────┐
                     │ E2E Tests    │
                     └──────┬───────┘
                            │
                    ┌───────┴────────┐
                    │ Integration    │
                    │ Tests          │
                    └───────┬────────┘
                            │
                  ┌─────────┴─────────┐
                  │   Unit Tests      │
                  │                   │
                  │ Service / Utility │
                  └───────────────────┘

Recommended technologies:

JUnit
Mockito
Spring Boot Test
MockMvc

Potential test coverage:

Authentication
URL Creation
URL Lookup
Redirect Logic
Analytics
Authorization
Repository Operations
🔄 CI/CD Architecture

A production-grade CI/CD pipeline could follow:

Developer
    │
    │ git push
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ├── Build
    │
    ├── Run Tests
    │
    ├── Build Docker Image
    │
    └── Deploy
          │
          ├───────────────┐
          ▼               ▼
       Frontend        Backend
🧠 Engineering Decisions
Why Spring Boot?

Spring Boot provides:

Production-ready backend framework
REST API support
Spring Security
Spring Data JPA
Hibernate integration
Enterprise-level ecosystem
Easy cloud deployment
Why React?

React provides:

Component-based architecture
Reusable components
Declarative UI
Strong ecosystem
Efficient state-driven rendering
Why PostgreSQL?

PostgreSQL provides:

ACID transactions
Strong relational data modeling
Reliable persistence
Powerful SQL capabilities
Excellent JPA/Hibernate support
Why Docker?

Docker packages the application and runtime environment together.

Application
     +
Dependencies
     +
Runtime
     ↓
Portable Container

This helps reduce environment inconsistencies between development and deployment.

🧩 Software Engineering Principles
Separation of Concerns

Each layer has a specific responsibility.

Controller
    ↓
Request / Response

Service
    ↓
Business Logic

Repository
    ↓
Database Access
Layered Architecture

The backend separates:

Presentation
     ↓
Business Logic
     ↓
Persistence
     ↓
Database
Stateless Authentication

JWT authentication avoids traditional server-side sessions.

Each authenticated request carries the token:

Authorization: Bearer <JWT>
Environment-Based Configuration

Production-specific values are provided using environment variables.

This allows:

Development
     ↓
Environment Variables

Production
     ↓
Environment Variables

without changing application source code.

🔮 Future Improvements

Potential improvements include:

 Custom short aliases
 QR code generation
 URL expiration
 URL deletion
 URL editing
 Advanced analytics
 Geographic analytics
 Device analytics
 Browser analytics
 Redis caching
 Rate limiting
 Swagger / OpenAPI documentation
 Email verification
 Password reset
 Google OAuth2 login
 Admin dashboard
 Custom domains
 Click event streaming
 Automated CI/CD
 Unit test coverage
 Integration test coverage
🏆 What This Project Demonstrates

This project demonstrates practical experience with:

Java
Spring Boot
Spring Security
JWT
REST API Design
React
React Router
Axios
PostgreSQL
JPA
Hibernate
Docker
Cloud Deployment
Netlify
Render
Neon PostgreSQL
Authentication
Authorization
CORS
Database Design
URL Redirection
Analytics
Responsive UI
Git
GitHub
System Design
Scalability
📸 Screenshots

Screenshots can be added to the repository under:

screenshots/

Recommended screenshots:

screenshots/
│
├── landing-page.png
├── login.png
├── register.png
├── dashboard.png
├── create-url.png
├── analytics.png
└── mobile-view.png

Then include them in the README:

## Screenshots

### Landing Page

![Landing Page](screenshots/landing-page.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Analytics

![Analytics](screenshots/analytics.png)
📌 Example
Input
https://github.com/spring-projects/spring-boot
Generated Short Code
Ab3Xy91
Short URL
https://your-domain.com/s/Ab3Xy91
Redirect Request
GET /Ab3Xy91
Backend Response
HTTP/1.1 302 Found
Location: https://github.com/spring-projects/spring-boot
🎯 Core Request Lifecycle

A complete URL lifecycle looks like:

                  USER
                    │
                    ▼
              Enter Long URL
                    │
                    ▼
             React Frontend
                    │
                    ▼
             REST API Request
                    │
                    ▼
            Spring Controller
                    │
                    ▼
              Service Layer
                    │
                    ▼
           Generate Short Code
                    │
                    ▼
               Repository
                    │
                    ▼
              PostgreSQL
                    │
                    ▼
             Return Short URL
                    │
                    ▼
             React Dashboard
                    │
                    │
                    │ User clicks
                    ▼
              Short URL
                    │
                    ▼
            Spring Boot API
                    │
                    ▼
            Database Lookup
                    │
                    ▼
             Original URL
                    │
                    ▼
              HTTP 302
                    │
                    ▼
              Destination
🏗️ Architecture at a Glance
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT                              │
│                                                             │
│                    React + Vite                             │
│                                                             │
│       Routing | Authentication | Dashboard | Analytics      │
└────────────────────────────┬────────────────────────────────┘
                             │
                             │ HTTPS / REST
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                         BACKEND                             │
│                                                             │
│                    Spring Boot                              │
│                                                             │
│  Controller → Service → Repository → JPA / Hibernate        │
│                                                             │
│                 Spring Security + JWT                       │
└────────────────────────────┬────────────────────────────────┘
                             │
                             │ JDBC
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                         DATABASE                            │
│                                                             │
│                     PostgreSQL                              │
│                                                             │
│                    Neon Cloud DB                            │
└─────────────────────────────────────────────────────────────┘
👨‍💻 Author
Subhranil Das

Full Stack Developer

Core interests:

Backend Engineering
Java
Spring Boot
REST APIs
System Design
Cloud Computing
Full Stack Development
Data Structures & Algorithms
⭐ Project Highlights
✓ Full Stack Application
✓ RESTful Backend
✓ JWT Authentication
✓ Protected Routes
✓ PostgreSQL Database
✓ URL Shortening
✓ URL Redirection
✓ Click Analytics
✓ Responsive React UI
✓ Dockerized Backend
✓ Cloud Deployment
✓ Layered Backend Architecture
✓ Scalable System Design
✓ Environment-Based Configuration
<p align="center">
🔗 Built with Java, Spring Boot, React, PostgreSQL & Docker

Designed and developed as a full-stack URL shortening platform.

</p>
