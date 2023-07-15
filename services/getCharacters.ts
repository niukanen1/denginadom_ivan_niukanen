import axios from "axios";

export default async function getCharacters(
	page: number = 1,
	status?: status,
	gender?: gender,
	name?: string
): Promise<apiResponse<character> | undefined> {
	// optional params
	const params: any = {
		page: page,
	};

	// if parameters are passed => add them to params object
	if (status) params.status = status;
	if (gender) params.gender = gender;
	if (name) params.name = name;

	try {
		const result = await axios.get(`https://rickandmortyapi.com/api/character`, {
			params: params,
		});
		return result.data as apiResponse<character>;
	} catch (err) {
		let error = err as Error;
		console.log("Error in getCharacters()");
		console.log(error.message);
	}
}
