import Wrapper from "../assets/wrappers/FormRow";

export default function FormRow({ name, id, type, onChange, value }) {
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name}>{name}</label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </Wrapper>
  );
}
