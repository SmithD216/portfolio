import React from "react";

const Intro = () => {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
                Dylan
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Front end developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                This is my bio there are many like it but this one is mine
            </p>
        </div>
    );
};

export default Intro;
