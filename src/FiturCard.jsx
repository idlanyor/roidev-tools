import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiMediafire, SiYoutubemusic } from 'react-icons/si'
import { RiTwitterXFill, RiVideoDownloadFill, RiVideoDownloadLine } from 'react-icons/ri'
const FiturCard = () => {
    const data = [
        {
            icon: FaYoutube,
            title: "Youtube MP4",
            desc: "Download MP4 From Youtube" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
        {
            icon: SiYoutubemusic,
            title: "Youtube MP3",
            desc: "Download Lagu Mp3 dari Youtube" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
        {
            icon: FaTiktok,
            title: "TikTok Video", // Merubah judul menjadi sesuai dengan ikon yang digunakan
            desc: "Download Video TikTok tanpa WM" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
        {
            icon: FaFacebook,
            title: "Facebook Video", // Merubah judul menjadi sesuai dengan ikon yang digunakan
            desc: "Download Video From Facebook" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
        {
            icon: FaInstagram,
            title: "Instagram Video", // Merubah judul menjadi sesuai dengan ikon yang digunakan
            desc: "Download Video dari Instagram" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
        {
            icon: SiMediafire,
            title: "Media Fire", // Merubah judul menjadi sesuai dengan ikon yang digunakan
            desc: "Download Video dari Instagram" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
        {
            icon: RiVideoDownloadLine,
            title: "SnackVideo", // Merubah judul menjadi sesuai dengan ikon yang digunakan
            desc: "Download Video dari Instagram" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
        {
            icon: RiVideoDownloadFill,
            title: "CocoFun", // Merubah judul menjadi sesuai dengan ikon yang digunakan
            desc: "Download Video dari Instagram" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
        {
            icon: RiTwitterXFill,
            title: "Twitter(X)", // Merubah judul menjadi sesuai dengan ikon yang digunakan
            desc: "Download Video dari Instagram" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
        },
    ];
    const fontStyle = {
        fontFamily: 'Protest Revolution'
    }

    return (
        <div style={fontStyle} className="px-1 mb-8 grid  sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-cols-2 gap-4"> {/* Mengubah grid menjadi 3 kolom */}
            {
                data && data.map((d, index) => (
                    <Card onClick={() => { alert(d.desc) }} key={index} className="mt-6 hover:text-red-500 mx-auto w-36 sm:w-40">
                        <CardBody className="flex flex-col items-center text-center">
                            <d.icon className="w-[50px] h-auto " />
                            <Typography variant="small" color="blue-gray" className="mb-2 mt-2 font-bold">
                                {d.title}
                            </Typography>
                            <Typography
                            as="p"
                            variant="small"
                            className="hidden"
                            >
                                {d.desc}
                            </Typography>
                        </CardBody>
                    </Card>
                ))
            }
        </div>
    );
}

export default FiturCard;
