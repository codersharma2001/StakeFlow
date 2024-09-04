

export const handleAccountChange = async(setState) => {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const selectedAccount = accounts[0];
  console.log("Selected Account : ", selectedAccount);
  setState(prevState => ({...prevState, selectedAccount}));
}

