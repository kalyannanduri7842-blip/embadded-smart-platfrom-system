.PHONY: all start dev test build clean help

all: test

help:
	@echo "SmartNest — Smart Home & IoT Management Platform"
	@echo "Commands:"
	@echo "  make start   - Start unified backend and frontend servers"
	@echo "  make dev     - Launch in development mode"
	@echo "  make test    - Run automated unit & integration test suites"
	@echo "  make health  - Execute platform health check"

start:
	node index.js

dev:
	node index.js

test:
	node --test tests/unit/*.test.js tests/integration/*.test.js

health:
	node index.js --health

build:
	npm run build --prefix frontend
