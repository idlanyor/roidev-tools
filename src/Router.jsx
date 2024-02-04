import { Routes, Route } from 'react-router-dom';
import { NavbarFront } from './NavbarFront';
import FiturCard from './FiturCard';
import { aigpt, downloader, edu, islami, other } from './data/Fitur';
import YtMp3 from './Downloader/YtMp3';
export default function Router() {
    return (
        <Routes>
            {/* <Route path='*' Component={NavbarFront} /> */}
            <Route path='/' Component={NavbarFront}>
                <Route index element={<FiturCard data={downloader} />} />
                <Route path='edu' element={<FiturCard data={edu} />} />
                <Route path='gpt-ai' element={<FiturCard data={aigpt} />} />
                <Route path='islami' element={<FiturCard data={islami} />} />
                <Route path='other-tools' element={<FiturCard data={other} />} />
            </Route>
            <Route path='downloader' Component={NavbarFront}>
                <Route path='ytmp4' Component={YtMp3} />
            </Route>
            <Route path='dashboard'>
                <Route path='cetak' />
            </Route>
        </Routes>
    );
}
