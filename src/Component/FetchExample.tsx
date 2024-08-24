import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://www.google.co.th/";


export default function FetchExample (){
    
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        const fetchGet = async () => {
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();
    
        setLoading(true)

        try {
            let response = await fetch(`${BASE_URL}`);
            const gets = (await response.json());
            console.info(gets)
        } catch (e: any) {
           if (e.name === "AbortError") {
            console.error("Abort")
            return;
           }
        } finally {
            setLoading(false)
        }
    };
    
    fetchGet();
    }, [page]);
    
}