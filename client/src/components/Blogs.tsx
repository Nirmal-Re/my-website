import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"

const Blogs = () => {
  const blogs = [{date:"Sep 2018", name:"a"}, {date:"Nov 2019", name:"b"}, {date:" Dec 2020", name:"c"}]

  return (
    <TableContainer component={Paper} sx={{position:"relative",width: "80%", margin: "25px auto"}}>
      <Table sx={{ minWidth: 650, backgroundColor: "#011E22", borderCollapse: "separate", borderSpacing: "15px"}} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell align="center" sx={{color:"white", width:"20%", border: "0px"}}></TableCell>
            <TableCell align="center" sx={{color:"white", border: "0px"}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map(element => {
            return(
              <TableRow key={element.name} sx={{ border: "0px", padding:"0px"}}>
                <TableCell sx={{color:"white", borderBottom: "1px solid rgba(224, 224, 224, 0.1)", borderRight: "1px solid rgba(224, 224, 224, 0.1)"}} component="th" scope="row">
                  {element.date}
                </TableCell>
                <TableCell sx={{color:"white", borderBottom: "1px solid rgba(224, 224, 224, 0.1)"}} align="center">{element.name}</TableCell>
              </TableRow>
            )
            })
          }

        </TableBody>
      </Table>
    </TableContainer>
   )
}
export default Blogs