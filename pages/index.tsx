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
                        className="w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
                    />
                    <Image
                        alt="Good Copy Icon"
                        src="/goodCopyIcon.png"
                        width={400}
                        height={400}
                        className="absolute -top-1 md:top-10 left-15"
                    />
                    <Image
                        alt="Good Copy Icon"
                        src="/goodCopyText.png"
                        width={400}
                        height={400}
                        className="absolute top-5 md:top-8 left-15 w-[220px] h-[220px] md:h-[400px] md:w-[400px] animate-[spin_10s_linear_infinite] md:animate-[spin_10s_linear_infinite] "
                    />
                </div>
                <div>
                    <TextInput />
                </div>
            </div>
        </main>
    );
}
