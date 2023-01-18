const fs = require('fs/promises');
const path = require('path');

const Jimp = require('jimp');

const { User } = require('../../models/user');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');


const resizeAvatar = async (path) => {
    const image = await Jimp.read(path);

    await image.resize(250, 250)
        .writeAsync(path);
}

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, filename } = req.file;
    const newFilename = `${_id}_${filename}`;

    try {
        const resultUpload = path.join(avatarsDir, newFilename);
        await fs.rename(tempUpload, resultUpload);

        const avatarUrl = path.join('src/public', 'avatars', newFilename);
        await User.findByIdAndUpdate(req.user._id, { avatarUrl });
        resizeAvatar(avatarUrl);
        res.json({
            avatarUrl,
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = updateAvatar;