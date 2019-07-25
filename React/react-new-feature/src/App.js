import React, { useState } from 'react';
import ConcurrnetModeDemo from './concurrent/index'
import Index from './lifeCycle-react15/index'
//hooks function 组件增强
function App() {
  const [ parentCount, setParentCount ] = useState(0);
  return (
    <div>
      <button onClick={() => {
        setParentCount (parentCount + 1)
      }}>
        setParentCount
      </button>
      <Index parentCount={parentCount}/>
      <ConcurrnetModeDemo />
    </div>
  );
}

export default App;
