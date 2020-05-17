import React from 'react';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../components/searchBar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function Article(props) {
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

    const labelId = `checkbox-list-label-${props.id}`;

    return (
        <ListItem key={props.id} dense button disableRipple alignItems='flex-start'>
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
                <Typography variant="h6">{props.article.Title}</Typography>
                <Typography variant="caption">{_.join(props.article.Authors, ', ')}</Typography>
                <Typography variant="overline">{props.article.Journal.Title + ', ' + props.article.Journal.PublicationDetails}</Typography>
                <Typography variant="body1">{props.article.Abstract}</Typography>
            </Grid>
        </ListItem>
    )
    
}

class ArticlesDashboard extends React.Component {

    render(){
        const classes = this.props.classes;

        return (
            <Container maxWidth="lg" style={{paddingTop: '2ch'}}>
                <Paper elevation={3}>
                    <Grid container direction="column" justify="space-between" alignItems="center">
                        <Grid item>
                            <SearchBar classes={classes} inputClass={`${classes.searchInput} ${classes.spaciousSearchInput}`} handleSearchArticle={this.props.handleSearchArticle} searchText={this.props.searchText}/>
                        </Grid>
                        <Grid item>
                            <List>
                                {Object.keys(this.props.articles).map(key => <Article key={key} id={key} article={this.props.articles[key]}/>)}
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
}

export default ArticlesDashboard