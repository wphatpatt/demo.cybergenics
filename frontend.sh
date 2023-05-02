npm install && npm run build
#cd server && rm -rf public && mkdir public && cd ..
#mv dist/* server/public/
#cp entrypoint.sh server/entrypoint.sh && cp .env.staging.local server/.env.staging.local
docker build -t cybergenics:latest .
