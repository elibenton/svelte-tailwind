<!-- <script context="module">
	import { Client } from '@notionhq/client';
	const notion = new Client({ auth: process.env.VITE_NOTION_API_KEY });

	export async function load({ page, fetch, session, stuff }) {
		const responseRaw = await notion.databases.query({
			database_id: process.env.VITE_NOTION_LIST_ID,
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
		});
	}

	const responseClean = responseRaw.results.map(({ properties, id }) => ({
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

	console.log(responseClean);
</script> -->

<h1>Blog</h1>
