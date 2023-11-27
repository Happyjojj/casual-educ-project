import './App.css';

function myApp() {
    return (
        <button
            className="prettier-class"
            id="prettier-id"
            placeholder="{hellobro}"
        >
            Click Here
        </button>
    );
}
const sum = (a: number, b: number) => a + b;
myApp();
sum(1, 2);
