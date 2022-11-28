import React from 'react';

const Blogs = () => {
    return (
        <div className=' py-14 mx-9 md:mx-16 lg:mx-24 '>
            <div className=' bg-slate-50 rounded-2xl shadow-md py-10'>
                <h4 className=' font-[poppins] font-medium text-black text-2xl md:text-3xl lg:text-4xl p-4 '>What are the different ways to manage a state in a react application?</h4>
                <div className='p-4 font-[poppins] md:text-lg text-base text-[#666666] md:leading-8 mb-5 opacity-90'>
                    <p>The Four Kinds of React State to Manage</p>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server State</li>
                    <li>Url state</li>
                </div>
            </div>

            <div className=' bg-slate-50 rounded-2xl shadow-md py-10 my-9'>
                <h4 className=' font-[poppins] font-medium text-black text-2xl md:text-3xl lg:text-4xl p-4 '>How does prototypical inheritance work?</h4>
                <div className='p-4 font-[poppins] md:text-lg text-base text-[#666666] md:leading-8 mb-5 opacity-90'>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>

                </div>
            </div>

            <div className=' bg-slate-50 rounded-2xl shadow-md py-10 my-9'>
                <h4 className=' font-[poppins] font-medium text-black text-2xl md:text-3xl lg:text-4xl p-4 '> What is a unit test? Why should we write unit tests?</h4>
                <div className='p-4 font-[poppins] md:text-lg text-base text-[#666666] md:leading-8 mb-5 opacity-90'>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>

            <div className=' bg-slate-50 rounded-2xl shadow-md py-10 my-9'>
                <h4 className=' font-[poppins] font-medium text-black text-2xl md:text-3xl lg:text-4xl p-4 '>React vs. Angular vs. Vue?</h4>
                <div className='p-4 font-[poppins] md:text-lg text-base text-[#666666] md:leading-8 mb-5 opacity-90'>
                    <p>React provides higher customizability and hence is easier to learn than Angular or Vue. Further, React has an overlap with Angular and Vue with respect to their functionality like the use of components. Hence, the transition to React from either of the two is an easy option</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;