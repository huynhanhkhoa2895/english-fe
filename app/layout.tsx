import "@/styles/globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";

export const metadata = {
    title: 'English App',
    description: ''
};

export default function RootLayout({
                                       children,
                                   }: {
    children: any
}) {
    return (
        <html lang="en">
        <body>
            <AntdRegistry>
                {children}
            </AntdRegistry>
        </body>
        </html>
    )
}
