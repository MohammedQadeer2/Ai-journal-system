# System Architecture

## Overview

The system consists of three main components:

Frontend
React application where users write journal entries and view insights.

Backend
Node.js + Express API that handles journal storage, AI analysis, and insights generation.

Database
MongoDB stores journal entries and AI analysis results.

## Scaling to 100k Users

To scale the system:

- Deploy backend using containerization (Docker)
- Use a load balancer (NGINX)
- Horizontal scaling with multiple API instances
- Use managed databases like MongoDB Atlas
- Use caching layers such as Redis

## Reducing LLM Cost

Strategies include:

- Cache repeated journal analyses
- Use smaller LLM models when possible
- Store analysis results so the same entry is not analyzed again
- Batch requests when possible

## Caching Analysis

Use Redis to cache results.

Cache key:

journalTextHash → analysisResult

This prevents repeated LLM calls for the same text.

## Protecting Sensitive Journal Data

- Encrypt sensitive data at rest
- Use HTTPS for secure communication
- Implement authentication and authorization
- Limit access using role-based permissions
