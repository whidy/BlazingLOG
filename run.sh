#! /bin/bash
docker run -d -p 5000:8080 \
  -e HASURA_GRAPHQL_DATABASE_URL=postgres://whidy@host.docker.internal:5432/WhidyWrites \
  -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
  hasura/graphql-engine:latest
