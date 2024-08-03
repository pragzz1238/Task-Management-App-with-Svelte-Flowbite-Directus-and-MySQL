import axios from 'axios';


export async function login(email, password) {
  try {
    const response = await axios.post('http://localhost:8055/auth/login', {
      email,
      password
    });
    // Save the token to sessionStorage or a state management solution
    sessionStorage.setItem('token', response.data.data.access_token);
    console.log('Login successful:', response.data);
    return true; // Login successful
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    return false; // Login failed
  }
}

export async function logout() {
  try {
    await axios.post('http://localhost:8055/auth/logout', {}, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    // Remove the token from sessionStorage
    sessionStorage.removeItem('token');
    console.log('Logout successful');
  } catch (error) {
    console.error('Logout failed:', error.response ? error.response.data : error.message);
  }
}

export function isAuthenticated() {
  return !!sessionStorage.getItem('token');
}
