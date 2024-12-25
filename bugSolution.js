```javascript
const pipeline = [
  {
    $addFields: {
      parsedPrice: {
        $toDouble: '$price'
      }
    }
  },
  {
    $match: {
      parsedPrice: { $gt: 100 }
    }
  },
  {
    $project: {
      _id: 1,
      price: 1,
      parsedPrice: 0
    }
  }
];

db.collection.aggregate(pipeline);
```