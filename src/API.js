// Django Backend API Configuration
const API_BASE_URL = 'http://127.0.0.1:8000';

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('accessToken');
};

// Helper function to set auth headers
const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

// Authentication APIs
export const authAPI = {
  // Login and get JWT token
  login: async (username, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/token/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        return { success: true, data };
      } else {
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!getAuthToken();
  },
};

// Menu APIs
export const menuAPI = {
  // Get all menu items
  getMenuItems: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/restaurant/menu/`, {
        headers: getAuthHeaders(),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch menu items');
      }
    } catch (error) {
      console.error('Error fetching menu:', error);
      return [];
    }
  },

  // Get featured menu items
  getFeaturedItems: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/restaurant/menu/featured/`, {
        headers: getAuthHeaders(),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch featured items');
      }
    } catch (error) {
      console.error('Error fetching featured items:', error);
      return [];
    }
  },

  // Get menu categories
  getCategories: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/restaurant/menu/categories/`, {
        headers: getAuthHeaders(),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },
};

// Booking APIs
export const bookingAPI = {
  // Get available times (mock for now, can be enhanced)
  getAvailableTimes: async (date) => {
    // For now, return a standard set of times
    // This could be enhanced to check actual availability from backend
    const times = [];
    for (let i = 17; i <= 23; i++) {
      times.push(`${i}:00`);
      times.push(`${i}:30`);
    }
    return times;
  },

  // Submit booking
  submitBooking: async (bookingData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/restaurant/booking/`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          customer_name: bookingData.customer_name || 'Guest',
          customer_email: bookingData.customer_email || 'guest@example.com',
          customer_phone: bookingData.customer_phone || '123-456-7890',
          number_of_guests: parseInt(bookingData.res_guests),
          booking_date: bookingData.res_date,
          booking_time: bookingData.res_time,
          special_requests: bookingData.res_occasion || '',
        }),
      });

      if (response.ok) {
        return { success: true, data: await response.json() };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get user's bookings
  getBookings: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/restaurant/booking/`, {
        headers: getAuthHeaders(),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch bookings');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return [];
    }
  },
};

// Legacy API functions for backward compatibility
export const fetchAPI = bookingAPI.getAvailableTimes;
export const submitAPI = bookingAPI.submitBooking;
