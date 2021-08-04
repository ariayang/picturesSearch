import React from "react";

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     //event.target.value;
    // }
    state = {term: ""};

    // Handling search
    // By using => function, we bind this.state to the correct object instead of "undefined"
    // Another way is to use inline arrow function in <form></form>
    onFormSubmit = (event) => { 
        event.preventDefault(); //prevent form submit itself when hitting enter
        
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
          <div className="ui segment">
            <form className="ui form" method="submit" onSubmit={this.onFormSubmit}>
              <div className="field">
                  <label>Image Search</label>
                    <input type="text" value={this.state.term} placeholder="Search..." onChange={(e) => this.setState({term: e.target.value})}></input>
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;