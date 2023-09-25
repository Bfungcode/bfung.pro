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
      <body className='h-full w-full m-0 p-0 border-black bg-no-repeat bg-fixed bg-gradient-to-b from-neutral-100 to-gray-300'>
        {children}
      </body>
    </html >
  )
}
