for img in *.jpg; do
    filename="${img%.*}"
    magick "$img" -resize 2200x -quality 100 "${filename}.webp"
    echo "Converted: $img -> ${filename}.webp"
done