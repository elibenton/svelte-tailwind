import * as api from '$lib/api';

import title from 'title';
import { groups } from 'd3-array';
import { format, parse } from 'date-fns';

export async function get() {
	const reading = import.meta.env.VITE_NOTION_LIST_ID;
	const public_posts = {
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
	};

	const { results } = await api.post(`databases/${reading}/query/`, public_posts);

	const responseClean = results.map(
		({
			properties: { Name, Author, Type, Link, Created, Added, Publisher, Summary, Likes },
			id
		}) => ({
			name: title(Name.title[0].plain_text),
			id: id,
			authors: Author.multi_select.map(({ name }) => name),
			type: Type.select.name,
			link: Link.url,
			date: format(parse(Created.date.start, 'yyyy-MM-dd', new Date()), 'MMM dd, yyyy'),
			added: Added.created_time,
			publishers: Publisher.multi_select.map(({ name }) => name),
			summary: Summary.rich_text.map((item) => item.plain_text),
			likes: Likes.number
		})
	);

	return {
		body: {
			posts: groups(responseClean, (d) => format(new Date(d.added), `MMMM yyyy`)),
			tags: [...new Set(results.map(({ properties }) => properties.Type.select.name))]
		}
	};
}
