export const getColor = (colors: { [name: string]: string }, color: string) => {
	if (color in colors) return colors[color];
	return color;
};

// Works just for colors of form: #ABCABC -> # + 6
export const hexToRgba = (hex: string, alpha: number = 1) => {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
