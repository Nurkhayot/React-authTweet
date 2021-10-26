import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings';
import Profile from './Pages/Profile/Profile';
import Posts from './Pages/Posts/Posts';
import PostSingle from './Pages/PostSingle/PostSingle';

function AuthenticatedApp() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<NavLink
								to='/'
								activeClassName='nav__link--active'
								exact>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/settings'
								activeClassName='nav__link--active'>
								Settings
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/posts'
								activeClassName='nav__link--active'>
								Posts
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/profile/1'
								activeClassName='nav__link--active'>
								Profile
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/settings' component={Settings} />
					<Route path='/posts' component={Posts} exact />
					<Route path='/posts/:id' component={PostSingle} exact />
					<Route path='/profile/:id' component={Profile} exact />
				</Switch>
			</main>
		</>
	);
}

export default AuthenticatedApp;
