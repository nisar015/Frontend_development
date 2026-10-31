import './App.css'
import Xyz, { FuncComp, FuncComp1, FuncComp2 } from './FuncComp'
// import Parent from './parent'
// import Form from './Form'
// import ReactForm from './ReactForm'

function App() {
  return(
    <div>
      {/* <h2>this is the first line of react</h2>
      <h2>this is also a line of text</h2> */}
      {/* <Parent/> */}
      {/* <Form/> */}
      {/* <ReactForm/> */}
      <FuncComp/>
      <FuncComp1/>
      <FuncComp2/>
      <Xyz/>
    </div>
  )
}

export default App
