
export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': 'f775819f6dmsh8b587894df40eccp18162djsn473bccfb00f4'
	}
};
export const youtubeOptions = {
	// method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	// 	'X-RapidAPI-Key': 'f775819f6dmsh8b587894df40eccp18162djsn473bccfb00f4'

	// }
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f775819f6dmsh8b587894df40eccp18162djsn473bccfb00f4',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
}
export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};