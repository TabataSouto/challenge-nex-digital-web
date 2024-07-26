interface ISelect {
  label: string;
  options: string[];
}

const Select = ({ label, options, ...props }: ISelect) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <select id={label} {...props}>
        <option>
          Selecione
        </option>
        {options?.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
