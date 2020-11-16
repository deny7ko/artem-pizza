import React from 'react';

const Input = React.forwardRef((props, ref ) => {
  const {name, value, id = value, title = name, type, onChange} = props;

  return (
    <>
      <input ref={ref} type={type} id={id} name={name} value={value} onChange={onChange} />
      <label htmlFor={id}>{title}</label>
    </>
  )
})

export default Input
