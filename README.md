# @toriyama/masaba

ちょっと確認したいとき用サーバー(中身は fastify)

## Installation

```bash
npm install -g @toriyama/masaba
```

## Usage

実行例

### オプション無しで起動

```bash
torichan@torichan-ubuntu:~/$ masaba

{"level":30,"time":1650464194371,"pid":83317,"hostname":"torichan-ubuntu","msg":"Server listening at http://127.0.0.1:8080"}
{"level":30,"time":1650464194371,"pid":83317,"hostname":"torichan-ubuntu","msg":"server listening on http://127.0.0.1:8080"}
{"level":30,"time":1650464206557,"pid":83317,"hostname":"torichan-ubuntu","reqId":"req-1","req":{"method":"GET","url":"/","hostname":"localhost:8080","remoteAddress":"127.0.0.1","remotePort":44616},"msg":"incoming request"}
{"level":30,"time":1650464206582,"pid":83317,"hostname":"torichan-ubuntu","reqId":"req-1","res":{"statusCode":200},"responseTime":23.840847998857498,"msg":"request completed"}
```

### オプションを指定して起動

```bash
torichan@torichan-ubuntu:~/$ masaba -p 8989 -d ./public
```

## 備考

WebAssembly(.wasm)の動作確認に便利、らしい？
