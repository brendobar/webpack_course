import styles from './App.module.scss'
import map from './assets/map.png'
import Icon from './assets/icon.svg'

const App = () => {
    return (
        <div className='mainContainer'>
            <img src={map} alt="App Image" width={400} height={245}/>
            <Icon style={{color: 'green'}} width={100} height={100} />
            <p className={styles.text}>hello word {TEST_ENV}</p>
        </div>
    );
};

export default App;