#!/bin/bash
count=1
# Update *.jpg to target the directory whose files you want to rename
for file in *.jpg; do
    mv "$file" "$count.jpg"
    ((count++))
done