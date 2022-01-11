### MongoDB

запрос(ы) для вставки данных минимум о двух книгах в коллекцию books

```
db.books.insertMany(
  [
    {title: "Title 1", description: "Descripion 1", authors: "Author 1"},
    {title: "Title 2", description: "Descripion 2", authors: "Author 2"},
  ]
)
```

запрос для поиска полей документов коллекции books по полю title

```
db.books.find({title: "Some Title"})
```

запрос для редактирования полей: description и authors коллекции books по \_id записи

```
db.books.updateOne(
  {_id: "e180f1aa-0b93-43bb-9f33-07b725db2686"},
  {$set: {description: "New Descripion", authors: "New Author"}}
)
```
