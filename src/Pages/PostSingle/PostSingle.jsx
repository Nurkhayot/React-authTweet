import React from 'react';
import { useParams } from 'react-router-dom';

function PostSingle() {
	const { id } = useParams();
	const [data, setData] = React.useState({});
	const [comments, setComments] = React.useState([]);

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/' + id)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, [id]);

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
			.then((response) => response.json())
			.then((data) => setComments(data));
	}, [id]);

	return (
		<>
			PostSingle, {id}
			{data && (
				<>
					<h3>{data.title}</h3>

					<p>{data.body}</p>
				</>
			)}
			<ul>
				{comments.length > 0 &&
					comments.map((row) => (
						<li key={row.id}>{row.email + ' | ' + row.body}</li>
					))}
			</ul>
		</>
	);
}

export default PostSingle;
