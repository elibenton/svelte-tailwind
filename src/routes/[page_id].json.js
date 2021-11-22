import * as api from '$lib/api';

export async function get(page_id, likes) {
	api.patch(`pages/${page_id}`, { properties: { Likes: { number: likes + 1 } } });
}
