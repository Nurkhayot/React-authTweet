import React from 'react';
import { Link } from 'react-router-dom';

// Components

function Home() {
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [page, setPage] = React.useState(1);
	const [isNextDisabled, setIsNextDisabled] = React.useState(false);

	React.useEffect(() => {
		fetch('https://reqres.in/api/users?page=' + page)
			.then((response) => response.json())
			.then((data) => {
				setData(data.data);
				setLoading(false);
			});

		fetch('https://reqres.in/api/users?page=' + (page + 1))
			.then((response) => response.json())
			.then((data) => {
				if (data.data.length) {
					setIsNextDisabled(false);
				} else {
					setIsNextDisabled(true);
				}
			});
	}, [page]);

	return (
		<>
			<h2>Home</h2>

			{loading && <p>Loading ....</p>}

			{data.length > 0 &&
				data.map((row) => (
					<li key={row.id}>
						<Link to={`/profile/${row.id}`}>
							{row.id +
								') ' +
								row.first_name +
								' ' +
								row.last_name}
						</Link>

						<div>
							<img
								src={row.avatar}
								alt={
									row.first_name +
									' ' +
									row.last_name +
									'image'
								}
								width={100}
								height={100}
							/>

							<button
								type='button'
								style={{ display: 'block' }}
								onClick={() => {
									fetch(
										'https://reqres.in/api/users/' + row.id,
										{
											method: 'DELETE',
										},
									).then((response) => {
										if (response.status === 204) {
											const filteredUsers = data.filter(
												(user) => user.id !== row.id,
											);

											setData([...filteredUsers]);
										}
									});
								}}>
								Delete
							</button>
						</div>
					</li>
				))}

			<button
				onClick={() => setPage(page - 1)}
				disabled={page < 2 ? true : false}>
				prev
			</button>
			<button onClick={() => setPage(page + 1)} disabled={isNextDisabled}>
				next
			</button>
		</>
	);
}

export default Home;
