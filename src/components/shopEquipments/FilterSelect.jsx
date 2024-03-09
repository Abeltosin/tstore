import React, { useState } from 'react'
import Select from 'react-select'
import { Products } from '../assets/Products'

const options = [
    {value: 'chair', label: 'chair'},
    {value: 'jewellery', label: 'jewellery'},
    {value: 'phone', label: 'phone'},
    {value: 'sofa', label: 'sofa'},
    {value: 'watch', label: 'watch'},
    {value: 'headphone', label: 'headphone'}
]

const customStyles = {
    control: (provider) => ({
        ...provider,
        background: 'rgba(193, 40, 145, 0.8)',
        color: 'white',
        width: 250,
        marginLeft: 50
    }),
    option: (provider, state) => ({
        ...provider, 
        background: state.isSelected ? 'rgba(193, 40, 145, 0.8)' : 'white',
        color: state.isSelected? 'white' : 'black',
        '&:hover': {
            backgroundColor: 'rgba(193, 40, 145, 0.8)',
            color: 'white',
        } ,

    }),
    singlevalue: (provider) => (
        {
            ...provider,
            color: 'black'
        }
    )
}

const FilterSelect = ({setChanged}) => {
    // const defaultOption = options.find(option => option.value === 'phone')   
    const handleChange = (items) => {
        setChanged(Products.filter(item => item.category === items.value))
    }
  return (
    <div  style={{marginTop: '50px', marginBottom: 200, display: 'inline-block'}}>
      <Select 
      options={options}
      // defaultValue={options.find(option => option.value === 'phone')}
      defaultValue={{value: '', label : 'filter by category'}}
    // value={defaultOption}
      styles={customStyles}
      onChange={handleChange}
      />
    </div>
  )
}

export default FilterSelect
