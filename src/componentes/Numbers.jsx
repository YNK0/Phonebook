const Numbers = ({ personasToShow }) => {
    return (
        <ul>
            {personasToShow.map((persona, index) => (
                <li key={index}>{persona.name}  {persona.number}</li>
            ))}
        </ul>
    )
}

export default Numbers;