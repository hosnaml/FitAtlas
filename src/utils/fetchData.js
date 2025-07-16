export const exerciseOptions = {
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
}

export const imageOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => { 
    const response = await fetch(url, options)
    const data = await response.json()
    
    return data
}

export const fetchExerciseImage = async (exerciseId, resolution = '720') => {
    const url = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exerciseId}&resolution=${resolution}`
    
    try {
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