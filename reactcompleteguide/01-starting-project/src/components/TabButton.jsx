export default function TabButton(props) {
    function handleClick() {
        console.log('Test');
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}
