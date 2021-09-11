import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => console.log("Counter Render"));

  return (
    <>
      <h2>Contador</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <p>Contador: {counter}</p>
    </>
  )
}

// Al quitar React.memo, podemos ver que al actualizar la hora en el componente App se va a ...
// ... renderizar este componente a pesar de que no haya ningun cambio ni necesidad de re-renderizarlo

export default React.memo(Counter);