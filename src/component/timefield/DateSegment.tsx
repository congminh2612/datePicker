import { Box } from '@mui/material';
import { useRef } from 'react';
import { useDateSegment } from 'react-aria';
import { DateFieldState, DateSegment as DateSegmentType } from 'react-stately';
interface Props {
  segment: DateSegmentType;
  state: DateFieldState;
}
function DateSegment({ segment, state }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);
  return (
    <Box
      {...segmentProps}
      ref={ref}
      component={'div'}
      sx={{
        outline: 'none',

        padding: 0,
        '&:focus': {
          backgroundColor: '#ccc',
        },
      }}
    >
      {segment.text}
    </Box>
  );
}

export default DateSegment;
