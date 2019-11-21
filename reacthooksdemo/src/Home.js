import React, {useState, useEffect} from 'react';

function Home() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！Home')
    })

    return (<h2>Home.com</h2>);
}

export default Home;