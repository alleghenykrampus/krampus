import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { AdventureHandler } from './Adventure';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import { Grid, Row, Col } from 'react-bootstrap';

export default function App() {
  return (
	<div>
		<Navbar />
		<Grid>
			<Row>
				<Col xs={12} md={10}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/game/:id" component={AdventureHandler}/>
						<Route component={PageNotFound} />
					</Switch>
				</Col>
				<Col xs={12} md={2}>
					<Sidebar />
				</Col>
			</Row>
		</Grid>
    </div>
  );
}
