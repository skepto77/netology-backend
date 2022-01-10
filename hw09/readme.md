### Задание 1

docker pull busybox

```
Using default tag: latest
latest: Pulling from library/busybox
Digest: sha256:5acba83a746c7608ed544dc1533b87c737a0b0fb730301639a0179f9344b1678
Status: Image is up to date for busybox:latest
docker.io/library/busybox:latest
```

docker run -it busybox ping -c 7 netology.ru

```
PING netology.ru (104.22.40.171): 56 data bytes
64 bytes from 104.22.40.171: seq=0 ttl=37 time=3.477 ms
64 bytes from 104.22.40.171: seq=1 ttl=37 time=2.332 ms
64 bytes from 104.22.40.171: seq=2 ttl=37 time=4.443 ms
64 bytes from 104.22.40.171: seq=3 ttl=37 time=3.270 ms
64 bytes from 104.22.40.171: seq=4 ttl=37 time=3.281 ms
64 bytes from 104.22.40.171: seq=5 ttl=37 time=3.116 ms
64 bytes from 104.22.40.171: seq=6 ttl=37 time=3.345 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 2.332/3.323/4.443 ms
```

docker ps -a

```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES
3526e622b9d6   busybox   "ping -c 7 netology.…"   2 minutes ago   Exited (0) 2 minutes ago             pinger
```

docker logs pinger

```
PING netology.ru (104.22.40.171): 56 data bytes
64 bytes from 104.22.40.171: seq=0 ttl=37 time=3.477 ms
64 bytes from 104.22.40.171: seq=1 ttl=37 time=2.332 ms
64 bytes from 104.22.40.171: seq=2 ttl=37 time=4.443 ms
64 bytes from 104.22.40.171: seq=3 ttl=37 time=3.270 ms
64 bytes from 104.22.40.171: seq=4 ttl=37 time=3.281 ms
64 bytes from 104.22.40.171: seq=5 ttl=37 time=3.116 ms
64 bytes from 104.22.40.171: seq=6 ttl=37 time=3.345 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 2.332/3.323/4.443 ms
```

docker start pinger

```
pinger
```

docker ps -a

```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES
3526e622b9d6   busybox   "ping -c 7 netology.…"   4 minutes ago   Exited (0) 9 seconds ago             pinger
```

docker logs pinger

```
PING netology.ru (104.22.40.171): 56 data bytes
64 bytes from 104.22.40.171: seq=0 ttl=37 time=3.477 ms
64 bytes from 104.22.40.171: seq=1 ttl=37 time=2.332 ms
64 bytes from 104.22.40.171: seq=2 ttl=37 time=4.443 ms
64 bytes from 104.22.40.171: seq=3 ttl=37 time=3.270 ms
64 bytes from 104.22.40.171: seq=4 ttl=37 time=3.281 ms
64 bytes from 104.22.40.171: seq=5 ttl=37 time=3.116 ms
64 bytes from 104.22.40.171: seq=6 ttl=37 time=3.345 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 2.332/3.323/4.443 ms
PING netology.ru (104.22.40.171): 56 data bytes
64 bytes from 104.22.40.171: seq=0 ttl=37 time=2.494 ms
64 bytes from 104.22.40.171: seq=1 ttl=37 time=3.445 ms
64 bytes from 104.22.40.171: seq=2 ttl=37 time=3.221 ms
64 bytes from 104.22.40.171: seq=3 ttl=37 time=3.147 ms
64 bytes from 104.22.40.171: seq=4 ttl=37 time=2.987 ms
64 bytes from 104.22.40.171: seq=5 ttl=37 time=2.976 ms
64 bytes from 104.22.40.171: seq=6 ttl=37 time=2.858 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 2.494/3.018/3.445 ms
```

```
2  раза запущен и 14 запросов
```

docker rm pinger

```
pinger
```

docker rmi busybox

```
Untagged: busybox:latest
Untagged: busybox@sha256:5acba83a746c7608ed544dc1533b87c737a0b0fb730301639a0179f9344b1678
Deleted: sha256:71a676dd070f4b701c3272e566d84951362f1326ea07d5bbad119d1c4f6b3d02
Deleted: sha256:468ad4d964cd60bde6271569ed2459b3cd52ee8a5a621f3f5fae86efa37e390c
```

docker ps

docker images

```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

REPOSITORY                    TAG             IMAGE ID       CREATED        SIZE
project_api                   latest          9d3d479c26b7   2 months ago   136MB
project_client                latest          1028c25212fe   2 months ago   679MB
nginx                         latest          79dc2443d218   3 months ago   126MB
nginx                         alpine          2e723ef9408f   4 months ago   21.6MB
nginx                         1.20-alpine     24b447176a0a   4 months ago   21.4MB
nginx                         stable-alpine   24b447176a0a   4 months ago   21.4MB
mongo                         latest          31299b956c79   4 months ago   642MB
docker101tutorial             latest          0478036ef587   4 months ago   26.9MB
skeptohub/docker101tutorial   latest          0478036ef587   4 months ago   26.9MB
alpine/git                    latest          cfd9fa28a348   7 months ago   25.2MB
```

### Задание 2

docker pull node:15.14-alpine

```
15.14-alpine: Pulling from library/node
535256e01bcb: Pull complete
1678aeba6f66: Pull complete
52b7b9423989: Pull complete
c95c8c3e629d: Pull complete
Digest: sha256:6edd37368174c15d4cc59395ca2643be8e2a1c9846714bc92c5f5c5a92fb8929
Status: Downloaded newer image for node:15.14-alpine
docker.io/library/node:15.14-alpine
```

docker run -it --env NAME=Ilya --env SURNAME=Grachev --name mynode node:15.14-alpine

```
Welcome to Node.js v15.14.0.
Type ".help" for more information.

> console.log(`Привет, ${process.env.NAME} ${process.env.SURNAME}!`)
Привет, Ilya Grachev!
```

docker stop mynode

docker rm mynode

docker rmi node:15.14-alpine

```
Untagged: node:15.14-alpine
Untagged: node@sha256:6edd37368174c15d4cc59395ca2643be8e2a1c9846714bc92c5f5c5a92fb8929
Deleted: sha256:5d00066eba2da9a43802247a80dea5c465b96a1110736eedd96a864c465da11c
Deleted: sha256:a6fc2fbcf7ca142cb2bfd291c3aea873028708cebf3c761ab1226877955bfc4e
Deleted: sha256:fe9c4e1e099212b96e63fe3d54c77743e2099647c11466af7027a0b349f7afc1
Deleted: sha256:d48a660909c862048dd06d13f31623c42f7b0aa2421bf0ae5a51f1b9892602cf
Deleted: sha256:f645bd8028b1c79524b4e3485daa20ca8f3d2f105bd7c0e4da70230e487c7fde
```

### Задание 3

docker pull node:15.14-alpine

```
15.14-alpine: Pulling from library/node
535256e01bcb: Pull complete
1678aeba6f66: Pull complete
52b7b9423989: Pull complete
c95c8c3e629d: Pull complete
Digest: sha256:6edd37368174c15d4cc59395ca2643be8e2a1c9846714bc92c5f5c5a92fb8929
Status: Downloaded newer image for node:15.14-alpine
docker.io/library/node:15.14-alpine

```

docker run -d -t --volume '/tmp':'/var/first/data' --name first_node node:15.14-alpine

```
b5da767984f60417eb1aa4de5792ab9ff34de56d0dabdec18098ed92644fb87b
```

docker run -d -t --volume '/tmp':'/var/second/data' --name second_node node:15.14-alpine

```
1fb3729f4c1fb746bcaca4722eb2b1392fc5a13b243686f5a8a00f8348adb028
```

docker exec -d first_node touch /var/first/data/tmp.txt

docker exec -i -t second_node ls /var/second/data

```
000000001804515f drivefs_ipc.501_shell
0000000018051295 oobelib.log
0000000018054e0e powerlog
000000001805cd44 tmp.txt
0000000018063e77 tmp3.txt
```

docker stop first_node second_node

```
first_node
second_node
```

docker rm first_node second_node

docker rmi node:15.14-alpine

docker ps -a

docker images

```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

REPOSITORY                    TAG             IMAGE ID       CREATED        SIZE
project_api                   latest          9d3d479c26b7   2 months ago   136MB
project_client                latest          1028c25212fe   2 months ago   679MB
nginx                         latest          79dc2443d218   3 months ago   126MB
nginx                         alpine          2e723ef9408f   4 months ago   21.6MB
nginx                         1.20-alpine     24b447176a0a   4 months ago   21.4MB
nginx                         stable-alpine   24b447176a0a   4 months ago   21.4MB
mongo                         latest          31299b956c79   4 months ago   642MB
docker101tutorial             latest          0478036ef587   4 months ago   26.9MB
skeptohub/docker101tutorial   latest          0478036ef587   4 months ago   26.9MB
alpine/git                    latest          cfd9fa28a348   7 months ago   25.2MB

```

```

```
