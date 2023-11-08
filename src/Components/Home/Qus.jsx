import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Qus = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <section>
            <h1 className="lg:text-3xl text-xl text-center font-bold lg:my-10 my-5">Frequently Asked Questions</h1>
            <div data-aos="fade-right" className="flex justify-between flex-wrap my-5">
                <div className="lg:flex-1 my-auto">
                    <img className=" mx-auto rounded-xl w-3/4 border-2 border-blue-600" src="https://i.ibb.co/0QGSMb1/Qus1.png" alt="" />
                </div>
                <div data-aos="fade-left" className="lg:flex-1 my-auto mr-2">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title lg:text-xl text-lg font-medium">
                            What is ES6, and what is its significance in JavaScript development?
                        </div>
                        <div className="collapse-content bg-blue-500  text-white lg:p-5 p-2">
                            <p>ES6 (ECMAScript 2015) is a significant update to the JavaScript language that introduced many new features and improvements.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title lg:text-xl text-lg font-medium">
                            What is React, and why is it popular for building user interfaces?
                        </div>
                        <div className="collapse-content bg-blue-500 text-white lg:p-5 p-2">
                            <p>React is a JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title lg:text-xl text-lg font-medium">
                            What is Python, and why is it popular for programming?
                        </div>
                        <div className="collapse-content bg-blue-500 text-white lg:p-5 p-2">
                            <p>Python is a high-level, interpreted programming language known for its simplicity and readability. It is popular for web development, data analysis, scientific computing, and more.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title lg:text-xl text-lg font-medium">
                            What are ES6 classes, and how do they differ from constructor functions?
                        </div>
                        <div className="collapse-content bg-blue-500 text-white lg:p-5 p-2">
                            <p>ES6 classes provide a more organized and standard way to create constructor functions for object-oriented programming in JavaScript.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qus;