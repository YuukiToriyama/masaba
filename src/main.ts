import fastifyStatic, { ListOptionsHtmlFormat } from '@fastify/static';
import fastify, { FastifyInstance } from 'fastify';
import path from 'path';

export interface MackerelArgs {
	rootDir: string
	port: number
	help?: boolean
}

export class Mackrel {
	server: FastifyInstance

	constructor(args: MackerelArgs) {
		this.server = fastify({
			logger: true
		})
		this.registerDirectory(args.rootDir)
		this.startListening(args.port)
	}

	private registerDirectory = (rootDir: string) => {
		this.server.register(fastifyStatic, {
			root: path.join(process.env.PWD, rootDir),
			index: false,
			list: customFileListRenderer
		})
	}

	private startListening = (port: number) => {
		this.server.listen({ port: port }, (err, address) => {
			if (err) {
				throw err
			}
			this.server.log.info(`server listening on ${address}`);
		})
	}
}

const customFileListRenderer: ListOptionsHtmlFormat = {
	format: "html",
	render: (dirs, files) => {
		const dirsList = dirs.map(dir => {
			return `<li><a href="${dir.href}">${dir.name}</a></li>`;
		}).join("");
		const filesList = files.map(file => {
			return `<li><a href="${file.href}">${file.name}</a></li>`;
		}).join("");
		return `<html><head><meta charset="UTF-8"></head><body><h1>Directories</h1><ul>${dirsList}</ul><h1>Files</h1><ul>${filesList}</ul></body></html>`;
	}
}