type character = {
	id: number;
	name: string;
	status: status;
	species: string;
	type: string;
	gender: gender;
	origin: originObj;
	location: string;
	image: string;
	episode: string[];
	url: string;
	created: string;
};

type originObj = {
	name: string;
	url: string;
};
type gender = "Female" | "Male" | "Genderless" | "unknown";
type status = "Alive" | "Dead" | "unknown";

