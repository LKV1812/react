async function start() {
    return await Promise.resolve('async is working');
}

start().then(console.log)

class Util {
    static id = 12
}
import('lodash').then(_ => {
    console.log('lodash', _)
})
console.log('Util id: ', Util.id)