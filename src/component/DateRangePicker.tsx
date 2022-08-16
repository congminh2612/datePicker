import { Box, Button, styled } from '@mui/material';
import { useRef } from 'react';
import { I18nProvider, useDateRangePicker } from 'react-aria';
import { useDateRangePickerState } from 'react-stately';
import RangeCalendar from './rangeCalendar/RangeCalendar';

const DateRangePickerButton = styled(Button)({
  backgroundColor: '#386DBF',
  textTransform: 'none',
  marginTop: '59px',
  '&:hover': {
    backgroundColor: '#386DBF',
  },
});
const DateRangePicker = (props: any) => {
  const state = useDateRangePickerState(props);
  const ref = useRef<HTMLDivElement>(null);
  const {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(props, state, ref);
  return (
    <I18nProvider locale="ja">
      <Box>
        <RangeCalendar {...calendarProps} />
        <DateRangePickerButton variant="contained" fullWidth>
          保存
        </DateRangePickerButton>
      </Box>
    </I18nProvider>
  );
};
export default DateRangePicker;
