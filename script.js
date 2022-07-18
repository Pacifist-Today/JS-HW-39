"use strict";

(function () {

    let cache = new Set ()
    let rewriteArr = []

    function caching (arg, func) {
        let count = 1
        let temporaryArr = [arg, func, count]
        let item


        if (rewriteArr.length === 0) {
            temporaryArr[2]--
            // cache.add(temporaryArr)
            rewriteArr.push(temporaryArr)
        }
        for (item of rewriteArr) {
            if (item[0] === temporaryArr[0]) {
                item[2]++
                return
            }
        } if (item[0] !== temporaryArr[0] && rewriteArr.length < 10) {
            rewriteArr.push(temporaryArr)
            // cache.add(temporaryArr)
        }
        else if (rewriteArr.length < 11) {
            rewriteArr.shift()
            rewriteArr.push(temporaryArr)
            rewriteArr.flat(2)
            // cache.delete()
            // cache.add(temporaryArr)
        }
    }

    cache.add(rewriteArr)

    console.log(rewriteArr)

    console.log(cache)

    let someFunc = function () {}

    caching(1, someFunc)
    caching(1, someFunc)
    caching(2, someFunc)
    caching(2, someFunc)
    caching(2, someFunc)
    caching(3, someFunc)
    caching(4, someFunc)
    caching(4, someFunc)
    caching(5, someFunc)
    caching(6, someFunc)
    caching(6, someFunc)
    caching(6, someFunc)
    caching(7, someFunc)
    caching(7, someFunc)
    caching(7, someFunc)
    caching(7, someFunc)
    caching(8, someFunc)
    caching(8, someFunc)
    caching(9, someFunc)
    caching(10, someFunc)
    caching(10, someFunc)
    caching(10, someFunc)
    caching(11, someFunc)
    caching(12, someFunc)
    caching(13, someFunc)

    // let cache = new Map ()
    // let rewriteArr = []
    // function caching (arg, func) {
    //     let count = 1
    //     let temporaryArr = [arg, func, count]
    //     let item
    //
    //
    //     if (rewriteArr.length === 0) rewriteArr.push(temporaryArr)
    //     for (item of rewriteArr) {
    //         if (item[0] === temporaryArr[0]) {
    //             console.log(cache.get(arg))
    //             return
    //         }
    //     } if (item[0] !== temporaryArr[0] && rewriteArr.length < 10) rewriteArr.push(temporaryArr)
    //     else if (rewriteArr.length < 11) {
    //         rewriteArr.shift()
    //         rewriteArr.push(temporaryArr)
    //     }
    // }

    // let cache = new Map ()
    // let rewriteArr = []
    // function caching (arg, func) {
    //     let count = 1
    //     let temporaryArr = [arg, func, count]
    //     let item
    //
    //
    //     if (rewriteArr.length === 0) {
    //         cache.set(temporaryArr, count)
    //         rewriteArr.push(temporaryArr)
    //     }
    //     for (item of rewriteArr) {
    //         if (item[0] === temporaryArr[0]) {
    //             item[2]++
    //             return
    //         }
    //     } if (item[0] !== temporaryArr[0] && rewriteArr.length < 10) {
    //         rewriteArr.push(temporaryArr)
    //         cache.set(temporaryArr, count)
    //     }
    //     else if (rewriteArr.length < 11) {
    //         rewriteArr.shift()
    //         rewriteArr.push(temporaryArr)
    //         cache.delete()
    //         cache.set(temporaryArr, count)
    //     }
    // }
})()