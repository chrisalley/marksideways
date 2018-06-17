import React, { Component } from 'react'

class MarkdownPane extends Component {
  render () {
    return (
      <div class='form-group'>
        <label for='markdownTextArea'>Markdown</label>
        <textarea class='form-control' id='markdownTextArea' rows='10' />
      </div>
    )
  }
}

export default MarkdownPane
