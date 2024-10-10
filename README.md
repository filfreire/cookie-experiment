# cookie-experiment

nginx experiment alter set-cookie domain

## Purpose

When using reverse proxy, we might want to change the domain of a set-cookie from one service "mid-flight" before getting the response back.

This is an example implementation on how it can be done using nginx [proxy_cookie_domain](http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_domain).

## Pre-Setup

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Run:
```bash
sudo echo "127.0.0.1 cookie-setter.lan" | sudo tee -a /etc/hosts
```

## Build and Run

Run:
```bash
# spins up nginx and cookie-setter example service
docker compose up
```

Test that `Domain` for `Set-Cookie` is a different from `cookie-setter.lan`:
```bash
curl -I cookie-setter.lan

## should return
# (...)
Set-Cookie: mycookie=cookie_value; Max-Age=600; Domain=another-domain.lan; Path=/; Expires=Thu, 10 Oct 2024 17:36:02 GMT
```
