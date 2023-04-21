const Button = ({ text, color, onClick }) => {
  return (
    <button style={{ background: color }} className="btn" onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  onClick: () => {
    console.log(`Button clicked: ${new Date()}`)
  },
}

export default Button
