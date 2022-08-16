import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { useDateFormatter } from 'react-aria';
import { RangeCalendarState } from 'react-stately';

interface Props {
  state: RangeCalendarState;
  ref: React.MutableRefObject<HTMLDivElement | null>;
}
// interface Years {
//   value: CalendarDate,
//   formatted: string;
// }
const YearDropDown: React.FC<Props> = ({ state, ref }) => {
  const years: any[] = [];
  let formatter = useDateFormatter({
    year: 'numeric',
    timeZone: state.timeZone,
  });
  for (let i = -20; i <= 20; i++) {
    const date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  function onChange(event: SelectChangeEvent) {
    const index = Number(event.target.value);
    const date = years[index].value;
    state.setFocusedDate(date);
  }
  return (
    <FormControl sx={{}}>
      <Select
        value={'20'}
        onChange={onChange}
        MenuProps={{ anchorEl: ref?.current, sx: { top: '-265px' ,left:'-183px',maxHeight:'400px'} }}
        sx={{
          position: 'relative',
          height: '32px',
          '& fieldset': {
            border: 'none',
          },
          '& .MuiInputBase-input': {
            padding: 0,
            marginLeft: '4px',
            fontSize: '20px',
            fontWeight: '700',
            marginTop: '8px',
          },
          '& .MuiSvgIcon-root': {
            color: '#111',
          },
        }}
      >
        {years.map((year, index) => {
          return (
            <MenuItem key={index} value={index}>
              {year.formatted}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default YearDropDown;
