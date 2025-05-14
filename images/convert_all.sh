for img in *.jpg; do
    filename="${img%.*}"
    magick "$img" -resize 1200x -quality 75 "${filename}.webp"
    echo "Converted: $img -> ${filename}.webp"
done