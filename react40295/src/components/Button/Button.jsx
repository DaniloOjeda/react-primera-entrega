import "./button.css"

function Button(props) {
    console.log(props);
    return <button className="btn">{props.titulo}</button>;
}


// Button("Clickeame")
// Button("Mundo Pesca")
export default Button;

