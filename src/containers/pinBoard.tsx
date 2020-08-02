import React, { useState, useCallback, useContext, useEffect } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { Container, Paper, Grid, IconButton, Typography, Divider } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

import { ClassesContext } from '../contexts';
import { Pin } from '../interfaces';
import { randomSurnames, randBetween } from '../utils/prototype';
import PinArea, { NewPin } from '../components/pinArea';

interface BoardProps {

}

const sortable = {
	recent: {
		name: 'Recently edited'
	},
	created: {
		name: 'Created at'
	},
	alphabetical: {
		name: 'Alphabetical'
	},
	used: {
		name: 'Most used'
	}
}


const SamplePins = [
	'Atrial Fibrillation',
	'Hypertension',
	'Stroke risk factors',
	'Hypoxia and Cancer',
	'Other interesting stuff'
].map((title) => {
	return {
		title,
		items: randomSurnames(randBetween(3, 7)).map(s => ({
			author: s + (!Math.round(Math.random()) ? ' et al.' : ''),
			year: randBetween(1980, 2020)
		}))
	};
}) as Pin[];


function PinBoard(props: BoardProps) {

	const [sort, setSort] = useState('recent' as keyof typeof sortable);
	const classes = useContext(ClassesContext);

	const [pins, setPins] = useState(SamplePins);	//TODO: use backend data not sample
	const updatePins = useCallback(() => {
		setPins([]);
	}, [setPins])
	useEffect(() => {
		//updatePins();
	}, []);

	const createPin = useCallback(() => Promise.resolve(), []);	//TODO: Create pin dispatch

	return (
		<Container maxWidth='lg' style={{ paddingTop: '2ch', minHeight: '100vh' }}>
			<Paper elevation={3} style={{ padding: '1em' }}>
				<Grid container direction='column' wrap='nowrap' justify='space-between' alignItems='center'>
					<Grid item container direction='row' wrap='nowrap' spacing={1} alignItems='center'>
						<Grid item style={{ marginRight: '2ch' }}>
							<Typography variant='h4' noWrap >Pin boards</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.optionLabel} noWrap >Sort by:</Typography>
						</Grid>
						<Grid item container direction='row'>
							<Typography className={classes.option} >
								{sortable[sort].name}
							</Typography>
							<IconButton size='medium'>
								<ArrowDropDown />
							</IconButton>
						</Grid>
					</Grid>
					<Divider className={classes.divider} />
					<Grid item container className={classes.board}
						direction='row'
						justify='flex-start'
						alignItems='flex-start'
					>
						{pins.map((p, i) => {
							return <PinArea {...p} key={['pin', i].join('.')} />
						})}
						<NewPin onClick={createPin} />
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
}

const mapStateToProps = (state: { search: any, articles: any[] }) => {  //TODO
    return { search: state.search, articles: state.articles };
};

const mapDispatchToProps = (dispatch: MapDispatchToProps<any, any>) => ({ //TODO
	
});

export default connect(mapStateToProps, mapDispatchToProps)(PinBoard)