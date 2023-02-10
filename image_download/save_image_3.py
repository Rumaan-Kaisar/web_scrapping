# With destination fath
## Importing Necessary Modules
import requests # to get image from the web
import shutil # to save it locally

LINKS_FROM_JS = ["https://wp.cghnyc.com/media/Animalplanet-w-thumbnail-reverse-2022-1.svg","https://wp.cghnyc.com/media/apollo-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/arthur-ashe-w-reversed-2022.svg","https://wp.cghnyc.com/media/Avery-w-thumbnail-white-10012022.svg","https://wp.cghnyc.com/media/barneys-w-thumbnail-reverse-small-20200114.svg","https://wp.cghnyc.com/media/Beehouse-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/beko-w-thumbnail-reverse-10012022.svg","https://wp.cghnyc.com/media/bemis-w-thumbnail-small.svg","https://wp.cghnyc.com/media/borregos-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/brown-w-thumbnail-white-01062022.svg","https://wp.cghnyc.com/media/cbre-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/cfa-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/Chasethumbnailblue.svg","https://wp.cghnyc.com/media/clearmotion-white-thumbnail-2022.svg","https://wp.cghnyc.com/media/conduent-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/Conrad-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/CI_Thumbnail_Reversed-062322X.png","https://wp.cghnyc.com/media/Cornell-white-10012022.svg","https://wp.cghnyc.com/media/corus-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/course-hero-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/dominion-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/Drinkworks-logo-white-01102022.svg","https://wp.cghnyc.com/media/epa-reverse-01102022.svg","https://wp.cghnyc.com/media/Fields-w-white-01062022.svg","https://wp.cghnyc.com/media/flatiron-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/grey-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/Guggenheim-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/HarperCollins-w-thumbnail-white-01062022.svg","https://wp.cghnyc.com/media/HUP-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/health-partners-w-white-01062022.svg","https://wp.cghnyc.com/media/hearst-w-reverse-2022-1.svg","https://wp.cghnyc.com/media/heart-of-tea-w-animated-thumbnail-smaller.svg","https://wp.cghnyc.com/media/hitco-reverse-01102022.svg","https://wp.cghnyc.com/media/hunter-douglas-w-thumbnail-white-01062022.svg","https://wp.cghnyc.com/media/imagen-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/Impossible-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/leonard-bernstein-reversed-2022.svg","https://wp.cghnyc.com/media/Lindblad-w-thumbnail-white-01062022.svg","https://wp.cghnyc.com/media/MBTA-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/Magirus-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/merck-reverse-2022.svg","https://wp.cghnyc.com/media/MFA-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/MOMA-w-thumbnail-reverse-small.svg","https://wp.cghnyc.com/media/mobil-w-thumbnail-small-20200114.svg","https://wp.cghnyc.com/media/MOCA-w-thumbnail-reverse.2022.svg","https://wp.cghnyc.com/media/NBCthumbnailsmallwhite2022.svg","https://wp.cghnyc.com/media/nanotronics-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/national-aquarium-white-01062022.svg","https://wp.cghnyc.com/media/NatGeo-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/NC-white-062422dx.png","https://wp.cghnyc.com/media/NewVisions-w-thumbnail-reverse-01102022.svg","https://wp.cghnyc.com/media/nyu-reverse-white_01062022.svg","https://wp.cghnyc.com/media/Nissay-w-thumbnail-revserse-10012022.svg","https://wp.cghnyc.com/media/oceano-azul-foundation-w-thumbnail-small-20200114.svg","https://wp.cghnyc.com/media/old-chatham-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/OpenEnglish-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/Optimism-w-thumbnail-reverse-01102022.svg","https://wp.cghnyc.com/media/pbs-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/panda-feature-black-062422x.png","https://wp.cghnyc.com/media/pellucid-w-thumbnail-white-01062022.svg","https://wp.cghnyc.com/media/PewResearch-w-thumbnail-reverse-01062022.svg","https://wp.cghnyc.com/media/practo-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/prague-zoo-w-thumbnail-reverse-10012022.svg","https://wp.cghnyc.com/media/Princeton-w-white-2022.svg","https://wp.cghnyc.com/media/ratpac-w-thumbnail-reverse-062422X.png","https://wp.cghnyc.com/media/royal-w-thumbnail.svg","https://wp.cghnyc.com/media/Screengems-w-Thumbnail-reverse-01062022.svg","https://wp.cghnyc.com/media/Sendeo-w-thumbnail-white-2022-2.png","https://wp.cghnyc.com/media/Shinsegae-w-thumbnail-reverse-2022-1.svg","https://wp.cghnyc.com/media/Showtime-w-thumbnail-white-012022.svg","https://wp.cghnyc.com/media/Smithsonian-w-thumbnail-reverse-01062022.svg","https://wp.cghnyc.com/media/StateFarm-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/tec-monterrey-w-thumbnail-reverse-10012022.svg","https://wp.cghnyc.com/media/tennessee-aquarium-w-_thumbnail-white-2022.svg","https://wp.cghnyc.com/media/CIA_Thumbnail_Reversed-1.png","https://wp.cghnyc.com/media/togg-white-01062022-3.png","https://wp.cghnyc.com/media/truveta-blue-thumbnail-01102022.svg","https://wp.cghnyc.com/media/bicentennial-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/USOpen-w-thumbnail-blue-2022-01.svg","https://wp.cghnyc.com/media/UNDP-w-thumbnail-white-2022.svg","https://wp.cghnyc.com/media/Tecmilenio-new-reverse-2022.svg","https://wp.cghnyc.com/media/UNH-w-thumbnail-reverse-2022.svg","https://wp.cghnyc.com/media/univision-w-thumbnail-reverse-01102022.svg","https://wp.cghnyc.com/media/WTA-w-Thumbnail-white-2022.svg","https://wp.cghnyc.com/media/WB100_thumbnail-blue2.png","https://wp.cghnyc.com/media/wbd_white.svg","https://wp.cghnyc.com/media/Wolf-w-thumbnail-2022.jpg","https://wp.cghnyc.com/media/WWB-w-thumbnail-white-01062022-1.svg","https://wp.cghnyc.com/media/jetpack-w-thumbnail-reverse-10012022.svg","https://wp.cghnyc.com/media/yoshinoya-w-thumbnail-white-10012022.svg","https://wp.cghnyc.com/media/discovery-black-thumbnail-01062022b.jpg"]

""" 
# Set up the image URL and filename
image_url = "https://cdn.pixabay.com/photo/2020/02/06/09/39/summer-4823612_960_720.jpg"
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

""" 
You need to make imageName contain the complete path with the file name.
Your imageName doesn't contain a path, so it opens in whatever is your current working directory. 
That's a bit unpredictable. It's also easy to fix.

from pathlib import Path
imageName = str(Path.home() / Path(str(uuid.uuid4()) + '.jpg'))

You can of course replace Path.home() with any destination path you'd prefer.
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

# python save_image_3.py