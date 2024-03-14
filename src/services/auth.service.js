import axios from 'axios';

export const register = async (payload) => {
    try {
        const response = await axios.post('http://localhost:8000/api/register', payload);
        return response.data;
    } catch (error) {
        console.error('Register error:', error);
        throw error;
    }
};

export const login = async (payload) => {
    try {
        const response = await axios.post('http://localhost:8000/api/login', payload);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const feedbackSubmission = async (payload, token) => {
    try {
        const response = await axios.post('http://localhost:8000/api/feedback', payload, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Feedback submission error:', error);
        throw error;
    }
};
