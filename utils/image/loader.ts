export default function ImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
	return `https://github.com/minro/app-service/tree/main/assets${src}?w?=${width}&q=${quality || 75}`
}