from PIL import Image
import os
import sys
import traceback

def main():
    # Get the directory where the script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Define paths relative to the script location
    input_dir = os.path.join(script_dir, "media", "starsmp", "staricons")
    output_dir = os.path.join(script_dir, "media", "starsmp", "staricons_2x")
    
    # Check if input directory exists
    if not os.path.exists(input_dir):
        print(f"Error: Input directory not found at:\n{input_dir}")
        print("Please make sure the 'staricons' folder exists in the same directory as this script.")
        input("\nPress Enter to exit...")
        return
    
    try:
        # Create output directory if it doesn't exist
        os.makedirs(output_dir, exist_ok=True)
        
        processed_files = 0
        total_files = 0
        
        print(f"Looking for images in:\n{input_dir}")
        print(f"Saving upscaled images to:\n{output_dir}\n")
        
        # Process each image
        for filename in os.listdir(input_dir):
            if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                total_files += 1
                input_path = os.path.join(input_dir, filename)
                output_path = os.path.join(output_dir, filename)
                
                try:
                    with Image.open(input_path) as img:
                        # Upscale 2x with nearest-neighbor
                        img_upscaled = img.resize((img.width * 4, img.height * 4), Image.NEAREST)
                        img_upscaled.save(output_path)
                        print(f"✓ Upscaled: {filename}")
                        processed_files += 1
                except Exception as e:
                    print(f"✗ Failed to process {filename}: {str(e)}")
                    traceback.print_exc()
        
        print(f"\nFinished processing: {processed_files}/{total_files} files")
        if processed_files < total_files:
            print("Note: Some files couldn't be processed (see errors above)")
        
        print(f"\nUpscaled images saved to:\n{output_dir}")
    
    except Exception as e:
        print(f"CRITICAL ERROR: {str(e)}")
        traceback.print_exc()
    
    # Keep window open
    input("\nPress Enter to exit...")

if __name__ == "__main__":
    main()