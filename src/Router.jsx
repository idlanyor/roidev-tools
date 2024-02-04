import { Routes, Route } from 'react-router-dom';
import { NavbarFront } from './NavbarFront';
import FiturCard from './FiturCard';
import { aigpt, downloader, edu, islami, other } from './data/Fitur';
export default function Router() {
    return (
        <Routes>
            <Route path='*' Component={NavbarFront} />
            <Route path='/' Component={NavbarFront}>
                <Route index element={<FiturCard data={downloader} />} />
                <Route path='edu' element={<FiturCard data={edu} />} />
                <Route path='gpt-ai' element={<FiturCard data={aigpt} />} />
                <Route path='islami' element={<FiturCard data={islami} />} />
                <Route path='other-tools' element={<FiturCard data={other} />} />
            </Route>
            <Route path='panel'>
                <Route path='cetak' />
            </Route>
            <Route path='dashboard'>
                <Route path='cetak' />
            </Route>
        </Routes>
    );
}
