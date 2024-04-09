export function formatThousands(value: number): string {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function randomUpTo(maxExcluded: number) {
	return Math.floor(Math.random() * maxExcluded);
}