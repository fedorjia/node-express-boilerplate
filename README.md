## 添加user

```
curl -X POST -d 'username=jiakg&avatar=/static/jiakg.jpg' 'http://localhost:3000/user'
```

## user详情

```
curl -X GET 'http://localhost:3000/user/:uid' | python -m json.tool
```

## 添加address
```
curl -X POST -d 'name=jiakg&mobile=13488888888&address=beijing-chaoyang' 'http://localhost:3000/user/address?uid=5a1e0f0cdc949a0c4ec5065c'
```

## user 列表
```
curl -X GET 'http://localhost:3000/user'
```