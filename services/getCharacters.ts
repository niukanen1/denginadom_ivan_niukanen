import axios from "axios";

export default async function getCharacters(): Promise<apiResponse<character> | undefined> { 
    try { 
        const result = await axios.get("https://rickandmortyapi.com/api/character"); 
        return result.data as apiResponse<character>;
    } catch (err) { 
        let error = err as Error; 
        console.log("Error in getCharacters()");
        console.log(error.message);
    }
}