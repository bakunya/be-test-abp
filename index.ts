import fastify from 'fastify'
import activityRoutes from './src/routes/activity'
import todoRoutes from './src/routes/todo'

const server = fastify()

todoRoutes(server)
activityRoutes(server)

server.listen({ port: 3030, host: '0.0.0.0' }, (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`Server listening at ${address}`)
})