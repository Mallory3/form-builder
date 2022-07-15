const Fieldset = ({ children, heading }) => {
  return (
    <fieldset>
      <legend>{heading}</legend>
      {children}
    </fieldset>
  )
};

export default Fieldset;