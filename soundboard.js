function playSound(id) {
    const sound = document.getElementById(id);

    // Check if the sound is currently playing
    if (!sound.paused) {
        // If it's playing, pause it and reset its time
        sound.pause();
        sound.currentTime = 0; // Rewind to the beginning
    } else {
        // If it's paused or stopped, play it
        sound.currentTime = 0; // Always start from the beginning
        sound.play();
    }
}