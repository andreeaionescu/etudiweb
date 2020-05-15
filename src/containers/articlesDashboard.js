import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ArticlesDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <List>
                {Object.keys(this.props.articles).map(key => <ListItem key={key}><ListItemText primary={`Item ${JSON.stringify(this.props.articles[key])}`} /></ListItem>)}
            </List>
        )
    }
}

export default ArticlesDashboard