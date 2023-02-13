import "./Main.css";

const Main = (props) => (
    <main className={`container ${props.class === undefined ? "": props.class}`}>
        {props.children}
    </main>
);

export default Main;