import React from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { useRef } from 'react';

const Button = (props: AriaButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton(props, ref);
  console.log(buttonProps);
  
  return (
    <button
      {...buttonProps}
      ref={ref}
      style={{
        width: '12px',
        border: 'none',
        backgroundColor: '#fff',
        outline: 'none',
        padding: '0',
        cursor:'pointer'
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
