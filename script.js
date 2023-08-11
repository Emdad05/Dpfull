
function generateQR() {
    const imageInput = document.getElementById('imageInput');
    
    if (imageInput.files.length > 0) {
      const file = imageInput.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const imageData = e.target.result;
        const qrCode = document.getElementById('qrCode');
        qrCode.innerHTML = ""; // Clear previous QR code
        
        const qr = new QRious({
          element: qrCode,
          value: imageData,
          size: 200
        });
        
        // You can now use the generated QR code image (qr.toDataURL())
        // to link it to WhatsApp or any other functionality.
      };
      
      reader.readAsDataURL(file);
    }
}
