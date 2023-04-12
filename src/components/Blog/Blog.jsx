import React from 'react';

const Blog = () => {
    return (
        <div className=' mt-6 px-3 '>
            <h2 className='bg-yellow-200 p-10 text-center font-bold text-2xl text-teal-400 rounded'>
                Here Is All Question Answer
            </h2>
            <div className='mt-4 bg-orange-100  px-3 rounded'>
                <div className='mt-4'>
                    <h2 className='font-bold text-xl'>When should you use context API? </h2>
                    <p>Context API is a power alternative way to pass data many component instead props drilling. </p>
                </div>
                <div className='mt-4'>
                    <h2 className='font-bold text-xl'>What is a custom hook? </h2>
                    <p>When we need a hook as our own need to use different components called custom hook. This is our own build in hook. </p>
                </div>
                <div className='mt-4'>
                    <h2 className='font-bold text-xl'>What is useRef? </h2>
                    <p>The useRef is a hook that allows directly create a reference to the DOM. useRef hook return  mutable object.</p>
                </div>
                <div className='mt-4'>
                    <h2 className='font-bold text-xl'>What is useMemo?</h2>
                    <p>The useMemo hook is a hook that memoized the given argument and the output . If we give the same argument it don't rerender or recompute the output cause it remember the value I given  at first. The useMemo makes better performance in our react application. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;