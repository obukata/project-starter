import keepfolder from 'imagemin-keep-folder'
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import gifsicle from 'imagemin-gifsicle'
import svgo from 'imagemin-svgo'
// NOTE - webpを使用する場合。npm packageも忘れずに。
// import webp from 'imagemin-webp'

keepfolder(['dist/assets/images/**/*.{jpg,png,gif,svg}'], {
  plugins: [
    mozjpeg({ quality: 75 }),
    pngquant({ quality: [0.75, 1] }),
    gifsicle(),
    svgo()
    // webp({ quality: 50 })
  ]
})
