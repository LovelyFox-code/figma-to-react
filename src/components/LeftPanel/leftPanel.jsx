import React from 'react';

function LeftPanel() {
    return (
        <div >
            
            <ul className="menu list-group list-group-flush">
                <li className="list-group-item">Ринковий скоринг</li>
                <li className="list-group-item">Експрес-аналіз</li>
                <li className="list-group-item">Анкета</li>
                <li className="list-group-item">Зв’язки</li>
                <li className="list-group-item">Податкова</li>
                <li className="list-group-item">Майно</li>
                <li className="list-group-item">Суди</li>
                <li className="list-group-item">Фінанси</li>
                <li className="list-group-item">Персонал</li>
                <li className="list-group-item">ЗЕД</li>
                <li className="list-group-item">Тендери</li>
                <li className="list-group-item">Ліцензії</li>
                <li className="list-group-item">ТМ, Патенти</li>
                <li className="list-group-item">Історія змін</li>
                <li className="list-group-item">Перевірки</li>
            </ul>
            <ul className="menu list-group list-group-flush">
                <li className="list-group-item">Події | моніторинг</li>
                <li className="list-group-item">Контроль майна</li>
                <li className="list-group-item">Безпека 24/7</li>
                <li className="list-group-item" style={{borderWidth: '0 0 1px'}} >Мої списки</li>
                <li className="list-group-item">Аналіз ринків</li>
                <li className="list-group-item small grey minus-margin">Business intelligence</li>
                <li className="list-group-item">Аудит існуючої бази</li>
                <li className="list-group-item small grey minus-margin" style={{borderWidth: '0 0 1px'}}>Груповий звіт списку
                    СГД</li>
                <li className="list-group-item">Тарифи</li>

            </ul>
        </div>

       
    )
}

export default LeftPanel;