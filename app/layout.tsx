import "@/styles/globals.css";

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
        {children}

      </body>
      </html>
  )
}