import styled from '@emotion/styled';
import { Stack, Typography, Theme } from '@mui/material';
import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
interface Props {
  state: CalendarState;
  date: any;
}

const StackDay = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'PropsVisible' && prop !== 'selected',
})<{ PropsVisible?: boolean; selected?: boolean }>(({ PropsVisible, selected }) =>
  !PropsVisible
    ? {
        color: selected ? 'white' : '#111',
        borderRadius: selected ? '50%' : 'none',
        backgroundColor: selected ? '#386DBF' : 'none',
        outline: 'none',
        cursor: 'pointer',
      }
    : {
        color: '#ccc',
      }
);
const CalendarCell: React.FC<Props> = ({ state, date }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);
 

  return (
    <td {...cellProps}>
      <StackDay
        {...buttonProps}
        ref={ref}
        PropsVisible={isOutsideVisibleRange}
        selected={isSelected}
        alignItems="center"
        justifyContent="center"
        width={40}
        sx={{ py: '8px' }}
      >
        <Typography>{formattedDate.split('日')}</Typography>
      </StackDay>
    </td>
  );
};
export default CalendarCell;
