import { Box } from '@mui/material';
import { useRef } from 'react';
import { useDateSegment } from 'react-aria';
import { DateFieldState, DateSegment as DateSegmentType } from 'react-stately';
interface Props {
  segment: DateSegmentType;
  state: DateFieldState;
}
const DateSegment: React.FC<Props> = ({ segment, state }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);
  

  return (
    <Box
      component={'div'}
      sx={{
        outline: 'none',
       
        padding: 0,
        '&:focus': {
          backgroundColor: '#ccc',
        },
      }}
      {...segmentProps}
      ref={ref}
    >
      {segment.text}
    </Box>
  );
};
export default DateSegment;
