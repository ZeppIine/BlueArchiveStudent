import { useState, useEffect } from 'react'
import axios from 'axios'
import './App2.css'
import './font/Font.css'

// 3090 포트 도메인
// URL 맨 뒤에 / (슬래시) 없어야 하므로 주의할 것
const EXPRESS_URL = 'https://bluearchivestudent.run.goorm.site'

function StudentModify() {
    const [academies, setAcademies] = useState([])
        useEffect(() => {
            (async () => {
                const res = await axios.get(EXPRESS_URL + `/academy`)
                setAcademies(res.data)
            })()
        }, [])
    
    const [weapons, setWeapons] = useState([])
        useEffect(() => {
            (async () => {
                const res = await axios.get(EXPRESS_URL + `/weapon`)
                setWeapons(res.data)
            })()
        }, [])
    
    const [Atypes, setAtypes] = useState([])
        useEffect(() => {
            (async () => {
                const res = await axios.get(EXPRESS_URL + `/atype`)
                setAtypes(res.data)
            })()
        }, [])
    
    const [Dtypes, setDtypes] = useState([])
        useEffect(() => {
            (async () => {
                const res = await axios.get(EXPRESS_URL + `/dtype`)
                setDtypes(res.data)
            })()
        }, [])

    return (
        <table>
            <thead>
                <tr><th colSpan="2">신규 학원 추가</th><th colSpan="2">신규 학생 추가</th><th colSpan="2">신규 동아리 추가</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        학원ID<br/><br/>
                        학원이름<br/><br/>
                    </td>
                    <td>
                        <form>
                            <input type="number"/><br/><br/>
                            <input type="text"/><br/><br/>
                        </form>
                    </td>
                    <td>
                        학생ID<br/><br/>
                        학생이름<br/><br/>
                        학원<br/><br/>
                        성급<br/><br/>
                        무기<br/><br/>
                        공격타입<br/><br/>
                        방어타입<br/><br/>
                    </td>
                    <td>
                        <form>
                            <input type="number"/><br/><br/>
                            <input type="text"/><br/><br/>
                            <select>{ academies.map( (academy, i) => <option key={i} value={academy.id}>{academy.aca_name}</option>) }</select><br/><br/>
                            <select>
                                <option value="1">1성</option>
                                <option value="2">2성</option>
                                <option value="3">3성</option>
                            </select><br/><br/>
                            <select>{ weapons.map( (weapon, i) => <option key={i} value={weapon.id}>{weapon.weapon}</option>) }</select><br/><br/>
                            <select>{ Atypes.map( (atype, i) => <option key={i} value={atype.id}>{atype.types}</option>) }</select><br/><br/>
                            <select>{ Dtypes.map( (dtype, i) => <option key={i} value={dtype.id}>{dtype.types}</option>) }</select><br/><br/>
                        </form>
                    </td>
                    <td>
                        학원ID<br/><br/>
                        학원<br/><br/>
                        동아리이름<br/><br/>
                    </td>
                    <td>
                        <form>
                            <input type="number"/><br/><br/>
                            <select>{ academies.map( (academy, i) => <option key={i} value={academy.id}>{academy.aca_name}</option>) }</select><br/><br/>
                            <input  type="text"/><br/><br/>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td className="hovertd" colSpan="2">학원 등록<br/></td>
                    <td className="hovertd" colSpan="2">학생 등록<br/></td>
                    <td className="hovertd" colSpan="2">동아리 등록<br/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default StudentModify
