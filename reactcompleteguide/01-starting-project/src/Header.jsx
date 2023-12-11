import reactImg from './assets/react-core-concepts.png';

const options = ['Fundamental','Crucial','Core'];
    function getRangomInt(max){
        return Math.floor(Math.random() * (max + 1));
    }

function Header() {
    const firstWord = options[getRangomInt(3)];

    return(
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials - YES</h1>
        <p>
          {options[getRangomInt(3)]} React concepts you will need for almost any app you are going to build!<br/>
          {firstWord} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
}

export default Header;