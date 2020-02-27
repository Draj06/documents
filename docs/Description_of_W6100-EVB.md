

  * W6100 chip development platform for **net-enabled** microcontroller applications
  * Ethernet (W6100 Hardwired TCP/IP chip) and 32-bit ARM® Cortex™-M3 based designs
  * **Arduino Pin-compatible** platform hardware.

----

## Overview 

W6100-EVB is an evaluation board for W6100 chip based on the 32-bit ARM® Cortex™-M3 microcontroller. It is the easy way to develop internet connection for efficient and small embedded systems using W6100, WIZnet's hardwired TCP/IP embedded Ethernet controller. It has been designed to be hardware pin-compatible with 'Arduino shields' for the 'Arduino UNO Rev3' and other footprint-compatible boards.

It is based on the STM STM32F103VCT6 MCU with a 32-bit ARM® Cortex™-M3 core running at Maximum 72MHz. It includes 256 or 512kB Flash memory, 64kB SRAM various interfaces, including BUS(Flexible static memory controller), SPI/SSP, I2C, UART, ADC, PWM and other I/O interfaces. Additionally, Two programmable push button switches, one RGB LED and a 10/100 Base-Tx RJ-45 connector with an integrated transformer are on board to implement embedded networking applications.

The W6100-EVB provides benefits in developing easier and powerful network applications on small form-factor and non-OS based embedded devices using the W6100 chip.

  


----

## Features

**WIZnet W6100 Hardwired TCP/IP chip**

  * Hardwired TCP/IP embedded Ethernet controller
  * Parallel Host Interface (External BUS Interface)
  * SPI (Serial Peripheral Interface) Microcontroller Interface
  * 32kB internal Tx/Rx socket buffer memory (8 socket)
  * **Support SOCKET-less Command: ARP-Request, PING-Request**
  * Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)
  * Support Auto-MDIX when Auto-Negotiation Mode.
  * Hardwired TCP/IP stack supports TCP, UDP, **IPv6**, IPv4, **ICMPv6**, ICMPv4, IGMP, **MLDv1**, ARP, PPPoE protocols

  * [W6100 Product page](W6100.md)

**STMicroelectronics STM32F103VCT6 MCU**

  * 32-bit ARM® Cortex™-M3 microcontroller running at up to 75MHz
  * 256 Kbytes of Flash memory
  * 48 Kbytes of SRAM
  * 5 × USARTs
  * 4 × 16-bit timers, 2 × basic timers
  * 3 × SPIs, 2 × I2Ss, 2 × I2Cs
  * USB, CAN, 2 × PWM timers
  * 3 × ADCs, 2 × DACs, 1 × SDIO
  * FSMC (100- and 144-pin packages)
  * 🌍[STMicroelectronics STM32F103VCT6 Product page](https://www.st.com/en/microcontrollers-microprocessors/stm32f103vc.html)
  
**Connectors**

  * 1-Channel 10/100Mbps Ethernet Connector (RJ45 with transformer)
  * Virtual COM Port(UART via Micro USB B type) – 🌍[CP2104 Drivers Download Page](https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104)
  * Expansion 80 GPIOs (Include analog Peripheral using 12bit ADC)
  * Pin-compatible with Arduino Shields designed for the UNO Rev3
  * Digital pins D0 to D15, Analog inputs A0 to A5, the power header and Etc.
  * ARM standard debug connector: 5-pin Cortex debug connector for SWD (Serial Wire Debug)


**Others**

  * 2 x User's Push button switches
  * 1 x RGB LED
  * Industrial temperature specified (-40 to +85 degrees Celsius)
  * [Reset] and [boot0] ISP access push button switch

**Form-factor**
  * Dimension : 90 X 80 X 15(H) (Unit : mm)
  * 5V DC power supply
  * GPIO Input Voltage : 0 ~ 5V
  * GPIO Output Voltage : 0 ~ 3.3V
  * 4-layer PCB (FR-4 material, 1.6T, 1oz)

  * Arduino Compatible with SWD Header Pinout



  * External Pinout (left side)



  * External Pinout (Right side)
{{:products:w6100:w6100_evb:w6100-evb_pinout_3.png?800|}}


----

## Firmware 

W6100-EVB firmware project based on Eclipse IDE. For more details about Eclipse IDE, please refer to below link.


**Download the Libraries and Application example source code for W6100-EVB** 
                                      
[https://github.com/Wiznet/W6100_EVB](https://github.com/Wiznet/W6100_EVB)


----

## Getting Started 


  * [Getting Started](Getting_Started_with_the_W6100-EVB.md)
  * [How to upload to firmware]()

----

## Make New EVB Projects  

 **It is the same as W5100-EVB**

  * [Make New EVB Projects using Eclipse](Make_New_W5100S-EVB_Projects_using_Eclipse.md)

  * [Make New EVB Projects using TrueSTUDIO](Make_New_W6100-EVB_Projects_using_TrueSTUDIO.md)

----

## Technical Reference

**Datasheet**
  * [W6100 Datasheet](Datasheet-W6100.md)
  * 🌍[STMicroelectronics STM32F103VCT6 Datasheet](http://www.st.com/en/microcontrollers/stm32f103vc.html)
  * 🌍[Virtual COM Port: CP2104 COM Port Datasheet](https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104)
  * 🌍[SINGLE INVERTER GATE SN74LVC1G04DBVR Datasheet](http://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf)
  * 🌍[Octal D-type transparent latch; 3-state 74HC573PW Datasheet](https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf)
  * 🌍[Quad 1-of-2 multiplexer 74CBTLV3257PW Datasheet](https://www.nxp.com/docs/en/data-sheet/74CBTLV3257.pdf)

**Schematic & Part list**

  * 🌍[Go to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6100)


**Dimension**
  * 6100-EVB Rev1.1 Dimension(unit:mm)
{{:products:w6100:w6100_evb:w6100_wiki_dimension.png?500|}}


----
## See Also

[WIZnet Website - W6100](http://www.wiznet.io/product-item/w6100): W6100 Chip features, Pin assignment and Hardware Ref. Design Guide

[WizWiki Forum](https://forum.wiznet.io/): WIZnet Forum for Technical support and Project shared


 ### Where To Buy


