import { FC, useEffect, useState } from "react";

const TextInput: FC = () => {
    //user input state
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    //OpenAi output state
    const [suggestion, setSuggestion] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //remove error text if character limit is no longer exceeded
        if (input.length > 160) {
            return setError(true);
        }
        setError(false);
    }, [input.length]);

    const submit = async () => {
        //check if character limit is exceeded
        if (input.length > 160) {
            return setError(true);
        }
        //set loading state to true
        setLoading(true);

        //fetch data from api
        try {
            const res = await fetch("/api/api-marketing-copy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                //input state: main body of text
                body: JSON.stringify({ input }),
            });
            const suggestion: { result: string } = await res.json();
            const { result } = suggestion;
            setSuggestion(result);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center gap-4 mx-auto w-1/3">
            <div className="relative w-full">
                {/* Input field for marketing copy */}
                <h3 className="text-gray-700">Marketing Copy</h3>
                {/* error message if character limit is exceeded */}
                {error && (
                    <span className="text-red-500 text-sm">
                        Character limit exceeded
                    </span>
                )}
                {/* textarea */}
                <textarea
                    rows={5}
                    onChange={(e) => setInput(e.target.value)}
                    //user input state
                    value={input}
                    className=" p-4 mt-1 w-full rounded-lg bg-gray-100 border-transparent focus:border-gray-500 resize-none text-black text-sm focus:bg-white focus:ring-0"
                    placeholder="Enter your marketing copy here"
                />
                {/* character limit in bottom right of textarea - turn red when exceeding character limit */}
                <div
                    className={`absolute bottom-4 right-0 ${
                        input.length > 160 ? "text-red-500" : "text-gray-700"
                    } p-1 text-xs`}>
                    <span>{input.length}</span>
                    /160
                </div>
            </div>
            <button
                type="button"
                onClick={submit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {loading ? (
                    <div className="flex w-full gap-2 ">
                        <p className="mx-auto">Loading...</p>
                        {/* loading animation -- later */}
                    </div>
                ) : (
                    "Generate"
                )}
            </button>
            {/* OpenAI output */}
            {suggestion && (
                <div className="mt-6">
                    <h3 className="text-gray-700 text-lg font-semibold pb-2">
                        Your Marketing Copy
                    </h3>
                    <div className="relative w-full rounded-md bg-gray-100 p-4">
                        <p className="text-sm text-gray-700 ">{suggestion}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextInput;
