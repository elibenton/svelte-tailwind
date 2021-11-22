// const key = import.meta.env.VITE_NOTION_API_KEY;
const base = 'https://api.notion.com/v1';

async function send({ method, path, data }) {
	const opts = { method, headers: {} };

	opts.headers['Authorization'] = `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`;
	opts.headers['Notion-Version'] = '2021-08-16';

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	return fetch(`${base}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path) {
	return send({ method: 'GET', path });
}

export function del(path) {
	return send({ method: 'DELETE', path });
}

export function post(path, data) {
	return send({ method: 'POST', path, data });
}

export function put(path, data) {
	return send({ method: 'PUT', path, data });
}

export function patch(path, data) {
	return send({ method: 'PATCH', path, data });
}
