# React.memo, useMemo, useCallback

Estas 3 herramientas las provee React y todas recurren a un proceso llamado "Memorizar".

## Memorizar

En este caso, cuando hablamos de memorizar nos referimos a que *React guarda props, funciones o datos*.
Esto es para mas tarde compararlo, pero con que?

### React.memo

*React.memo* sirve para memorizar las props que recibe un componente. Entonces, una vez memorizadas, cuando lleguen nuevas props a nuestro componente, las compara con las que hay en memoria para ver si realmente se cambio el contendio de las props.

Si no hubo un cambio verdadero, no lo renderiza nuevamente.

### useMemo

*useMemo* es un hook que, a diferencia de React.memo, memoriza un dato. Estos datos que guarda se pueden pensar como "Propiedades computadas". 

Cuando la intencion es tener una propiedad computada, al hacerlo podemos ver como cada vez que se renderiza el componente, la propiedad computada se ejecuta a pesar de que la propiedad mantenga el valor que el render anterior.

Es decir, tengo una propieda *x = 4 * y* si y = 3, *x* va a ser igual a 12. Si transformo a *y* como una constante, sabemos que *y* siempre va a valer 3. A pesar de esto, React va a seguir haciendo 4 * 3 a pesar de que *y* no haya cambiado de valor.

Con useMemo podemos declarar a *y* como dependencia y, si *y* no cambia, la propiedad computada no se vuelve a calcular.


### useCallback

*useCallback* es un hook que hace casi lo mismo que *useMemo* pero en lugar de memorizar propiedades computadas, memoriza funciones.

*useCallback* se utiliza cuando pasamos por props una funcion o cuando queremos ejecutar una funcion en un useEffect.

#### En el caso de las prop

Podemos pensar que tenemos un componente X que es padre de un componente Y. En el componente padre definimos una funcion getTime() y nuestra intencion es pasarla por props al componente Y. 

En primera instancia no va a haber problema con esto que hacemos. Pero si el componente X se vuelve a renderizar por cualquier motivo, la funcion getTime() se va a definir nuevamento y por lo tanto, va a cambiar la direccion de memoria de la funcion. Esto React lo entiende como una prop nueva y va a renderizar nuevamente el componente Y.

En este momento es cuando entra en juego *useCallback*. Este hook memoriza la funcion y la compara si realmente cambio o no.

Una vez memorizada la funcion, podemos pasarla sin preocupaciones al componente Y sin miedo a que se renderice sin motivo aparente.

*Aclaracion: Cuando definimos una funcion X, la variable X almacena la direccion de memoria del cuerpo de la funcion. Cuando hacemos X() lo que hacemos es decir "Ejecuta lo que esta en la direccion X"*