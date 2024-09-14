//import "/App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { login, password } = event.target.elements;
    console.log("submiting...", login.value, password.value);
    event.target.reset();
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="login" />
        <input name="password" />
        <button type="submit">Wyślij</button>
      </form>
    </>
  );
}
export default App;