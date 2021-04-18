import Button from './Button';

function Header({title, onAdd, onShow}) {

  const handleClick = () => {
    onAdd();
  };

  return (
    <header className='header'>
      <h1 >{title}</h1>
      <Button color={ onShow ? 'red' : 'green'} text={ onShow ? 'Close' : 'Add' } handleClick={handleClick}/>
    </header>
  )
};

Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header
