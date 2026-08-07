# 🔗 URL Shortener — Full Stack

<p align="center">
  <img src="https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk" />
  <img src="https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?style=for-the-badge&logo=springboot" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Vite-latest-646CFF?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql" />
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker" />
  <img src="https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render" />
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify" />
</p>

<p align="center">
  A production-oriented full-stack URL shortening platform built with 
  <b>Spring Boot, React, PostgreSQL, Docker and REST APIs</b>.
</p>

<p align="center">
  Create short URLs, securely manage your links, track click analytics,
  and redirect users to the original destination through a scalable backend architecture.
</p>

---

## 🌐 Live Application

| Component | Deployment |
|-----------|------------|
| 🎨 Frontend | Netlify |
| ⚙️ Backend | Render |
| 🗄️ Database | Neon PostgreSQL |

> The application is deployed using a decoupled frontend/backend architecture.

---

# 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [System Design](#-system-design)
- [Application Flow](#-application-flow)
- [URL Shortening Flow](#-url-shortening-flow)
- [URL Redirection Flow](#-url-redirection-flow)
- [Analytics Flow](#-analytics-flow)
- [Authentication Flow](#-authentication-flow)
- [Frontend Architecture](#-frontend-architecture)
- [Backend Architecture](#-backend-architecture)
- [Database Design](#-database-design)
- [API Design](#-api-design)
- [Security](#-security)
- [Docker Architecture](#-docker-architecture)
- [Deployment Architecture](#-deployment-architecture)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Local Development](#-local-development)
- [Docker Setup](#-docker-setup)
- [Production Deployment](#-production-deployment)
- [Scalability](#-scalability)
- [Future Improvements](#-future-improvements)
- [Engineering Decisions](#-engineering-decisions)
- [Screenshots](#-screenshots)
- [Author](#-author)

---

# 🚀 Overview

This project is a complete **URL Shortener SaaS-style application** that allows users to transform long URLs into compact, shareable links.

For example:

```text
https://www.example.com/very/long/url/with/many/parameters
