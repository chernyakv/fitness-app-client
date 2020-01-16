import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './ActivityHorizontal.css'
import {Tag, Switch, Icon} from 'antd';
import 'antd/dist/antd.css';

const MenuItem = ({text, isCompleted}) => {
  return <div className={`menu-item`}>
    <div className={'menu-item-text'}>
      {text}
    </div>
    <div className={'menu-item-time'}>
      <Tag color="blue" key={text}>
        5-6.30
      </Tag>
    </div>
    <div className={'menu-item-switch'}>
      <Switch
        checkedChildren={<Icon type="check" />}
        unCheckedChildren={<Icon type="close" />}
        defaultChecked={isCompleted}
      />
    </div>
  </div>;
};

const Menu = (list) =>
  list.map(el => {
    const {name, isCompleted} = el;
    return <MenuItem isCompleted={isCompleted} text={name} key={name}/>;
  });

export default class ActivityHorizontal extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(props.activities);
  }

  render() {
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