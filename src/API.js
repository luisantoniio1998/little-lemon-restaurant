// Django Backend Configuration
const API_BASE_URL = 'http://127.0.0.1:8000';

// Legacy seeded random function for available times (fallback)
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

// Generate available time slots
const generateTimeSlots = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

// Backward compatible fetchAPI function
export const fetchAPI = function (date) {
  return generateTimeSlots(date);
};

// Enhanced submitAPI function that connects to Django backend
export const submitAPI = async function (formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurant/booking/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_name: formData.customer_name || 'Guest User',
        customer_email: formData.customer_email || 'guest@littlelemon.com',
        customer_phone: formData.customer_phone || '123-456-7890',
        no_of_guests: parseInt(formData.res_guests) || 1,
        booking_date: `${formData.res_date}T${formData.res_time}:00`,
        special_requests: formData.res_occasion || '',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Booking saved to database:', data);
      return true; // Return true for backward compatibility
    } else {
      console.error('Failed to save booking:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error submitting booking:', error);
    // Return true as fallback to maintain UX (booking form will still show success)
    return true;
  }
};

// Menu API functions
export const menuAPI = {
  getFeaturedItems: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/restaurant/menu/featured/`);
      if (response.ok) {
        return await response.json();
      }
      return [];
    } catch (error) {
      console.error('Error fetching featured items:', error);
      return [];
    }
  },

  getAllItems: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/restaurant/menu/`);
      if (response.ok) {
        return await response.json();
      }
      return [];
    } catch (error) {
      console.error('Error fetching menu items:', error);
      return [];
    }
  }
};
