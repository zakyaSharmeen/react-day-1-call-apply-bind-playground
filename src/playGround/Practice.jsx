

function Practice() {
  const person1 = { name: "Alice" };
  const person2 = { name: "Bob" };

  function sayHello(message) {
    return `${message}, my name is ${this.name}`;
  }

  const handleClick1 = () => {
    alert(sayHello.call(person1, "Hello"));
  };

  const handleClick2 = () => {
    alert(sayHello.call(person2, "Hi"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React call() Method Example</h1>

      <button onClick={handleClick1}>
        Greet as Alice
      </button>

      <br /><br />

      <button onClick={handleClick2}>
        Greet as Bob
      </button>
    </div>
  );
}

export default Practice;
