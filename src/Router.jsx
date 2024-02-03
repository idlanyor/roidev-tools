import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { NavbarFront } from './NavbarFront';
import YtMp3 from './Downloader/YtMp3';
export default function Router() {
    return (<Routes>
        <Route path='*' Component={Home} />
        <Route path='/' Component={NavbarFront}>
            <Route index Component={Home}/>
            <Route path='ytmp3' Component={YtMp3} />
        </Route>
        <Route path='panel'>
        </Route>
        <Route path='dashboard'>
            <Route path='cetak' />
        </Route>
    </Routes>);
}
