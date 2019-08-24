import React, { useState } from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('app'))

// App.js
function App(props) {
  return <Form buttonText="Click me!" />
}

// Form.js
function Form(props) {
  const [counter, setCounter] = useState(0)
  const inc = () => setCounter(counter + 1)

  return (
    <form>
      <h2 className="title">My Form</h2>
      <div>You clicked {counter} times!</div>
      <Button click={inc} text={props.buttonText} />
    </form>
  )
}

// Button.js
function Button(props) {
  const handler = (event) => {
    event.preventDefault()
    props.click()
  }

  return <button onClick={handler}>{props.text}</button>
}