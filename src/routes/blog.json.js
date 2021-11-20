import title from 'title';
import { groups, rollups, sort } from 'd3-array';
import { format, parse } from 'date-fns';

export async function get() {
	url = `https://api.notion.com/v1/databases/${import.meta.env.VITE_NOTION_LIST_ID}/query`;

	let response = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
			'Notion-Version': '2021-08-16',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			filter: {
				property: 'Public',
				checkbox: {
					equals: true
				}
			},
			sorts: [
				{
					property: 'Added',
					direction: 'descending'
				}
			]
		})
	});

	// if HTTP-status is 200-299
	// get the response body (the method explained below)
	let json = await response.json();

	const responseClean = json.results.map(
		({ properties: { Name, Author, Type, Link, Created, Added, Publisher, Summary } }) => ({
			name: title(Name.title[0].plain_text),
			authors: Author.multi_select.map(({ name }) => name),
			type: Type.select.name,
			link: Link.url,
			date: format(parse(Created.date.start, 'yyyy-MM-dd', new Date()), 'MMM dd, yyyy'),
			added: Added.created_time,
			publishers: Publisher.multi_select.map(({ name }) => name),
			summary: Summary.rich_text.map((item) => item.plain_text)
		})
	);

	// const responseReduced = responseClean.reduce((acc, value) => {
	// 	// Format month properly
	// 	month = format(new Date(value.added), `MMMM yyyy`);

	// 	// Group initialization
	// 	if (!acc[month]) {
	// 		acc[month] = [];
	// 	}

	// 	// Grouping
	// 	acc[month].push(value);

	// 	return acc;
	// }, {});

	// const responseGrouped = groups(responseClean, (d) => format(new Date(d.added), `MMMM yyyy`));

	return { body: groups(responseClean, (d) => format(new Date(d.added), `MMMM yyyy`)) };
}
