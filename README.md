# 🔗 URL Shortener

A full-stack URL shortening platform built with **Java, Spring Boot, React, PostgreSQL, Docker, and JWT authentication**.

The application allows users to create short URLs, securely manage their links, track clicks, and visualize URL analytics through a modern dashboard.

---

## 📌 Overview

The URL Shortener converts long URLs into short, shareable links.

### Example

**Original URL**

```text
https://www.example.com/products/category/item?id=12345
```

**Short URL**

```text
https://your-domain.com/s/6rKgdSfF
```

When a user accesses the shortened URL, the application resolves the short code, retrieves the original URL from PostgreSQL, and redirects the user to the destination.

The application also includes:

- User registration and login
- JWT-based authentication
- Protected dashboard
- URL management
- Click tracking
- Analytics visualization
- Responsive UI
- Dockerized backend
- Cloud deployment

---

# ✨ Features

## 🔗 URL Shortening

- Convert long URLs into short URLs
- Generate unique short codes
- Store URL mappings in PostgreSQL
- Redirect users to the original destination

## 🔐 Authentication

- User registration
- User login
- JWT authentication
- Bearer token authorization
- Protected dashboard
- Private frontend routes

## 📊 Analytics

- Track URL clicks
- Display click counts
- Display URL creation dates
- Visualize analytics using graphs

## 📋 URL Management

- View created short URLs
- Copy short URLs
- Open short URLs in a new tab
- View analytics for individual URLs

## 🎨 Modern UI

- React-based interface
- Responsive design
- Tailwind CSS styling
- Animated UI components
- Toast notifications
- Dashboard-based URL management

## 🐳 Docker

- Dockerized Spring Boot backend
- Multi-stage Docker build
- Separate build and runtime environments

## ☁️ Deployment

The application follows a decoupled deployment architecture:

```text
Frontend  → Netlify
Backend   → Render
Database  → Neon PostgreSQL
```

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React | UI development |
| Vite | Frontend build tool |
| React Router | Client-side routing |
| Axios | REST API communication |
| Tailwind CSS | UI styling |
| Framer Motion | Animations |
| React Icons | Icons |
| Day.js | Date formatting |
| React Hot Toast | Notifications |
| Recharts | Analytics visualization |

## Backend

| Technology | Purpose |
|------------|---------|
| Java | Backend programming |
| Spring Boot | Backend framework |
| Spring Web | REST APIs |
| Spring Security | Authentication & authorization |
| JWT | Stateless authentication |
| Spring Data JPA | Data persistence |
| Hibernate | ORM |
| Lombok | Boilerplate reduction |
| Maven | Build & dependency management |

## Database

```text
PostgreSQL
    ↓
Neon PostgreSQL
```

## DevOps

```text
Docker
Git
GitHub
Netlify
Render
Neon PostgreSQL
```

---

# 🏗️ System Architecture

The application follows a **decoupled client-server architecture**.

```text
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
```

---

# 🧩 High-Level Architecture

```text
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
                             │ HTTPS / REST
                             ▼
                  ┌─────────────────────┐
                  │       RENDER        │
                  │                     │
                  │   Spring Boot API   │
                  │    Dockerized       │
                  └──────────┬──────────┘
                             │
                             │ JDBC
                             ▼
                  ┌─────────────────────┐
                  │   NEON POSTGRESQL   │
                  │      Database       │
                  └─────────────────────┘
```

---

# 🔄 Application Flow

```text
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
```

---

# 🔗 URL Shortening Flow

```text
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
```

---

# 🔀 URL Redirection Flow

When a user opens a short URL:

```text
Browser
   │
   │ /s/6rKgdSfF
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
   │ GET /6rKgdSfF
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
```

The backend performs the redirect using the HTTP `Location` header.

```http
HTTP/1.1 302 Found
Location: https://example.com
```

---

# 📊 Analytics Flow

```text
User clicks short URL
        │
        ▼
Backend receives request
        │
        ▼
Identify short URL
        │
        ▼
Record / update click information
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
```

---

# 🔐 Authentication Architecture

The application uses **JWT-based stateless authentication**.

```text
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
```

---

# 🔒 Protected Route Flow

The dashboard is protected using frontend route protection.

```text
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
```

---

# 🎨 Frontend Architecture

The React frontend follows a component-based architecture.

```text
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
```

---

# ⚙️ Backend Architecture

The backend follows a layered architecture.

```text
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
```

### Controller Layer

Responsible for:

- HTTP request handling
- Endpoint mapping
- Request parameters
- HTTP responses
- Redirect handling

Example:

```text
RedirectController
```

### Service Layer

Responsible for:

- Business logic
- URL generation
- URL lookup
- Analytics processing
- Authentication operations

Example:

```text
UrlMappingService
```

### Repository Layer

Responsible for:

- Database communication
- CRUD operations
- Query execution
- Entity persistence

### Model / Entity Layer

Responsible for representing persistent application data.

Example:

```text
UrlMapping
```

---

# 🗄️ Database Design

The production database uses PostgreSQL.

Conceptually, the data relationship is:

```text
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
```

---

# 🔌 REST API

The backend exposes REST APIs for authentication, URL management and analytics.

## Authentication

### Register

```http
POST /api/auth/public/register
```

Creates a new user account.

### Login

```http
POST /api/auth/public/login
```

Authenticates the user and returns a JWT.

---

## URL Management

### Create Short URL

```http
POST /api/urls
```

Creates a new shortened URL.

### Get User URLs

```http
GET /api/urls
```

Retrieves URLs belonging to the authenticated user.

---

## Redirect

```http
GET /{shortUrl}
```

Resolves the short code and redirects the user to the original URL.

Example:

```http
GET /6rKgdSfF
```

Response:

```http
HTTP/1.1 302 Found
Location: https://example.com
```

---

## Analytics

```http
GET /api/urls/analytics/{shortUrl}
```

Retrieves analytics information for a shortened URL.

---

# 🛡️ Security

The application implements multiple security mechanisms.

## JWT Authentication

Authenticated requests use:

```http
Authorization: Bearer <JWT_TOKEN>
```

## Backend Authorization

Spring Security validates JWT tokens before allowing access to protected operations.

## Frontend Route Protection

Protected pages use:

```text
PrivateRoute
```

## CORS

The backend is configured to allow communication between the deployed frontend and backend.

```text
Frontend
    │
    │ HTTPS
    ▼
Backend API
```

---

# 🔑 Environment Variables

Sensitive configuration is managed through environment variables.

## Backend

```env
DATABASE_URL=<postgresql-database-url>
DATABASE_USERNAME=<database-username>
DATABASE_PASSWORD=<database-password>

DATABASE_DIALECT=org.hibernate.dialect.PostgreSQLDialect

JWT_SECRET=<strong-secret>

FRONTEND_URL=<frontend-url>
```

## Frontend

```env
VITE_BACKEND_URL=<backend-url>

VITE_REACT_FRONT_END_URL=<frontend-url>

VITE_REACT_SUBDOMAIN=<subdomain-url>
```

### ⚠️ Security

Never commit sensitive values such as:

```text
DATABASE_PASSWORD
JWT_SECRET
API_KEYS
PRIVATE_KEYS
```

to GitHub.

Use environment variables instead.

---

# 🐳 Docker Architecture

The backend uses a multi-stage Docker build.

```text
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
```

### Benefits

- Reproducible environment
- Dependency isolation
- Portable application
- Easier deployment
- Separate build and runtime environments
- Reduced runtime image size

---

# ☁️ Deployment Architecture

Production architecture:

```text
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
                           │ HTTPS / REST
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
```

---

# 📁 Project Structure

```text
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
│   │   │   │               ├── service/
│   │   │   │               ├── repository/
│   │   │   │               ├── models/
│   │   │   │               ├── security/
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
```

---

# 💻 Local Development

## 1. Clone the Repository

```bash
git clone <repository-url>
```

```bash
cd url-project
```

---

# ⚙️ Backend Setup

Navigate to the backend:

```bash
cd shortener-sb
```

Configure the required environment variables.

### Windows PowerShell

```powershell
.\mvnw spring-boot:run
```

### Linux / macOS

```bash
./mvnw spring-boot:run
```

---

# 🎨 Frontend Setup

Navigate to the frontend:

```bash
cd url-shortener-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# 🐳 Docker Setup

Navigate to the backend:

```bash
cd shortener-sb
```

Build the Docker image:

```bash
docker build -t url-shortener-backend .
```

Run the container:

```bash
docker run -p 8080:8080 url-shortener-backend
```

---

# 🏭 Production Build

## Frontend

```bash
npm run build
```

Vite generates:

```text
dist/
```

The `dist` directory contains the optimized production frontend.

## Backend

```bash
./mvnw clean package -DskipTests
```

The generated JAR will be available under:

```text
target/
```

---

# 📈 Scalability

The current architecture is suitable for a small-to-medium scale application.

For higher traffic, the following improvements can be introduced.

---

## 1. Redis Caching

Short URLs are frequently accessed, making them ideal candidates for caching.

```text
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
```

This reduces repeated database reads.

---

## 2. Database Indexing

Frequently queried fields can be indexed.

Potential candidates:

```text
shortUrl
userId
createdDate
```

---

## 3. Load Balancing

Multiple backend instances can run behind a load balancer.

```text
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
```

---

## 4. Asynchronous Analytics

Analytics processing can be moved to a message queue.

```text
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
```

This keeps the redirect path lightweight.

---

## 5. CDN

Static frontend assets can be served through a CDN to improve:

- Global latency
- Asset delivery
- Caching
- Scalability

---

# 🧪 Testing Strategy

A production-grade testing strategy can follow the testing pyramid:

```text
                     ┌──────────────┐
                     │  E2E Tests   │
                     └──────┬───────┘
                            │
                    ┌───────┴────────┐
                    │ Integration    │
                    │ Tests          │
                    └───────┬────────┘
                            │
                  ┌─────────┴─────────┐
                  │    Unit Tests     │
                  │                   │
                  │ Service / Utility │
                  └───────────────────┘
```

Recommended testing tools:

```text
JUnit
Mockito
Spring Boot Test
MockMvc
```

Potential test areas:

```text
Authentication
URL Creation
URL Lookup
Redirect Logic
Analytics
Authorization
Repository Operations
```

---

# 🔄 CI/CD Architecture

A future CI/CD pipeline could look like:

```text
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
```

---

# 🧠 Engineering Decisions

## Why Spring Boot?

Spring Boot provides:

- Production-ready backend framework
- REST API support
- Spring Security
- Spring Data JPA
- Hibernate integration
- Enterprise ecosystem
- Cloud deployment support

## Why React?

React provides:

- Component-based architecture
- Reusable components
- Declarative UI
- Strong ecosystem
- Efficient state-driven rendering

## Why PostgreSQL?

PostgreSQL provides:

- ACID transactions
- Relational data modeling
- Reliable persistence
- Powerful SQL capabilities
- Strong JPA/Hibernate integration

## Why Docker?

Docker packages the application and its runtime environment together.

```text
Application
     +
Dependencies
     +
Runtime
     ↓
Portable Container
```

This helps maintain consistency across environments.

---

# 🧩 Software Engineering Principles

## Separation of Concerns

Each layer has a specific responsibility.

```text
Controller
    ↓
Request / Response

Service
    ↓
Business Logic

Repository
    ↓
Database Access
```

## Layered Architecture

```text
Presentation
     ↓
Business Logic
     ↓
Persistence
     ↓
Database
```

## Stateless Authentication

JWT authentication avoids traditional server-side session storage.

Each authenticated request carries the token:

```http
Authorization: Bearer <JWT>
```

## Environment-Based Configuration

Production-specific configuration is provided through environment variables.

```text
Development
     ↓
Environment Variables

Production
     ↓
Environment Variables
```

---

# 🚀 Future Improvements

- [ ] Custom short aliases
- [ ] QR code generation
- [ ] URL expiration
- [ ] URL deletion
- [ ] URL editing
- [ ] Advanced analytics
- [ ] Geographic analytics
- [ ] Device analytics
- [ ] Browser analytics
- [ ] Redis caching
- [ ] Rate limiting
- [ ] Swagger / OpenAPI documentation
- [ ] Email verification
- [ ] Password reset
- [ ] OAuth2 / Google Login
- [ ] Admin dashboard
- [ ] Custom domains
- [ ] Click event streaming
- [ ] Automated CI/CD
- [ ] Unit test coverage
- [ ] Integration test coverage

---

# 📊 What This Project Demonstrates

```text
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
Environment-Based Configuration
```

---

# 🏆 Project Highlights

```text
✓ Full-Stack Application
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
✓ Environment-Based Configuration
✓ Scalable System Design
```

---

# 🔮 Scalability Roadmap

```text
CURRENT SYSTEM
      │
      ▼
┌─────────────────────┐
│ React + Spring Boot │
│     PostgreSQL      │
└──────────┬──────────┘
           │
           ▼
     Redis Caching
           │
           ▼
    Database Indexing
           │
           ▼
    Load Balancing
           │
           ▼
  Async Analytics Queue
           │
           ▼
     Multiple Backend
        Instances
           │
           ▼
      CDN + Scaling
```

---

# 📸 Screenshots

Add screenshots to the repository using:

```text
screenshots/
│
├── landing-page.png
├── login.png
├── register.png
├── dashboard.png
├── create-url.png
├── analytics.png
└── mobile-view.png
```

Then add them to this section:

```markdown
## Screenshots

### Landing Page

![Landing Page](screenshots/landing-page.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Analytics

![Analytics](screenshots/analytics.png)
```

---

# 🔗 Example

### Original URL

```text
https://github.com/spring-projects/spring-boot
```

### Generated Short Code

```text
Ab3Xy91
```

### Short URL

```text
https://your-domain.com/s/Ab3Xy91
```

### Redirect Request

```http
GET /Ab3Xy91
```

### Backend Response

```http
HTTP/1.1 302 Found
Location: https://github.com/spring-projects/spring-boot
```

---

# 🎯 Complete Request Lifecycle

```text
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
```

---

# 🏗️ Architecture at a Glance

```text
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
```

---

# 👨‍💻 Author

## Subhranil Das

Full Stack Developer

### Areas of Interest

```text
Backend Engineering
Java
Spring Boot
REST APIs
System Design
Cloud Computing
Full Stack Development
Data Structures & Algorithms
```

---

# ⭐ Final Notes

This project was designed to demonstrate practical full-stack engineering concepts including:

- Backend API development
- Authentication and authorization
- Database persistence
- URL redirection
- Analytics
- Frontend routing
- Cloud deployment
- Docker containerization
- Environment-based configuration
- Layered architecture
- Scalability considerations

---

<p align="center">

<strong>Built with Java • Spring Boot • React • PostgreSQL • Docker</strong>

</p>
