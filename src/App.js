import React, { Component } from 'react'
import './App.css'
import MarkdownPane from './MarkdownPane'
import HTMLPane from './HTMLPane'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Marksideways</h1>
        <MarkdownPane />
        <HTMLPane />
      </div>
    )
  }
}

export default App
