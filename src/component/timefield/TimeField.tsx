import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
import { useLocale, useTimeField } from 'react-aria';
import { useTimeFieldState } from 'react-stately';
import DateSegment from './DateSegment';

function TimeField(props: any) {
  const locale = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale,
  });
  const ref = useRef<HTMLDivElement | null>(null);
  const { labelProps, fieldProps, } = useTimeField(props, state, ref);
  return (
    <Box>
      <Box
        {...fieldProps}
        ref={ref}
        sx={{
          padding: '8px 16px 8px 16px',
          display: 'flex',
          border: '1px solid #ccc',
          width: '68px',
          height: '34px',
          boxSizing: 'border-box',
          borderRadius: '4px',
          textAlign:'center'
        }}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
        {state.validationState === 'invalid' && <Typography aria-hidden="true">🚫</Typography>}
      </Box>
    </Box>
  );
}

export default TimeField;
