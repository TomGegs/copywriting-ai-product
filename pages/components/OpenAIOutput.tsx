import { FC, useState } from "react";

interface OpenAIOutputProps {
    suggestion: string | null;
}

const OpenAIOutput: FC<OpenAIOutputProps> = ({suggestion}) => {
    //OpenAi output state

   
    return (
        <>
            {suggestion !== null && (
                <div className="mt-6">
                    <h3 className="text-gray-700 text-lg font-semibold pb-2">
                        Your Marketing Copy
                    </h3>
                    <div className="relative w-full rounded-md bg-gray-100 p-4">
                        <p className="text-sm text-gray-700 ">{suggestion}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default OpenAIOutput;
