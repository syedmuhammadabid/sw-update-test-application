import React, { useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useServiceWorker } from './useServiceWorker';

function App() {
  const { waitingWorker, showReload, reloadPage } = useServiceWorker();

  // decides when to show the toast
  useEffect(() => {
    if (showReload && waitingWorker) {
      toast((
        <div>
          A new version of this page is available
          <button onClick={() => reloadPage()}>REFRESH</button>
        </div>
      ), {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // closeToast();
      toast.dismiss();
    }
  }, [waitingWorker, showReload, reloadPage]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SW Update Test Application</h1>
        <p>App Version: v{localStorage.getItem("AppVersion")}</p>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
