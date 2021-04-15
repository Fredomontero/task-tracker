import Button from './Button';

function Header({title}) {

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <header className='header'>
      <h1 >{title}</h1>
      <Button color='green' text='Add' handleClick={handleClick}/>
    </header>
  )
};

Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header
