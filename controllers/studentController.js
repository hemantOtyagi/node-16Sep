const Student = require('../models/student')
async function addStudent(req ,res){
    try{
        console.log(req.body,"request body");
         let student = new Student(req.body);
         await student.save();
         console.log("data save successfully.....");
         res.end("Added");
    }
    catch(err){
        res.status(500).send({message : "Error in adding student" })
    }

}

async function getStudents(req ,res) {
    try{
        let students = await Student.find({});
        console.log(students, 'students');
        res.send(students);

    }
    catch(err){
        res.status(500).send({message : "Error in getting students" })
    }
}

async function getStudentByRollNo(req ,res) {
    try{
        let rollNo = parseInt(req.params.rollNo);
        console.log(rollNo,"rollNo");
        let student = await Student.find({rollNo:rollNo});
        console.log(student, 'students');
        res.send(student);

    }
    catch(err){
        res.status(500).send({message : "Error in getting students" })
    }
}



module.exports= {
    addStudent,
    getStudents,
    getStudentByRollNo

}
    