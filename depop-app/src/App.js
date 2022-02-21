import {ProductsContainer} from "./components/ProductsContainer";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="appHeader">
                <span className="logo">
                    <svg viewBox="0 0 1295 333">
                        <title>Depop</title>
                    <path fillRule="nonzero" d="M0 167.9c0-54.5 38.884-88 101.06-88h64.373V0H246v251H100.76C38.883 251 0 218.8 0 167.9zm85-2.7c0 20.9 12.653 31.8 36.96 31.8H165v-64h-42.64C98.05 133 85 144 85 165.2zm682-.1c0 54.5-38.884 88-101.06 88h-64.373V333H521V82h145.24C728.117 82 767 114.2 767 165.1zm-85 2.7c0-20.9-12.668-31.8-37.007-31.8H602v64h42.693c24.34 0 37.307-11 37.307-32.2zm613-2.7c0 54.5-38.884 88-101.06 88h-64.373V333H1049V82h145.24c61.876 0 100.76 32.2 100.76 83.1zm-85 2.7c0-20.9-12.668-31.8-37.007-31.8H1130v64h42.693c24.34 0 37.307-11 37.307-32.2zm-419-1.2c0-60.996 48.8-93.6 116-93.6s116 32.604 116 93.6c0 60.993-48.8 94.4-116 94.4-67.2-.1-116-33.407-116-94.4zm153-.95c0-29.733-14.9-44.65-37.5-44.65S869 135.917 869 165.65c0 29.332 14.9 45.35 37.5 45.35 22.7-.1 37.5-16.018 37.5-45.35zm-450 4.262C494 108.918 454.77 72 383.898 72 315.82 72 272 108.918 272 166.702 272 225.19 315.422 260 387.79 260c45.52 0 82.253-17.054 101.618-44.743l-57.696-21.067c-9.982 10.935-25.055 16.954-40.926 16.954-23.857 0-40.427-9.63-44.72-25.983-.3-1.102-.5-2.106-.698-3.31H494v-11.938zM346 144c1.902-19.814 15.62-32 39.45-32 23.832 0 37.55 12.88 37.55 32h-77z">
                    </path>
                    </svg>
                </span>
                <p className={"title"}>
                    <b>Pair Programming Assessment 2022</b>
                    <br/>
                    <a
                        href="https://github.com/depoplabs/web-pair-programming-assessment/blob/master/assessment.md"
                        target="_blank"
                        rel="noopener noreferrer">
                        Link to task instructions
                    </a>
                </p>

            </header>
            <div className={"container"}>
                <ProductsContainer/>
            </div>
        </div>
    );
}

export default App;
