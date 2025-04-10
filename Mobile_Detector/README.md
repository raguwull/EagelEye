###  Hardware Implementation

####  Mobile Detector Circuit

Using a trial-and-error approach, we built the mobile detector circuit to effectively detect mobile phone signals within a **50 cm**. After testing, we finalized a stable and responsive circuit design.

**Circuit Diagram:**  

![Circuit Diagram](https://github.com/user-attachments/assets/6c075f92-26a3-4e48-bd74-95904d1303b3)


**PCB Implementation:**  

![IMG_5937](https://github.com/user-attachments/assets/817b28ca-c037-421d-9f57-15e320f4536d)

####  Working Principle

- When a mobile phone is detected in the vicinity, the circuit outputs a **5V signal**.
- This 5V output is passed through a **voltage divider** to limit the signal to **3.3V**—safe for microcontroller input.
- The **3.3V signal is fed into the ESP8266 module**, which is programmed to send updates to a **Firebase Realtime Database** in real-time.
- The data in the Firebase cloud is monitored and relayed to the **proctor interface** via our web platform.

####  ESP8266 Firmware

- The source code to program the ESP8266 for Firebase integration is available in tis Repo
- You’ll need to:
  - Flash the ESP8266 with the code provide using Arduino IDE or PlatformIO.
  - Configure your Firebase credentials in the code (`WiFi SSID`, `Password`, `Database URL`, and `Secret Key`).
  - Use a 3.3V logic level for all data pins.

