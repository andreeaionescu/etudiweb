import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';


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
        this.props.handleSearch(this.state.searchText)
    }
  }

  render(){
      const classes = this.props.classes

      return (
          <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  input: classes.searchInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={this.handleChange}
              />
              <IconButton type="submit" className={classes.searchIconButton} aria-label="search" onClick={this.handleSubmit}>
                <SearchIcon />
              </IconButton>
            </div>
      )
  }
}

export default SearchBar;