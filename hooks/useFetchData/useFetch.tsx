'use client'

import { useEffect, useState } from "react";
import { FetchOptions } from "./useFetch.d";


const useFetch = (url: string, options: FetchOptions) => {

    const [data, setData] = useState<any | null>(null);
    const [loading , setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try
        {
            const response = await fetch(url, options);
            if (response.ok)
            {
                const result = await response.json();
                console.log(result);
                setData(result);
            }
        }
        catch (err)
        {
            console.error(err);
        }
        finally
        {
            setLoading(false);
        }
    }

    useEffect( () => {
        fetchData();
    }, [url]);

    return {
        data,
        loading
    }

}

export default useFetch;
