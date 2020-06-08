import React from 'react';
import _ from 'lodash';
import { Grid, ListItem, ListItemIcon } from '@material-ui/core';
import { Button, Tooltip, Checkbox } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';

export function ArticleListItem(props) {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };

    const handleExpandArticle = (id) => () => {
        props.expandArticle(id)
    }

    const truncateAbstract = (abstract) => {
       return _.truncate(abstract, {
        'length': 1000,
        'separator': '.',
        'omission': ' ... (click to expand)'
      })
    }

    const labelId = `checkbox-list-label-${props.id}`;

    return (
        <ListItem key={props.id} dense button disableRipple alignItems='flex-start' onClick={handleExpandArticle(props.id)}>
            <ListItemIcon>
                <Checkbox
                    checked={checked.indexOf(props.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={handleToggle(props.id)}
                />
            </ListItemIcon>
            <Grid container direction="column">
                <Typography variant="h6" dangerouslySetInnerHTML={{__html: props.article.Title}}></Typography>
                <Typography variant="caption">{_.join(props.article.Authors, ', ')}</Typography>
                <Typography variant="overline">{props.article.Journal.Title + ', ' + props.article.Journal.PublicationDetails}</Typography>
                <Typography variant="body1" dangerouslySetInnerHTML={{__html: truncateAbstract(props.article.Abstract)}}></Typography>
            </Grid>
        </ListItem>
    )
}

export function ArticleFull(props) {

    console.log(props.article)
    const tooltip_title = `Open full text via ${props.article.pmc_id}`
    
    return (
        <Grid container direction="column" wrap="nowrap" spacing={2} className={props.classes.expandedArticle}>
            <Grid item>
                <Typography variant="overline">{props.article.Journal.Title + ', ' + props.article.Journal.PublicationDetails}</Typography>
                <Typography variant="h4" dangerouslySetInnerHTML={{__html: props.article.Title}}></Typography>
                <Typography variant="caption">{_.join(props.article.Authors, ', ')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Abstract</Typography>
                <Typography variant="body1" dangerouslySetInnerHTML={{__html: props.article.Abstract}}></Typography>
            </Grid>
            {props.article.Keywords.length != 0 && 
                <Grid item>
                    <Typography variant="body1" display="inline" style={{fontWeight: 800}}>Keywords: </Typography>
                    <Typography variant="body1" display="inline">{_.join(props.article.Keywords[0], '; ')}</Typography>
                </Grid>}
            <Grid item>
                <Typography variant="body1" >{props.article.Copyright}</Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="center" spacing={2}>
                    { props.article.pmc_id &&
                    <Grid item>
                        <Tooltip title="Open full text via PMC" aria-label="add">
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                endIcon={<OpenInNewIcon />}
                                onClick={() => window.open(`https://www.ncbi.nlm.nih.gov/pmc/articles/PMC${props.article.pmc_id}/`, "_blank")}
                            >
                                FULL TEXT PMC
                            </Button>
                        </Tooltip>
                    </Grid>}
                    {!_.isEmpty(props.article.ELocationID) && props.article.ELocationID.map(elink =>
                        
                        <Grid item key={elink.EIdType}>
                            <Tooltip title={`Open full text via ${_.toUpper(elink.EIdType)}`} aria-label="add">
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    endIcon={<OpenInNewIcon />}
                                    onClick={() => window.open(elink.Link, "_blank")}
                                >
                                    FULL TEXT
                                </Button>
                            </Tooltip>
                        </Grid>
                        
                        )}
                </Grid>
            </Grid>
        </Grid>
    )

}

export function ArticleBasis(props) {

    return (
        <Grid container direction="column" wrap="nowrap" spacing={2} className={props.classes.expandedArticle}>
            <Grid item>
                <Typography variant="overline">{props.article.Journal.Title + ', ' + props.article.Journal.PublicationDetails}</Typography>
                <Typography variant="h4" dangerouslySetInnerHTML={{__html: props.article.Title}}></Typography>
                <Typography variant="caption">{_.join(props.article.Authors, ', ')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Abstract</Typography>
                <Typography variant="body1" dangerouslySetInnerHTML={{__html: props.article.Abstract}}></Typography>
            </Grid>
            {props.article.Keywords.length != 0 && 
                <Grid item>
                    <Typography variant="body1" display="inline" style={{fontWeight: 800}}>Keywords: </Typography>
                    <Typography variant="body1" display="inline">{_.join(props.article.Keywords[0], '; ')}</Typography>
                </Grid>}
            <Grid item>
                <Typography variant="body1" >{props.article.Copyright}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" >No full text available.</Typography>
            </Grid>
        </Grid>
    )
    
}