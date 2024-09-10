# Generate implementation from proto file
gen-go:
	protoc --go_out=./go --go-grpc_out=./go ./proto/*.proto

gen-node:
	npx grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./node \
  --grpc_out=./node \
  --plugin=protoc-gen-grpc=./node_modules/grpc-tools/bin/grpc_node_plugin \
  ./proto/*.proto