import React from 'react';

import Moodlet, { MoodletType, MoodletVariant } from './components/Moodlet';

const contents: MoodletType[] = ['LETTER', 'ICON', 'ELLIPSIS', 'WORD', 'ICONL', 'ICONR'];
const variants: MoodletVariant[] = ['primary', 'inactive', 'secondary', 'blue', 'green', 'red', 'yellow'];

function App() {
  return (
    <div className="App">
      <div className="p-8">
        <hr />
        <h3 className="text-2xl my-4">Content Options</h3>
        <div className="flex gap-2 mb-4">
          {contents.map((type) => (
            <Moodlet
              key={type}
              type={type}
              label={type}
            />
          ))}
        </div>

        <hr />
        <h3 className="text-2xl my-4">Style variants</h3>
        {variants.map((variant) => (
          <div key={variant} className="flex gap-4 my-4">
            {[true, false].map((value, idx) => (
              <Moodlet
                key={`${variant}-${idx}`}
                type='ICONL'
                variant={variant}
                readonly={value}
            />
            ))}
          </div>
        ))}

        <hr />
      </div>
    </div>
  );
}

export default App;
