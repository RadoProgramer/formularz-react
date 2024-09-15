import "./App.css";
import { useState } from "react";

//Formularz niekontrolowany


// function App() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const { login, password } = event.target.elements;
//     console.log("submiting...", login.value, password.value);
//     event.target.reset();
    
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input name="login" />
//         <input name="password" />
//         <button type="submit">Wyślij</button>
//       </form>
//     </>
//   );
// }
// export default App;


//formularz kontrolowany

// function App() {
//   const [login, setLogin] = useState("login val");
//   const [password, setPassword] = useState("pass val");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(login, password);
    
//   };

//   const handleLoginChange = (e) => {
//     setLogin(e.target.value);
//   };

//   const handlePassChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input name="login" value={login} onChange={handleLoginChange} />
//         <input name="password" value={password} onChange={handlePassChange} />
//         <button type="submit">Wyślij</button>
//       </form>
//     </>
//   );
// }
// export default App;



//checkbox
function App() {
  const [agree, setAgree] = useState(false);
  return (
    <>
      <form>
        <label>
          <input
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            type="checkbox"
            name="agree"
          />
          Akceptuję regulamin
        </label>
      </form>
    </>
  );
}
export default App;