const express = require('express');
const youtubedl = require('youtube-dl-exec');

const app = express();
const PORT = 3000;

// Fungsi untuk mendapatkan URL unduh dari permintaan saat ini
function getDownloadUrl(req, path) {
    const protocol = req.protocol;
    const host = req.get('host');
    return `${protocol}://${host}/${path}`;
}

// Endpoint untuk mengunduh video dari YouTube
app.get('/video', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL tidak ditemukan.' });
    }

    try {
        const video = await youtubedl(url, { dumpJson: true });
        const downloadLink = getDownloadUrl(req, 'video-download?url=' + encodeURIComponent(url));

        const responseData = {
            title: video.title,
            thumbnail: video.thumbnail,
            duration: video.duration,
            formats: video.formats,
            downloadLink: downloadLink
        };

        res.json(responseData);
    } catch (error) {
        console.error('Gagal mengunduh video:', error);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengunduh video.' });
    }
});

// Endpoint untuk mengunduh audio dari YouTube
app.get('/audio', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL tidak ditemukan.' });
    }

    try {
        const audio = await youtubedl(url, { dumpJson: true, noWarnings: true, extractAudio: true, audioFormat: 'mp3' });
        const downloadLink = getDownloadUrl(req, 'audio-download?url=' + encodeURIComponent(url));

        const responseData = {
            title: audio.title,
            thumbnail: audio.thumbnail,
            duration: audio.duration,
            downloadLink: downloadLink
        };

        res.json(responseData);
    } catch (error) {
        console.error('Gagal mengunduh audio:', error);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengunduh audio.' });
    }
});

// Endpoint untuk mengunduh video
app.get('/video-download', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL tidak ditemukan.' });
    }

    try {
        const video = await youtubedl(url, { output: '%(title)s.%(ext)s' });
        res.set('Content-Disposition', `attachment; filename="${video.title}.mp4"`);
        res.set('Content-Type', 'video/mp4');
        video.pipe(res);
    } catch (error) {
        console.error('Gagal mengunduh video:', error);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengunduh video.' });
    }
});

// Endpoint untuk mengunduh audio
app.get('/audio-download', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL tidak ditemukan.' });
    }

    try {
        const audio = await youtubedl(url, { output: '%(title)s.%(ext)s', noWarnings: true, extractAudio: true, audioFormat: 'mp3' });
        res.set('Content-Disposition', `attachment; filename="${audio.title}.mp3"`);
        res.set('Content-Type', 'audio/mp3');
        audio.pipe(res);
    } catch (error) {
        console.error('Gagal mengunduh audio:', error);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengunduh audio.' });
    }
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});
