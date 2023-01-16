const fs = require('fs/promises');
const path = require('path');

const Jimp = require('jimp');

const { User } = require('../../models/user');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');


const resizeAvatar = async (path) => {
    console.log(path)
    const image = Jimp.read(path);

    await (
        await image
    )
        .autocrop()
        .contain(
            250,
            250,
            Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
        )
        .writeAsync(path);

    /* image.resize(250, 250)
        .write(path); */
}


const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, filename } = req.file;
    const newFilename = `${_id}_${filename}`;

    try {
        const resultUpload = path.join(avatarsDir, newFilename);
        await fs.rename(tempUpload, resultUpload);

        const avatarUrl = path.join('public', 'avatars', newFilename);
        await User.findByIdAndUpdate(req.user._id, { avatarUrl });
        // resizeAvatar(tempUpload);
        res.json({
            avatarUrl,
        })
    } catch (error) {
        await fs.unlink(tempUpload);
        console.log(error);
    }
}

module.exports = updateAvatar;