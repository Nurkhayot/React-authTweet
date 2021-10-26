import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
	const { id } = useParams();

	const [data, setData] = React.useState({});

	React.useEffect(() => {
		fetch('https://reqres.in/api/users/' + id)
			.then((response) => response.json())
			.then((data) => setData(data.data));
	}, [id]);

	return (
		<>
			{data && (
				<>
					<h2>Profile</h2>

					<p>Hey, I am {data.first_name + ' ' + data.last_name}!</p>

					<div>
						<img
							src={data.avatar}
							alt={
								data.first_name + ' ' + data.last_name + 'image'
							}
							width={100}
							height={100}
						/>
					</div>
				</>
			)}
		</>
	);
}

export default Profile;
