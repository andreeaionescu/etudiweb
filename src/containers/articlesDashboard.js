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
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Pagination from "@material-ui/lab/Pagination";

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

function ExpandedArticle(props) {

    return (
        <Grid container direction="column" spacing={2} classes={props.classes.expandedArticle}>
            <Grid item>
                <Typography variant="overline">{props.article.Journal.Title + ', ' + props.article.Journal.PublicationDetails}</Typography>
                <Typography variant="h4">{props.article.Title}</Typography>
                <Typography variant="caption">{_.join(props.article.Authors, ', ')}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" >Abstract</Typography>
                <Typography variant="body1" dangerouslySetInnerHTML={{__html: props.article.Abstract}}></Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" >{`Keywords: ${props.searchText} ${props.article.Keywords}`}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" >{`Copyright: ${props.article.Copyright}`}</Typography>
            </Grid>
        </Grid>
    )
    
}

class ArticlesDashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {expanded: '', page: 1}
        this.expandArticle = this.expandArticle.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    expandArticle(id){
        this.setState(prevState  => ({expanded: id, page: prevState.page}))
    }

    handlePageChange(event, value){
        this.setState(prevState  => ({expanded: prevState.expanded, page: value}))
    };

    render(){
        const classes = this.props.classes;
        const itemsPerPage = 25;
        const noOfPages = Math.ceil(Object.keys(this.props.articles).length / itemsPerPage)
        const slicedArticleList = Object.keys(this.props.articles).slice((this.state.page - 1) * itemsPerPage, this.state.page * itemsPerPage)

        return (
            <Container maxWidth="lg" style={{paddingTop: '2ch'}}>
                <Paper elevation={3}>
                    <Grid container direction="column" justify="space-between" alignItems="center">
                        <Grid item>
                            <SearchBar classes={classes} inputClass={`${classes.searchInput} ${classes.spaciousSearchInput}`} handleSearchArticle={this.props.handleSearchArticle} searchText={this.props.searchText}/>
                        </Grid>
                            {this.state.expanded == '' ? 
                                <Grid item>
                                    <List>
                                        {slicedArticleList.map(key => <Article key={key} id={key} article={this.props.articles[key]} expandArticle={this.expandArticle} searchText={this.props.searchText}/>)}
                                    </List>
                                    <Divider />
                                    <Box component="span">
                                        <Pagination
                                            count={noOfPages}
                                            page={this.state.page}
                                            onChange={this.handlePageChange}
                                            defaultPage={1}
                                            color="primary"
                                            size="large"
                                            showFirstButton
                                            showLastButton
                                            classes={{ ul: classes.paginator }}
                                        />
                                        </Box>
                                </Grid>
                                :
                                <Grid item>
                                    <ExpandedArticle classes={classes} article={this.props.articles[this.state.expanded]}/>
                                </Grid>
                            }
                    </Grid>
                </Paper>
            </Container>
        )
    }
}

export default ArticlesDashboard