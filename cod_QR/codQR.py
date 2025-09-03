import qrcode


url = "https://findmyseat.website"

qr = qrcode.make(url)

qr.save("cod_qr.png")

print("The code QR has been created in 'cod_qr.png'.")
