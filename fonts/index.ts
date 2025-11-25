import localFont from 'next/font/local';

export const grift = localFont({
    src:[
        {path:"./Grift/Grift-Light.otf",weight:"300", style:"normal"},
        {path:"./Grift/Grift-Regular.otf",weight:"400", style:"normal"},
        {path:"./Grift/Grift-Medium.otf",weight:"500", style:"normal"},
        {path:"./Grift/Grift-Semibold.otf",weight:"600", style:"normal"},
        {path:"./Grift/Grift-Bold.otf",weight:"700", style:"normal"},
    ],
    variable: "--font-grift",
    display:"swap",
})