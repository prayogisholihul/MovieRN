export const MOVIE_CONFIG = {
    BASE_URL: process.env.EXPO_PUBLIC_BASE_URL,
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: `application/json`,
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const baseFetch = async({endpoint}: {endpoint: string}) => {  
     const response = await fetch(`${MOVIE_CONFIG.BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: MOVIE_CONFIG.headers
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
}

export const fetchMovies = async({query}: {query: string}) => {
    const endpoint = query ? `search/movie?query=${encodeURIComponent(query)}`
                            : `discover/movie?sort_by=popularity.desc`

    return await baseFetch({endpoint});
}

export const fetchPopularMovies = async() => {
    const endpoint = 'trending/movie/week'

    return await baseFetch({endpoint})
}