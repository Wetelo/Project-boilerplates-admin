import { ArrowBackIos, ArrowForwardIos, CalendarMonthSharp } from '@mui/icons-material';
import { Box, Button, Card, Divider, IconButton, Popover, Typography } from '@mui/material';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react';

import { dateOptions } from './constants';
import { styles } from './styles';
import { IDateFilterProps } from './types';
import { useDateFilter } from './useDateFilter';

const DateFilter: React.FC<IDateFilterProps> = ({ filter, onChange }) => {
  const {
    date,
    anchorEl,
    isOpened,
    handlePopoverOpen,
    handlePopoverClose,
    getPreviousDateHandler,
    // changeDateHandler,
    getNextDateHandler,
    currentDayHandler,
  } = useDateFilter({ filter, onChange });

  return (
    <>
      <Box sx={styles.container}>
        <IconButton onClick={getPreviousDateHandler(date as Date)}>
          <ArrowBackIos fontSize="small" />
        </IconButton>
        <Button disableRipple onClick={handlePopoverOpen} aria-label="delete">
          <CalendarMonthSharp color="primary" sx={styles.icon} />
          <Typography sx={styles.text}>{date?.toLocaleDateString(undefined, dateOptions)}</Typography>
        </Button>
        <IconButton onClick={getNextDateHandler}>
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
      <Popover anchorOrigin={styles.anchorOrigin} open={isOpened} anchorEl={anchorEl} onClose={handlePopoverClose}>
        <Card sx={styles.card}>
          <Divider />
          <Box maxHeight={450}>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
            {/* todo add calendar picker from new  x-date-pickers version */}
            {/* <CalendarPicker date={date} onChange={changeDateHandler} /> */}
            {/* </LocalizationProvider> */}
          </Box>
          <Divider />
        </Card>
        <Divider />
        <Box sx={styles.buttons}>
          <Button variant="outlined" onClick={currentDayHandler}>
            Today
          </Button>
          <Button sx={{ ml: 1 }} variant="outlined" onClick={getPreviousDateHandler()}>
            Yesterday
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default DateFilter;
