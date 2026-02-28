# Donezo - Modern Dashboard Application

A comprehensive, production-ready dashboard application built with React, Vite, and Tailwind CSS. Features real-time data visualization, user management, product tracking, and analytics.

## Features

### Core Functionality
- **Authentication System** - Secure login with JWT token management
- **Dashboard Overview** - Real-time metrics and KPIs visualization
- **Product Management** - Complete CRUD operations for products
- **User Management** - User profiles, status tracking, and detailed views
- **Analytics** - Interactive charts and data visualization
- **Search Functionality** - Global product search with instant results
- **Time Tracker** - Built-in stopwatch with start/pause/stop controls
- **Settings** - Profile, notifications, and security settings

### Technical Features
- **Private Routes** - Protected routes with authentication guards
- **Responsive Design** - Mobile-first approach, works on all devices
- **Drawer Sidebar** - Collapsible navigation for mobile/tablet
- **Real-time Updates** - Live data fetching and state management
- **Loading States** - Skeleton screens and loading indicators
- **Error Handling** - Graceful error management and user feedback

## Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **React Router 7.13.1** - Client-side routing
- **Tailwind CSS 4.2.1** - Utility-first CSS framework

### Icons & UI
- **Lucide React** - Modern icon library
- **React Icons** - Additional icon sets

### Development Tools
- **ESLint** - Code linting
- **Vite Plugin React** - Fast refresh and HMR

## Project Structure

```
src/
├── assets/             
├── Components/         
│   ├── AnalyticsCard.jsx
│   ├── DashboardNav.jsx
│   ├── Logo.jsx
│   ├── Overview.jsx
│   ├── PrivateRoute.jsx
│   ├── ProductsCard.jsx
│   ├── Sidebar.jsx
│   ├── TimeTracker.jsx
│   ├── UserCard.jsx
│   └── UserProgress.jsx
├── Layouts/            
│   ├── AuthLayout.jsx
│   └── DashboardLayout.jsx
├── Pages/              
│   ├── Analytics.jsx
│   ├── Dashboard.jsx
│   ├── Help.jsx
│   ├── Login.jsx
│   ├── OverviewPage.jsx
│   ├── ProductDetail.jsx
│   ├── Products.jsx
│   ├── Settings.jsx
│   ├── UserDetail.jsx
│   └── Users.jsx
├── Routes/             
│   └── Router.jsx
├── index.css          
└── main.jsx            
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd donezo
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open browser at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Authentication

The application uses localStorage for authentication state management:

**Demo Credentials:**
- Email: `user1@example.com`
- Password: `password123`

**Authentication Flow:**
1. User submits login credentials
2. API validates and returns user data
3. Token stored in localStorage
4. Private routes check authentication status
5. Logout clears all stored data

## API Integration

### Base URL
```
https://task-api-eight-flax.vercel.app/api
```

### Endpoints

**Authentication**
- `POST /login` - User authentication

**Dashboard**
- `GET /dashboard` - Complete dashboard data
- `GET /overview` - Overview metrics

**Products**
- `GET /products` - List all products
- `GET /products/:id` - Single product details

**Users**
- `GET /users` - List all users
- `GET /users/:id` - Single user details

**Analytics**
- `GET /analytics` - Analytics data with views, clicks, conversions

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: ≥ 1024px

### Mobile Features
- Hamburger menu with drawer sidebar
- Touch-optimized buttons and inputs
- Stacked layouts for better readability
- Optimized search interface

### Desktop Features
- Fixed sidebar navigation
- Multi-column grid layouts
- Hover effects and transitions
- Full-featured search with dropdown

## Key Components

### Dashboard
- Overview cards with metrics
- Analytics visualization
- User progress chart
- Product cards
- Time tracker

### Products
- Product grid with search and filters
- Category filtering
- Product detail pages
- Sales statistics

### Users
- User list with status indicators
- Search and filter functionality
- User detail pages with activity summary

### Analytics
- Bar charts for views, clicks, conversions
- Summary statistics
- Detailed data tables

### Settings
- Profile management
- Notification preferences
- Security settings with password change

## Security Features

- Private route protection
- Authentication state validation
- Secure logout with data cleanup
- Input validation and sanitization

## Performance Optimizations

- Code splitting with React Router
- Lazy loading for routes
- Optimized re-renders with proper state management
- Efficient API calls with caching
- Skeleton loading states

## Error Handling

- API error catching and display
- Network error handling
- 404 page redirects
- User-friendly error messages

## Code Quality

- ESLint configuration for code consistency
- Component-based architecture
- Reusable utility functions
- Clean code practices



Build command: `npm run build`
Output directory: `dist`


---

Built with ❤️ using React + Vite + Tailwind CSS
