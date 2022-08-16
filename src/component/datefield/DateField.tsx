import { AriaDatePickerProps, useDateField, useDateSegment, useLocale } from 'react-aria';
import { DateFieldStateOptions, useDateFieldState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import { useRef } from 'react';
import { Box, Container } from '@mui/system';
import { TextField } from '@mui/material';
import DateSegment from './DateSegment';

export function DateField(props: DateFieldStateOptions) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });
 
  
  const ref = useRef<HTMLDivElement | null>(null);

  const { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <Box>
      <Box
        {...fieldProps}
        ref={ref}
        sx={{
          padding:'8px 16px 8px 16px',
          display: 'flex',
          border:'1px solid #ccc',
          width:'108px',
          height:'34px',
          boxSizing:'border-box',
          borderRadius:'4px',
          textAlign:'center'
        }}
      >
        {state.segments.map((segment, index) => (
          <DateSegment key={index} segment={segment} state={state} />
        ))}
      </Box>
    </Box>
  );
}
