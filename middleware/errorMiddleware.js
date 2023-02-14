const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
  
    res.status(statusCode)

    const response = { message: err.message }

    if (process.env.NODE_ENV === 'production'){
      res.json(response)
    } else {
      res.json(Object.assign({}, response, {stack: err.stack}))
    }
    
  }
  
  module.exports = { errorHandler }
  