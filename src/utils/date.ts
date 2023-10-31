/**
 * Date 객체에 count 만큼의 Hour를 더한 Date 객체를 반환한다.
 * @param date : Date
 * @param count : Number
 * @returns date : Date
 */
export function addHours(date: Date, count: number) {
	return new Date(date.getTime() + count * 60 * 60 * 1000);
}

/**
 * Date 객체에 count  만큼의 Day를 더한 Date 객체를 반환한다.
 * @param date : Date
 * @param count : Number
 * @returns date : Date
 */
export function addDays(date: Date, count: number) {
	return new Date(date.getTime() + count * 24 * 60 * 60 * 1000);
}
