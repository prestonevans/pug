1. docker stack deploy -c docker-compose.yaml myapp-stack

2. docker service scale myapp-stack_mywebsite=7

3. docker service scale myapp-stack_mywebsite=2

4. docker stack rm myapp-stack