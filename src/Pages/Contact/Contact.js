import React from 'react';

const Contact = () => {
    return (
        <div className='ml-16 py-12'>
            <h1 className='text-4xl py-8 font-bold'>About Us</h1>
            <p>Desh Career is Career based newsletter in Bengali language. This newsletter has published <br /> weekly. This is published in every Saturday at 12.00 PM. </p>
            <br />
           <div className='space-y-4'>
           <p>We focus on Career trend, news, smart job etc. </p> 
            
            <p>If you want to contact us: you can send an email to <span className='text-blue-600'>contact.deshcareer@gmail.com</span> <br />
            

If you want to meet with us, you can come to our office based on an appointment. <br />

Our Office address: <br />

House: 13/3,<br />

Road: 2,<br />

Shyamoly, Dhaka-1207 <br />

+8801880811047</p>
           </div>
        </div>
    );
};

export default Contact;