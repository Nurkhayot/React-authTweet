import React from 'react';
import { Link } from 'react-router-dom';

function Posts() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return (
		<>
			<h2>Posts</h2>

			<ul>
				{data.length &&
					data.map((row) => (
						<li key={row.id}>
							<Link to={'posts/' + row.id}>{row.title}</Link>
						</li>
					))}
			</ul>
		</>
	);
}

export default Posts;
