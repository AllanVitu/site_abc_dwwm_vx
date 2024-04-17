alert("Rémi UwU");

const audio = document.querySelector('audio');

audio.load();

document.addEventListener('click', e => {
  audio.currentTime = 0;
  audio.play();
})

import React from 'react'
import { render } from 'react-dom'
import { Motion, spring } from 'react-motion'
const Button = ({ label, style: { width }, onclick }) => {
  return (
    <button
      onClick={onclick}
      style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 10px',
        whiteSpace: 'nowrap',
        borderRadius: 25,
        width: width,
      }}>
      {label}
    </button>
  )
}
class BoutonAnimé extends React.Component {
  state = { ouvert: true, max: 0, fini: true }
  min = 36
  componentDidMount() {
    const { width } =
      (this.ref && this.ref.getBoundingClientRect()) || {}
    this.setState(
      { max: width },
      console.log('didmount', this.state),
    )
  }
  handleClick = e => {
    const { fini, ouvert } = this.state
    this.setState({
      ouvert: fini ? !ouvert : ouvert,
      fini: false,
    })
  }
  handleRest = () => this.setState({ fini: true })
render() {
    console.log('rendu', this.state)
    const { ouvert, max, fini } = this.state
    const minMax = estOuvert => (estOuvert ? max : this.min)
    const largeur = (fini, minMax, l) => (fini ? minMax : l)
    return (
      <span ref={r => (this.ref = r)}>
        <Motion
          style={{
            x: ouvert ? spring(max) : spring(this.min),
          }}
          onRest={this.handleRest}>
          {({ x }) => (
            <Button
              label="Mon bouton"
              style={{
                width: this.ref
                  ? largeur(fini, minMax(ouvert), x)
                  : null,
              }}
              onclick={this.handleClick}
            />
          )}
        </Motion>
      </span>
    )
  }
}
render(<BoutonAnimé />, document.getElementById('root'))