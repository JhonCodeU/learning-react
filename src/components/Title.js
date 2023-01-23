const Title = ({ name, color }) => {
  return (
    <h1 className='titleclass' style={{ color: color }}>Hello {name}</h1>
  );
}

Title.defaultProps = {
  name: 'Dorian',
  color: 'grey'
}

export { Title };