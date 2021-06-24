const TiposBasicos = () => {
  const title: string = 'Tipos en TS - React'
  const point: number = 10
  const isActive: boolean = true

  const listOfCaps: string[] = [
    'Introduccion',
    'Instalacion',
    'Primeros pasos en TS',
    'Creando una applicacion con TS'
  ]

  return <main>
    <h1>{title}</h1>
    <span>{point}</span>
    <h3>
      {
        isActive ? 'Curso disponible!' : 'No disponible de momento'
      }
    </h3>
    <ol>
      {
        listOfCaps.map(cap => <li>{cap}</li>)
      }
    </ol>
  </main>
}

export default TiposBasicos
