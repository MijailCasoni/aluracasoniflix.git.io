const API_KEY = "6f6a3735f120f96114ff3d10fe04d203";

//endpoints

const requests = {
    fetchTrending: 'trending/all/week?api_key=${API_KEY}&language=en-US',
    fetchNetflixOiriginals: 'discover/tv?api_key=${API_KEY}&withy_networks=123',
    fetchTopRated: '/movie/top_rated?api_key=${API_KEY}&language=en-US',
    fetchActionMovies: 'discover/movie=api_key=${API_KEY}&with_genres=28',
    fetchComedyMovies: 'discover/movie=api_key=${API_KEY}&with_genres=35',
    fetchHorrorMovies: 'discover/movie=api_key=${API_KEY}&with_genres=27',
    fetchRomanceMovies: 'discover/movie=api_key=${API_KEY}&with_genres=10749',
    fetchDocumentaries: 'discover/movie=api_key=${API_KEY}&with_genres=99',
};

export default requests;