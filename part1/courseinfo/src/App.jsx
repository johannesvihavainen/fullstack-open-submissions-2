const Header = (props) => {
  return (
    <div>
      <h1>{props.courses}</h1>
    </div>
  )
}

const Part = (props) => {
  return <div>
    <p>{props.part} {props.exercises}</p>
  </div>
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part part={part.name} exercises={part.exercises} />)}
      {/* <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      <Part part={props.parts[3].name} exercises={props.parts[3].exercises} /> */}
    </div>
  )
}

const Course = ({ courses }) => {
  return (
    <div>
      <Header courses={courses[0].name} />
      <Content parts={courses[0].parts} />
      <Total parts={courses[0].parts} />
      <Header courses={courses[1].name} />
      <Content parts={courses[1].parts} />
      <Total parts={courses[1].parts} />
    </div>
  )
}



const Total = (props) => {
  const total = props.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
  return <div>
    <p><strong>total of {total} exercises</strong></p>
  </div>
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return <Course courses={courses} />
}

export default App


