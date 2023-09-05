const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
const port = 3000;
app.use(bodyParser.json());
const db = new sqlite3.Database('../database.sqlite');

// Define your API endpoint for handling POST requests

//#region Api For Crud in MedicalRecords

app.post('/post', (req, res) => {
    let doctor = req.body.doctor;
    let disease = req.body.disease;
    let medicine = req.body.medicine
    
    db.run('INSERT INTO MedicalRecords (doctor, disease,medicine) VALUES (?, ?,?)', [doctor, disease,medicine], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error inserting data into the database.');
            return;
        }
        res.status(200).send(`A row has been inserted with rowid ${this.lastID}`);
    });
});

app.put('/update', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const updatedData = req.body;

    db.run('UPDATE MedicalRecords SET doctor = ?, disease = ?, medicine = ? WHERE id = ?',
        [
            updatedData.doctor,
            updatedData.disease,
            updatedData.medicine,
            id
        ],
        function (err) {
            if (err) {
                console.error(err.message);
                res.status(500).send('Error updating data in the database.');
                return;
            }
            res.status(200).send(`MedicalRecords with ID ${id} has been updated.`);
        }
    );
});

app.get('/', (req, res)=> {
    db.all('SELECT * FROM MedicalRecords', function(err, rows) {
        console.log('errors :' +err)
        res.send(rows)
    })
})

app.delete('/delete/:id', (req, res)=> {
    let id =  req.params.id;
    db.run('delete FROM MedicalRecords where id=? ',[id], function(err, rows) {
        console.log('errors :' +err)
        res.send(rows)
    })
})

//#endregion 

//#region Api For Authentication Login

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    db.all('SELECT * FROM users where username=? and password=?',[username,password], function(err, rows) {
        if (err) {
            console.error('Error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (rows.length === 0) {
                res.status(401).json({ error: 'Invalid credentials' });
            } else {
                res.status(200).json({ success: 'Login successful', user: rows[0] });
            }
        }
    });
})

//#endregion

//#region Guest Api

app.post('/guest', (req, res)=> {
    let desease = req.body.desease;
    db.all('SELECT * FROM MedicalRecords where disease = ?',[desease], function(err, rows) {
        console.log('errors :' +err)
        res.send(rows)

    })
})

//#endregion


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
