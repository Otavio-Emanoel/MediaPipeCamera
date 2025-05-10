async function startCamera() {
    const video = document.getElementById('video');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: false
        });
        video.srcObject = stream;
    } catch (error) {
        console.error("Erro ao acessar a câmera:", error);
        alert("Erro ao acessar a câmera: " + error.message);
    }
}

startCamera();