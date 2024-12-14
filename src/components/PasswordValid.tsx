import * as React from 'react';
import validator from 'validator';

const PasswordValid = () => {
    const [errorMessage, setErrorMessage] = React.useState('');

    const Validate = (value:any) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1
            
        })) {
            setErrorMessage('Password is strong');
        } else {
            setErrorMessage('Password is weak');
        }
    };

    return (
        <div className='bg-slate-800'>
            <h1>password validator pal</h1>
            <input className='border-solid border-2 border-gray-600' type='password'
                    onChange={(e)=> Validate(e.target.value)}
                    ></input>
            {errorMessage === '' ? null :
                <span>
                    {errorMessage}
                </span>}
        </div>
    )
    
}


export default PasswordValid;