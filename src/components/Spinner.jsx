import React from 'react';

const Spinner = () => {
    return (
        <div class="relative flex justify-center items-center">
            <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img src="/spinner.jpg" class="rounded-full h-24 w-24" />
        </div>
    );
};

export default Spinner;
