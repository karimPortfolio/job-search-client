
export interface FetchOptions {
    method?: string,
    body?: FormData,
    headers?:any
}

interface UseFetchResult{
    data: any | null,
    loading: boolean
}

declare function useFetch(url: string, options: FetchOptions): UseFetchResult;

export default useFetch;
