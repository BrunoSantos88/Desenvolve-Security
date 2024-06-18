# Injetion

* URL http://localhost:3000/page?id=1%27#/


Teste Maliciosos.

````
admin'--, OR 1=1, admin' OR '1'='1.
````

# Teste Ferramentas

1. SQLMap

```
sqlmap -u http://localhost:3000/page?id=1%27#/ --dbs

```

# Resultado

- SQLlite

