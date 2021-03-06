if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
      web3.eth.getAccounts(function(error, result) {
        document.getElementById("address").value =
          result[0];
        let account1 = result[0];
        web3.eth.getBalance(account1, function(error, result) {
          let balance = result.c[0];
          document.getElementById("balance").innerHTML = "Balance = " + balance;
        });
        ethereum.on("accountsChanged", function(accounts) {
          window.location.reload();
        });
      });
      function sendTo() {
        web3.eth.getAccounts(function(error, result) {
          let account = result[0];
          web3.eth.sendTransaction(
            {
              from: account,
              to: document.getElementById("toAdd").value,
              value: document.getElementById("much").value * 1e18,
            },
            function(error, hash) {
              document.getElementById("trxHash").innerHTML = "Transaction Hash = " + hash;
            });
        });
      }
      web3.eth.getAccounts(function(error, result) {
        web3.eth.getTransactionCount(result[0], (error, res) => {
          let count = res;
          setInterval(() => {
            web3.eth.getTransactionCount(result[0], function(error, result) {
              if (count !== result) {
                window.location.reload();
              }
            });
          }, 5000);
        });
      });
      function copyAddress() {
        let element = document.getElementById("address");
        element.select();
        document.execCommand("copy");
      }
      function createAcc() {
        web3.eth.accounts.create();
      }
}