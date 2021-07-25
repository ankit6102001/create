import React from 'react';

export const Contact = () => {
    return (
        <div id='contact'>
            <h1>BOOK YOUR TABLE</h1>
            <form>
                <input type='text' placeholder='full name'/>
                <input type='email' placeholder='Type your email'/>
                <textarea placeholder='Write here......'></textarea>
                <input type='submit' value='BOOK'/>
            </form>
            
        </div>
    )
}
export default Contact;
