// Verified project summaries. Each page is rendered from this local static data.
window.PORTFOLIO_PROJECTS = [
  {
    "id": "linux-fan",
    "name": "Linux_fan",
    "display": "Jetson Linux Smart Fan",
    "group": "Linux · Device Driver",
    "kind": "team",
    "badge": "TEAM PROJECT",
    "repo": "https://github.com/twotwoship/Linux_fan",
    "cover": null,
    "illustration": "fan",
    "imageAlt": "팬과 모터 제어 회로 스케치",
    "summary": "Jetson Orin Nano에서 커널 디바이스 드라이버로 모터와 FND 타이머를 제어하는 Smart Fan 시스템입니다.",
    "short": "Linux 커널 드라이버로 센서·모터·FND를 연동한 Smart Fan 제어 시스템",
    "tags": [
      "C",
      "Linux",
      "Jetson Orin Nano",
      "Device Driver"
    ],
    "role": "담당: Motor Driver · FND Timer Driver",
    "intro": "Jetson Orin Nano에서 Linux Character Device Driver를 이용해 팬과 주변장치를 제어한 팀 프로젝트입니다. 애플리케이션과 드라이버, 실제 하드웨어 간 데이터 흐름을 직접 다뤘습니다.",
    "flow": "User Application → /dev/fan_motor · /dev/fnd → Kernel Driver → PWM / GPIO → DC Motor · FND",
    "points": [
      [
        "시스템 구성",
        "모터, FND 타이머, 로터리 엔코더, BMP180, LED Bar, LCD, 부저가 연동되는 Smart Fan 제어 구조입니다."
      ],
      [
        "담당 구현",
        "개인 담당 범위는 Motor Driver와 FND Timer Driver입니다. 모터 PWM 제어와 타이머 표시 연동을 중심으로 작업했습니다."
      ],
      [
        "인터페이스",
        "애플리케이션이 장치 파일을 통해 커널 드라이버와 상호작용하고 GPIO·PWM을 통해 실제 장치를 제어합니다."
      ],
      [
        "검증 관점",
        "PWM 출력, 모터 구동 조건, 드라이버 로드 및 /dev 장치 접근 등 하드웨어 연계 문제를 진단했습니다."
      ]
    ],
    "status": "프로젝트 기록",
    "video": null
  },
  {
    "id": "vision-tracker",
    "name": "Vision_Tracker_Project",
    "display": "Vision Tracking RC Car",
    "group": "Vision · Embedded Control",
    "kind": "team",
    "badge": "TEAM PROJECT",
    "repo": "https://github.com/Vision-Tracker-Project/Vision_Tracker_Project",
    "cover": "https://raw.githubusercontent.com/Vision-Tracker-Project/Vision_Tracker_Project/main/docs/images/presentation/slide-04.png",
    "illustration": "vision",
    "imageAlt": "Vision Tracking 팀 프로젝트의 실제 하드웨어",
    "summary": "인물을 카메라로 추적하고, STM32 기반 차량 및 Pan/Tilt 구동부와 연동한 임베디드 제어 프로젝트입니다.",
    "short": "영상 기반 인물 추적과 STM32 모터·Pan/Tilt 제어를 결합한 팀 프로젝트",
    "tags": [
      "STM32",
      "C",
      "UART",
      "PWM"
    ],
    "role": "담당: STM32 모터 제어 · UART 패킷 처리",
    "intro": "객체 인식과 기구부 제어를 연결하는 팀 프로젝트입니다. 인물 추적과 영상 처리는 팀 전체 시스템의 기능이고, 본인은 STM32에서 차량 좌·우 모터와 Pan/Tilt 제어 및 UART 수신 처리에 참여했습니다.",
    "flow": "Tracking / Gamepad → 제어 명령 · UART → STM32 → PWM → 주행 모터 · Pan/Tilt",
    "points": [
      [
        "전체 시스템",
        "카메라 인물 추적, Pan/Tilt 위치 제어, 게임패드 주행 제어, UART 패킷 통신을 결합했습니다."
      ],
      [
        "담당 구현",
        "STM32 모터 구동부의 PWM 제어와 UART 수신/명령 파싱, Pan/Tilt 동작 튜닝 및 관련 트러블슈팅을 담당했습니다."
      ],
      [
        "통신",
        "제어 명령은 UART 패킷으로 전달되며, 수신 데이터를 검증하고 모터 제어에 반영하도록 구성했습니다."
      ],
      [
        "이슈 및 개선",
        "서보모터 종류와 초기 회전, PWM 기동 조건 등 실제 하드웨어 동작에서 발생한 문제를 검토했습니다."
      ]
    ],
    "status": "팀 프로젝트",
    "video": "https://github.com/user-attachments/assets/e00c0b1b-7b70-4e3e-86d6-873169e514bc"
  },
  {
    "id": "stm32-motor",
    "name": "motor-control-pwm-uart2-control-",
    "display": "Qt × STM32 Motor Control",
    "group": "MCU · Desktop Interface",
    "kind": "solo",
    "badge": "DEVICE CONTROL",
    "repo": "https://github.com/leesee1393-ux/motor-control-pwm-uart2-control-",
    "cover": "https://raw.githubusercontent.com/leesee1393-ux/motor-control-pwm-uart2-control-/main/docs/nucleo-f411re-ez-r300-wiring.svg",
    "illustration": "motor",
    "imageAlt": "NUCLEO-F411RE와 모터 드라이버의 실제 배선 다이어그램",
    "summary": "Qt UI의 ON/OFF·속도 명령을 UART로 전달하고 STM32 PWM 출력으로 모터를 제어합니다.",
    "short": "Qt 시리얼 UI에서 STM32로 제어 명령을 보내 모터 속도·방향 제어",
    "tags": [
      "Qt",
      "C/C++",
      "STM32",
      "UART / PWM"
    ],
    "role": "담당: Qt UI · STM32 제어 연동",
    "intro": "PC에서 버튼과 슬라이더로 모터를 제어하는 장비 제어 프로그램입니다. Qt 화면에서 UART를 통해 명령을 전달하고, STM32가 모터 방향과 속도를 PWM으로 제어합니다.",
    "flow": "Qt Widgets → Qt SerialPort (115200 baud) → USART2 → STM32F411RE → PWM → DC Motor",
    "points": [
      [
        "PC 제어 화면",
        "Qt Widgets에서 모터 ON/OFF, 0~100% 속도 슬라이더 및 상태 피드백을 다룹니다."
      ],
      [
        "시리얼 프로토콜",
        "ON / OFF / SPEED / FORWARD / REVERSE / STATUS 명령을 줄바꿈 기반 UART 메시지로 전송합니다."
      ],
      [
        "MCU 제어",
        "NUCLEO-F411RE와 EZ Motor R300을 연결하고, GPIO 방향 신호와 PWM을 통해 모터를 구동합니다."
      ],
      [
        "검증",
        "UART 응답, 출력 속도 변화, 배선 및 공통 GND 등 장비 제어 흐름을 확인할 수 있도록 문서를 작성했습니다."
      ]
    ],
    "status": "구현 프로젝트",
    "video": "https://www.youtube.com/watch?v=H0aGANyIsjI"
  },
  {
    "id": "avr-rtc",
    "name": "LCD-RTC-clock-calculator",
    "display": "AVR RTC & LCD Calculator",
    "group": "AVR · Peripheral Interface",
    "kind": "solo",
    "badge": "MCU PROJECT",
    "repo": "https://github.com/leesee1393-ux/LCD-RTC-clock-calculator",
    "cover": "https://github.com/user-attachments/assets/06f0de74-771c-4a1d-874c-e52f6b5846d9",
    "illustration": "lcd",
    "imageAlt": "ATmega128A와 RTC, LCD 실물 하드웨어",
    "summary": "ATmega128A와 DS1307 RTC를 I²C로 연결하고 LCD에 시계 및 계산기 기능을 표시합니다.",
    "short": "ATmega128A · DS1307 · LCD로 구성한 시계 및 계산기",
    "tags": [
      "ATmega128A",
      "C",
      "I²C",
      "LCD"
    ],
    "role": "구현: RTC 통신 · LCD 표시 · 계산기 모드",
    "intro": "ATmega128A 마이크로컨트롤러에 DS1307 RTC와 LCD를 연결해 시간 읽기, 시간 설정, 사칙연산 계산기 기능을 구현하는 프로젝트입니다.",
    "flow": "ATmega128A ↔ I²C ↔ DS1307 RTC → LCD 표시 / 버튼 입력 → 계산기 모드",
    "points": [
      [
        "RTC 통신",
        "DS1307의 시간 데이터 레지스터를 I²C 통신으로 읽고 표시합니다."
      ],
      [
        "LCD 출력",
        "시간 및 사칙연산 결과를 LCD에 출력하며 표시 모드를 전환합니다."
      ],
      [
        "문제 해결",
        "RTC 모듈 응답 문제와 LCD 명암 조정 문제를 분석하고 부품 교체 및 Vo 조정으로 대응했습니다."
      ],
      [
        "기록",
        "레지스터 맵, 구성 회로도, FSM 및 I²C 통신 파형을 저장소에 기록했습니다."
      ]
    ],
    "status": "구현 프로젝트",
    "video": "https://youtube.com/shorts/54PC0KObX_4"
  },
  {
    "id": "fpga-stopwatch",
    "name": "my_minsec_stopwatch",
    "display": "FPGA Clock & Stopwatch",
    "group": "FPGA · Digital Logic",
    "kind": "learning",
    "badge": "RTL STUDY",
    "repo": "https://github.com/leesee1393-ux/my_minsec_stopwatch",
    "cover": null,
    "illustration": "fpga",
    "imageAlt": "FPGA 7-Segment와 회로 블록 스케치",
    "summary": "Basys3 FPGA와 Verilog로 분·초 시계 및 스톱워치의 카운터·버튼·표시 로직을 학습했습니다.",
    "short": "Basys3 · Verilog 기반 분·초 시계와 스톱워치 RTL 학습",
    "tags": [
      "Verilog",
      "Vivado",
      "Basys3",
      "FSM"
    ],
    "role": "학습: 시계 · 스톱워치 RTL",
    "intro": "100MHz 클록 기반의 카운터, 버튼 입력, 동작 모드, 7-Segment 표시를 구성해 보며 FPGA의 동기식 디지털 로직 설계를 연습한 학습 저장소입니다. 현재 저장소에는 README보다 Vivado 프로젝트 파일이 중심입니다.",
    "flow": "100MHz Clock → Tick Generator → Time Counter / Mode → FND Controller → 7-Segment",
    "points": [
      [
        "타이밍",
        "100MHz 시스템 클록으로부터 시간 계산용 Tick을 만들고 분·초 카운터 동작을 설계했습니다."
      ],
      [
        "버튼 및 모드",
        "버튼 입력을 이용해 시계/스톱워치 모드, 시작/정지, 초기화 동작을 구분했습니다."
      ],
      [
        "출력",
        "시간 데이터에 맞게 7-Segment 자리 선택과 숫자 표시 로직을 구성했습니다."
      ],
      [
        "검증 및 범위",
        "Vivado 프로젝트 중심의 학습 기록이므로 상세 구현과 검증 결과는 저장소의 RTL 및 테스트 자료를 기준으로 확인해야 합니다."
      ]
    ],
    "status": "학습 프로젝트",
    "video": null
  },
  {
    "id": "fpga-microwave",
    "name": "FPGA-Microwave-Oven-Controller",
    "display": "FPGA Microwave Oven Controller",
    "group": "FPGA · Digital Control",
    "kind": "solo",
    "badge": "FPGA PROJECT",
    "repo": "https://github.com/leesee1393-ux/FPGA-Microwave-Oven-Controller",
    "cover": "https://raw.githubusercontent.com/leesee1393-ux/FPGA-Microwave-Oven-Controller/main/docs/images/block_diagram.svg",
    "illustration": "fpga",
    "imageAlt": "FPGA 전자레인지 제어 시스템의 실제 블록 다이어그램",
    "summary": "Basys3와 Verilog로 로터리 시간 설정, FND 카운트다운, 부저 알림 및 서보 도어 제어를 구현했습니다.",
    "short": "Basys3 · Verilog 기반 로터리/FND 타이머·부저·서보 도어 제어",
    "tags": [
      "Verilog HDL",
      "Basys3",
      "Vivado",
      "PWM / FND"
    ],
    "role": "구현: Rotary · Timer/FND · Buzzer · Servo",
    "intro": "Basys3(Artix-7) FPGA와 Verilog HDL을 이용한 전자레인지 제어 프로젝트입니다. 로터리 엔코더와 KEY로 시간을 설정하고, 0~540초 카운트다운을 4자리 FND에 MM.SS 형식으로 표시합니다. 종료 시 부저가 3회 울리며, 스위치로 SG90 서보 도어를 개폐합니다.",
    "flow": "Rotary S1/S2 · KEY → Debouncer → Time Setting → 1ms Tick / Countdown → FND · Buzzer; SW → 50Hz Servo PWM",
    "points": [
      [
        "입력·시간 설정",
        "Rotary Encoder CW/CCW와 KEY Toggle을 이용해 0~540초의 타이머 설정을 처리합니다."
      ],
      [
        "타이머·FND",
        "100MHz 클록에서 1ms Tick을 생성하고 카운트다운을 4자리 FND의 MM.SS 형식으로 표시합니다."
      ],
      [
        "부저·도어",
        "타이머 종료 시 부저 3회 알림, SW 입력에 따라 SG90 도어 서보를 50Hz PWM으로 제어합니다."
      ],
      [
        "타이밍 최적화",
        "분·초 변환의 긴 연산 경로에서 발생한 Setup Timing 위반을 set_time 총 초 입력으로 개선했습니다. FSM 그림은 개념도입니다."
      ]
    ],
    "status": "구현 기록",
    "video": "https://youtu.be/Dh0c_G7ZhPM"
  },
  {
    "id": "led-mealy",
    "name": "LED_btn_melay",
    "display": "Button & LED Control",
    "group": "FPGA · Fundamentals",
    "kind": "learning",
    "badge": "RTL STUDY",
    "repo": "https://github.com/leesee1393-ux/LED_btn_melay",
    "cover": "https://raw.githubusercontent.com/leesee1393-ux/LED_btn_melay/main/docs/fsm_state_diagrams.svg",
    "illustration": "fpga",
    "imageAlt": "Moore와 Mealy FSM 설계 학습 다이어그램",
    "summary": "Basys3 버튼 디바운싱과 LED Toggle 구현, Moore/Mealy FSM 설계 학습을 기록했습니다.",
    "short": "버튼 디바운싱 · LED Toggle과 Moore/Mealy FSM 개념 학습",
    "tags": [
      "Verilog",
      "Basys3",
      "Debounce"
    ],
    "role": "구현: LED 토글 / 설계 학습: FSM",
    "intro": "Verilog RTL로 버튼 디바운싱과 LED 토글 회로를 구성하고, Moore/Mealy FSM 동작을 별도 다이어그램으로 정리했습니다. 다중 상태 FSM 그림은 학습용 설계 자료이며 구현 완료로 주장하지 않습니다.",
    "flow": "Button → Debounce → Clean Signal → LED Toggle Register → LED",
    "points": [
      [
        "구현된 기능",
        "버튼 입력 선택, 디바운싱, 깨끗한 버튼 신호, LED 토글 제어를 RTL에 구성했습니다."
      ],
      [
        "FSM 학습",
        "Moore/Mealy FSM 출력 특성과 상태 전이도 설계를 별도로 기록했습니다."
      ],
      [
        "구현 범위 구분",
        "README 설명대로 6상태 LED 왕복 패턴은 개념 설계이고, 실제 RTL은 버튼 기반 LED Toggle입니다."
      ]
    ],
    "status": "기초 RTL 학습",
    "video": null
  },
  {
    "id": "qt-calculator",
    "name": "Qt-Calculator",
    "display": "Qt Calculator",
    "group": "C++ · UI",
    "kind": "learning",
    "badge": "C++ PRACTICE",
    "repo": "https://github.com/leesee1393-ux/Qt-Calculator",
    "cover": "https://github.com/user-attachments/assets/2534517b-d531-4c4e-8453-9931bc52fa7e",
    "illustration": "lcd",
    "imageAlt": "Qt Calculator 앱 화면",
    "summary": "Qt 6와 C++로 숫자 입력, 사칙연산, 소수점과 괄호를 처리하는 계산기 앱입니다.",
    "short": "Qt 6 · C++ 계산기 UI 및 수식 평가 연습",
    "tags": [
      "Qt 6",
      "C++",
      "GUI"
    ],
    "role": "구현: GUI · 수식 평가",
    "intro": "Qt Creator 환경에서 C++와 Qt를 이용해 화면 입력과 계산 결과 표시를 구현한 계산기입니다.",
    "flow": "Qt Input Buttons → Expression Evaluation → Result Display",
    "points": [
      [
        "입력 인터페이스",
        "숫자 및 연산자 버튼, 소수점, 괄호, 백스페이스, 초기화를 지원합니다."
      ],
      [
        "계산 로직",
        "수식 평가 로직과 MainWindow의 사용자 인터페이스 처리를 구분했습니다."
      ],
      [
        "개발 환경",
        "Qt 6, Qt Creator, C++로 구성한 데스크톱 애플리케이션 학습 결과입니다."
      ]
    ],
    "status": "C++/Qt 학습",
    "video": null
  },
  {
    "id": "stm32-led",
    "name": "How-to-connect-an-external-LED-and-control-its-on-off-state",
    "display": "STM32 Register-Level LED",
    "group": "STM32 · Register",
    "kind": "learning",
    "badge": "BARE METAL PRACTICE",
    "repo": "https://github.com/leesee1393-ux/How-to-connect-an-external-LED-and-control-its-on-off-state",
    "cover": "https://github.com/user-attachments/assets/e8031d75-816e-4086-b073-6b0d6d99b22f",
    "illustration": "motor",
    "imageAlt": "STM32 외부 LED GPIO 회로 구현 사진",
    "summary": "STM32F411 GPIO 레지스터에 직접 접근해 외부 LED ON/OFF 동작을 학습했습니다.",
    "short": "STM32F411 GPIO 레지스터 직접 접근 및 외부 LED 제어",
    "tags": [
      "STM32F411",
      "C",
      "GPIO Register"
    ],
    "role": "실습: 메모리 맵 레지스터",
    "intro": "STM32F411에서 HAL 추상화 없이 GPIO 레지스터 주소에 접근해 외부 LED를 제어하는 기초 실습입니다.",
    "flow": "C Register Access → GPIO_MODER / OTYPER / ODR → External LED",
    "points": [
      [
        "레지스터 제어",
        "GPIO_MODER, GPIO_OTYPER, GPIO_ODR의 역할과 주소를 살펴보았습니다."
      ],
      [
        "출력 동작",
        "GPIO 설정 후 외부 LED의 ON/OFF 동작을 구현·확인했습니다."
      ],
      [
        "학습 기록",
        "데이터시트와 회로도, 구현 이미지 및 개선점을 README에 정리했습니다."
      ]
    ],
    "status": "레지스터 제어 학습",
    "video": null
  },
  {
    "id": "portfolio-site",
    "name": "leesee1393-ux.github.io",
    "display": "Portfolio Website",
    "group": "Web · Documentation",
    "kind": "learning",
    "badge": "PORTFOLIO",
    "repo": "https://github.com/leesee1393-ux/leesee1393-ux.github.io",
    "cover": null,
    "illustration": "book",
    "imageAlt": "기술 포트폴리오 기록 화면 스케치",
    "summary": "개발 프로젝트와 실제 역할, 기술 스택, 회로 및 테스트 기록을 소개하는 개인 포트폴리오입니다.",
    "short": "임베디드 프로젝트를 정리하는 GitHub Pages 웹 포트폴리오",
    "tags": [
      "HTML",
      "CSS",
      "GitHub Pages"
    ],
    "role": "기술 기록 및 포트폴리오",
    "intro": "프로젝트의 구현 기능, 사용 기술, 담당 범위와 GitHub 저장소를 연결해 소개하는 정적 포트폴리오 웹사이트입니다.",
    "flow": "Project Notes + GitHub Repositories → GitHub Pages → Portfolio",
    "points": [
      [
        "목표",
        "단순 기술 나열보다 실제 구현 내용과 문제 해결 과정을 읽기 쉬운 형태로 소개합니다."
      ],
      [
        "구성",
        "프로젝트 목록, 개별 상세 페이지, 기술 스택, 원본 GitHub 링크로 구성했습니다."
      ],
      [
        "유지보수",
        "추가 프로젝트가 생기면 GitHub Pages의 프로젝트 데이터와 관련 내용을 업데이트합니다."
      ]
    ],
    "status": "웹사이트",
    "video": null
  }
];
