import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyC4c6-Ij6dNElsX-3u9GiVzPLqvPrfU7rs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: YOUTUBE_KEY
    }
});