import React from 'react';

const useState = React.useState;


function RockCounter() {
  const [rockCounter, setCount] = useState(0);

  return (
    <div>
      <div>Rocks Picked: {rockCounter} </div>
      <div>
        <button onClick={() => setCount(rockCounter +1)}>Increase</button>
        <button onClick={()=> setCount(rockCounter - 1)}>Decrease</button>
        <button onClick ={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default RockCounter;
