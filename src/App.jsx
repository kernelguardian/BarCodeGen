// import { useState } from 'react'

import './App.css';
import { useState } from 'react';
import { ResultComponent } from './ResultComponent';
import { UserForm } from './UserForm';
import { handleFileUpload } from './UserForm';
import { handleSearchText } from './UserForm';

function App() {
	const [fileUploaded, setFileUploaded] = useState(false);

	const [data, setData] = useState();
	const [searchData, setSearchData] = useState('');

	return (
		<div className='App'>
			{fileUploaded ? (
				<ResultComponent data={data} searchData={searchData} />
			) : (
				<UserForm
					onFileUpload={(e) =>
						handleFileUpload(
							e,
							setFileUploaded,
							setData,
							handleSearchText,
							setSearchData
						)
					}
					onTextInput={(e) => handleSearchText(e, setSearchData)}
				/>
			)}
		</div>
	);
}

export default App;
