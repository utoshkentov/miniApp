import React, {useState} from "react";
import {connect} from 'react-redux';
import './ItemAdd.css';
import {AddItem} from "../../redux/ItemAdd/itemAddActions";

const ItemAdd = ({items, AddItem}) => {
    const [item, setItem] = useState('');
    const [alert, setAlert] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.length > 0) {
            AddItem(item);
            setItem('');
        } else {
            setAlert(true);
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    };

    return (
        <div className='container'>
            <p className='text-secondary'>Item to buy: </p>
            <form onSubmit={handleSubmit}>
                <input placeholder='Add Item' value={item} onChange={e => setItem(e.target.value)} type="text"
                       className='form-control'/>
                {alert && <div className='alert alert-danger'>You have to write!!!</div>}
                <button onClick={handleSubmit} className='btn w-100 mt-2 btn-primary text-center'>Add</button>
            </form>

            <ul className='list-group d-flex flex-column mt-5'>
                {items.length > 0 ? items.map((item, id) => {
                    return (
                        <li key={id} className=' mt-1 list-group-item'>{item}</li>
                    )
                }) : (
                    <li className='list-group-item mt-1  text-center'>There is not item yet</li>
                )}
            </ul>
        </div>
    )
};

const mapState = state => {
    return {
        items: state.items.items
    }
}

export default connect(mapState, {AddItem})(ItemAdd)