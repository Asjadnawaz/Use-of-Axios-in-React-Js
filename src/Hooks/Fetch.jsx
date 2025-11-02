import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const Fetch = async () => {
            try {
                const res = await axios.get(url);
                if (!res.data) {
                    throw new Error("Server Error");
                }
                setData(res);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        Fetch()
    }, [url])

    return (
        {
            data , error, loading
        }
    )
}

export default useFetch;

