import os
import sys
import subprocess

# Determine if virtual environment exists
venv_path = "venv"
is_windows = os.name == "nt"

# Create virtual environment if it doesn't exist
if not os.path.isdir(venv_path):
    print("Creating virtual environment...")
    subprocess.run([sys.executable, "-m", "venv", venv_path])
else:
    print("Virtual environment already exists.")

# Activate virtual environment and install dependencies
if is_windows:
    activate_script = os.path.join(venv_path, "Scripts", "activate.bat")
else:
    activate_script = os.path.join(venv_path, "bin", "activate")

# Install dependencies from requirements.txt
if os.path.isfile("requirements.txt"):
    print("Installing dependencies from requirements.txt...")
    subprocess.run([os.path.join(venv_path, "bin" if not is_windows else "Scripts", "pip"), "install", "-r", "requirements.txt"])
else:
    print("requirements.txt not found.")

print("Setup complete. Activate the virtual environment by running:")
print(f"source {activate_script}" if not is_windows else f"{activate_script}")
