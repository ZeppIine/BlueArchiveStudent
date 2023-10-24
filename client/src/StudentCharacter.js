import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import './font/Font.css'

// 3090 포트 도메인
// URL 맨 뒤에 / (슬래시) 없어야 하므로 주의할 것
const EXPRESS_URL = 'https://bluearchivestudent.run.goorm.site'

function StudentCharacter() {
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
                <tr><th>스탠딩</th><th>이름</th><th>학원</th><th>동아리</th><th>성급</th><th>무기종류</th><th>공격타입</th><th>방어타입</th></tr>
            </thead>
            <tbody>
                { items.map( (student, i) => <tr key={i}>
                    { 
                        student.id == null
                        ? <td/>
                        : <td><img className="LDimg" src={process.env.PUBLIC_URL + `/images/character/${student.aca_id}/${student.id}LD.webp`} alt={`캐릭터${student.id}LD`}/></td>
                    }
                    <td>{student.st_name}</td>
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

export default StudentCharacter
