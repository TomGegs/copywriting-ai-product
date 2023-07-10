
import { FC, useState } from "react";

const OpenAIOutput: FC = () => {
    //OpenAi output state

    const [suggestion, setSuggestion] = useState("");

    
    return (
        <div className="flex flex-col justify-center mx-auto w-1/3">
            <div className="relative w-full">
                <p>
                    {suggestion}
                </p>
                </div>


            
        </div>
    );
};

export default OpenAIOutput;
