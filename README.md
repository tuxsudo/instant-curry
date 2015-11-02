# Instant Curry

Lightweight Function Currying


```
import curry from 'instant-curry';

let lazyAdd = curry( (a, b, c, d) => a+b+c+d );


lazyAdd(1, 2)(3)(4); // 10

```

