let transactions = require('../models/transaction')


module.exports = {


getTransactionsByProductId: {
    path: '/transactions/:productId',
    reqType: 'get',
    method(req, res, next) {
        let action = 'Get transaction by product'
        Transactions.find({ productID: req.params.productID })
            .then(transactions => {
                res.send(handleResponse(action, transactions))
            }).catch(error => {
                return next(handleResponse(action, null, error))
            })
    }
  }
}



  function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }