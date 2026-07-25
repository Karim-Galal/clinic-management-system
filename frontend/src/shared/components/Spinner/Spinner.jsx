function Spinner({ className = "" }) {

    return (

        <span
            className={`size-4 rounded-full border-2 border-current border-t-transparent animate-spin ${className}`}
        />

    );

}

export default Spinner;