import React, { useState } from 'react';

import classnames from 'classnames';

import Moodlet, { MoodletVariant } from './Moodlet';

interface IFSC {
  className?: string;
  initialState?: Partial<Record<FSCAction, FSCState>>;
  variant?: 'letter' | 'word';
  disabled?: boolean;
  onChange?: (item: FSCAction, newState: FSCState) => void;
}

export type FSCState = 'NOT_REQUIRED' | 'REQUIRED' | 'CURRENT' | 'COMPLETED';
export type FSCAction = 'FUELLING' | 'SERVICING' | 'CLEANING';

const actions: FSCAction[] = ['FUELLING', 'SERVICING', 'CLEANING'];

const variants: Record<string, MoodletVariant> = {
  NOT_REQUIRED: 'inactive',
  REQUIRED: 'primary',
  CURRENT: 'red',
  COMPLETED: 'green',
};

const FSC: React.FC<IFSC> = ({
  className,
  initialState = {},
  variant = 'letter',
  disabled = false,
  onChange = () => {},
}) => {
  const [states, setStates] = useState<Record<FSCAction, FSCState>>(() => ({
    FUELLING: 'REQUIRED',
    SERVICING: 'REQUIRED',
    CLEANING: 'REQUIRED',
    ...initialState,
  }));

  const handleClick = (item: FSCAction, isRightClick: boolean = false) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();

      let newState: FSCState = states[item];

      if (isRightClick) {
        newState = states[item] === 'REQUIRED'
          ? 'NOT_REQUIRED'
          : 'REQUIRED';
      } else {
        const workflow: Record<FSCState, FSCState> = {
          NOT_REQUIRED: 'REQUIRED',
          REQUIRED: 'CURRENT',
          CURRENT: 'COMPLETED',
          COMPLETED: 'CURRENT',
        };
        newState = workflow[states[item]];
      }

      setStates({
        ...states,
        [item]: newState,
      });

      onChange(item, newState);
    };
  }

  return (
    <div className={classnames(
      'flex gap-2 items-center p-1',
      className,
    )}>
      {actions.map((item) => (
        <Moodlet
          key={item}
          label={item}
          type={variant === 'letter' ? 'LETTER' : 'WORD'}
          onClick={handleClick(item)}
          onContextMenu={handleClick(item, true)}
          variant={variants[states[item]]}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default FSC;
