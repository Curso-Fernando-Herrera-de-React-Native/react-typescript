
const FunctionsExample = () => {
  const sum = ( a: number, b: number ): number => {
    return a + b
  }

  return <>
    <h1>
      Ejecutando una funcion con types: <small>{ sum(10, 5) }</small>
    </h1>
  </>
}

export default FunctionsExample
