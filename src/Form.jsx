import React, { useEffect, useState } from 'react';

const Form = () => {

    const data = { name: '', email: '', password: '' };

    const [inputData, setInputDate] = useState(data);
    const [flag, setFlag] = useState(false);

    // useEffect(() => {
    //     console.log('Registered');
    // }, [flag])

    function handleData(e) {
        setInputDate({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All fields are Mandatory");
        } else {
            setFlag(true);
        }
    }

    return (
        <>
            <pre>{(flag) ? <h2>Hello {inputData.name}, Your have Register successfully</h2> : ""}</pre>
            <div className="card">
                <form method='post' onSubmit={handleSubmit}>
                    <div>
                        <h3>Registration Form</h3>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="name" for="name">Name</label>
                        <input name='name' type="text" placeholder='Enter Your Name' id='name' value={inputData.name} onChange={handleData} />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="name" for="email">Email</label>
                        <input name='email' type="text" placeholder='Enter Your Email' id='email' value={inputData.email} onChange={handleData} />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="name" for="password">Password</label>
                        <input name='password' type="text" placeholder='Enter Your Password' id='password' value={inputData.password} onChange={handleData} />
                    </div>
                    <div className='mt-3'>
                        <button type='submit'>Register Now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
