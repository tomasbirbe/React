import React, { useEffect, useState } from 'react';
import Counter from './Counter.jsx';

const App = () => {

  const [time, setTime] = useState(new Date(Date.now()).toLocaleString());
  

  // ===================== UseMemo =====================

  // Cada vez que el componente se renderice, siempre se va a volver a declarar x
  
  // let x = 2;


  // En este caso, y se va a declarar solo 1 vez y se va a memorizar para que 
  // no se declare cada vez que el componente se renderice. Tambien se puede
  // definir que se vuelva a declarar bajo ciertas circunstancias utilizando
  // las dependencias.

  // const y = useMemo(() => 2);


  // ===================== UseCallback =====================
  
  // En este caso sucede lo mismo. Cada vez que el componente se renderic,
  // las funciones se van a volver a definir

  // const doSomething = () => console.log("Soy una funcion");

  // Para evitar que esto suceda, utilizamos useCallback. Tambien se le puede
  // pasar un array de dependencias para que se vuelva a definir bajo distintos
  // escenarios

  // const doSomething = useCallback(() => console.log("Soy una funcion"));


  useEffect(() => console.log("App render"));

  return (
    <>
      <Counter/>
      <hr />
      <span>{time}</span>
      <button onClick={() => setTime(new Date(Date.now()).toLocaleString())}>Actualizar hora</button>
    </>
  );
}

export default App;
