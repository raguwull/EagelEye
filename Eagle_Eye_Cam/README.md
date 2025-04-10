## Eagle Eye Camera Module

This module is a critical component of the **Eagle Eye Online Proctoring System**. It provides a top-down "bird’s-eye" view of the student's environment using the **ESP32-CAM** board, enhancing visual surveillance during online examinations.

---

##  Hardware Requirements

- ESP32-CAM Board (Recommended: AI-Thinker Module)
- FTDI Programmer (for uploading code)
- Jumper Wires
- MicroSD Card (for local file storage)
- Breadboard (optional)
- 5V/2A Power Supply (ensure stable power)

---

##  Wiring & Programming

Use jumper wires to connect the ESP32-CAM to the FTDI programmer. **Ensure proper connection as shown in the circuit diagram below**.

![image](https://github.com/user-attachments/assets/c365c922-36f5-4fc1-9259-fbab647d31dc)


 **Follow this tutorial for help**:  
**YouTube Video by @bitluni** – [ESP32-CAM MJPEG Streaming & Recording](https://www.youtube.com/watch?v=k_PJLkfqDuI&t=1134s)  
*Credits to the creator for the in-depth setup guide.*

To enter **upload mode**, press the **RESET** button after wiring is complete.

---

##  Software Setup

1. **Install Arduino IDE** (latest version)
2. **Install `arduino-esp32` core** via Boards Manager  
   - Minimum version: **v3.1.1**
   - Ensure PSRAM is enabled
3. Clone/download the below GitHub repo into your Arduino `sketchbook` folder 

---

##  Configuration

1. Open `appGlobals.h` in Arduino IDE.
2. Uncomment the **one** board you are using:
   ```cpp
   #define CAMERA_MODEL_AI_THINKER      // For ESP32-CAM (Recommended)
   //#define CAMERA_MODEL_FREENOVE_ESP32S3_CAM

## First-Time Setup

After uploading, the ESP32-CAM will start in WiFi Access Point mode.
Connect to: ESP-CAM_MJPEG_...
Visit: http://192.168.4.1 to configure your WiFi router credentials.
Web pages will be downloaded from GitHub to the /data folder on the SD card automatically when internet is available.

## Live Streaming Integration
Once the code is uploaded and the camera is running, it will host a local IP address for the video stream. This IP address must be linked with the proctoring portal to enable real-time live monitoring.

## Picture

![IMG_5934](https://github.com/user-attachments/assets/68d8471a-8dcc-4e88-8377-457d64df757d)


## Acknowledgements

- Base code adapted from [s60sc/ESP32-CAM_MJPEG2SD](https://github.com/s60sc/ESP32-CAM_MJPEG2SD)
- YouTube tutorial by [@bitluni](https://www.youtube.com/watch?v=k_PJLkfqDuI)


