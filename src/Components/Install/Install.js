import React, { Component } from 'react'
import getActiveElems from '../../utils/getActiveElems'
import { Container } from 'react-materialize'
import Code from '../Util/Code/Code'
import code from './InstallCode'
import $ from 'jquery'
import ScrollButton from '../ScrollButton/ScrollButton'

import './Install.scss'

class Install extends Component {
  state = {
    active: {}
  }

  componentDidMount() {
    $(document).on('DOMContentLoaded scroll', () => {
      const ids = {
        'install': {
          id: 'install',
          thresh: 1000
        }
      }

      this.setState({
        active: getActiveElems(ids)
      })
    })
  }

  componentWillUnmount() {
    $(document).off('DOMContentLoaded scroll')
  }

  render() {
    return (
      <div id="install">
        <ScrollButton />
        <h2 className="center">Installation</h2>
        <hr />
        <div className="install-container">
          <h5 className="center">On Linux, ensure you have the correct header files installed</h5>
          <Container>
            <Code code={code.linux} language="bash"></Code>
          </Container>

          <h4 className="center">npm</h4>
          <Container>
            <Code code={code.npm}/>
          </Container>

          <h4 className="center">yarn</h4>
          <Container>
            <Code code={code.yarn}/>
          </Container>

          <h4 className="center">Node</h4>
          <Container>
            <Code code={code.node}/>
          </Container>

          <h4 className="center">Node Typescript</h4>
          <Container>
            <Code code={code.type}/>
          </Container>

          <h4 className="center">Browser</h4>
          <p className="center">Download the <a href="https://raw.githubusercontent.com/gpujs/gpu.js/master/dist/gpu-browser.min.js">latest version of GPU.js</a> and include the files in your HTML page using the following tags</p>
          <Container>
            <Code code={code.browser} language="html"/>
          </Container>
        </div>
      </div>
    )
  }
}

export default Install
