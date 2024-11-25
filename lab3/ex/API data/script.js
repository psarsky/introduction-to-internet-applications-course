let itemTable = document.getElementById("tableBody");

fetch("https://dummyjson.com/products")
	.then((res) => res.json())
	.then((data) => {
        const products = data.products.slice(0, 30);
		products.forEach((element) => {
            const row = itemTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            cell1.innerHTML = '<img src="' + element.thumbnail + '">';
            cell2.innerHTML = element.title;
            cell3.innerHTML = element.description;
			});
		});
