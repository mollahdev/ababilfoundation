import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Ababil Foundation Description",
};

export default function AdminRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-gray-50">
            {children}
        </div>
    )
}
