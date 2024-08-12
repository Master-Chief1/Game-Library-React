import React, { ReactElement } from 'react'
import GameList from 'components/GameList'
import withErrorBoundary from 'hoc/withErrorBoundary'
import Title from 'components/Title';

const Home = (): ReactElement => (
	<main>
		<Title />
		<GameList />
	</main>
)

export default withErrorBoundary(Home)
