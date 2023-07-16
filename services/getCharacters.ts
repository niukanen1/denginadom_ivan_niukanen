import axios from "axios";

export default async function getCharacters(page: number = 1, filter: filter): Promise<apiResponse<character>> {
	const { gender, status, name } = filter;
	// optional params
	const params: any = {
		page: page,
	};

	// if parameters are passed => add them to params object
	if (status) params.status = status;
	if (gender) params.gender = gender;
	if (name) params.name = name;

	const result = await axios.get(`https://rickandmortyapi.com/api/character`, {
		params: params,
	});
	return Promise.resolve(result.data as apiResponse<character>);
}
