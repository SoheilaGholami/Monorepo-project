import './global.scss';
import '@mui/material-pigment-css/styles.css';

export const metadata = {
  title: 'Welcome to capi-operator',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
