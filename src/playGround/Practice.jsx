
// // q--whenver the button is clicked the alert should show the name
// //      of the person object using call method--q

// function Practice() {
//   const person1 = { name: "Alice" }; // Object 1
//   const person2 = { name: "Bob" };// Object 2

//   function sayHello(mssg) { // Function to be called
//     return `${mssg}, my name is ${this.name}`;
//   }

//   const handleClick1 = () => { 
//     alert(sayHello.call(person1, "Hello zakya"));
//   };

//   const handleClick2 = () => {
//     alert(sayHello.call(person2, "Hi"));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React call() Method Example</h1>

//       <button onClick={handleClick1}>
//         Greet as Alice
//       </button>

//       <br /><br />

//       <button onClick={handleClick2}>
//         Greet as Bob
//       </button>
//     </div>
//   );
// }

// export default Practice;


function Practice() {
  const person1 = { name: "Alice" };
  const person2 = { name: "Bob" };

  function sayHello(mssg) {
    return `${mssg}, my name is ${this.name}`;
  }

  const handleClick1 = () => {
    alert(sayHello.call(person1, "Hello Zakya"));
  };

  const handleClick2 = () => {
    alert(sayHello.call(person2, "Hi"));
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          React call() Method
        </h1>


        <button
          onClick={handleClick1}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition mb-4"
        >
          Greet as Sonal
        </button>

        <button
          onClick={handleClick2}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Greet as Laxmi
        </button>
      </div>
    </div>
  );
}

export default Practice;
