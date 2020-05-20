let x = [ 'a', '0', 'b', '1', 'c', '2', 'd', '3', 'e', '4' ];
console.log(x);

let y = x.reverse();
console.log(y);

let a = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let b = [];
let c = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        b.push(a[i]);
        
    }else{
        c.push(a[i]);
    }
}
let d = b.concat(c);
console.log(d);