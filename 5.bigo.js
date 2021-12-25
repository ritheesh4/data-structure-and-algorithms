const CompressBoxesTwice = (boxes, boxes2) => {
  boxes.forEach((boxes) => {
    console.log(boxes);
  });

  boxes2.forEach((boxes) => {
    console.log(boxes);
  });
};

//Here in this case we can not write the Big O as O(n).
//The reason is length of the both array inputs could be different.
//So big O would be O(a+b);
