import React from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

import {Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table} from '@material-ui/core';
import useSWR from "swr"
import { apiService } from 'apps/web/service/apiService';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const fetcher = (url) => apiService.get(url).then(res => res.data);

CustomizedTables.getInitialProps = async()=> {
    const data = fetcher('/api')
  return { data }
}

export default function CustomizedTables(props) {
    const initialData = props.data

  const classes = useStyles();
  const { data, error, mutate } = useSWR('/api', fetcher, { initialData, suspense:true, refreshInterval: 1000 })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>URL (Original)</StyledTableCell>
            <StyledTableCell align="right">Shorted</StyledTableCell>
            <StyledTableCell align="right">Clicks</StyledTableCell>
            <StyledTableCell align="right">Created At</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data == null ? null : data.map((row) => (
            <StyledTableRow key={row.ShortedUrl}>
              <StyledTableCell component="th" scope="row">
                {row.OriginalUrl}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ShortedUrl}</StyledTableCell>
              <StyledTableCell align="right">{row.clicks}</StyledTableCell>
              <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

