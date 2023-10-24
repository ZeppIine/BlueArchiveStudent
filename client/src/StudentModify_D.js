import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './App2.css'
import './font/Font.css'

// 3090 포트 도메인
// URL 맨 뒤에 / (슬래시) 없어야 하므로 주의할 것
const EXPRESS_URL = 'https://bluearchivestudent.run.goorm.site'

function StudentModify_D() {
    const [student, setStudent] = useState([])
        useEffect(() => {
            (async () => {
                const res = await axios.get(EXPRESS_URL + `/student`)
                setStudent(res.data)
            })()
        }, [])

    return (
        <table>
            <thead>
                <tr><th colSpan="2">학생 삭제</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        학생<br/><br/>
                    </td>
                    <td>
                        <form>
                            <select>{ student.map( (student, i) => <option key={i} value={student.id}>{student.st_name}</option>) }</select><br/><br/>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td className="hovertd" colSpan="2">학생 삭제</td>
                </tr>
            </tbody>
        </table>
    )
}

export default StudentModify_D
