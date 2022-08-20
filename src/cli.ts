#!/usr/bin/env node

import { parse } from "ts-command-line-args"
import { MackerelArgs, Mackrel } from './main'

const args = parse<MackerelArgs>(
	{
		rootDir: {
			type: String,
			alias: "d",
			optional: true,
			description: "ルートディレクトリ",
			defaultValue: "./"
		},
		port: {
			type: Number,
			alias: "p",
			optional: true,
			description: "ポート番号",
			defaultValue: 8080
		},
		help: {
			type: Boolean,
			optional: true,
			alias: "h",
			description: "ヘルプ"
		}
	},
	{
		helpArg: "help",
		headerContentSections: [{
			header: "masaba🐟",
			content: "マサバのヘルプです"
		}],
		footerContentSections: [{
			header: "For more help",
			content: "https://github.com/yuukitoriyama/masaba"
		}]
	}
)

new Mackrel(args)