import "./styles.css";

export default function Datee() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <p>Today's date is {date}</p>
      <p>Today's time is {time}</p>
    </div>
  );
}
