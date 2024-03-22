import JsBarcode from 'jsbarcode';

function collateData(data, searchData) {
	// searchData = searchData.replace(/\n/g, '');
	searchData = searchData.split('\n');

	let collatedData = [];
	if (data) {
		for (var i = 1; i < data.length; i++) {
			// console.log(data[i]);
			let prodDesc = data[i][1];
			let prodSalePrice = data[i][5];
			let prodBarCode = data[i][10];

			if (searchData.includes(prodBarCode)) {
				// console.log('Found matching item', prodBarCode, searchData);
				collatedData.push({
					prodBarCode: prodBarCode,
					prodDesc: prodDesc,
					prodSalePrice: prodSalePrice,
				});
			}
		}
	}
	try {
		JsBarcode('#barcode', 'Hi!');
	} catch (e) {
		console.log(e);

		return collatedData;
	}
}

export function ResultComponent({ data, searchData }) {
	let collatedData = collateData(data, searchData);

	return (
		<div>
			<h1>Grocerhut LabelGenerator</h1>
			<p>{searchData}</p>
			<svg id='barcode'></svg>

			<div>{JSON.stringify(collatedData)}</div>
		</div>
	);
}
