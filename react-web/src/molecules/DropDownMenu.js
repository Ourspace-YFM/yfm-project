import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class DropDownMenuMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Menu Item 1" />
          <MenuItem value={2} primaryText="Menu Item 2" />
          <MenuItem value={3} primaryText="Menu Item 3" />
          <MenuItem value={4} primaryText="Menu Item 4" />
          <MenuItem value={5} primaryText="Menu Item 5" />
        </DropDownMenu>
      </div>
    );
  }
}