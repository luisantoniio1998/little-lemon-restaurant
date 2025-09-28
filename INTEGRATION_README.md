# Little Lemon Restaurant - Frontend-Backend Integration 🍋

This frontend application has been successfully integrated with a Django REST API backend to create a complete full-stack restaurant management system.

## 🔗 Integration Overview

**Frontend**: React 18 application with React Router
**Backend**: Django REST Framework with JWT authentication
**Database**: SQLite with sample data

## 🚀 Quick Start

### Prerequisites
1. **Backend Running**: Ensure Django backend is running at `http://127.0.0.1:8000`
2. **CORS Configured**: Backend has CORS enabled for `http://localhost:3000`

### Start Frontend
```bash
npm install
npm start
```

The application will open at `http://localhost:3000`

## ✨ Features Integrated

### 🍽️ Dynamic Menu System
- **Real Menu Data**: Menu items now load from Django API
- **Featured Items**: Specials section displays actual featured menu items
- **Categories**: Menu organized by categories from backend
- **Live Updates**: Menu changes reflect immediately

### 📅 Complete Booking System
- **Real Reservations**: Bookings are saved to Django database
- **Customer Information**: Full customer details required
- **Validation**: Server-side validation for dates, guests, etc.
- **Confirmation**: Real booking IDs and confirmation

### 🔐 Authentication Ready
- **JWT Integration**: Token-based authentication system
- **Login/Logout**: Ready for user authentication
- **Protected Routes**: Booking system can require authentication

## 📊 API Endpoints Used

### Menu APIs
- `GET /restaurant/menu/` - All menu items
- `GET /restaurant/menu/featured/` - Featured items only
- `GET /restaurant/menu/categories/` - Available categories

### Booking APIs
- `POST /restaurant/booking/` - Create new booking
- `GET /restaurant/booking/` - Get user bookings (requires auth)

### Authentication APIs
- `POST /api/token/` - Login and get JWT token
- `POST /api/token/refresh/` - Refresh token

## 🔧 Configuration

### API Base URL
The frontend is configured to connect to:
```javascript
const API_BASE_URL = 'http://127.0.0.1:8000';
```

To change this for production, update the `API_BASE_URL` in `src/API.js`.

### Authentication Flow
1. Users can login to get JWT tokens
2. Tokens are stored in localStorage
3. API calls include Authorization headers
4. Booking system can require authentication

## 🎯 What's New

### Enhanced Booking Form
- **Customer Details**: Name, email, phone required
- **Better Validation**: Real-time error handling
- **API Integration**: Bookings saved to database
- **Loading States**: Better UX during submission

### Dynamic Specials
- **Live Menu Data**: Featured items from backend
- **Fallback Content**: Graceful handling if API fails
- **Loading States**: Shows loading while fetching data

### Robust Error Handling
- **Network Errors**: Graceful handling of connection issues
- **Validation Errors**: Server validation displayed to users
- **Fallback Content**: App works even if some APIs fail

## 🚀 Running the Full Stack

### 1. Start Backend (Terminal 1)
```bash
cd ../little-lemon-restaurant
source littlelemon_env/bin/activate
python manage.py runserver
```

### 2. Start Frontend (Terminal 2)
```bash
cd little-lemon-restaurant
npm start
```

### 3. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://127.0.0.1:8000/restaurant/
- **Django Admin**: http://127.0.0.1:8000/admin/

## 🧪 Testing the Integration

### Test Menu Integration
1. Visit homepage
2. Scroll to "This week's specials"
3. Verify real menu items are displayed with actual prices

### Test Booking Integration
1. Navigate to Booking page
2. Fill out complete booking form
3. Submit reservation
4. Check Django admin to see booking in database

### Test API Directly
```bash
# Get featured menu items
curl http://127.0.0.1:8000/restaurant/menu/featured/

# Get all menu items
curl http://127.0.0.1:8000/restaurant/menu/

# Test booking (requires customer data)
curl -X POST http://127.0.0.1:8000/restaurant/booking/ \
  -H "Content-Type: application/json" \
  -d '{"customer_name":"Test User","customer_email":"test@test.com","customer_phone":"123-456-7890","number_of_guests":2,"booking_date":"2024-12-01","booking_time":"19:00","special_requests":"Birthday"}'
```

## 🔮 Future Enhancements

### Authentication Integration
- Add login/register forms
- Protect booking routes
- User dashboard with booking history

### Menu Management
- Admin panel for menu management
- Image upload for menu items
- Menu categories filtering

### Booking Enhancements
- Real-time availability checking
- Email confirmations
- Booking modifications/cancellations

## 🐛 Troubleshooting

### CORS Issues
If you get CORS errors:
1. Ensure Django backend is running
2. Check CORS settings in Django settings.py
3. Verify frontend URL matches CORS_ALLOWED_ORIGINS

### API Connection Issues
If APIs don't work:
1. Check Django server is running at correct port
2. Verify API_BASE_URL in src/API.js
3. Check browser Network tab for failed requests

### Booking Submission Fails
If booking form doesn't work:
1. Check all required fields are filled
2. Verify customer info is provided
3. Check Django admin for validation errors

## 📁 Project Structure

```
little-lemon-restaurant/
├── src/
│   ├── API.js                 # 🔥 Backend integration
│   ├── components/
│   │   ├── Booking/
│   │   │   └── BookingForm/   # 🔥 Enhanced with backend
│   │   └── Specials/          # 🔥 Dynamic menu data
│   └── ...
├── package.json
└── INTEGRATION_README.md      # This file
```

## 🎉 Success!

Your Little Lemon Restaurant is now a complete full-stack application with:
- ✅ React frontend connected to Django backend
- ✅ Real menu data from database
- ✅ Functional booking system
- ✅ JWT authentication ready
- ✅ Professional error handling
- ✅ Production-ready architecture

The integration is complete and ready for production deployment! 🚀