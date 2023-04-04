exports.config = {
    spects: [
        './js/test.js'
    ],
    host:'localhost' ,
    port: 444,
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