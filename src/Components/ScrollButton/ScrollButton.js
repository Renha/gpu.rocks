import React, { Component } from 'react'
import Button from 'react-materialize/lib/Button'
import MaterialIcon from '../Util/MaterialIcon/MaterialIcon'

import './ScrollButton.scss'

export default class ScrollButton extends Component {
  componentDidMount() {
    const scrollUpBtn = document.querySelector('#scroll-up-btn')
    window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollUpBtn.style.opacity = '1'
      } else {
        scrollUpBtn.style.opacity = '0'
      }
    }
  }

  handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    return (
      <Button
        floating
        id="scroll-up-btn"
        fab={{direction: 'left', hoverEnabled: false}}
        icon={ <MaterialIcon icon="arrow_upward" /> }
        style={{
          transition: '400ms',
          opacity: 0
        }}
        large
        onClick={this.handleClick}
      />
    )
  }
}
