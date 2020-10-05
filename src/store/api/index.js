import Axios from "axios";

export const fetchAllPosts = () => Axios.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
        headers: {
        "content-type": "application/json"
        }
    }
)