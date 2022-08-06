export interface Directory {
	name: string
	href: string
}
export interface File {
	name: string
	href: string
}
export type FileListRenderer = { format: "json" } | { format: "html", render: (dirs: Directory[], files: File[]) => string }