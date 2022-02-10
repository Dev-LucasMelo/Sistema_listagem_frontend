
import './App.css'


function App() {
  return (
    <div className='app-container' >

      <div className='list-container'>
        <a href="/list"><button className='list' >Lista</button> </a>
        <p>*Vizualizar lista com pessoas cadastradas</p>
      </div>

      <div className='register-container' >
        <a href="/form"> <button className='register'>Se cadastrar</button> </a>
        <p>*Preencha o formulário para se cadastrar</p>
      </div>

    </div>
  );
}

export default App;
