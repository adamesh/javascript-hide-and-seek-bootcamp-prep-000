//- Define a function `getFirstSelector(selector)`, which accepts a selector and returns the
//first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

//- Define a function `nestedTarget()` that pulls a `.target` out of `#nested` (`#` is used for IDs
//in selectors — but you knew that because you [read the docs], right? :) ).
//(Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s.
//This method should work with arbitrary elements.)
function nestedTarget() {
  return document.querySelector('#nested div div div.target')
}

//- Define a function `increaseRankBy(n)` that increases the ranks in all of
//the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`]

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

/* Define a function `deepestChild()` that pulls out the most deeply nested child
from `div#grand-node`. (Remember, you can iterate over elements and call
`querySelector()` and `querySelectorAll()` on them. This is challenging to
implement correctly, but not beyond your ability!) */

function deepestChild(){
  let next = []
  var current = document.getElementById('grand-node')

  while (next) {
    if (current.children[0]){
      next.push(current);
      current = current.children[0];
    }
    else {
      break;
    }
  }
  
  return current
}
