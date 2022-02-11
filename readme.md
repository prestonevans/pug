1 docker build -t views:latest .
2 docker run -d --rm --name test -p 3000:3000 views:latest
3 Enter http://localhost:3000/ into browser