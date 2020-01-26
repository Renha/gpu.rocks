import React from 'react'
import Keyword from './Keyword'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-materialize'
import { Row } from 'react-materialize'
import { Col } from 'react-materialize'
import { Collection } from 'react-materialize'
import { CollectionItem } from 'react-materialize'

import './Syntax.scss'

const Syntax = (props) => {
  return (
    <div id="syntax">
      <h2 className="center">Syntax Support</h2>
      <hr />
      <p className="center"><b>GPU.js</b> relies on the assumption that the kernel function is using only a subset of legal JavaScript syntax</p>

      <Container>
        <Row>
          <Col offset="l2" s={12} l={8}>
            <Collection id="syntax-collection">
              <CollectionItem>
                <b>1D</b>, <b>2D</b>, <b>3D</b> <Keyword>array</Keyword> of numbers or just numbers as kernel input or output
              </CollectionItem>

              <CollectionItem>
                <Keyword>Number</Keyword> Variables
              </CollectionItem>

              <CollectionItem>
                Custom and custom native <Keyword>function</Keyword>s
              </CollectionItem>

              <CollectionItem>
                Arithmetic operators (<Keyword>+</Keyword>, <Keyword>+=</Keyword>, <Keyword>-</Keyword>, <Keyword>*</Keyword>, <Keyword>/</Keyword>, <Keyword>%</Keyword>)
              </CollectionItem>

              <CollectionItem>
                <i>Some</i> Javascript Math functions like <Keyword>Math.floor()</Keyword> (See the <NavLink to="https://github.com/gpujs/gpu.js/#supported-math-functions">Docs</NavLink>)
              </CollectionItem>

              <CollectionItem>
                <Keyword>Math.random()</Keyword> is supported but it isn't perfect (See the <NavLink to="https://github.com/gpujs/gpu.js/#supported-math-functions">Docs</NavLink>)
              </CollectionItem>

              <CollectionItem>
                <Keyword>Pipelining</Keyword> (See the <NavLink to="https://github.com/gpujs/gpu.js/#pipelining">Docs</NavLink>)
              </CollectionItem>

              <CollectionItem>
                <Keyword>for</Keyword>, <Keyword>while</Keyword> and other loops
              </CollectionItem>

              <CollectionItem>
                <Keyword>if</Keyword> and <Keyword>else</Keyword> statements
              </CollectionItem>

              <CollectionItem>
                <Keyword>const</Keyword>, <Keyword>let</Keyword> and <Keyword>var</Keyword> variables
              </CollectionItem>

              <CollectionItem>
                <b>NO</b> variables captured by a closure
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Syntax

