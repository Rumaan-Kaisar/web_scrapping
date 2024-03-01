import os
import requests

# Function to download images
def download_images(data):
    for idx, item in enumerate(data):
        # Extract information from the dictionary
        competitor_name = item.get("competitor_name", "Unknown")
        extracted_number = item.get("Extracted_number", "Unknown")
        image_links = item.get("ImageLinks", [])

        # Create a directory to save images if it doesn't exist
        # directory = f"{competitor_name}_{extracted_number}"
        # if not os.path.exists(directory):
        #     os.makedirs(directory)

        # Download images
        for i, link in enumerate(image_links):
            filename = f"{competitor_name}_{extracted_number}_{i+1}.jpg"
            filepath = os.path.join("./images/", filename)
            with open(filepath, "wb") as f:
                response = requests.get(link)
                f.write(response.content)
            print(f"Image {i+1} for {competitor_name} downloaded successfully!")

# Define the data containing the dictionaries
data = [
    {
        "competitor_name": "onpseStordgiiSe6329i2hmt42c7h91r ic2lmlef,02c2pb2h8e0l5u36 8",
        "Extracted_number": "167",
        "ImageLinks": [
            "https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/308777881_871534893828654_923035329057494861_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=c42490&_nc_ohc=xwQSb5BeHSwAX8ny1x0&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDTec25isgDeZehYqqsT3MlX0LU5YwpuJLLp-twqJpOMg&oe=65E69410"
        ]
    },
    {
        "competitor_name": "Mahfuzur Rahman",
        "Extracted_number": "93",
        "ImageLinks": [
            "https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/308570000_430881072480880_4560096973654022019_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=c42490&_nc_ohc=s6-YMnr-7LUAX8I9BDp&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDg0wi76jmW6zN1fKPkL0EzivGkmbvJ1hhTgGbThW-u6Q&oe=65E6527A"
        ]
    },
    # Add the remaining dictionaries here...
]

# Call the function to download images
download_images(data)


# python logo_img_dwnld.py


""" 
print(f"Size of Lists : {len(LINKS_FROM_JS)}")
for i in range (0, len(LINKS_FROM_JS)):
    print(LINKS_FROM_JS[i])
    # Set up the image URL and filename
    image_url = LINKS_FROM_JS[i]
    # filename = image_url.split("/")[-1]
    filename = "./images/" + str(image_url.split("/")[-1])
    # is the destination path of downloded image


    # Open the url image, set stream to True, this will return the stream content.
    r = requests.get(image_url, stream = True)

    # Check if the image was retrieved successfully
    if r.status_code == 200:
        # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
        r.raw.decode_content = True
        
        # Open a local file with wb ( write binary ) permission.
        with open(filename,'wb') as f:
            shutil.copyfileobj(r.raw, f)
            
        print('Image sucessfully Downloaded: ',filename)
    else:
        print('Image Couldn\'t be retreived')

 """

