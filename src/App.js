import React, { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./components/Home";
import { Layout, Menu, Button } from "antd";
import { ACTIVE_CHAIN, APP_NAME } from "./util/constants";
import Sign from "./components/Sign";
import logo from "./assets/logo.png";

import "./App.css";
import CreateRequest from "./components/CreateRequest";
import { getExplorerUrl, shortAddress, xdcAddress } from "./util";

const { Header, Content, Footer } = Layout;

function App() {
  const [account, setAccount] = useState();
  const [loading ,setLoading] = useState(false);

  const login = async () => {
    setLoading(true)
    const e = window.ethereum
    if (!e) {
      alert('Metamask must be connected to use Accord')
      return
    }
    try {
      const accs = await e.request({ method: 'eth_requestAccounts' });
      console.log('accounts', accs)
      setAccount(accs[0])
    } catch (e) {

    } finally {
      setLoading(false)
    }
  }

  const checkConnected = async () => {
    const e = window.ethereum
    if (!e) {
      return
    }
    const connected = e.isConnected()
    console.log('connected', connected)
    if (connected) {
      await login()
    }
  }

  useEffect(() => {
    checkConnected()
  }, [])

  const navigate = useNavigate();
  const path = window.location.pathname;

  const isSignature = path.startsWith("/sign");

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          {/* <div className="logo" /> */}
          <Menu
            // theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[]}
          >
            <Menu.Item key={0}>
              <img
                src={logo}
                className="header-logo pointer"
                onClick={() => navigate("/")}
              />
            </Menu.Item>

         
            {!account && <span>
              <Button type="primary" onClick={login}  loading={loading} disabled={loading}>Login with Metamask</Button>
            </span> }
            {account && <span>
               Product/Service provider: <a href={getExplorerUrl(xdcAddress(account))} target="_blank">{shortAddress(xdcAddress(account))}</a></span>}
   {!isSignature && (
              <>
                <Menu.Item key={1} onClick={() => navigate("/create")}>
                  Create Xcrows request
                </Menu.Item>
              </>
            )}
              <Menu.Item>
              <b></b>
              <b></b>
              <b></b>
              <b></b>
              </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateRequest account={account}/>} />
              <Route path="/sign/:signId" element={<Sign account={account} />} />
              
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {APP_NAME} ©2023 - Dackers
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
