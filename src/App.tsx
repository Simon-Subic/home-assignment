import React from 'react';

import Moodlet, { MoodletType, MoodletVariant } from './components/Moodlet';
import FSC, { FSCAction, FSCState } from './components/FSC';

const contents: MoodletType[] = ['LETTER', 'ICON', 'ELLIPSIS', 'WORD', 'ICONL', 'ICONR'];
const variants: MoodletVariant[] = ['primary', 'inactive', 'secondary', 'blue', 'green', 'red', 'yellow'];

function App() {
  const handleChange = (item: FSCAction, newState: FSCState) => {
    console.log(`${item} => ${newState}`);
  };
  
  return (
    <div className="App">
      <div className="p-8">
        <hr />
        <h3 className="text-2xl mt-8">FSC Logics</h3>
        <FSC
          className="mt-4"
          variant="letter"
          initialState={{
            FUELLING: 'REQUIRED',
            SERVICING: 'CURRENT',
            CLEANING: 'COMPLETED',
          }}
          onChange={handleChange}
        />
        <FSC
          className="my-4"
          variant="word"
          initialState={{
            FUELLING: 'NOT_REQUIRED',
            SERVICING: 'REQUIRED',
            CLEANING: 'CURRENT',
          }}
          onChange={handleChange}
        />
        <FSC
          className="mb-8"
          variant="letter"
          initialState={{
            FUELLING: 'REQUIRED',
            SERVICING: 'CURRENT',
            CLEANING: 'COMPLETED',
          }}
          onChange={handleChange}
          disabled
        />

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
            <Moodlet
              type='ICONL'
              variant={variant}
              readonly
              disabled
            />
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
