import exifr from 'exifr/dist/full.esm.mjs';

export async function get() {
	const opts = { method: 'GET', headers: {} };

	opts.headers['X-Auth-Email'] = 'eliunited@gmail.com';
	opts.headers['X-Auth-Key'] = 'd513e7aa48e29e4371190a0ea4cec21232067';
	opts.headers['Content-Type'] = 'application/json';

	const base = 'https://api.cloudflare.com/client/v4/accounts/';
	const accountID = '7031c3a579be0b63ef6be8e0eeb6d156';
	const response = await fetch(`${base}/${accountID}/images/v1?page=1&per_page=100`, opts);

	const {
		result: { images }
	} = await response.json();

	async function getEXIF(image) {
		const output = await exifr.parse(image.variants[0], [
			'FNumber',
			'ISO',
			'Make',
			'Model',
			'ShutterSpeedValue',
			'FocalLengthIn35mmFormat',
			'DateTimeOriginal'
		]);

		return { image, metadata: output };
	}

	const imagesWithMeta = await Promise.all(images.map((image) => getEXIF(image)));

	return { body: imagesWithMeta };
}
