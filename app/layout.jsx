import './globals.css';
import Pixels from './pixels';

export const metadata = {
  title: 'SmartBot One — Robot humanoïde intelligent | SmartRobotMo',
  description:
    "SmartBot One : le robot humanoïde intelligent de 32 cm. Contrôle gestuel, programmation, danse, voix et LED. Livraison offerte en Europe. 59,90 €.",
  metadataBase: new URL('https://www.smartrobotmo.com'),
  icons: { icon: '/img/icon.png' },
  openGraph: {
    title: 'SmartBot One — Robot humanoïde intelligent',
    description:
      'Contrôle gestuel, programmation, danse, LED. Le cadeau au succès garanti. Livraison offerte.',
    images: ['/img/robot-6.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Pixels />
        {children}
      </body>
    </html>
  );
}
