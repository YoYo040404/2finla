import localFont from 'next/font/local'
export const anton = localFont({src:'../public/fonts/anton-normal-latin.woff2',variable:'--font-anton',weight:'400',display:'swap'})
export const archivo = localFont({src:'../public/fonts/archivo-normal-latin.woff2',variable:'--font-archivo',weight:'400 800',display:'swap'})
export const jetBrainsMono = localFont({src:'../public/fonts/jetbrains-mono-normal-latin.woff2',variable:'--font-jetbrains',weight:'400 500',display:'swap'})
export const cormorant = localFont({src:[{path:'../public/fonts/cormorant-garamond-normal-latin.woff2',weight:'300 700',style:'normal'},{path:'../public/fonts/cormorant-garamond-italic-latin.woff2',weight:'300 700',style:'italic'}],variable:'--font-cormorant',display:'swap'})
export const brushHome = localFont({src:'../public/fonts/road-rage-normal-latin.woff2',variable:'--font-home-brush',weight:'400',display:'swap'})
export const brushExperience = localFont({src:'../public/fonts/road-rage-normal-latin.woff2',variable:'--font-experience-brush',weight:'400',display:'swap'})
