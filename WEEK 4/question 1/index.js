import express from "express";

const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Alice", age: 21, course: "Math" },
  { id: 2, name: "Bob", age: 22, course: "Physics" },
];

// get all
app.get("/students", (req, res) => {
  res.json(students);
});

// new student
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    age,
    course,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
  console.log(students);
});

// get by id
app.get("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// update stu
app.put("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  student.course = req.body.course || student.course;

  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  students = students.filter((s) => s.id !== parseInt(req.params.id));
  res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
  console.log("Server running on PORT: 3000");
});
