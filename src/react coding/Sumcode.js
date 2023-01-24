import "./styles.css";

export default function App() {

  function isOdd(n) {
    return Boolean(n % 2);
  }
  
  function findSum(no) {
    let sum = 0;
  
    for (var i = 0; i < no; i++) {
      if (isOdd(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  // console.log(findSum(20));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2> {findSum(20)}</h2>

      </div>
  );
}
