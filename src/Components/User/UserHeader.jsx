import React from 'react'
import UserHeadNav from './UserHeaderNav';
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
    const [title, setTitle] = React.useState('')
    const location = useLocation();

    React.useEffect(() => {
        const {pathname} = location;
        switch(pathname) {
            case '/conta/postar':
                setTitle('Poste sua foto')
                break;
            case '/conta/estatisticas':
                setTitle('Estatisticas')
                break
            default:
                setTitle('Minha Conta')
        }
        if('/conta/estatiscas' === location.pathname) setTitle('Estatisticas')

    }, [location])

    return(
        <header className={`${styles.header} container`}>
            <h1 className="title">{title}</h1>
            <UserHeadNav />
        </header>
    )

}

export default UserHeader;