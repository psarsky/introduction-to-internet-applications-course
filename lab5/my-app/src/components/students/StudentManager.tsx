import { useState } from "react";

interface Student {
	firstName: string;
	lastName: string;
	birthYear: number;
}

const StudentManager = () => {
	const [students, setStudents] = useState<Student[]>([
		{ firstName: "Karol", lastName: "Wojtyła", birthYear: 1920 },
		{ firstName: "Piotr", lastName: "Łuszcz", birthYear: 1978 },
		{ firstName: "Mariusz", lastName: "Pudzianowski", birthYear: 1977 },
	]);

	const AddStudentForm = () => {
		const [fName, setFirstName] = useState("");
		const [lName, setLastName] = useState("");
		const [year, setBirthYear] = useState("");

		return (
			<>
				First name:
				<br />
				<input
					type="text"
					value={fName}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFirstName(e.target.value);
					}}
				/>
				<br />
				Last name:
				<br />
				<input
					type="text"
					value={lName}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setLastName(e.target.value);
					}}
				/>
				<br />
				Birth year:
				<br />
				<input
					type="text"
					value={year}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setBirthYear(e.target.value);
					}}
				/>
				<br />
				<br />
				<button
					disabled={!fName || !lName || !year}
					onClick={() => {
						if (!isNaN(+year)) {
							const newStudent: Student = {
								firstName: fName,
								lastName: lName,
								birthYear: parseInt(year),
							};
							setStudents((prevState) => [...prevState, newStudent]);
                            setFirstName("");
                            setLastName("");
                            setBirthYear("");
						} else {
							alert("Year has to be a number!");
						}
					}}
				>
					Add student
				</button>
			</>
		);
	};

	return (
		<>
			<table>
				<caption>Students</caption>
				<thead>
					<tr>
						<th>First name</th>
						<th>Last name</th>
						<th>Birth year</th>
					</tr>
				</thead>
				<tbody>
					{students.map((student: Student) => (
						<tr>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>{student.birthYear}</td>
						</tr>
					))}
				</tbody>
			</table>
			<AddStudentForm />
		</>
	);
};

export default StudentManager;
