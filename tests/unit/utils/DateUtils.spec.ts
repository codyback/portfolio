import { getExperienceDateRange, getShortDate } from '@/lib/utils/DateUtils';
import { describe, expect, it } from 'vitest';

describe('DateUtils', () => {
	describe('method: getExperienceDateRange', () => {
		it('returns range with both params', () => {
			const fromDate = new Date('01-01-2023');
			const toDate = new Date('02-02-2023');

			const actual = getExperienceDateRange(fromDate, toDate);
			expect(actual).toBe('2023 - 2023');
		});

		it('returns year to current with only one valid param', () => {
			const fromDate = new Date('01-01-2023');

			const actual = getExperienceDateRange(fromDate, null);
			expect(actual).toBe('2023 - Current');
		});
	});

	describe('method: getShortDate', () => {
		it('returns short date with year', () => {
			const date = new Date('01-01-2023');

			const actual = getShortDate(date);
			expect(actual).toBe('Jan 2023');
		});
	});
});
