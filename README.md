# Истории фермера Api

1. [Фермеры](#Фермеры)
2. [Продукты](#Продукты)
3. [Фильтры](#Фильтры)

URL: `https://fermerstory-api.herokuapp.com`

## Фермеры

**Список Фермеров**
```
/farmers
```

response:
```json
[
  {
    "id": "string",
    "name": "string",
    "about": "string",
    "photo": [
      {
        "id": "string",
        "name": "string",
        "hash": "string",
        "sha256": "string",
        "ext": "string",
        "mime": "string",
        "size": "string",
        "url": "string",
        "provider": "string",
        "public_id": "string",
        "related": "string"
      }
    ],
    "products": [ ]
  }
]
```

**Фермер**
```
/farmers/{id}
```

**Кол-во**
```
/farmers/count
```
Response:
```json
{
  "count": 0
}
```

## Продукты

**Список Продуктов**
```
/products
```

response:
```json
[
  {
    "id": "string",
    "name": "string",
    "price": 0,
    "description": "string",
    "photo": [
      {
        "id": "string",
        "name": "string",
        "hash": "string",
        "sha256": "string",
        "ext": "string",
        "mime": "string",
        "size": "string",
        "url": "string",
        "provider": "string",
        "public_id": "string",
        "related": "string"
      }
    ],
    "weight": 0,
    "calories": 0,
    "fat": 0,
    "carbohydrate": 0,
    "protein": 0,
    "stocked": true,
    "farmer": {
      "id": "string",
      "name": "string",
      "photo": [
        "string"
      ],
      "about": "string",
      "products": [
        "string"
      ]
    }
  }
]
```

**Продукт**
```
/products/{id}
```

**Кол-во**
```
/products/count
```
Response:
```json
{
  "count": 0
}
```

## Фильтры

Not suffix or eq: Equals

- `ne`: Not equals
- `lt`: Lower than
- `gt`: Greater than
- `lte`: Lower than or equal to
- `gte`: Greater than or equal to
- `in`: Included in an array of values
- `nin`: Isn't included in an array of values
- `contains`: Contains
- `ncontains`: Doesn't contain
- `containss`: Contains case sensitive
- `ncontainss`: Doesn't contain case sensitive
- `null`: Is null/Is not null

## Примеры

Найти Капусту
`/products?name=Капуста` or  `/products?name_eq=Капуста`

Найти товар с ценой больше или равной 500

`/products?price_gte=500`

Найти несколько фермеров с id 5d336e1387a66b1710fe7faf, 5d336e1387a66b1710fe7fb0, 5d336e1387a66b1710fe7fb2

`/fermers?id_in=5d336e1387a66b1710fe7faf&id_in=5d336e1387a66b1710fe7fb0&id_in=5d336e1387a66b1710fe7fb2`
