import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

import Skeleton from "@material-ui/lab/Skeleton";

import { connect } from "react-redux";

import { formatTime } from "../utils/timeFormatter";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  tableContainer: {
    boxShadow: "none",
    background: "0",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    width: "450px",
    border: "1px solid black",
    backgroundColor: "#eee",
    maxWidth: "100%",
    display: "inline-block",
    margin: "20px",
  },
  tableFooter: {
    backgroundColor: "#fff",
  },
  skeleton: {
    width: "450px",
    margin: "0 auto",
    paddingTop: "40px",
  },
  skeletonChild: {
    backgroundColor: "#f0e5e53f",
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    fontSize: theme.typography.h5.fontSize,
    textAlign: "justify",
    borderBottom: "2px solid black",
  },
  body: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontSize: theme.typography.htmlFontSize,
    fontWeight: theme.typography.fontWeightMedium,
    border: "0",
    textAlign: "justify",
    borderBottom: "1px solid black",
  },
}))(TableCell);

const CustomPaginationActionsTable = ({ ranking }) => {
  const [users, setUsers] = useState([]);

  const classes = useStyles2();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Format data taken from database
  function createData(name, score, time) {
    time = formatTime(time);
    return { name, score, time };
  }

  //Fetch users from database
  const handleGetUsers = () => {
    const ranks = ranking
      .sort((a, b) => b.score - a.score)
      .map((user) => {
        return createData(user.name, user.score, user.time);
      });

    setUsers(ranks);
  };

  const buildSkeleton = () => {
    let elements = [];

    for (let i = 0; i < 5; i++) {
      elements.push(
        <Skeleton
          key={i}
          className={classes.skeletonChild}
          height={60}
          variant="rect"
          animation="wave"
        />
      );
    }
    console.log(elements);
    return elements;
  };
  useEffect(() => {
    handleGetUsers();
  }, [ranking]);

  return users.length === 0 ? (
    <div className={classes.skeleton}>{buildSkeleton()}</div>
  ) : (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell width={300}>Name</StyledTableCell>
            <StyledTableCell width={150} align="right">
              Score
            </StyledTableCell>
            <StyledTableCell width={150} align="right">
              Time
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : users
          ).map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.score}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter className={classes.tableFooter}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 5, 10]}
              colSpan={3}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  ranking: state.triviaReducer.ranking,
});

export default connect(mapStateToProps)(CustomPaginationActionsTable);
