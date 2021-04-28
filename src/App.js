import {ExampleComponent, ico_cross} from 'media-file-bug-library';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        Library is imported; here's a component:
        <ExampleComponent />
      </div>
      <div>
        But, the imported image is not found:
        <div>
          <img src={ico_cross}/>
        </div>
      </div>
      <div>
        The import itself is fine, here's the value of ico_cross: "{ico_cross}".
      </div>
      <div>
        And, you can even see that the file is in ./node_modules/medial-file-bug-library/dist.
      </div>
      <div>
        The problem seems to to be that CRA's webpack magic for bundling images does
        not recognize our import from a dependency (rather than from a local file).
      </div>
    </div>
  );
}

export default App;
