import _ from 'lodash';
import * as data from './data';

export function randomSurnames(n: number): string[] {
	let arr = data.names.split('\n');
	let res = [];
	for (let i = 0; i < n; i++) {
		let name = arr[randBetween(0, arr.length)];
		res.push(name);
	}
	return res;
}

export function randBetween(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}