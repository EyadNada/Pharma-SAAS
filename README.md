# Pharma-SAAS

<div align="center">

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![Python](https://img.shields.io/badge/Python-3.9+-3776ab?style=flat-square&logo=python)
![React](https://img.shields.io/badge/React-19.2+-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-3178c6?style=flat-square&logo=typescript)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=flat-square&logo=fastapi)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**A comprehensive pharmaceutical inventory management system built with modern web technologies**

[Features](#features) • [Tech Stack](#tech-stack) • [Quick Start](#quick-start) • [Architecture](#architecture)

</div>

---

## 📋 Overview

**Pharma-SAAS** is a full-stack Software-as-a-Service platform designed to streamline pharmaceutical inventory management, drug tracking, and warehouse operations. The system provides an intuitive interface for managing drug catalogs, pricing, stock levels, and barcode management.

### Why Pharma-SAAS?
- 🚀 **Production-Ready** - Built with industry best practices
- 🔧 **Modern Stack** - Latest frameworks and technologies
- 📊 **Scalable** - Microservices-ready architecture
- 🔐 **Type-Safe** - Full TypeScript + Python type hints
- 🐳 **Containerized** - Docker Compose ready for deployment

---

## ✨ Features

### Core Functionality
- **Drug Inventory Management** - Create, read, update, and delete pharmaceutical products
- **Real-time Stock Tracking** - Monitor inventory levels with automatic updates
- **Barcode Management** - Unique barcode support for product identification
- **Pricing Management** - Track and manage drug pricing with history
- **Scientific Reference** - Store scientific names and drug classifications

### Technical Features
- **RESTful API** - Comprehensive endpoints with proper HTTP semantics
- **Type Safety** - Full TypeScript frontend, Python type hints backend
- **Responsive UI** - Mobile-friendly React interface
- **Automatic API Documentation** - Swagger/OpenAPI integration
- **Database Persistence** - SQLAlchemy ORM with SQLite/PostgreSQL support

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **FastAPI** | Web Framework | 0.100+ |
| **SQLAlchemy** | ORM | Latest |
| **Pydantic** | Data Validation | Latest |
| **Python** | Language | 3.9+ |

### Frontend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 19.2+ |
| **TypeScript** | Type Safety | 5.9+ |
| **Vite** | Build Tool | 8.0+ |
| **ESLint** | Code Quality | 9.39+ |

### DevOps & Infrastructure
- **Docker & Docker Compose** - Containerization and orchestration
- **npm** - Frontend package management
- **pip** - Python package management

---

## 🚀 Quick Start

### Prerequisites
- Python 3.9 or higher
- Node.js 16+ & npm
- Docker & Docker Compose (optional)

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Pharma-SAAS.git
cd Pharma-SAAS
```

#### 2. Backend Setup
```bash
cd backend
pip install -r requirements.txt
python main.py
```
The backend will start at `http://localhost:8000`
- API Documentation: `http://localhost:8000/docs`

#### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will start at `http://localhost:5173`

#### 4. Docker Setup (Alternative)
```bash
docker-compose up --build
```

---

## 📁 Project Structure

```
Pharma-SAAS/
├── backend/
│   ├── main.py              # FastAPI application entry point
│   ├── models.py            # SQLAlchemy database models
│   ├── database.py          # Database configuration
│   ├── requirements.txt      # Python dependencies
│   └── README.md            # Backend documentation
├── frontend/
│   ├── src/
│   │   ├── App.tsx          # Main React component
│   │   ├── main.tsx         # Application entry point
│   │   ├── App.css          # Global styles
│   │   └── assets/          # Static assets
│   ├── public/              # Public static files
│   ├── package.json         # npm dependencies
│   ├── vite.config.ts       # Vite configuration
│   ├── tsconfig.json        # TypeScript configuration
│   └── eslint.config.js     # ESLint configuration
├── docker-compose.yml       # Docker Compose orchestration
└── README.md                # This file
```

---

## 📡 API Documentation

The backend provides comprehensive API documentation:

### Available Endpoints
- **GET** `/api/drugs` - List all drugs
- **POST** `/api/drugs` - Create new drug
- **GET** `/api/drugs/{id}` - Get drug details
- **PUT** `/api/drugs/{id}` - Update drug
- **DELETE** `/api/drugs/{id}` - Delete drug

**Interactive Documentation**: Visit `http://localhost:8000/docs` when the backend is running

### Example Request
```bash
curl -X POST http://localhost:8000/api/drugs \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aspirin",
    "scientific_name": "Acetylsalicylic acid",
    "price": 5.99,
    "stock": 100,
    "barcode": "123456789"
  }'
```

---

## 🏗 Architecture

### System Architecture
```
┌─────────────────────────────────────┐
│       React Frontend (Vite)         │
│    TypeScript + Component Library   │
└──────────────┬──────────────────────┘
               │ HTTP/REST
┌──────────────▼──────────────────────┐
│       FastAPI Backend Service       │
│  (Models, Routes, Dependencies)     │
└──────────────┬──────────────────────┘
               │ SQL/ORM
┌──────────────▼──────────────────────┐
│   SQLAlchemy ORM + Database         │
│  (SQLite Development / PostgreSQL)  │
└─────────────────────────────────────┘
```

### Data Flow
1. **User Interaction** → React UI captures user actions
2. **API Request** → Axios/Fetch sends HTTP request to FastAPI
3. **Validation** → Pydantic validates request data
4. **Database Operation** → SQLAlchemy executes query
5. **Response** → Data returned and rendered in UI

---

## 💻 Development

### Running Tests
```bash
# Backend
cd backend
pytest

# Frontend
cd frontend
npm run lint
npm run build
```

### Code Quality
- **ESLint** enforced on frontend
- **Type checking** with TypeScript and Pydantic
- **Pre-commit hooks** recommended

### Contributing
1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

---

## 📦 Deployment

### Docker Deployment
```bash
docker-compose up -d
```

### Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL=postgresql://user:password@localhost/pharma_db
API_HOST=0.0.0.0
API_PORT=8000
```

### Production Considerations
- Use PostgreSQL instead of SQLite
- Enable CORS appropriately for your domain
- Implement authentication and authorization
- Add rate limiting
- Enable HTTPS
- Use environment-specific configurations

---

## 🔍 Performance

- **Frontend**: Optimized for fast page loads with Vite
- **Backend**: Asynchronous request handling with FastAPI
- **Database**: Indexed columns for quick lookups
- **Caching**: Ready for Redis integration

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review the API docs at `/docs` endpoint

---

<div align="center">

**Built with ❤️ for pharmaceutical inventory management**

![Made with Python](https://img.shields.io/badge/Made%20with-Python-3776ab?style=flat-square)
![Made with React](https://img.shields.io/badge/Made%20with-React-61dafb?style=flat-square)

</div>