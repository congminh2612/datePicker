import styled from '@emotion/styled';
import { Stack, Typography, Box } from '@mui/material';
import { useRef } from 'react';
import { useCalendarCell, useLocale } from 'react-aria';
import { RangeCalendarState } from 'react-stately';
import { isSameDay, CalendarDate } from '@internationalized/date';
import { getDayOfWeek } from '@internationalized/date';
interface Props {
  state: RangeCalendarState;
  date: CalendarDate;
}
const StackDay = styled(Stack, {
  shouldForwardProp: (prop) =>
    prop !== 'PropsVisible' &&
    prop !== 'selected' &&
    prop !== 'selectionStart' &&
    prop !== 'selectionEnd',
})<{
  PropsVisible?: boolean;
  selected?: boolean;
  selectionStart?: boolean;
  selectionEnd?: boolean;
}>(({ PropsVisible, selected, selectionEnd, selectionStart }) =>
  !PropsVisible
    ? {
        borderRadius: selected ? (selectionStart ? '50%' : selectionEnd ? '50%' : 'none') : 'none',
        backgroundColor: selected
          ? selectionStart
            ? '#386DBF'
            : selectionEnd
            ? '#386DBF'
            : '#E9F1FF'
          : 'none',
      }
    : {
        color: '#ccc',
      }
);

const BoxDay = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'PropsVisible' &&
    prop !== 'selected' &&
    prop !== 'selectionStart' &&
    prop !== 'selectionEnd' &&
    prop !== 'isRoundedLeft' &&
    prop !== 'isRoundedRight',
})<{
  PropsVisible?: boolean;
  selected?: boolean;
  selectionStart?: boolean;
  selectionEnd?: boolean;
  isRoundedLeft?: boolean;
  isRoundedRight?: boolean;
}>(({ PropsVisible, selected, selectionEnd, selectionStart, isRoundedLeft, isRoundedRight }) =>
  !PropsVisible
    ? {
        color: selected ? '#fff' : 'black',
        borderTopLeftRadius: isRoundedLeft ?'50%':'none',
        borderBottomLeftRadius: isRoundedLeft ?'50%':'none',
        borderTopRightRadius:isRoundedRight?'50%':'none',
        borderBottomRightRadius:isRoundedRight?'50%':'none',
        outline: 'none',
        backgroundColor: selected
          ? selectionStart
            ? '#E9F1FF'
            : selectionEnd
            ? '#E9F1FF'
            : '#E9F1FF'
          : 'none',
        cursor: 'pointer',
        borderColor: selected ? (selectionStart ? 'none' : selectionEnd ? 'none' : 'none') : 'none',
        // bor
      }
    : {
        color: '#ccc',
      }
);
const RangeCalendarCell: React.FC<Props> = ({ state, date }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { locale } = useLocale();
  const dayOfWeek = getDayOfWeek(date, locale);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  const isSelectionStart = state.highlightedRange
    ? isSameDay(date, state.highlightedRange.start)
    : isSelected;
  const isSelectionEnd = state.highlightedRange
    ? isSameDay(date, state.highlightedRange.end)
    : isSelected;

  const isRoundedLeft = isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1);
  const isRoundedRight =
    isSelected &&
    (isSelectionEnd || dayOfWeek === 6 || date.day === date.calendar.getDaysInMonth(date));

  return (
    <td {...cellProps}>
      <BoxDay
        {...buttonProps}
        ref={ref}
        PropsVisible={isOutsideVisibleRange}
        selected={isSelected}
        selectionEnd={isSelectionEnd}
        selectionStart={isSelectionStart}
        isRoundedRight={isRoundedRight}
        isRoundedLeft={isRoundedLeft}
      >
        <StackDay
          selected={isSelected}
          selectionEnd={isSelectionEnd}
          selectionStart={isSelectionStart}
          alignItems="center"
          justifyContent="center"
          width={40}
          sx={{ py: '8px' }}
          PropsVisible={isOutsideVisibleRange}
        >
          <Typography>{formattedDate.split('日')}</Typography>
        </StackDay>
      </BoxDay>
    </td>
  );
};
export default RangeCalendarCell;
