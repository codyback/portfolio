export const getExperienceDateRange = (
	fromDate: Date,
	toDate: Date | null,
): string => {
	if (toDate) return `${fromDate.getFullYear()} - ${toDate.getFullYear()}`;

	return `${fromDate.getFullYear()} - Current`;
};

export const getShortDate = (date: Date): string => {
	const month = date.toLocaleString('default', { month: 'short' });
	const year = date.getFullYear();

	return `${month} ${year}`;
};
