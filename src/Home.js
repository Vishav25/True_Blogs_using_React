const Home = () => {
    const handleClick = (e) =>{
        console.log("hello how are you !! ",e);
    }
    const handleClickAgain = (name) =>{
        console.log("hello !! "+name);
    }
    
    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={() => handleClickAgain('vishu')}>Click me again </button>
        </div>
     );
}
 
export default Home;
