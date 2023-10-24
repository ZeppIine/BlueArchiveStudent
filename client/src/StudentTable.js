import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import './font/Font.css'

// 3090 포트 도메인
// URL 맨 뒤에 / (슬래시) 없어야 하므로 주의할 것
const EXPRESS_URL = 'https://bluearchivestudent.run.goorm.site'
const EXPRESS_REACT_URL = 'https://bluearchivestudent-react.run.goorm.site'

function StudentTable() {
    const location = useLocation()
    var sname = location.pathname.replace('/', "")
    
    const [items, setItem] = useState([])
        useEffect(() => {
            (async () => {
                const res = await axios.get(EXPRESS_URL + `/student/${sname}`)
                setItem(res.data)
            })()
        }, [sname])

    return (
        <table>
            <thead>
                <tr><th>학생</th><th>학원</th><th>동아리</th><th>성급</th><th>무기종류</th><th>공격타입</th><th>방어타입</th></tr>
            </thead>
            <tbody>
                { items.map( (student, i) => <tr key={i} onClick={() =>{window.open(EXPRESS_REACT_URL + `/student/${student.id}`, "_self")}}>
                    { 
                        student.id == null
                        ? <td/>
                        : <td><img src={process.env.PUBLIC_URL + `/images/character/${student.aca_id}/${student.id}.webp`} alt={`캐릭터${student.id}`}/><br/>{student.st_name}</td>
                    }
                    { 
                        student.aca_id == null
                        ? <td/>
                        : <td><img src={process.env.PUBLIC_URL + `/images/academy/${student.aca_id}.webp`} alt={`학원${student.aca_id}`}/><br/>{student.aca_name}</td>
                    }
                    <td>{student.club}</td>
                    { 
                        student.star == null
                        ? <td/>
                        : <td><img className="starimg" src={process.env.PUBLIC_URL + `/images/star/${student.star}.png`} alt='성급'/></td>
                    }
                    { 
                        student.weapon_type == null
                        ? <td/>
                        : <td><img src={process.env.PUBLIC_URL + `/images/weapon/${student.weapon_type}.webp`} alt='성급'/><br/>{student.weapon}</td>
                    }
                    <td>{student.atype}</td>
                    <td>{student.dtype}</td>
                </tr>) }
            </tbody>
        </table>
    )
}

export default StudentTable


// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import './App.css'
// import './font/Font.css'

// // import './StudentTable.css'

// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Fab from '@mui/material/Fab';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import {createTheme, ThemeProvider} from "@mui/material";

// const theme = createTheme({
//     typography: {
//         fontFamily: 'Title_Medium'
//     },
// })

// // 3090 포트 도메인
// // URL 맨 뒤에 / (슬래시) 없어야 하므로 주의할 것
// const EXPRESS_URL = 'https://bluearchivestudent.run.goorm.site'

// function StudentTable() {
//     const [items, setItems] = useState([])
//         useEffect(() => {
//         refresh()
//         }, [])
  
//     async function refresh() {
//         const res = await axios.get(EXPRESS_URL + '/student')
//         console.log(res.data)
//         setItems(res.data)
//     }
  
//     return (
//         <ThemeProvider theme={theme}>
//             <Paper sx={{ width: '100%', overflow: 'hidden', fontFamily: 'Title_Medium'}}>
//                 <Fab color="primary"
//                     sx={{
//                     position: "fixed",
//                     top: (theme) => theme.spacing(2),
//                     left: (theme) => theme.spacing(2)
//                     }}
//                     onClick={() => { refresh() }}>
//                     <RefreshIcon />
//                 </Fab>
//                 <TableContainer sx={{ maxHeight: 820, maxWidth: 1400 }}>
//                     <Table stickyHeader aria-label="sticky table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell align="center">이름</TableCell>
//                                 <TableCell align="center">학원</TableCell>
//                                 <TableCell align="center">동아리</TableCell>
//                                 <TableCell align="center">성급</TableCell>
//                                 <TableCell align="center">무기종류</TableCell>
//                                 <TableCell align="center">공격타입</TableCell>
//                                 <TableCell align="center">방어타입</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             { items.map( (student, i) => <TableRow hover role="checkbox" key={i}>
//                                 {
//                                     student.id == null
//                                     ? <TableCell/>
//                                     : <TableCell align="center"><img src={process.env.PUBLIC_URL + `/images/character/${student.aca_id}/${student.id}.webp`} alt={`캐릭터${student.id}`}/><br/>{student.st_name}</TableCell>
//                                 }
//                                 {
//                                     student.aca_id == null
//                                     ? <TableCell/>
//                                     : <TableCell align="center"><img src={process.env.PUBLIC_URL + `/images/academy/${student.aca_id}.webp`} alt={`학원${student.aca_id}`}/><br/>{student.aca_name}</TableCell>
//                                 }
//                                 <TableCell align="center">{student.club}</TableCell>
//                                 { 
//                                     student.star == null
//                                     ? <TableCell/>
//                                     : <TableCell align="center"><img className="starimg" src={process.env.PUBLIC_URL + `/images/star/${student.star}.png`} alt='성급'/></TableCell>
//                                 }
//                                 { 
//                                     student.weapon_type == null
//                                     ? <TableCell/>
//                                     : <TableCell align="center"><img src={process.env.PUBLIC_URL + `/images/weapon/${student.weapon_type}.webp`} alt='성급'/><br/>{student.weapon}</TableCell>
//                                 }
//                                 <TableCell align="center">{student.atype}</TableCell>
//                                 <TableCell align="center">{student.dtype}</TableCell>
//                             </TableRow>) }
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Paper>
//         </ThemeProvider>
//     )
// }

// export default StudentTable



//                 <TableContainer sx={{
//                         maxWidth: 500,
//                         position: "fixed",
//                         top: (theme) => theme.spacing(10),
//                         right: (theme) => theme.spacing(0)
//                         }}>
//                     <TableRow hover role="checkbox">
//                         <TableCell align="center"><img src={process.env.PUBLIC_URL + `/images/character/1/101.webp`} alt={`캐릭터101`}/><br/>시로코</TableCell>
//                     </TableRow>
//                     <TableRow hover role="checkbox">
//                         <TableCell align="center"><img src={process.env.PUBLIC_URL + `/images/academy/1.webp`} alt={`학원1`}/><br/>아비도스 고등학교</TableCell>
//                         </TableRow>
//                     <TableRow hover role="checkbox">
//                         <TableCell align="center">대책위원회</TableCell>
//                     </TableRow>
//                     <TableRow hover role="checkbox">
//                         <TableCell align="center"><img className="starimg" src={process.env.PUBLIC_URL + `/images/star/3.png`} alt='성급'/></TableCell>
//                     </TableRow>
//                     <TableRow hover role="checkbox">
//                         <TableCell align="center"><img src={process.env.PUBLIC_URL + `/images/weapon/3.webp`} alt='성급'/><br/>돌격소총(AR)</TableCell>
//                     </TableRow>
//                     <TableRow hover role="checkbox">
//                         <TableCell align="center">폭발</TableCell>
//                     </TableRow>
//                     <TableRow hover role="checkbox">
//                         <TableCell align="center">경장갑</TableCell>
//                     </TableRow>
//                 </TableContainer>