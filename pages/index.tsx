import { Inter } from "next/font/google";

import TextInput from "./components/TextInput";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Copy, Right?",
    description:
        "Make your Copy Right with Ai generated copywriting for your business",
};

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto py-12">
            <div className="max-w-[80%] mx-auto border border-foreground rounded-2xl p-4 ">
                <h2 className="text-[2rem] lg:text-[5rem] mx-auto bg-secondary rounded-xl w-auto mb-6 text-background leading-tight font-big font-bold text-center">
                    MAKE YOUR COPY{" "}
                    <span className="font-marker text-primary">RIGHT</span>{" "}
                </h2>
                <div className="relative flex justify-center w-full h-full mb-6">
                    <Image
                        alt="background"
                        src="/goodCopyBg.png"
                        width={450}
                        height={450}
                    />
                    <Image
                        alt="Good Copy Icon"
                        src="/goodCopyIcon.png"
                        width={400}
                        height={400}
                        className="absolute top-2 left-15"
                    />
                    <Image
                        alt="Good Copy Icon"
                        src="/goodCopyText.png"
                        width={250}
                        height={250}
                        className="absolute top-5 left-15  animate-[spin_12s_linear_infinite] "
                    />
                </div>
                <div>
                    <TextInput />
                </div>
            </div>
        </main>
    );
}
