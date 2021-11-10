import title from 'title';
import { groups, rollups, sort } from 'd3-array';
import { format } from 'date-fns';

export async function get({ page, fetch, session, stuff }) {
	url = `https://api.notion.com/v1/databases/${import.meta.env.VITE_NOTION_LIST_ID}/query `;

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

	if (response.ok) {
		// if HTTP-status is 200-299
		// get the response body (the method explained below)
		let json = await response.json();

		const responseClean = json.results.map(({ properties, id }) => ({
			name: title(properties.Name.title[0].plain_text),
			authors: properties.Author.multi_select.map(({ name }) => name),
			type: properties.Type.select.name,
			link: properties.Link.url,
			date: properties.Date.date.start,
			added: properties.Added.created_time,
			publishers: properties.Publisher.multi_select.map(({ name }) => name),
			summary: properties.Summary.rich_text.map((item) => item.plain_text),
			id: id
		}));

		// const responseFilter = responseClean.map((res) => {
		// 	const items = {};

		// 	fields.forEach((field) => {
		// 		items[field] = res[field];
		// 	});
		// 	return items;
		// });

		const responseGrouped = groups(responseClean, (d) => format(new Date(d.added), `MMMM yyyy`));
		console.log(responseGrouped);
	} else {
		console.log('Error');
	}
}
