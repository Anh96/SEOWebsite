exports.config = {
    spects: [
        './js/test.js'
    ],
    runner: "local",
    host:'localhost' ,
    port: 9515,
    path:'./',
    capabilities:[
        {
            browser: "chrome"
        }
    ],
    framework: "mocha",
    mochaOpts:{
        ui :"bdd",
        timeout: 50000
    },
    logLevel: "verbose"

}