import React from 'react';

import classnames from 'classnames';

import IQM from '../icons/IQM';

export type MoodletType = 'LETTER' | 'ICON' | 'ELLIPSIS' | 'WORD' | 'ICONL' | 'ICONR';
export type MoodletVariant = 'primary' | 'inactive' | 'secondary' | 'blue' | 'green' | 'red' | 'yellow';

interface IMoodlet {
  className?: string;
  type?: MoodletType;
  variant?: MoodletVariant;
  label?: string;
  icon?: React.ReactNode;
  readonly?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onContextMenu?: (e: React.MouseEvent) => void;
}

const Moodlet: React.FC<IMoodlet> = ({
  className = '',
  type = 'WORD',
  variant = 'primary',
  label = 'LOR',
  icon,
  readonly = false,
  disabled = false,
  onClick = () => {},
  onContextMenu = () => {}
}) => {
  let initialClass = 'border border-2 ';
  
  switch(variant) {
    case 'primary':
      initialClass += !readonly && !disabled
        ? 'bg-primary border-primary hover:bg-primary-dark hover:border-primary-dark text-white'
        : 'border-primary text-primary bg-primary-light';
      break;
    case 'inactive':
      initialClass += !readonly && !disabled
        ? 'bg-inactive border-inactive hover:bg-inactive-dark hover:border-inactive-dark text-white'
        : 'border-inactive text-inactive bg-inactive-light';
      break;
    case 'secondary':
      initialClass += !readonly && !disabled
        ? 'bg-secondary border-secondary hover:bg-secondary-dark hover:border-secondary-dark text-white'
        : 'border-secondary text-secondary bg-secondary-light';
      break;
    case 'blue':
      initialClass += !readonly && !disabled
        ? 'bg-blue border-blue hover:bg-blue-dark hover:border-blue-dark text-white'
        : 'border-blue text-blue bg-blue-light';
      break;
    case 'green':
      initialClass += !readonly && !disabled
        ? 'bg-green border-green hover:bg-green-dark hover:border-green-dark text-white'
        : 'border-green text-green bg-green-light';
      break;
    case 'red':
      initialClass += !readonly && !disabled
        ? 'bg-red border-red hover:bg-red-dark hover:border-red-dark text-white'
        : 'border-red text-red bg-red-light';
      break;
    case 'yellow':
      initialClass += !readonly && !disabled
        ? 'bg-yellow border-yellow hover:bg-yellow-dark hover:border-yellow-dark text-black'
        : 'border-yellow-dark text-yellow-dark bg-yellow-light';
      break;
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    } else {
      onContextMenu(e);
    }
  }

  return (
    <button
      className={classnames(
        initialClass,
        'flex gap-2 rounded-full font-medium transition-colors outline-none',
        (type === 'WORD' || type === 'ICONL' || type === 'ICONR') && 'px-3',
        (type === 'LETTER' || type === 'ICON' || type === 'ELLIPSIS') && 'text-xs w-8 h-8 items-center justify-center',
        !disabled ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed',
        className,
      )}
      type="button"
      onClick={onClick}
      onContextMenu={handleContextMenu}
      disabled={disabled}
    >
      {type === 'ELLIPSIS' && <span>...</span>}
      {type === 'ICON' && (icon ?? <IQM color={readonly ? variant : 'white'} size={36} />)}
      {type === 'LETTER' && label && label[0]}
      {(type === 'WORD' || type === 'ICONL' || type === 'ICONR') && (
        <div className={classnames(
          'flex items-center gap-2',
          type === 'ICONR' && 'flex-row-reverse',
        )}>
          {type !== 'WORD' && (icon ??
            <IQM
              color={readonly
                ? variant
                : variant === 'yellow' ? 'black' : 'white'
              }
              size={36}
            />
          )}
          {label && <span>{label}</span>}
        </div>
      )}
    </button>
  );
}

export default Moodlet;
