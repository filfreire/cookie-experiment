docker-build:
	docker build -t cookie-setter .

docker-run:
	docker run -d --rm --name cookie-setter -p 5000:5000 cookie-setter