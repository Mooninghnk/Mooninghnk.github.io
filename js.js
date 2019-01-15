
if(typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
    web3.eth.getAccounts(function (error, result) {
        document.getElementById('address').innerHTML = "My Ethereum Wallet Is = " + result[0];
        let account1 = result[0];
        web3.eth.getBalance(account1, function(error, result) {
           let balance = result.c[0];
           document.getElementById("balance").innerHTML = "My Balnce = " + balance;
        });
        web3.eth.getPrivate
        ethereum.enable();
    });
}
