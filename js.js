const myElement = document.getElementsByClassName("price");
const apiKey='AIzaSyB286o6-WYR2ztSPFe0WW8nWmuy5jNgimc'; // Replace with your API key
const spreadsheetId = '1tSnMeRfWunB7IRGM3MJf67Qa5G9iHA5mFG8ay1VLN9A'; // Replace with your spreadsheet ID
const sheetName = 'Sheet1'; // Replace with your sheet name

let n=2;

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!D1?key=${apiKey}`)
 .then(response => response.json())
 .then(data => {var x =   Object.values(data.values);
 	for (var i = 0; i < x; i++) {

	let y=i;
	console.log(y);
	fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!B${n}?key=${apiKey}`)
 .then(response => response.json())
 .then(data => myElement[y].innerHTML =   (data.values) +'  | ')
 .catch(error => console.error('Error:', error));
 n+=1
}

} )
 .catch(error => console.error('Error:', error));

// start

