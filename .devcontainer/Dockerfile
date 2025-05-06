FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:dev-22

RUN apt-get update \
  && apt-get install -y git git-flow \
  && rm -rf /var/lib/apt/lists/*
