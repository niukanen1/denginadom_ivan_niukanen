type apiResponse<T> = { 
    info: generalInfo
    results: T[] 
}

type generalInfo = { 
    count: number
    pages: number 
    next: string | null
    prev: string | null 
}