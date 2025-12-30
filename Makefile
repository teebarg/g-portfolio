APP_NAME := "portfolio"

startTest:
	@echo "Starting docker environment..."
	docker compose -p $(APP_NAME) up --build

updateTest:
	docker compose -p $(APP_NAME) up --build -d

stopTest:
	@COMPOSE_PROJECT_NAME=$(APP_NAME) docker compose down


# Utilities
lint:
	@echo "Running linters for project..."
	npm run lint:fix

# Using Terminal
dev:
	@echo "Running development in terminal..."
	npm run start
