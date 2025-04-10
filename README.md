#  Eagle Eye: A Hardware-Integrated Mobile Signal Detection and Dual-Camera System for Online Exam Proctoring

![Project Badge](https://img.shields.io/badge/Internally_Funded_Student_Project-blueviolet)  
*By Syed Azim, Sai Skand S, and Ragul B – SSN College of Engineering*

---

##  Problem Statement

With the rapid shift towards digital education, online assessments have become a cornerstone of modern learning. However, ensuring academic integrity in these remote environments remains a major challenge. Despite advanced proctoring platforms offering live monitoring and AI-based analytics, many fail to address:

- **Mobile phone-based cheating**  
- **Limited visual coverage using single webcams**  
- **Lack of integration between hardware and proctoring software**  

To overcome these limitations, we developed **Eagle Eye**—a cost-effective, hybrid proctoring system combining hardware and software innovations to enhance online exam security.

---

## Project Highlights

###  1. Novel Mobile Signal Detector Circuit  
We designed a compact and cost-effective circuit that detects various mobile signals (calls, LTE, WiFi, data, and hotspot) within a **50 cm radius**. This helps in real-time detection of unauthorized mobile usage during exams—something most existing systems overlook.

###  2. “Eagle Eye” Auxiliary Camera Setup  
To tackle the limitations of front-facing webcams, we introduced a **top-view auxiliary camera** that offers a bird’s-eye view of the student's workspace. This significantly improves visibility, reduces blind spots, and discourages malpractice.

###  3. First-of-its-Kind Hardware-Software Integration  
Our system uniquely integrates the mobile signal detector and dual-camera setup into an **interactive online proctoring workflow**, making it an **end-to-end monitoring solution** that's scalable and budget-friendly.

###  4. Feature-Rich Web Proctoring Platform  
We developed an intuitive web interface with capabilities such as a Student Exam Portal, Face Recognition for Identity Verification, Anti-Tab Switching Detection, Real-time Messaging between Students and Proctors  

This fusion of hardware and software ensures a seamless, secure, and reliable exam-taking experience.

---

##  Why Eagle Eye?

###  Revolutionizing Exam Security  
Eagle Eye is a game-changer for online proctoring. It enables institutions to conduct **cheat-proof online exams**, saving time, manpower, and logistical effort while maintaining integrity.

###  Elevating the Value of Online Certifications  
By enhancing exam security, Eagle Eye helps **boost the credibility** of online degrees and certifications—fostering broader acceptance from both academia and industry.

###  Scalable Business Opportunity  
Our model fits well into a **"Pay-and-Go" service structure**, where institutions only pay per exam session. The hardware is **reusable**, offering a sustainable, budget-friendly solution for long-term use.

---


##  Installation & Setup

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

- The source code to program the ESP8266 for Firebase integration is available in the [`mobile-detector-codes`](./mobile-detector-codes) folder.
- You’ll need to:
  - Flash the ESP8266 using Arduino IDE or PlatformIO.
  - Configure your Firebase credentials in the code (`WiFi SSID`, `Password`, `Database URL`, and `Secret Key`).
  - Use a 3.3V logic level for all data pins.



---

##  Contributors

- **Syed Azim** – SSN College of Engineering  
- **Sai Skand S** – SSN College of Engineering  
- **Ragul B** – SSN College of Engineering  

---

##  License

This project is currently under private development.
