// src/pages/api/album.ts
import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';

interface CloudinaryConfig {
	cloud_name: string;
	api_key: string;
	api_secret: string;
}

const initializeCloudinary = (config: CloudinaryConfig): void => {
	cloudinary.config({
		cloud_name: config.cloud_name,
		api_key: config.api_key,
		api_secret: config.api_secret
	});
};

const cloudinaryConfig: CloudinaryConfig = {
	cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME ?? '',
	api_key: import.meta.env.CLOUDINARY_API_KEY ?? '',
	api_secret: import.meta.env.CLOUDINARY_API_SECRET ?? ''
};


initializeCloudinary(cloudinaryConfig);


export const GET: APIRoute = async ({ params, request }) => {
	const url = new URL(request.url);
	const folder = url.searchParams.get('folder') || '202506/final/highlights';


	try {
		const result = await cloudinary.search
			.expression(`folder:${folder} AND resource_type:image AND (metadata.categories="homepage" OR metadata.Categories="kitchen") `)
			.sort_by('metadata.sortorder', 'asc')
			.max_results(50)
			.execute();

		const images = result.resources.map((img: any) => ({
			src: `https://res.cloudinary.com/${import.meta.env.CLOUDINARY_CLOUD_NAME}/image/upload/w_1350,f_auto,q_auto/${img.public_id}.jpg`,
			title: img.title,
			alt: img.title || 'B&B Bosserheide Well (Limburg)',
			width: img.width,
			height: img.height,
			widths: [400, 800, 1350],
			srcset: [400, 800, 1350]
				.map(w => `https://res.cloudinary.com/${import.meta.env.CLOUDINARY_CLOUD_NAME}/image/upload/w_${w},f_auto,q_auto/${img.public_id}.jpg ${w}w`)
				.join(', ')
		}));

		return new Response(JSON.stringify(images), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (e) {
		return new Response(JSON.stringify({ error: 'Failed to fetch images ' + import.meta.env.CLOUDINARY_CLOUD_NAME + ' end' }), {
			status: 500
		});
	}
};
