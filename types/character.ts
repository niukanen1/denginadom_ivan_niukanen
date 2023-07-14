type character = { 
    id: number, 
    name: string
    status: string 
    species: 'Alive' | 'Dead' | 'unknown'
    type: string 
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
    origin: originObj
    location: string 
    image: string 
    episode: string[]
    url: string 
    created: string
}

type originObj = { 
    name: string
    url: string
}