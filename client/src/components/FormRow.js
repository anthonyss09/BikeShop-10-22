import Wrapper from "../assets/wrappers/FormRow";

export default function FormRow({ name, id, type, onChange }) {
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name}>{name}</label>
        <input id={id} name={name} type={type} onChange={onChange} />
      </div>
    </Wrapper>
  );
}
