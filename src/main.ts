#!/usr/bin/env node
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { Directory, File, FileListRenderer } from './utils';

const ROOT_DIR = process.argv[2] || "./";
const PORT = process.argv[3] || "8080";

const server = fastify({
	logger: true
});

const customFileListRenderer: FileListRenderer = {
	format: "html",
	render: (dirs: Directory[], files: File[]): string => {
		const dirsList = dirs.map(dir => {
			return `<li><a href="${dir.href}">${dir.name}</a></li>`;
		}).join("");
		const filesList = files.map(file => {
			return `<li><a href="${file.href}">${file.name}</a></li>`;
		}).join("");
		return `<html><body><h1>Directories</h1><ul>${dirsList}</ul><h1>Files</h1><ul>${filesList}</ul></body></html>`;
	}
};

server.register(fastifyStatic, {
	root: path.join(process.env.PWD, ROOT_DIR),
	index: false,
	list: customFileListRenderer
});

server.listen(PORT, (err, address) => {
	if (err) {
		throw err
	}
	server.log.info(`server listening on ${address}`);
});