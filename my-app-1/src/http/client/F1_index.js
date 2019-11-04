const axios = require('axios')
const envProcess = require('../../configs')

const client = axios.create({
    baseURL: `http://${envProcess.default.apiGateway.URL}`,
    headers: {
        'Authorization': `Bearer ${envProcess.default.apiGateway.KEY}`
    },
    timeout: 20000
})

if (process.env.NODE_ENV !== 'production') {
    require('axios-debug-log').addLogger(client)
}

client.interceptors.request.use((config) => {
    config.metadata = { startTime: new Date() }
    return config
}, (error) => {
    return Promise.reject(error)
})

// Intercept all responses
client.interceptors.response.use(
    (response) => {
        response.error = false
        return response
    },
    (error) => {
        if(error.code){
           if(error.code === 'ECONNABORTED'){
            error.status = 504
            console.log(error)
           }
        }else{
            console.log(error)
            error.status = error.response.status
        }
        
        if (error.status === 500) {
            console.log(error.response)
            error.data = error.response.data
        }else if(error.status === 504){
            console.log(error)
        }else{
            error.data = error.response.data
        }
        error.error = true
        return error
    }
)

module.exports = { client, axios }