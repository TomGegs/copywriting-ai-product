import { Inter } from "next/font/google";

import TextInput from "./components/TextInput";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'Qwicopy',
  description: 'Ai generated copywriting for your business',
}

export default function Home() {
    
    return (
        <main className="max-w-7xl mx-auto py-12">
            <h2 className="text-2xl font-bold text-center">
                Marketing Copy Generator
            </h2>
            <div>
                <TextInput/>
            </div>
        </main>
    );
}
