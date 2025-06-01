
import './App.css'
import Cards from './components/card'
function App() {
  

  return (
    <>
 <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>test tailwind</h1>
 
 <Cards username = 'dipanshu' btntext = 'click hear'/>
 <Cards username = 'Me again' btntext = 'click agsin'/>
    </>
  )
}

export default App
