import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
  return <div>
    <div>Counter value: {props.value}</div>
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  value: state.value,
})

const mapDispatchToProps = {
  increment: () => ({type: 'INCREMENT'}),
  decrement: () => ({type: 'DECREMENT'}),
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
