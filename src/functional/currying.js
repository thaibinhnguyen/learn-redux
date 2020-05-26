function curry(a) {
    return function(b){
        return a+ b;
    }
}
(curry(3))(4)