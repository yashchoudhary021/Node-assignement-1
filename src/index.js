const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	return new Promise((rej, res) => {
		fs.writeFile(fileName, fileContent, (error) => {
			if (error) {
				rej(error)
			}
			res(fileContent)
		})
	})
}

// myFileWriter('index.txt', 'Hello World'); // To create a file

const myFileReader = async (fileName) => {
	let fs = require('fs')
	fs.readFile(fileName,'utf-8', (error, data) => {
		if (error) throw error;
		console.log(data)
	})
}

// myFileReader("index.txt")  // {To read file Content}

const myFileUpdater = async (fileName, fileContent) => {
	return new Promise((rej, res) => {
		fs.appendFile(fileName, fileContent, (error) => {
			if(error){
				rej(error);
			}
			res(fileContent)
			console.log(fileContent)
		})
	})
}

// myFileUpdater('index.txt', "\nHello Yash Choudhary")  //{To update new content in file}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName)
}

// myFileDeleter('index.txt') // {It will directly delete the file}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }