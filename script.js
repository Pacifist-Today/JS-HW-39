"use strict";

// (function () {
//     let cache = new Map ()
//     let id = 1
//     function caching (data) {
//         if (cache.size <= 9) {
//             cache.set (id, data)
//             console.log(cache.size)
//         }   else if (cache.size >= 9) {
//             console.log(cache.delete(cache))
//             console.log(cache.set(id, data))
//         }
//         id++
//         // return cache.get(data)
//     }
//     let someFunc = function () {}
//     let obj = {}
//     let arr = []
//
//     caching(someFunc)
//     caching(obj)
//     let result2 = caching(someFunc)
//     let result3 = caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     caching(someFunc)
//     console.log(cache)
// })()

(function () {
    let cache = new Map ()
    let id = 1
    function caching (data) {
        if (!cache.has(data) && cache.size < 10) {
            cache.set (data, id)
        }   else if (cache.has(data) && cache.size < 10) {
            cache.set(id, `${data} is already written`)
        }   else {
            for (let key of cache) {
                console.log(key)
                if (key[1] === `${data} is already written` && !cache.has(data)) {
                    cache.delete(key)
                    cache.set(data, id)
                }   else {
                    cache.delete(key)
                    cache.set(id, `${data} is already written`)
                }
            }
        }
        id++
    }
    let someFunc = function () {}
    let obj = {}
    let arr = []

    caching(someFunc)
    caching(obj)
    let result2 = caching(someFunc)
    let result3 = caching(someFunc)
    caching(someFunc)
    caching(someFunc)
    caching(someFunc)
    caching(someFunc)
    caching(arr)
    caching(someFunc)
    caching(someFunc)
    // caching(arr)
    caching(someFunc)
    caching(arr)
    caching(someFunc)
    caching(someFunc)
    caching(someFunc)
    caching(someFunc)
    caching(someFunc)
    console.log(cache)
})()