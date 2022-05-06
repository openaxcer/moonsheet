import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { alpha } from '@mui/material';
import Color from 'color';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {

        // backgroundColor: theme.palette.common.black,

        backgroundColor: Color(theme.palette.common.black).alpha(1).string(),

        color: theme.palette.common.white,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
        backgroundColor: Color(theme.palette.common.black).alpha(0.7).string(),
    },
    '&:nth-of-type(even)': {
        // backgroundColor: theme.palette.action.hover,
        backgroundColor: Color(theme.palette.common.black).alpha(0.6).string(),
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(roi, price, marketCap, competitors) {
    return { roi, price, marketCap, competitors };
}

const rows = [
    createData('X3257', '$9,159.05', '$9,563,159.05', " "),
    createData('X255', '$915.79', '$497,596.90', " "),
    createData('X63', '$65.90', '$169,159.35', " "),
    createData('X5', '$9.59', '$90,159.06', " "),
    createData('X0', '$0.90', '$69,159.75', " "),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper} sx={{
            backgroundColor: 'transparent'
        }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ROI</StyledTableCell>
                        <StyledTableCell align="right">PRICE</StyledTableCell>
                        <StyledTableCell align="right">MARKET CAP</StyledTableCell>
                        <StyledTableCell align="right">COMPETITORS</StyledTableCell>
                        {/* <StyledTableCell align="right"></StyledTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.roi}>
                            <StyledTableCell component="th" scope="row">
                                {row.roi}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.marketCap}</StyledTableCell>
                            <StyledTableCell align="right">{row.competitors}</StyledTableCell>
                            {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}