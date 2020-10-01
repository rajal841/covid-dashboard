import React,{useEffect,useState} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountryName} from '../../api/index'
import cx from 'classnames';
const CountryPicker=(props)=>{
    const [fetchedCountries,setFetchedCountries]= useState([]);

    useEffect(()=>{
        const fetchCountries= async()=>{
            setFetchedCountries(await fetchCountryName());
        }
        fetchCountries();
    },[setFetchedCountries]);

    console.log(fetchedCountries);
    return(
        <div>
           <FormControl className={styles.formControl}>
               <NativeSelect  onChange={(e)=>{props.handleCountryChange(e.target.value)}} defaultValue="">
                   <option value="">Global</option>
                   {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option> )}
               </NativeSelect>
           </FormControl>
        </div>
    )
    }

    export default CountryPicker;