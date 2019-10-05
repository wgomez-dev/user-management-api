# User Managment Api

nodejs based rest api service to provide user and userTasks data management

## How to use

This api is AWS stored so it can accesed by custom amazon URL

Get Users:

```bash
curl -X GET \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/ \

```

Get User by Id:

```bash
curl -X GET \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/342 \
```

Create User:

```bash
curl -X POST \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/ \
  -H 'Content-Type: application/json' \
  -d '{
 "id":"123321",
 "name":"Martha"
}'
```

Amend User:

```bash
curl -X PUT \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/123321 \
  -H 'Content-Type: application/json' \
  -d '{
 "name":"Romina"
}'
```

Delete User:

```bash
curl -X DELETE \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/users/123321 \
  -H 'Content-Type: application/json' \
  -d '{
 "name":"Romina"
}'
```

Get UserTasks:

```bash
curl -X GET \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/userTasks \
  -H 'Content-Type: application/json' \

```

Get UserTasks by Id:

```bash
curl -X GET \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/userTasks/task-2 \
  -H 'Content-Type: application/json' \
```

Create UserTasks:

```bash
curl -X POST \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/userTasks \
  -H 'Content-Type: application/json' \
  -d '{
 "id":"task-3",
 "description":"Fred task for today",
 "state": "done",
 "user_id":"879"
}'
```

Amend UserTasks:

```bash
curl -X PUT \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/userTasks/task-3 \
  -H 'Content-Type: application/json' \
  -d '{
 "description":"Fred task for today",
 "state": "todo",
 "user_id":"879"
}'
```

Delete User:

```bash
curl -X DELETE \
  http://ec2-3-15-156-99.us-east-2.compute.amazonaws.com:3030/userTasks/task-3 \
  -H 'Content-Type: application/json' \
```



## Diagram
https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#G1gEjCQfjQHikvQ3iqYqAuWPTejwA6tWE7

## Some Considerations
This Service is hosted by EC2 service provided by amazon and the data storage by Firebase realtime database so it could be easily escalated, since it only manage two data entities with one microservice is enough, for future exercises it could be splited by entity API, the time wasn't enough this time to explore this approach.
