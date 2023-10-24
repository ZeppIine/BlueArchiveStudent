import './font/Font.css'
import './App.css'
import StudentTable from './StudentTable'
import StudentCharacter from './StudentCharacter'
import StudentModify from './StudentModify'
import StudentModify_D from './StudentModify_D'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const EXPRESS_REACT_URL = 'https://bluearchivestudent-react.run.goorm.site'

const App = () => {
    return (
        <div>
            <h1 onClick={() =>{window.open(EXPRESS_REACT_URL, "_self")}}>
                <a>
                Blue Archive 학생명부
                </a>
            </h1>
            <div display="inline">
                <select className="thsearch">
                    <option value="student">학생</option>
                    <option value="academy">학원</option>
                    <option value="club">동아리</option>
                    <option value="star">성급</option>
                    <option value="weapon">무기종류</option>
                    <option value="atype">공격타입</option>
                    <option value="dtype">방어타입</option>
                </select>
                <input type="text" className="thsearch"/>
                <button className="thsearch">검색</button>
                <button className="thsearch" align="right" onClick={() =>{window.open(EXPRESS_REACT_URL + "/modify", "_self")}}>추가</button>
                <button className="thsearch" align="right" onClick={() =>{window.open(EXPRESS_REACT_URL + "/modify/student_d", "_self")}}>삭제</button>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={<StudentTable/>}></Route>
                    <Route path={'/student/*'} element={<StudentCharacter/>}></Route>
                    <Route path={'/modify/*'} element={<StudentModify/>}></Route>
                    <Route path={'/modify/student_d'} element={<StudentModify_D/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App