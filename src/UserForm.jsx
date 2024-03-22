export function handleFileUpload(e, setFileUploaded, setData) {
	var file = e.target.files[0];
	if (!file) {
		return;
	}

	var reader = new FileReader();

	reader.onload = function (e) {
		var contents = e.target.result;
		var lines = contents.split('\n');
		var data = [];

		for (var i = 0; i < lines.length; i++) {
			var cells = lines[i].split(',');
			data.push(cells);
		}
		setData(data);

		console.log(data);
	};

	reader.readAsText(file);

	setFileUploaded(true);
}

export function handleSearchText(e, setSearchData) {
	setSearchData(e.target.value);
}

// eslint-disable-next-line react/prop-types
export function UserForm({ onFileUpload, onTextInput }) {
	return (
		<>
			<textarea
				id='output'
				rows='25'
				cols='25'
				onChange={onTextInput}
			></textarea>
			<br />
			<input type='file' id='fileInput' accept='.csv' onChange={onFileUpload} />
		</>
	);
}
