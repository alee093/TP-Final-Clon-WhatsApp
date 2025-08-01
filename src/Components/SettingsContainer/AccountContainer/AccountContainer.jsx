import React from 'react'
import './AccountContainer.css'

const AccountContainer = ({setAccount, account}) => {
    return (
        <>
            <header className='new-community-header' style={{display: account ? "flex" : "none"}}>
                <button className='new-community-back-button' onClick={() => setAccount(false)}>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="#aebbc2" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                </button>
                <h3 className='account-title'>Cuenta</h3>
            </header>
            <ul className='account-list'>
                <li className='account-list-item'>
                    <svg viewBox="0 0 24 24" height="26" width="26" preserveAspectRatio="xMidYMid meet" version="1.1"><path d="M12.027027,2 L4,5.56756757 L4,10.9189189 C4,15.8689189 7.42486486,20.4978378 12.027027,21.6216216 C16.6291892,20.4978378 20.0540541,15.8689189 20.0540541,10.9189189 L20.0540541,5.56756757 L12.027027,2 Z M12.027027,11.8018919 L18.2702703,11.8018919 C17.7975676,15.4764865 15.3448649,18.7497297 12.027027,19.7754054 L12.027027,11.8108108 L5.78378378,11.8108108 L5.78378378,6.72702703 L12.027027,3.95324324 L12.027027,11.8018919 Z" fill="#d0d7db" fillRule="nonzero"></path></svg>
                    Notificaciones de seguridad
                </li>
                <li className='account-list-item'>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.42L14.58 2.59C14.21 2.21 13.7 2 13.17 2H6ZM13 8V3.5L18.5 9H14C13.45 9 13 8.55 13 8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8ZM14 17C14 16.4477 13.5523 16 13 16H8C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H13C13.5523 18 14 17.5523 14 17Z" fill="#d0d7db"></path></svg>
                    Solicitar info. de mi cuenta
                </li>
                <a href="https://faq.whatsapp.com/2138577903196467/?cms_platform=android&lang=es" target='_blank'>
                    <li className='account-list-item'>
                        <svg viewBox="0 0 11 11" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1"><path d="M5,0 C7.76142375,0 10,2.23857625 10,5 C10,7.76142375 7.76142375,10 5,10 C2.23857625,10 0,7.76142375 0,5 C0,2.23857625 2.23857625,0 5,0 Z M4.97297297,4.11764706 C4.61473422,4.11764706 4.32432432,4.40805695 4.32432432,4.76629571 L4.32432432,4.76629571 L4.32432432,7.52305246 C4.32432432,7.88129122 4.61473422,8.17170111 4.97297297,8.17170111 C5.33121173,8.17170111 5.62162162,7.88129122 5.62162162,7.52305246 L5.62162162,7.52305246 L5.62162162,4.76629571 C5.62162162,4.40805695 5.33121173,4.11764706 4.97297297,4.11764706 Z M5,1.89189189 C4.77305624,1.89189189 4.59377335,1.96074818 4.46214597,2.09846281 C4.33051859,2.23617745 4.26470588,2.41159704 4.26470588,2.62472683 C4.26470588,2.84113555 4.33203152,3.01819457 4.46668482,3.1559092 C4.60133812,3.29362384 4.77910807,3.36248013 5,3.36248013 C5.22089193,3.36248013 5.39866188,3.29362384 5.53331518,3.1559092 C5.66796848,3.01819457 5.73529412,2.84113555 5.73529412,2.62472683 C5.73529412,2.41159704 5.66872495,2.23617745 5.5355846,2.09846281 C5.40244426,1.96074818 5.22391785,1.89189189 5,1.89189189 Z" fill="#d0d7db"></path></svg>
                        Cómo eliminar mi cuenta
                    </li>
                </a>
            </ul>
        </>
    )
}

export default AccountContainer
