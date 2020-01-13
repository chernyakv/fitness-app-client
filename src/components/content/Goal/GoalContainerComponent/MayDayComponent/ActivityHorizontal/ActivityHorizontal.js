import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './ActivityHorizontal.css'
import {Tag} from 'antd';
import 'antd/dist/antd.css';

const MenuItem = ({text, selected}) => {
  return <div className={`menu-item`}>
    <div className={'menu-item-text'}>
      {text}
    </div>
    <div className={'menu-item-time'}>
      <Tag color="blue" key={text}>
        5-6.30
      </Tag>
    </div>
  </div>;
};

const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected}/>;
  });

const selected = 'item1';

export default class ActivityHorizontal extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(props.activities, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({selected: key});
  }

  render() {
    const {selected} = this.state;


    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          alignCenter={false}
          data={menu}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}