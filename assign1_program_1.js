function max(no1, no2, no3) {
    var no = no1 > no2 ? (no1 > no3 ? 'no1: ' + no1 : 'no3: ' + no3) : (no2 > no1 ? 'no2 ' + no2 : 'no3' + no3);
    return no;
}
console.log(max(23, 89, 6));
