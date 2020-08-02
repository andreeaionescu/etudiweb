import React, { useContext } from 'react';
import { Grid, Typography, IconButton, Button, useTheme } from '@material-ui/core';
import { FiberManualRecord, AddCircle, Share } from '@material-ui/icons';

import { Pin } from '../interfaces';
import { ClassesContext } from '../contexts';

export default function PinArea(props: Pin) {

	const classes = useContext(ClassesContext);
	const theme = useTheme();

	return (
		<Grid container direction='column' className={classes.pin}>
			<Grid item container className={classes.pinTitle} style={{ backgroundColor: theme.palette.primary.light }}>
				<FiberManualRecord htmlColor='#3C1383' />
				<Grid container justify='center'>
					<Typography variant='subtitle1'>
						{props.title}
					</Typography>
					<Typography variant='subtitle1' style={{ fontWeight: 400, marginLeft: '5px' }}>
						({props.items.length})
					</Typography>
				</Grid>
				<FiberManualRecord htmlColor='#3C1383' />
			</Grid>
			<Grid item container direction='column' wrap='nowrap' style={{ maxHeight: '30vh', overflow: 'auto', padding: '10px 5px' }}>
				{props.items.map((p, i) => {
					return (
						<Typography key={[p.author, p.year, i].join('.')} className={classes.list} gutterBottom>
							{p.author}, {p.year}
						</Typography>
					);
				})}
			</Grid>
			<IconButton style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
				<Share />
			</IconButton>
		</Grid>
	)
}

export function NewPin({ onClick }: { onClick: () => Promise<void> }) {

	const classes = useContext(ClassesContext);

	return (
		<Grid container direction='column' className={classes.pin}
			alignContent='center'
			justify='center'
			style={{ borderStyle: 'dashed', opacity: 0.68, cursor: 'pointer' }}
			onClick={onClick}
		>
			<Button fullWidth={false} style={{ width: 'max-content' }} >
				<AddCircle />
			</Button>
		</Grid>
	)
}