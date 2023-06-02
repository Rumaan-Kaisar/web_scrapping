# With destination fath
## Importing Necessary Modules
import requests # to get image from the web
import shutil # to save it locally

LINKS_FROM_JS = ["https://cdn.dribbble.com/userupload/7479919/file/original-90c8e738d0323f12a72fff893b84eb86.jpg","https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg","https://cdn.dribbble.com/userupload/7041241/file/original-c038cce9f8335cc0aa85533d679dd804.jpg","https://cdn.dribbble.com/userupload/6894587/file/original-1e9c5cc53942f4169fd1ac4c13429065.jpg","https://cdn.dribbble.com/userupload/4742533/file/original-b0c3e8794685acffdc20fa939eb302eb.jpg","https://cdn.dribbble.com/userupload/4505179/file/original-c9bb1e923f23aa305f27124ea27100f5.jpg","https://cdn.dribbble.com/userupload/4454987/file/original-3d6aa837678dc977263b11b3c6f8a88e.jpg","https://cdn.dribbble.com/userupload/3698756/file/original-65c6e3f658fdbb0e5560125c8fc1e824.jpg","https://cdn.dribbble.com/userupload/3587704/file/original-75e9f662584b5848c045375e6ae31ee3.jpg","https://cdn.dribbble.com/userupload/3561834/file/original-6bdfe743949f8c1b52d5c28d4aefeb47.jpg","https://cdn.dribbble.com/userupload/3109100/file/original-be394e9514f931f0914eb9a871250470.jpg","https://cdn.dribbble.com/userupload/3000371/file/original-c7f7d085b878bc64228de1e94e380265.jpg","https://cdn.dribbble.com/userupload/2994049/file/original-c26b71f7ad4dad434f9717a0bfec15dd.jpg","https://cdn.dribbble.com/userupload/2947985/file/original-13f9e6c3b3288f7466ce6450d198b78e.jpg","https://cdn.dribbble.com/userupload/2940812/file/original-9256054130add7f78eb87060d9434a9f.jpg","https://cdn.dribbble.com/userupload/2901566/file/original-caae294bcd01635ca7a37dc7fac7e6dd.jpg","https://cdn.dribbble.com/userupload/2897119/file/original-2ee58a5b7db335c685673cd46b7356f3.jpg","https://cdn.dribbble.com/userupload/2809286/file/original-386c045d9d9dcff96e75af9635bb1c84.jpg","https://cdn.dribbble.com/userupload/2800070/file/original-7d9e378c6b6916844ee722e18e8c77de.jpg","https://cdn.dribbble.com/userupload/2795815/file/original-b9662763668993398086c9f5090fa480.jpg","https://cdn.dribbble.com/userupload/2739075/file/original-9fbf1fde027c0133447ed7d4c1316d20.jpg","https://cdn.dribbble.com/users/24078/screenshots/18157081/media/69118af4b59de0d6dc145859814fda85.jpg","https://cdn.dribbble.com/users/24078/screenshots/18151833/media/e624cccdedd3bd1abd99b1025b72bb6b.jpg","https://cdn.dribbble.com/users/24078/screenshots/18022758/media/ed56e6778abccc9d361ddb825e3cce97.jpg","https://cdn.dribbble.com/users/24078/screenshots/18001541/media/cf94e02b1fda06e70bade301988e3c0e.jpg","https://cdn.dribbble.com/users/24078/screenshots/17995726/media/192a088f380705db114073fb50dc5e2c.jpg","https://cdn.dribbble.com/users/24078/screenshots/17970263/media/5846d2af48e6203dae0157c3423a68e5.jpg","https://cdn.dribbble.com/users/24078/screenshots/17948050/media/39a477f6de98cb975080aa84bc17b66c.jpg","https://cdn.dribbble.com/users/24078/screenshots/17802873/media/5a96d083a2bbb13991e09415444a22ad.jpg","https://cdn.dribbble.com/users/24078/screenshots/16836782/media/712fc6911f88e31aada56e061a1b13ab.jpg","https://cdn.dribbble.com/users/24078/screenshots/15771383/media/ae1887d2a2fa71924fd832d1f329a963.jpg","https://cdn.dribbble.com/users/24078/screenshots/15617070/media/ecc7333a1cd8cf53f1895918a37dfe0c.jpg","https://cdn.dribbble.com/users/24078/screenshots/15571826/media/6a28d5c161dbb54196bf7195a9ab98e2.jpg","https://cdn.dribbble.com/users/24078/screenshots/15546427/media/4b05c599dff724a51a1de73ee211a968.jpg","https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg","https://cdn.dribbble.com/users/24078/screenshots/15509337/media/226a86f7ba9d5df71485acaee5368307.jpg","https://cdn.dribbble.com/users/24078/screenshots/15488736/media/fc30c58045e10ee825a2208870a956f2.jpg","https://cdn.dribbble.com/users/24078/screenshots/15481055/media/45974f1ada8142a718fdaabae5a26929.jpg","https://cdn.dribbble.com/users/24078/screenshots/15473819/media/7eb9bc4f76cb8551771b95b48f732ccf.jpg","https://cdn.dribbble.com/users/24078/screenshots/15310057/media/64657015fb101bb62e2158867ee1cb64.jpg","https://cdn.dribbble.com/users/24078/screenshots/15147287/media/9f0a82ef45166cb24094f076cc3e4cc0.jpg","https://cdn.dribbble.com/users/24078/screenshots/15040670/media/4ce6c51ab7abcfbc8de77ccefe3c796e.jpg","https://cdn.dribbble.com/users/24078/screenshots/14975335/media/e7c5d8a71ae774a47c668c44d5d6e3a7.jpg","https://cdn.dribbble.com/users/24078/screenshots/14809655/media/4a6f23f67dd43dddabd6991256dd1dc4.jpg","https://cdn.dribbble.com/users/24078/screenshots/14804530/media/d7f135171e8baf492eb67e7175ecda31.jpg","https://cdn.dribbble.com/users/24078/screenshots/14771694/media/6c3124f72216d402f39f2a275ee95f1e.jpg","https://cdn.dribbble.com/users/24078/screenshots/14757543/media/e86c20d9753f656a970b550cc4a1c16c.jpg","https://cdn.dribbble.com/users/24078/screenshots/14716342/media/5286d82b7c86da6baccf8dc3e68d82a7.jpg","https://cdn.dribbble.com/users/24078/screenshots/14679297/media/a16d3b64fc712783a96e71d0873f1ffe.jpg","https://cdn.dribbble.com/users/24078/screenshots/14656948/media/eabc28f38a6389d9b91ecfd403febec7.jpg","https://cdn.dribbble.com/users/24078/screenshots/14587562/media/0dbfc83beefeae4576007d30606f93f7.jpg","https://cdn.dribbble.com/users/24078/screenshots/14584195/media/3756caebe30c6ac5375f3e75fd9361e7.jpg","https://cdn.dribbble.com/users/24078/screenshots/14562865/media/130e993838dec40962316d5fde601ec2.jpg","https://cdn.dribbble.com/users/24078/screenshots/14548325/media/7ebdefee908dcc1d7201dec7849d358a.jpg","https://cdn.dribbble.com/users/24078/screenshots/14533792/media/7e9dd669880bab07e025b563d1d92199.jpg","https://cdn.dribbble.com/users/24078/screenshots/14512478/media/4ef264a8bd1070915d215bec0624a05a.jpg","https://cdn.dribbble.com/users/24078/screenshots/14468404/media/4250e99e71871bee1312a28491b18a6d.jpg","https://cdn.dribbble.com/users/24078/screenshots/14437836/media/39dac607c06d9cd011c2bfe538114fc9.jpg","https://cdn.dribbble.com/users/24078/screenshots/14365732/media/9744573663695e5c4b12a97ecd5064ba.jpg","https://cdn.dribbble.com/users/24078/screenshots/14343984/media/35c85ad9172eb95a292d363c287ae918.jpg","https://cdn.dribbble.com/users/24078/screenshots/14297192/media/7c7118fd7f9f009a556ddc03d3bf1abb.jpg","https://cdn.dribbble.com/users/24078/screenshots/14285522/media/b5aaf0ac1e3a48d332e32eb53bf76caf.jpg","https://cdn.dribbble.com/users/24078/screenshots/14255969/media/2603b6f53e2f886f13914ec924a4f97d.jpg","https://cdn.dribbble.com/users/24078/screenshots/14246133/media/1d8de1db9ae70995d6c8b11b46c9004e.jpg","https://cdn.dribbble.com/users/24078/screenshots/13972510/media/84fffa5c27472436f50ad8ac544dea31.jpg","https://cdn.dribbble.com/users/24078/screenshots/13914065/media/fe068fe69bd94b5a920faaff424bc3db.jpg","https://cdn.dribbble.com/users/24078/screenshots/13638178/media/d3221ea7ce60a792ea3a51b65812ba64.jpg","https://cdn.dribbble.com/users/24078/screenshots/12882525/media/0294689380fc92b905da12c21b022b58.jpg","https://cdn.dribbble.com/users/24078/screenshots/12518390/media/8efd2e1c07580c738222875b4701089f.jpg","https://cdn.dribbble.com/users/24078/screenshots/12239148/media/9cd23377fa6a0fec159fbed112333651.jpg","https://cdn.dribbble.com/users/24078/screenshots/12001539/media/1e476628c57760aa0666ca0f2ab79ee6.jpg","https://cdn.dribbble.com/users/24078/screenshots/11669862/media/d2a25a721bef03864343b03d08a85f45.jpg","https://cdn.dribbble.com/users/24078/screenshots/11588377/media/98f7235e173d56f168d3e9222523d42b.jpg","https://cdn.dribbble.com/users/24078/screenshots/11522856/media/53885f7797c44c2b3107c45b6a86ad71.jpg","https://cdn.dribbble.com/users/24078/screenshots/11418314/media/87806da92294a1d0ab3a5d59aad7b3e9.jpg","https://cdn.dribbble.com/users/24078/screenshots/11402799/media/c5aa098d76ce1f2f2b3c6f717479e196.jpg","https://cdn.dribbble.com/users/24078/screenshots/11299740/media/deb104900b7232173141ca66a5fa442a.jpg","https://cdn.dribbble.com/users/24078/screenshots/11292335/media/ed7ffd3aaaff1cb29aee7bdb94834975.jpg","https://cdn.dribbble.com/users/24078/screenshots/11273416/media/50e6c56e4c50d4a5878fd5c727e03ab8.jpg","https://cdn.dribbble.com/users/24078/screenshots/11205598/media/f7442dd75b1e8b6ac167ffd5645d1c6e.jpg","https://cdn.dribbble.com/users/24078/screenshots/11139035/media/9570216a8dd85d72279947435cb3aad2.jpg","https://cdn.dribbble.com/users/24078/screenshots/11088021/media/f9a463c94ad046954812623ce91b1516.jpg","https://cdn.dribbble.com/users/24078/screenshots/10835555/media/a3857b27885985f66eecfcf2c2fdc7d4.jpg","https://cdn.dribbble.com/users/24078/screenshots/10811731/media/a6b8728088436a43a87b16c52ba35005.jpg","https://cdn.dribbble.com/users/24078/screenshots/10775529/media/7033ef5e8c82c2f6bbd46c46d8356c82.jpg","https://cdn.dribbble.com/users/24078/screenshots/10752819/media/44c1baa50d8b98eff85df14f2208ec14.jpg","https://cdn.dribbble.com/users/24078/screenshots/10606004/media/672517aed3a39bbd4814d6e5f6f3670d.jpg","https://cdn.dribbble.com/users/24078/screenshots/10566340/media/bb611556ca66bcd3d03c7e0bb7d45db6.jpg","https://cdn.dribbble.com/users/24078/screenshots/10494328/media/17875497ddbac6801eddeda82139538c.jpg","https://cdn.dribbble.com/users/24078/screenshots/10236892/media/ae71c3d91e1a4be69f4085d4b2648558.jpg","https://cdn.dribbble.com/users/24078/screenshots/10176331/media/52800c62503fd3587ebf465392f45691.jpg","https://cdn.dribbble.com/users/24078/screenshots/10105214/media/fc73c5c53bb450f96210559db6c3c8bc.jpg","https://cdn.dribbble.com/users/24078/screenshots/9830501/media/381875f86b8c8ef71cfd53016d974cb9.jpg","https://cdn.dribbble.com/users/24078/screenshots/9781424/media/f26851be0269687ecb95a9d5c884960a.jpg","https://cdn.dribbble.com/users/24078/screenshots/9682059/media/648666ac4ed20c9cb4c9146599149924.jpg","https://cdn.dribbble.com/users/24078/screenshots/9544938/media/f5fdebd76681f917dea073ff91571d22.jpg"]



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