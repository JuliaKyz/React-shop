import React, { useState, useEffect } from 'react';
import "./loadingSpinner.scss";
import ClipLoader from "react-spinners/ClipLoader";



const LoadingSpinner = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    return (
        <div className="spinner-container">
            {loading
                ?
                <ClipLoader />
                :
                <div className="loading-spinner"></div>}

            {/* {loading
                ? (<div className="loader-container">
                    <div className="spinner"></div></div>) : (<div className="main-content"></div>)

            } */}


        </div>
    );
}

export default LoadingSpinner;