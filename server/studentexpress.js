import express from "express"
import mysql from "mysql"
import bodyParser from "body-parser"
import cors from "cors"

import dbconf from "./conf/auth.js"

const app = express()
const port = 3090

const db = mysql.createConnection(dbconf)

db.connect()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({result: "success"})
})

app.get('/student', (req, res) => {
    const sql = 'SELECT student.id, st_name, aca_id, aca_name, club, star, weapon_type, weapon, Atype.types AS atype, Dtype.types AS dtype FROM student \
    LEFT JOIN academy ON academy.id = student.academy_id \
    LEFT JOIN academyid ON academyid.id = academy.aca_id \
    LEFT JOIN weapon ON weapon.id = student.weapon_type \
    LEFT JOIN Atype ON Atype.id = student.attack_type \
    LEFT JOIN Dtype ON Dtype.id = student.defence_type \
    ORDER BY student.id ASC;'
  
	db.query(sql, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/student/student/:id', (req, res) => {
    const sql = `SELECT student.id, st_name, aca_id, aca_name, club, star, weapon_type, weapon, Atype.types AS atype, Dtype.types AS dtype FROM student\
    LEFT JOIN academy ON academy.id = student.academy_id \
    LEFT JOIN academyid ON academyid.id = academy.aca_id \
    LEFT JOIN weapon ON weapon.id = student.weapon_type \
    LEFT JOIN Atype ON Atype.id = student.attack_type \
    LEFT JOIN Dtype ON Dtype.id = student.defence_type \ 
    WHERE student.id = ? \
    ORDER BY student.id ASC;`
  
	db.query(sql, [req.params.id], (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/student/academy/:aca_name', (req, res) => {
    const sql = `SELECT student.id, st_name, aca_id, aca_name, club, star, weapon_type, weapon, Atype.types AS atype, Dtype.types AS dtype FROM student\
    LEFT JOIN academy ON academy.id = student.academy_id \
    LEFT JOIN academyid ON academyid.id = academy.aca_id \
    LEFT JOIN weapon ON weapon.id = student.weapon_type \
    LEFT JOIN Atype ON Atype.id = student.attack_type \
    LEFT JOIN Dtype ON Dtype.id = student.defence_type \ 
    WHERE aca_name = ? \
    ORDER BY student.id ASC;`
  
	db.query(sql, [req.params.aca_name], (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/student/star/:star', (req, res) => {
    const sql = `SELECT student.id, st_name, aca_id, aca_name, club, star, weapon_type, weapon, Atype.types AS atype, Dtype.types AS dtype FROM student\
    LEFT JOIN academy ON academy.id = student.academy_id \
    LEFT JOIN academyid ON academyid.id = academy.aca_id \
    LEFT JOIN weapon ON weapon.id = student.weapon_type \
    LEFT JOIN Atype ON Atype.id = student.attack_type \
    LEFT JOIN Dtype ON Dtype.id = student.defence_type \ 
    WHERE star = ? \
    ORDER BY student.id ASC;`
  
	db.query(sql, [req.params.star], (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/student/weapon/:weapon', (req, res) => {
    const sql = `SELECT student.id, st_name, aca_id, aca_name, club, star, weapon_type, weapon, Atype.types AS atype, Dtype.types AS dtype FROM student\
    LEFT JOIN academy ON academy.id = student.academy_id \
    LEFT JOIN academyid ON academyid.id = academy.aca_id \
    LEFT JOIN weapon ON weapon.id = student.weapon_type \
    LEFT JOIN Atype ON Atype.id = student.attack_type \
    LEFT JOIN Dtype ON Dtype.id = student.defence_type \ 
    WHERE weapon = ? \
    ORDER BY student.id ASC;`
  
	db.query(sql, [req.params.weapon], (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/student/attack/:attack', (req, res) => {
  const sql = `SELECT student.id, st_name, aca_id, aca_name, club, star, weapon_type, weapon, Atype.types AS atype, Dtype.types AS dtype FROM student\
    LEFT JOIN academy ON academy.id = student.academy_id \
    LEFT JOIN academyid ON academyid.id = academy.aca_id \
    LEFT JOIN weapon ON weapon.id = student.weapon_type \
    LEFT JOIN Atype ON Atype.id = student.attack_type \
    LEFT JOIN Dtype ON Dtype.id = student.defence_type \ 
    WHERE Atype.types = ? \
    ORDER BY student.id ASC;`
  
	db.query(sql, [req.params.attack], (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/student/defence/:defence', (req, res) => {
  const sql = `SELECT student.id, st_name, aca_id, aca_name, club, star, weapon_type, weapon, Atype.types AS atype, Dtype.types AS dtype FROM student\
    LEFT JOIN academy ON academy.id = student.academy_id \
    LEFT JOIN academyid ON academyid.id = academy.aca_id \
    LEFT JOIN weapon ON weapon.id = student.weapon_type \
    LEFT JOIN Atype ON Atype.id = student.attack_type \
    LEFT JOIN Dtype ON Dtype.id = student.defence_type \ 
    WHERE Dtype.types = ? \
    ORDER BY student.id ASC;`
  
	db.query(sql, [req.params.defence], (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/academy', (req, res) => {
    const sql = 'SELECT * FROM academyid;'
  
	db.query(sql, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/weapon', (req, res) => {
    const sql = 'SELECT * FROM weapon;'
  
	db.query(sql, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/club', (req, res) => {
    const sql = 'SELECT * FROM academy;'
  
	db.query(sql, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/atype', (req, res) => {
    const sql = 'SELECT * FROM Atype;'
  
	db.query(sql, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.get('/dtype', (req, res) => {
    const sql = 'SELECT * FROM Dtype;'
  
	db.query(sql, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json(rows)
	})
})

app.post('/modify', (req, res) => {
    res.json({result: "success"})
})

app.post('/modify/student', (req, res) => {
	const sql = 'insert into student (id, st_name, academy_id, star, weapon_type, attack_type, defence_type) values (?, ?, ?, ?, ?, ?, ?)'
	const student = [
		req.body.id,
		req.body.st_name,
		req.body.academy_id,
		req.body.star,
	    req.body.weapon_type,
		req.body.attack_type,
		req.body.defence_type
	]

	db.query(sql, student, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json({result: "success"})
	})
})

app.post('/modify/club', (req, res) => {
	const sql = 'insert into academy (id, aca_id, club) values (?, ?, ?)'
	const academy = [
		req.body.id,
		req.body.aca_id,
		req.body.club
	]

  db.query(sql, academy, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json({result: "success"})
	})
})

app.post('/modify/academy', (req, res) => {
	const sql = 'insert into academyid (id, aca_name) values (?, ?)'
	const academyid = [
		req.body.id,
		req.body.aca_name
	]

  db.query(sql, academyid, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json({result: "success"})
	})
})

app.post('/modify/student_d', (req, res) => {
	const sql = `delete from student where id = ?`
    const drop = req.body.id

  db.query(sql, drop, (err, rows) => {
		if (err) {
			res.json({result: "error"})
			return console.log(err)
		}
		res.json({result: "success"})
	})
})

app.listen(port, () => {
  console.log(`서버 실행됨 (port ${port})`)
})