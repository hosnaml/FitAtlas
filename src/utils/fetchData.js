// Check if API key is available
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

if (!API_KEY) {
    console.error('REACT_APP_RAPID_API_KEY is not set. Please check your environment variables.');
}

export const exerciseOptions = {
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
}

export const imageOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => { 
    try {
        if (!API_KEY) {
            throw new Error('API key is not configured');
        }

        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const fetchExerciseImage = async (exerciseId, resolution = '720') => {
    const url = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exerciseId}&resolution=${resolution}`
    
    try {
        if (!API_KEY) {
            console.warn('API key not available, skipping image fetch');
            return null;
        }

        const response = await fetch(url, imageOptions)
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const contentType = response.headers.get('content-type')
        
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json()
            return data.url || data.image || data
        } else {
            const blob = await response.blob()
            return URL.createObjectURL(blob)
        }
    } catch (error) {
        console.error('Error fetching exercise image:', error)
        return null
    }
}