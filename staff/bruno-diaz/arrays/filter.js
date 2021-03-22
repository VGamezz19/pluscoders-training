function filter(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')
    var result = []

    for (var i = 0; i < array.length; i++) {
        if (callback(array[i]))
            result[result.length] = array[i]
    }

    return result
}