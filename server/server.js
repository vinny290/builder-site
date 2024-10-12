const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))

// Эндпоинт для получения списка проектов
app.get('/projects', (req, res) => {
	const projectsDir = path.join(__dirname, 'images')
	fs.readdir(projectsDir, (err, folders) => {
		if (err) return res.status(500).send('Ошибка чтения директории')

		const projects = folders.map((folder) => {
			const descriptionPath = path.join(projectsDir, folder, 'description.json')
			const images = fs
				.readdirSync(path.join(projectsDir, folder))
				.filter((file) => file.endsWith('.jpg'))
			return {
				name: folder,
				description: JSON.parse(fs.readFileSync(descriptionPath)),
				images,
			}
		})

		res.json(projects)
	})
})

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`)
})
