import {useEffect, useState} from "react";

export const useGetProducts = (url) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();
                setLoading(false);
                setProducts(data);
            } catch (exception) {
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return {products, loading}
}

