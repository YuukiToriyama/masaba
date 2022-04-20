# @toriyama/masaba

ちょっと確認したいとき用サーバー(中身は fastify)

## Installation

```bash
npm install -g @toriyama/masaba
```

## Usage

```bash
masaba [path] [port number]
```

実行例

```bash
torichan@torichan-ubuntu:~/$ masaba ./ 8989

{"level":30,"time":1650464194371,"pid":83317,"hostname":"torichan-ubuntu","msg":"Server listening at http://127.0.0.1:8989"}
{"level":30,"time":1650464194371,"pid":83317,"hostname":"torichan-ubuntu","msg":"server listening on http://127.0.0.1:8989"}
{"level":30,"time":1650464206557,"pid":83317,"hostname":"torichan-ubuntu","reqId":"req-1","req":{"method":"GET","url":"/","hostname":"localhost:8989","remoteAddress":"127.0.0.1","remotePort":44616},"msg":"incoming request"}
{"level":30,"time":1650464206582,"pid":83317,"hostname":"torichan-ubuntu","reqId":"req-1","res":{"statusCode":200},"responseTime":23.840847998857498,"msg":"request completed"}
```

## 備考

WebAssembly(.wasm)の動作確認に便利、らしい？
