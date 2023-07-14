import axios from "axios";

export default async function getCharacters() { 
    try { 
        const result = await axios.get("https://rickandmortyapi.com/api/character") as apiResponse<character>
        console.log(result);
    } catch (err) { 
        let error = err as Error; 
        console.log("Error in getCharacters()");
        console.log(error.message);
    }
}