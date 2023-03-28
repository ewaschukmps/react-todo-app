import React from 'react';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>TODO List</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
