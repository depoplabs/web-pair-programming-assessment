import {useEffect, useState} from "react";

export const useGetProducts = (url) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();
                setProducts(data);
            } catch (exception) {
            }
        }

        fetchData();
    }, [url])

    return {products}
}

