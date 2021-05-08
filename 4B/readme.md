## Tes DumbWays

### Frontend Belum Selesai (:
<p>Jalankan perintah dibawah pada terminal, setelah itu buat database pada MySql dengan nama dumbways, lalu import file dumbways.sql</p>
```
npm install 

```

```
node app
```

### untuk mengambil seluruh data buku
```
GET
http://localhost:3000/api/v1/books
```

### untuk mengambil data buku berdasarkan id
```
GET
http://localhost:3000/api/v1/book/${id}
```

### untuk menghapus data buku berdasarkan id
```
DELETE
http://localhost:3000/api/v1/book/${id}
```

### untuk menambah data buku
```
POST
http://localhost:3000/api/v1/book/
```
| body        | type       |
|-------------|------------|
| name        | string     |
| stok        | int        |
| image       | file image |
| deskripsi   | string     |
| category_id | int        |


### untuk mengubah data buku berdasarkan id
```
PATCH
http://localhost:3000/api/v1/book/${id}
```
| body        | type       |
|-------------|------------|
| name        | string     |
| stok        | int        |
| image       | file image |
| deskripsi   | string     |
| category_id | int        |




### untuk mengambil seluruh data kategori
```
GET
http://localhost:3000/api/v1/categories
```


### untuk menghapus data kategori berdasarkan id
```
DELETE
http://localhost:3000/api/v1/categories/${id}
```

### untuk menambah data kategori
```
POST
http://localhost:3000/api/v1/categories/
```
| body        | type       |
|-------------|------------|
| name        | string     |

### untuk mengubah data kategori berdasarkan id
```
POST
http://localhost:3000/api/v1/categories/${id}
```
| body        | type       |
|-------------|------------|
| name        | string     |

