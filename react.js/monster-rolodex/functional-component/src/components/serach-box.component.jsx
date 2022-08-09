const SearchBox= ({ className, placeHolder, changeHandler }) => {
    return (
        <input type="text" 
            className={className}  
            placeholder={placeHolder} 
            onChange={changeHandler} />
    )
}

export default SearchBox;
