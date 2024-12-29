interface Student {
	firstName: string;
	lastName: string;
	birthYear: number;
}

const Students = () => {
	const studentArr: Student[] = [
		{ firstName: "Karol", lastName: "Wojtyła", birthYear: 1920 },
		{ firstName: "Piotr", lastName: "Łuszcz", birthYear: 1978 },
		{ firstName: "Mariusz", lastName: "Pudzianowski", birthYear: 1977 },
	];

	return (
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
				{studentArr.map((student: Student) => (
					<tr>
						<td>{student.firstName}</td>
						<td>{student.lastName}</td>
						<td>{student.birthYear}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Students;
