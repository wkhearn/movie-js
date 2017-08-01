import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import APISearchBox from './APISearchBox'
import SearchModal from './SearchModal'


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

        <Menu.Item name='search' fitted active={activeItem === 'search'} onClick={this.handleItemClick}>
          <APISearchBox APITitleHandler={this.props.APITitleHandler} APIYearHandler={this.props.APIYearHandler} submitAPISearchHandler={this.props.submitAPISearchHandler}/>
          <SearchModal submitAPISearchHandler={this.props.submitAPISearchHandler} currentSearchMovie={this.props.currentSearchMovie}/>
        </Menu.Item>

        <Menu.Item position='right' name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}
