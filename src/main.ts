#!/usr/bin/env node
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';

const ROOT_DIR = process.argv[2] || "./";
const PORT = process.argv[3] || "8080";

const server = fastify({
	logger: true
});

server.register(fastifyStatic, {
	root: path.join(process.env.PWD, ROOT_DIR),
	index: false,
	list: true,
});

server.listen(PORT, (err, address) => {
	if (err) {
		throw err
	}
	server.log.info(`server listening on ${address}`);
});