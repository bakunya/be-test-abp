docker build -t abp-final:1.0 . 

docker run --network="bridge" -e MYSQL_HOST=host.docker.internal -e MYSQL_USER=root -e MYSQL_PASSWORD= -e MYSQL_DBNAME=todo-api-abp -p 8090:3030 -d abp-final:1