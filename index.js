const {google} = require('googleapis');

const auth = new google.auth.GoogleAuth({
	keyFile: 'credentials.json',
	scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({
	version: 'v4',
	auth
});

function doStuff(auth) {
	const sheets = google.sheets({
		version: 'v4',
		auth
	});
	sheets.spreadsheets.values.get({
		spreadsheetId: '1rq0n0295DJ7OE8g4bfOAYZmOvZep9kovav9RyJEyfZQ',
		range: 'Sheet1!A1:B',
	}, (err, res) => {
		if (err) return console.log('The API returned an error: ' + err);
		const rows = res.data.values;
		if (rows.length) {
			console.log('Name, Major:');
			// Print columns A and E, which correspond to indices 0 and 4.
			rows.map((row) => {
				console.log(`${row[0]}, ${row[1]}`);
			});
		} else {
			console.log('No data found.');
		}
	});
}

let stuff = doStuff(auth)
// console.log('derp')
console.log(stuff)
