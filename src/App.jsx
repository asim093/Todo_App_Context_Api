import React from 'react'
import Text_input from './Components/Text_input'
import TodoProvider from './Context/TodoContext'

const App = () => {
  return (
<>
<TodoProvider>
  <Text_input/> 
   </TodoProvider>
</> 
 )
}

export default App