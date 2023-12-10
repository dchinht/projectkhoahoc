/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import { deleteUser, getListUser } from "../../../redux/slices/signUpSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UserTable({ handleEdit }) {
  const { signUpList } = useSelector((state) => state.signUp);
  const dispatch = useDispatch();

  const handleDeleteUser = (item) => {
    Swal.fire({
      title: "Bạn có muốn xoá không?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Delete Success", "", "success").then(
          await dispatch(deleteUser(item))
        ).then(
          await dispatch(getListUser())
        );
      }
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Avatar</StyledTableCell>
            <StyledTableCell align="left">Fullname</StyledTableCell>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Admin</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {signUpList.length > 0 &&
            signUpList.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  <img
                    style={{ width: "35px", height: "35px" }}
                    src={item.avatar}
                    alt=""
                  />
                </StyledTableCell>
                <StyledTableCell align="left">{item.fullname}</StyledTableCell>
                <StyledTableCell align="left">{item.username}</StyledTableCell>
                <StyledTableCell align="left">{item.email}</StyledTableCell>
                <StyledTableCell align="left">
                  {item.isAdmin ? (
                    <button className=" bg-red-600 rounded-[5px] text-white w-[70px] pb-[5px] pl-[10px] pr-[10px] pt-[5px]">
                      Admin
                    </button>
                  ) : (
                    <button className=" bg-green-600 rounded-[5px] text-white w-[70px] pb-[5px] pl-[10px] pr-[10px] pt-[5px]">
                      User
                    </button>
                  )}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div className="flex gap-[5px]">
                    <button
                      onClick={() => handleEdit(item)}
                      className=" text-slate-950 bg-yellow-300 rounded-[5px] w-[30px] h-[30px]"
                    >
                      <ModeIcon />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(item.id)}
                      className=" text-slate-950 bg-red-500 rounded-[5px] w-[30px] h-[30px]"
                    >
                      <DeleteForeverIcon />
                    </button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
