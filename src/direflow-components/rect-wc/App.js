import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import withListLoading from './withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });


  function handleClick() {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });  }



  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((repos) => {
  //       setAppState({ loading: false, repos: repos });
  //     });
  // }, [setAppState]);

  
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
        <button onClick={handleClick}>click me</button>
      </div>
      <div className='repo-container'>
 
        <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      
      {appState.repos && appState.repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </li>
        );
      })}
    </ul>


      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}
export default App;