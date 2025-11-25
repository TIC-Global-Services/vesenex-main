import os

folder_path = r"D:\Projects\Vesenex\public\seq\vesenex"  # Change this to your folder path

# Get all .webp files in the folder
files = [f for f in os.listdir(folder_path) if f.lower().endswith(".webp")]

# Sort files alphabetically
files.sort()

# Rename them to 1.webp, 2.webp, ..., 180.webp
for i, filename in enumerate(files, start=1):
    new_name = f"{i}.webp"
    
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)

    os.rename(old_path, new_path)
    print(f"Renamed: {filename} → {new_name}")

print("✔ Done renaming all .webp files!")
