import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";

//INTERNAL  IMPORT
import {
  CHECK_WALLET_CONNECTED,
  CONNECT_WALLET,
  GET_BALANCE,
  CHECK_ACCOUNT_BALANCE,
  TOKEN_ICO_CONTRACT,
  ERC20_CONTRACT,
  ERC20,
  TOKEN_ADDRESS,
  addTokenToMetaMask,
} from "./constants";

export const TOKEN_ICO_Context = React.createContext();

export const TOKEN_ICO_Provider = ({ children }) => {
  const MUSIC_DAPP = "TOKEN ICO DAPP";
  const currency = "MATIC";
  const network = "Polygon Amoy";

  const [loader, setLoader] = useState(false);
  const [account, setAccount] = useState();
  const [count, setCount] = useState(0);

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  //--- TOKEN ICO
  const TOKEN_ICO = async () => {
    try {
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TOKEN_ICO_CONTRACT();
        const tokenAddress = await contract.tokenAddress();

        const toeknDetails = await contract.getTokenDetails();
        const contractOwner = await contract.owner();
        const soldTokens = await contract.soldTokens();

        const maticBal = await GET_BALANCE();

        const token = {
          tokenBal: ethers.utils.formatEther(toeknDetails.balance.toString()),
          name: toeknDetails.name,
          symbol: toeknDetails.symbol,
          supply: ethers.utils.formatEther(toeknDetails.supply.toString()),
          tokenPrice: ethers.utils.formatEther(
            toeknDetails.tokenPrice.toString()
          ),
          tokenAddr: toeknDetails.tokenAddr,
          maticBal: maticBal,
          address: address.toLowerCase(),
          owner: contractOwner.toLowerCase(),
          soldTokens: soldTokens.toNumber(),
        };
        setLoader(false);
        return token;
      }
    } catch (error) {
      setLoader(false);
      notifyError("Something went wrong, check your network");
      console.log(error);
    }
  };

  //BUY TOKEN
  const BUY_TOKEN = async (amount) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();

        const toeknDetails = await contract.getTokenDetails();
        const avalableToken = ethers.utils.formatEther(
          toeknDetails.balance.toString()
        );

        if (avalableToken > 1) {
          const price =
            ethers.utils.formatEther(toeknDetails.tokenPrice.toString()) *
            Number(amount);

          const payAmount = ethers.utils.parseUnits(price.toString(), "ether");

          console.log(payAmount);

          const transaction = await contract.buyToken(Number(amount), {
            value: payAmount.toString(),
            gasLimit: ethers.utils.hexlify(8000000),
          });

          await transaction.wait();
          setLoader(false);
          notifySuccess("Transaction successfully");
          console.log(transaction);
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later");
      setLoader(false);
    }
  };

  //OWNER TOKEN WITHDRAW
  const TOKEN_WITHDRAW = async () => {
    try {
      setLoader(true);

      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();

        const toeknDetails = await contract.getTokenDetails();
        const avalableToken = ethers.utils.formatEther(
          toeknDetails.balance.toString()
        );

        if (avalableToken > 1) {
          const transaction = await contract.withdrawAllTokens();

          await transaction.wait();
          console.log(transaction);
          setLoader(false);
          window.location.reload();
          return transaction;
        }
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      notifyError("error try again later");
    }
  };

  //OWNER UPDATE TOKEN
  const UPDATE_TOKEN = async (_address) => {
    try {
      setLoader(true);

      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();

        const transaction = await contract.updateToken(_address);

        await transaction.wait();
        console.log(transaction);
        setLoader(false);
        window.location.reload();
        return transaction;
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      notifyError("error try again later");
    }
  };

  //OWNER PRICE TOKEN
  const UPDATE_TOKEN_PRICE = async (price) => {
    try {
      setLoader(true);

      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const payAmount = ethers.utils.parseUnits(price.toString(), "ether");

        const transaction = await contract.updateTokenSalePrice(payAmount);

        await transaction.wait();
        console.log(transaction);
        setLoader(false);
        window.location.reload();
        return transaction;
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      notifyError("error try again later");
    }
  };

  ///TRANSFER TO OWNER
  const DONATE = async (AMOUNT) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();

        const payAmount = ethers.utils.parseUnits(AMOUNT.toString(), "ether");

        const transaction = await contract.transferToOwner(payAmount, {
          value: payAmount.toString(),
          gasLimit: ethers.utils.hexlify(8000000),
        });

        await transaction.wait();

        console.log(transaction);
        setLoader(false);
        window.location.reload();
        return transaction;
      }
    } catch (err) {
      console.log(err);
      setLoader(false);
      notifyError("Try again later Context");
    }
  };

  //TRANSFER ETHER
  const TRANSFER_ETHER = async (transfer) => {
    try {
      //DATA
      const { _receiver, _amount } = transfer;
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();

        const payAmount = ethers.utils.parseUnits(_amount.toString(), "ether");

        const transaction = await contract.transferEther(_receiver, payAmount, {
          value: payAmount.toString(),
          gasLimit: ethers.utils.hexlify(8000000),
        });

        await transaction.wait();
        setLoader(false);
        notifySuccess("Transaction successfully");
        console.log(transaction);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later");
      setLoader(false);
    }
  };

  //ERC20 TOKEN TRANSFER
  const TRANSFER_TOKEN = async (transfer) => {
    try {
      //DATA
      const { _tokenAddress, _sendTo, _amount } = transfer;

      setLoader(true);

      //GET USER ACCOUNT
      const account = await CHECK_WALLET_CONNECTED();
      if (account) {
        const TOKEN_CONTRACT = await ERC20_CONTRACT(_tokenAddress);
        const transferAmount = ethers.utils.parseUnits(
          _amount.toString(),
          "ether"
        );
        const transaction = await TOKEN_CONTRACT.transfer(
          _sendTo,
          transferAmount,
          {
            gasLimit: ethers.utils.hexlify(1000000),
          }
        );
        await transaction.wait();

        setLoader(false);
        notifySuccess("Liqudity add Successfully ");
        setCount(count + 1);
        window.location.reload();
      }
    } catch (error) {
      setLoader(false);
      notifyError("Something went wrong, try later");
      console.log(error);
    }
  };

  return (
    <TOKEN_ICO_Context.Provider
      value={{
        TOKEN_ICO,
        BUY_TOKEN,
        TRANSFER_ETHER,
        DONATE,
        UPDATE_TOKEN,
        UPDATE_TOKEN_PRICE,
        TOKEN_WITHDRAW,
        TRANSFER_TOKEN,
        CONNECT_WALLET,
        ERC20,
        CHECK_ACCOUNT_BALANCE,
        setAccount,
        setLoader,
        addTokenToMetaMask,
        TOKEN_ADDRESS,
        loader,
        account,
        currency,
      }}
    >
      {children}
    </TOKEN_ICO_Context.Provider>
  );
};
