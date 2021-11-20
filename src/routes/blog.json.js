import * as api from '$lib/api';

import title from 'title';
import { groups, rollups, sort } from 'd3-array';
import { format, parse } from 'date-fns';

export async function get() {
	const { results } = await api.post(
		`databases/${import.meta.env.VITE_NOTION_LIST_ID}/query/`,
		{
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
		},
		`${import.meta.env.VITE_NOTION_API_KEY}`
	);

	const responseClean = results.map(
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

	return { body: groups(responseClean, (d) => format(new Date(d.added), `MMMM yyyy`)) };
}
