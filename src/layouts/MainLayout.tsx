import type { PropsWithChildren } from "react";
import Header from "../components/Header";

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}