const Course = ({ courses }) => {
    return (
        <div>
            <Title />
            <Header courses={courses[0].name} />
            <Content parts={courses[0].parts} />
            <Total parts={courses[0].parts} />
            <Header courses={courses[1].name} />
            <Content parts={courses[1].parts} />
            <Total parts={courses[1].parts} />
        </div>
    )
}

const Title = () => {
    return <h1>Web development curriculum</h1>
}

const Header = (props) => {
    return (
        <div>
            <h2>{props.courses}</h2>
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
            {props.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
        </div>
    )
}





const Total = (props) => {
    const total = props.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
    return <div>
        <p><strong>total of {total} exercises</strong></p>
    </div>
}

export default Course