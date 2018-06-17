import React, { Component } from 'react'

class HTMLPane extends Component {
  render () {
    return (
      <div class='form-group'>
        <label for='htmlTextArea'>HTML</label>
        <textarea class='form-control' id='htmlTextArea' rows='10' />
      </div>
    )
  }
}

export default HTMLPane
