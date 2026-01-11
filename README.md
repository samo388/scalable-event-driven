# Scalable Event-Driven Log Service

This project is a simple **event-driven backend service** built using **Node.js, Kafka, and MongoDB**.
It demonstrates how user activity logs can be processed asynchronously using a message broker and stored for later querying.

---

## Architecture Overview

1. A client sends a log through a REST API.
2. The API publishes the log to a Kafka topic.
3. A Kafka consumer processes the event in the background.
4. The processed log is stored in MongoDB.
5. Logs can be retrieved using a REST endpoint.
   This approach keeps log ingestion decoupled from log processing.

---

## Tech Stack

- Node.js (Express)
- Apache Kafka (KafkaJS)
- MongoDB (Mongoose)
- Docker & Docker Compose
- Kubernetes (Minikube)

---

## Project Structure (DDD)

```
src/
 ├── domain/            # Business logic
 ├── infrastructure/    # Kafka & MongoDB
 ├── application/       # Controllers
 ├── app.js
 └── server.js
```

---

## Run (Docker)

```bash
docker-compose up --build
```

This will start:

- MongoDB
- Zookeeper
- Kafka
- Node.js service

---

## API Endpoints

### POST /log

Publishes a user activity log to Kafka.

```json
{
  "userId": "101",
  "action": "LOGIN",
  "timestamp": "2026-01-11T10:25:00Z"
}
```

---

### GET /logs

Fetches processed logs with pagination.

http
GET /logs?page=1&limit=10

---

## Kubernetes (Optional)

```bash
minikube start
kubectl apply -f k8s/
minikube service log-service
```

---

Notes

- Kafka is used for asynchronous processing.
- MongoDB stores processed logs with indexing.
- The project prioritizes clarity and simplicity.

---
