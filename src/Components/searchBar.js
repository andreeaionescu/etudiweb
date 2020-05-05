import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchText: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.searchText !== ''){
        console.log(this.state.searchText)
        // this.props.handleSearch(this.state.searchText)
    }
  }

  render(){
      const classes = this.props.classes

      return (
          <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={this.handleChange}
              />
            </div>
      )
  }
}

export default SearchBar;