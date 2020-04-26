import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Fib() {
	const [seenIndexes, setSeenIndexes] = useState([]);
	const [values, setValues] = useState({});
	const [index, setIndex] = useState('');

	useEffect(() => {
		fetchIndexes();
		fetchValues();
	}, []);

	async function fetchValues() {
		try {
			const values = await axios.get('/api/values/current');
			setValues(values.data);
		} catch (err) {
			console.error("fetchValues() didn't reach the server!!!");
			console.log(err);
		}
	}

	async function fetchIndexes() {
		try {
			const indexes = await axios.get('/api/values/all');
			setSeenIndexes(indexes.data);
		} catch (err) {
			console.error("fetchIndexes() didn't reach the server!!!");
			console.log(err);
		}
	}

	function renderSeenIndexes() {
		return seenIndexes.map(({ number }) => number).join(', ');
	}

	function renderValues() {
		const entries = [];
		for (let key in values) {
			entries.push(
				<div key={key}>
					For index {key} i calculated {values[key]}
				</div>
			);
		}

		return entries;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await axios.post('/api/values', {
				index: index,
			});
			setIndex('');
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input value={index} onChange={(e) => setIndex(e.target.value)} />
				<button>Submit</button>
			</form>
			<h3>Indexes i have seen :</h3>
			{renderSeenIndexes()}
			<h3>Calulated values :</h3>
			{renderValues()}
		</div>
	);
}
