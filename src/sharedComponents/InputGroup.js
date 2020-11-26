import Input from './Input'

const InputGroup = ({ title, type, inputDataList, onChange }) => (
  <fieldset>
    <legend>{title}</legend>
    {inputDataList.map(inputData => {
      const { id, name, value, title } = inputData

      return (
        <Input
          key={`${id}-${value}`}
          id={id}
          name={name}
          value={value}
          title={title}
          type={type}
          onChange={onChange}
        />
      )
    })}
  </fieldset>
)

export default InputGroup
