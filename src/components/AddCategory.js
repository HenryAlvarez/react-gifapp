import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue === ''){
            return null
        }
        setInputValue('')
        setCategories(cats => [inputValue, ...cats])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Ingrese nueva categoria' 
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
