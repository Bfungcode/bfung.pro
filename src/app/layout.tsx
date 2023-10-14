import './globals.css'

export const metadata = {
  title: 'Bfung.pro',
  description: 'Bie Fung Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Font1|Font2"
        />
      </head>
      <body className='h-full w-full m-0 p-0 border-black bg-white'>

        {children}
      </body>
    </html >
  )
}
