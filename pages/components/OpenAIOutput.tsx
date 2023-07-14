import { FC, useState } from "react";

interface OpenAIOutputProps {
    suggestion: string | null;
}

const OpenAIOutput: FC<OpenAIOutputProps> = ({ suggestion }) => {
    //OpenAi output state

    return (
        <>
            {suggestion !== null && (
                <div className="mt-4">
                    <h3 className="text-primary text-lg font-semibold pb-2 uppercase">
                        Your Marketing Copy{" "}
                        <span className="text-secondary font-marker">
                            RIGHT
                        </span>
                    </h3>
                    <div className="relative w-full rounded-md bg-gray-100 p-4">
                        <p className="text-sm text-background font-big ">
                            {suggestion}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default OpenAIOutput;
