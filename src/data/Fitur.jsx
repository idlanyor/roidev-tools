import { FaBook, FaBookReader, FaCode, FaFacebook, FaInstagram, FaPray, FaSchool, FaTiktok, FaUniversity, FaWikipediaW, FaYoutube } from 'react-icons/fa';
import { SiMediafire, SiOpenai, SiStoryblok, SiYoutubemusic } from 'react-icons/si'
import { TbBrandOpenai } from 'react-icons/tb'
import { IoChatbubbles } from 'react-icons/io5'
import { FaBookQuran } from 'react-icons/fa6'
import { MdHistoryEdu } from 'react-icons/md'
import { GiPrayerBeads } from 'react-icons/gi'
import { RiTwitterXFill, RiVideoDownloadFill, RiVideoDownloadLine } from 'react-icons/ri'
export const downloader = [
    {
        icon: FaYoutube,
        title: "Youtube MP4",
        color: "Blue",
        link: 'downloader/ytmp4',
        desc: "Download Video dari Youtube",
    },
    {
        icon: SiYoutubemusic,
        title: "Youtube MP3",
        link: 'downloader/ytmp4',
        desc: "Download Musik dari Youtube" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaTiktok,
        title: "TikTok Video", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'downloader/ytmp4',
        desc: "Download Video TikTok tanpa WM" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaFacebook,
        title: "Facebook Video", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'downloader/ytmp4',
        desc: "Download Video dari Facebook" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaInstagram,
        title: "Instagram Video", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'downloader/ytmp4',
        desc: "Download Video dari Instagram" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: SiMediafire,
        title: "Media Fire", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'downloader/ytmp4',
        desc: "Download Video dari Media Fire" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: RiVideoDownloadLine,
        title: "SnackVideo", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'downloader/ytmp4',
        desc: "Download Video dari SnackVideo" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: RiVideoDownloadFill,
        title: "CocoFun", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'downloader/ytmp4',
        desc: "Download Video dari Cocofun" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: RiTwitterXFill,
        title: "Twitter(X)", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'downloader/ytmp4',
        desc: "Download Video dari Twitter" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
];
export const edu = [
    {
        icon: SiStoryblok,
        title: "Brainly",
        color: "red",
        link: 'edukasi/ytmp4',
        desc: "Download MP4 From Youtube" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaUniversity,
        title: "PDDikti",
        link: 'edukasi/ytmp4',
        desc: "Download Lagu Mp3 dari Youtube" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaBookReader,
        title: "Perpus Dikbud", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'edukasi/ytmp4',
        desc: "Download Video TikTok tanpa WM" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaWikipediaW,
        title: "Wikipedia", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'edukasi/ytmp4',
        desc: "Download Video From Facebook" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaBook,
        title: "KBBI", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'edukasi/ytmp4',
        desc: "Kamus Besar Bhs Indonesia" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaSchool,
        title: "Data Sekolah", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'edukasi/ytmp4',
        desc: "Download Video dari Instagram" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
];
export const aigpt = [
    {
        icon: TbBrandOpenai,
        title: "Dall-E",
        color: "Blue",
        link: 'ai/ytmp4',
        desc: "Download MP4 From Youtube" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaCode,
        title: "Code Translator",
        link: 'ai/ytmp4',
        desc: "Terjemah bahasa pemrograman" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: IoChatbubbles,
        title: "Tanya ChatGPT", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'ai/ytmp4',
        desc: "Download Video TikTok tanpa WM" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: SiOpenai,
        title: "GPT STT", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'ai/ytmp4',
        desc: "Download Video From Facebook" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: SiOpenai,
        title: "GPT TTS", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'ai/ytmp4',
        desc: "Download Video dari Instagram" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
];
export const islami = [
    {
        icon: FaPray,
        title: "Doa Harian",
        color: "Blue",
        link: 'islami/ytmp4',
        desc: "Download MP4 From Youtube" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: FaBookQuran,
        title: "Al - Quran",
        link: 'islami/ytmp4',
        desc: "Download Lagu Mp3 dari Youtube" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: MdHistoryEdu,
        title: "Kisah Nabi", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'islami/ytmp4',
        desc: "Download Video TikTok tanpa WM" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: GiPrayerBeads,
        title: "Dzikir & Doa", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'islami/ytmp4',
        desc: "Download Video From Facebook" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    }
];
export const other = [
    {
        icon: MdHistoryEdu,
        title: "Kisah Nabi", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'others/ytmp4',
        desc: "Download Video TikTok tanpa WM" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    },
    {
        icon: GiPrayerBeads,
        title: "Dzikir & Doa", // Merubah judul menjadi sesuai dengan ikon yang digunakan
        link: 'others/ytmp4',
        desc: "Download Video From Facebook" // Merubah deskripsi menjadi sesuai dengan ikon yang digunakan
    }
]