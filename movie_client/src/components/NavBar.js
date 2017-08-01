import React, { Component } from 'react'
import { Menu, Icon, Input, Form } from 'semantic-ui-react'
import APISearchBox from './APISearchBox'

export default class NavBar extends Component {
  state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable size='small'>
        <Menu.Item name='home'>
          <Icon name='video camera' />JS
        </Menu.Item>

        <Menu.Item name='home' fitted='vertically' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <APISearchBox APITitleHandler={this.props.APITitleHandler} APIYearHandler={this.props.APIYearHandler} submitAPISearchHandler={this.props.submitAPISearchHandler}/>
        </Menu.Item>

        <Menu.Item position='right' name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}
