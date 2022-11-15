export default function Alert({ alertType, alertText }) {
  return <div className={`alert ${alertType}`}>{alertText}</div>;
}
