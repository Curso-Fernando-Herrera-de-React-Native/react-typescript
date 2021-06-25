interface Person {
  name: string,
  nickName: string,
  contact: Contact
}

interface Contact {
  country: string,
  tel: number,
  onWork: boolean
}

const ObjetosLiterales = () => {
  const person: Person = {
    name: 'Mateo',
    nickName: 'Madeval',
    contact: {
      country: 'Uruguay',
      tel: 123456789,
      onWork: true
    }
  }

  return <>
    <h1>Ejemplo de objeto</h1>
    <code>
      <pre>
        { JSON.stringify(person, null, 2)}
      </pre>
    </code>
  </>
}

export default ObjetosLiterales
