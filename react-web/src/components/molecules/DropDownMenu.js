import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 300,
  },
};

export default class DropDownMenuMain extends React.Component {
  listItems

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {

    const listItems = this.props.listItems
    const list = []

    for (let i = 1; i < listItems.length; i ++) {
      list.push(listItems[i])
    }

    return (
      <MuiThemeProvider>
        <div>
          <DropDownMenu
            className="drop-down-menu"
            value={ this.state.value }
            onChange={ this.handleChange }
            style={ styles.customWidth }
            autoWidth={ false }
          >
          {/* Get the first item and list as default, then get the remaining items and list in order of index */}

            <MenuItem value={ 0 } primaryText={ this.props.listItems[0] } />
            { list.map((menu, index) => {
              return <MenuItem key={ index } value={ (index) + 1 } primaryText={ menu } />
            })}

          </DropDownMenu>
        </div>
    </MuiThemeProvider>
    );
  }
}
