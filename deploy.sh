docker build -t aziddouch/multi-client:latest -t aziddouch/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t aziddouch/multi-server:latest -t aziddouch/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t aziddouch/multi-worker:latest -t aziddouch/multi-worker:$SHA -f ./worker/Dockerfile ./worker
docker push aziddouch/multi-client:latest
docker push aziddouch/multi-server:latest
docker push aziddouch/multi-worker:latest

docker push aziddouch/multi-client:$SHA
docker push aziddouch/multi-server:$SHA
docker push aziddouch/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=aziddouch/multi-server:$SHA
kubectl set image deployments/client-deployment client=aziddouch/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=aziddouch/multi-worker:$SHA